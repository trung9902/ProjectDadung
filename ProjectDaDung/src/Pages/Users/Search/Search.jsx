import React from 'react'
import './Search.css'

const results = [
  ['Titan Smartwatch Pro', '8.900.000 VND', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxmAcuUsNuErAj6EBzDudQ-7-BEXhuBhrDDGfX4aAzyMnXSPC4Gfm_7plZHX-lbIxv--o7obHkXKv48cnOYH7TRzWyxg50NmNVjgkN61Z7d3TM6yRi_hZJK4fksA5sp_ASb_-do1KflfZ6Jt33tq6zWPxrECNWAl0FTYPBfEGDkQQUTgxCPxSOlsLTetYj6fVzw6VC-fNl73N-vQF8W9J1s8T37jrfX3Q4-OpMV3e71nEj1XcYQXxCZk-YrMHqZGrC3dUrm2KtkSt_'],
  ['Minimal Watch White', '5.600.000 VND', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgtVJzIXxOs9n27ZwFE-UOadOJcT6qbQzQkP4XP72_1k6lRYx_iYna8VyOEaRsHTb4KMUyfkJxYgeRWyET5XG71s_5zBb-N0kLVyIyD1Qw9RqzWXGO7iQingv-JChpCoZvW1Kt8pZxxl54CNlOIpw1S8pkhv_iE5Yqyvmx6qwnuI0FvVyf6W7AQcFeVep9ndrUn2-krGDiukNAvO9dJdEgxphnk6GCQUMk6K9xgPX0TQHlN3JK9QPRFv3l8t7x8muBnpHC5TTtM3G7'],
  ['Chronograph Steel', '11.200.000 VND', 'https://lh3.googleusercontent.com/aida-public/AB6AXuByWzMYGxQdBfOP5Q2zjEkuFg5YrLsAKVwGZ91uV-k0ZkIiNE_4QJqNNoNP4etJfGtGZfktmh6Lfu-bgKbOyqPzqKMZLnK3Y7A0nB0MPVHXDg-6zkmmu80EEfk0XF0_BkXvjMoRWefBBly9iecYC71me-aZY9KQi2BQvOw8bPoeDw0C0DKJaa04MIRdsLy-LEKEjPmGmMWq_AEJ7swR_4HQTiftgex-zBnRUwlXq_GZtemY1vxiqSN3qOxcw-0DhBBrJWa6SdzfetyW'],
]

const Search = () => {
  return (
    <main className="static-page search-page">
      <section className="search-hero">
        <h1 className="static-heading">Ket qua cho: "Dong ho thong minh"</h1>
        <p className="static-subtitle">Tim thay 48 san pham phu hop voi nhu cau cua ban.</p>
        <div className="search-box">
          <input className="static-input" defaultValue="Dong ho thong minh" />
          <button type="button" className="static-btn">
            <span className="material-symbols-outlined">search</span>
            Tim kiem
          </button>
        </div>
      </section>

      <section className="search-layout">
        <aside className="static-card static-card-pad search-filters">
          <h2>Bo loc</h2>
          <label><input type="checkbox" defaultChecked /> Thiet bi deo</label>
          <label><input type="checkbox" /> Phu kien</label>
          <label><input type="checkbox" /> Suc khoe</label>
          <div>
            <p>Khoang gia</p>
            <input type="range" min="0" max="100" defaultValue="70" />
          </div>
          <button type="button" className="static-btn">Ap dung bo loc</button>
        </aside>

        <div>
          <div className="search-toolbar">
            <span>Hien thi 1 - 12 cua 48 san pham</span>
            <select className="static-select" defaultValue="popular">
              <option value="popular">Pho bien</option>
              <option value="new">Moi nhat</option>
            </select>
          </div>
          <div className="static-grid">
            {results.map(([name, price, image]) => (
              <article className="static-card" key={name}>
                <div className="static-image-frame square">
                  <img src={image} alt={name} />
                </div>
                <div className="static-product-body">
                  <p className="static-brand">Smart Device</p>
                  <h2 className="static-product-title">{name}</h2>
                  <p className="static-price">{price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Search
