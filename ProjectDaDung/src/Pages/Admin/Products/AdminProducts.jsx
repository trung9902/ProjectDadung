import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../contexts/AuthContext'

const API = 'http://localhost:8080/api'

const emptyForm = {
  name: '', category: '', price: '', oldPrice: '', stock: '',
  image: '', description: '', rating: '0', sold: '0'
}

const AdminProducts = () => {
  const { token } = useAuth()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(null) // null | { mode: 'create'|'edit', product?: {} }
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const load = () => {
    setLoading(true)
    Promise.all([
      fetch(`${API}/products`).then(r => r.json()),
      fetch(`${API}/categories`).then(r => r.json())
    ]).then(([prods, cats]) => {
      setProducts(prods)
      setCategories(cats)
      setLoading(false)
    }).catch(() => setLoading(false))
  }

  useEffect(load, [])

  const openCreate = () => {
    setForm(emptyForm)
    setError('')
    setModal({ mode: 'create' })
  }

  const openEdit = (p) => {
    setForm({
      name: p.name, category: p.category, price: String(p.price),
      oldPrice: p.oldPrice != null ? String(p.oldPrice) : '',
      stock: String(p.stock), image: p.image, description: p.description,
      rating: String(p.rating), sold: String(p.sold)
    })
    setError('')
    setModal({ mode: 'edit', product: p })
  }

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSave = async () => {
    if (!form.name || !form.category || !form.price) {
      return setError('Vui lòng điền đầy đủ thông tin bắt buộc.')
    }
    setSaving(true)
    setError('')
    const body = {
      name: form.name, category: form.category,
      price: parseFloat(form.price),
      oldPrice: form.oldPrice ? parseFloat(form.oldPrice) : null,
      stock: parseInt(form.stock) || 0,
      image: form.image, description: form.description,
      rating: parseFloat(form.rating) || 0,
      sold: parseInt(form.sold) || 0,
      gallery: [], badges: [], specs: []
    }
    const url = modal.mode === 'create' ? `${API}/products` : `${API}/products/${modal.product.id}`
    const method = modal.mode === 'create' ? 'POST' : 'PUT'
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body)
      })
      if (!res.ok) {
        const d = await res.json()
        throw new Error(d.message || 'Lỗi lưu sản phẩm')
      }
      setModal(null)
      load()
    } catch (e) {
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Xác nhận xóa sản phẩm này?')) return
    await fetch(`${API}/products/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    load()
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  const fmt = (n) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(n)

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Quản lý Sản phẩm</h1>
        <p className="admin-page-sub">{products.length} sản phẩm trong kho</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, gap: 12, flexWrap: 'wrap' }}>
        <input
          className="admin-input"
          placeholder="Tìm kiếm sản phẩm..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 300, flex: 1 }}
        />
        <button className="admin-btn admin-btn-primary" onClick={openCreate}>
          <i className="fa-solid fa-plus"></i> Thêm sản phẩm
        </button>
      </div>

      <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          {loading ? (
            <div style={{ padding: 40, textAlign: 'center', color: '#71717a' }}>Đang tải...</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Hình ảnh</th>
                  <th>Tên sản phẩm</th>
                  <th>Danh mục</th>
                  <th>Giá</th>
                  <th>Tồn kho</th>
                  <th>Đánh giá</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={7} style={{ textAlign: 'center', color: '#71717a', padding: 32 }}>Không tìm thấy sản phẩm</td></tr>
                ) : filtered.map(p => (
                  <tr key={p.id}>
                    <td>
                      <img src={p.image} alt={p.name} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 6 }} />
                    </td>
                    <td style={{ fontWeight: 500, maxWidth: 200 }}>{p.name}</td>
                    <td>{p.category}</td>
                    <td>{fmt(p.price)}</td>
                    <td>
                      <span className={`admin-badge ${p.stock > 0 ? 'admin-badge-green' : 'admin-badge-red'}`}>
                        {p.stock}
                      </span>
                    </td>
                    <td>⭐ {p.rating}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button className="admin-btn admin-btn-outline" onClick={() => openEdit(p)}>Sửa</button>
                        <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(p.id)}>Xóa</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="admin-modal-overlay" onClick={e => e.target === e.currentTarget && setModal(null)}>
          <div className="admin-modal">
            <h2 className="admin-modal-title">
              {modal.mode === 'create' ? 'Thêm sản phẩm mới' : 'Chỉnh sửa sản phẩm'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">Tên sản phẩm *</label>
                <input className="admin-form-input" value={form.name} onChange={set('name')} placeholder="Tên sản phẩm" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Danh mục *</label>
                <input className="admin-form-input" value={form.category} onChange={set('category')} placeholder="VD: Sofa" list="categories-list" />
                <datalist id="categories-list">
                  {categories.map(c => <option key={c} value={c} />)}
                </datalist>
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Tồn kho</label>
                <input className="admin-form-input" type="number" value={form.stock} onChange={set('stock')} min="0" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Giá (VNĐ) *</label>
                <input className="admin-form-input" type="number" value={form.price} onChange={set('price')} min="0" />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Giá gốc (VNĐ)</label>
                <input className="admin-form-input" type="number" value={form.oldPrice} onChange={set('oldPrice')} min="0" placeholder="Để trống nếu không giảm" />
              </div>
              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">URL hình ảnh</label>
                <input className="admin-form-input" value={form.image} onChange={set('image')} placeholder="https://..." />
              </div>
              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label className="admin-form-label">Mô tả</label>
                <textarea className="admin-form-input" value={form.description} onChange={set('description')} rows={3} style={{ resize: 'vertical' }} />
              </div>
            </div>

            {error && (
              <div style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: 6, color: '#dc2626', fontSize: 14, marginBottom: 12 }}>
                {error}
              </div>
            )}

            <div className="admin-modal-actions">
              <button className="admin-btn admin-btn-outline" onClick={() => setModal(null)}>Hủy</button>
              <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>
                {saving ? 'Đang lưu...' : 'Lưu'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProducts
