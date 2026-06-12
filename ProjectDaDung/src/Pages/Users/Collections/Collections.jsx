import React, { useState } from 'react'
import './Collections.css'
import { useCollections } from '../../../../servers/Collection'

const Collections = () => {
  const { collections, loading } = useCollections()
  return (
    <main className="static-page collections-page">
      <section className="static-header">
        <div>
          <p className="static-eyebrow">Bo suu tap</p>
          <h1 className="static-heading">Bo suu tap khong gian</h1>
          <p className="static-subtitle">
            Chon nhanh theo tung khu vuc trong nha voi nhung nhom san pham da duoc sap xep san.
          </p>
        </div>
      </section>

      <section className="collections-grid">
        {loading ? (
          <p>Dang tai bo suu tap...</p>
        ) : collections?.length > 0 ? (
          collections.map((collection) => (
            <article className="collections-card" key={collection.id}>
              <img src={collection.image} alt={collection.title} />
              <div className="collections-overlay">
                <h2>{collection.title}</h2>
                <p>{collection.text}</p>
                <button type="button" className="static-btn">
                  Xem bo suu tap
                </button>
              </div>
            </article>
          ))
        ) : (
          <p>Không có bộ sưu tập nào để hiển thị.</p>
        )}
      </section>

      <section className="collections-subscribe">
        <h2>Nhan thong bao ve bo suu tap moi nhat</h2>
        <div className="collections-subscribe-row">
          <input className="static-input" placeholder="email@example.com" type="email" />
          <button type="button" className="static-btn">Dang ky</button>
        </div>
      </section>
    </main>
  )
}

export default Collections
