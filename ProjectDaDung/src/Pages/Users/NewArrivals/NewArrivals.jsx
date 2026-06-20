import React from 'react'
import './NewArrivals.css'
import { useGetProductsData } from '../../../../hook/useProduct'

const newProducts = [
  {
    name: 'Ao khoac Heritage Limited',
    category: 'Signature Series',
    price: '4.250.000 VND',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwuGRn_1YA6HIhKNBCGwogTa3MK-G509JVeVapihsNptOEmhkmIlCMMdk1PquEgSxmiPL0UwtuUb39FGAFsQ8lIj8Go2USGiukjG2ezsFx8-Y-KFCDwvTeY4JCq5eOiAUf12xMQmnKj1v-GY6qQRk0wcQSLGYy-Y04NzTwrbJtp2RWxetCtHZET_dFbxZkbMJ0MXUK-YSvYDacpxNif99iN_clPiMm1SiSRynu04PnZ9jmaJl4IDIz2Ecj8lws3VInvdFepCPWI1uh',
    featured: true,
  },
  {
    name: 'Khan len Premium Cashmere',
    category: 'Phu kien',
    price: '1.200.000 VND',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdqCrlxIftGCEoRY3oDqrxF2tJjyiMmblEHZzqHK0Q9uuujKscOXbmQUR6NX_iwc1CX-X8M3GigrPpl10JQG9tYFzQXyKISawUAuhtXC4g1jPwtlFCwy8Q3ytLm8WRywZrsjCm67Z5Zz_FNFZaiqBs9ii_KICcU7FVguq0ny4ZmvLIogYdJzLyvwFujHHyXtoFeuyPQxYmVou6e7Qde4Ti7hfK82UsyC44ibr6JtLLHM2mjW0AXRREH3VTCL_fEvAxeuIqjFWRPAL8',
  },
  {
    name: 'Tui da Mini Crossbody',
    category: 'Tui xach',
    price: '2.850.000 VND',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmp2urv9FKRCHq1Xl9RBhJ1bUY6s1FkIqA5Q7L5CYLgTjAMlSvzFiFN5JpMm2nV39MgZgH3wi7cMJ9tYDJh6YxJGw5Pm4vxJtZpOeRGXGXNA16LuTXPNjAFJNxTjTVGOBDjZX3OJZfQVwPXZZtPSAEfFuNMDreTnlPkGVEV4ieTFN63XNyY1oPvb_y3tIb5hTVAXSakXt_ZmT3xR1U53HW0aojTYA8yaJmd7yN7rVlzEfiIXwGDTkdgS1lca5AOZA9pJsHcZkokDDJ',
  },
  {
    name: 'Sneaker Urban Lite',
    category: 'Giay dep',
    price: '1.950.000 VND',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfLiiacyr5v6Sn-pVTQTc23-eNi-vSkYdzRG9KMt35bvD_e-xd2BhJZZZE_qz4VApHVQhALNraiXNlDh5raBKMvcOo8cUa_nI34EjjqNUwNIiIiy1uuA0iVKYDN-W7dDU6cB79mvD1_JJRKPpkWoFm_9hEbJagB-Sdv75YRLqrI5yGJkuxs8ohd0KIwjpNAVN4bwbiA0XnZ2r64v9bglsC9rsrGWxRFTIIxPP5Hbh2NIxaM6Hy1RNtJlb-wMiFTukcGH1dBy7wdv06',
  },
  {
    name: 'Dong ho Chrono Minimalist',
    category: 'Dong ho',
    price: '5.400.000 VND',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm4r1elWvtawt1BMO8LMPEMMUEioSiA3dAnu_sBQXMB3RXPoBqpF3lI8hJ9zXCm7_cwdD1lwmBmoiRtsTwOkmlbp7TScoh8vbJ9lXJZDpEiclzIVKh2llm5i6S46s68UKfB_SS2QC1ht03JJy-EtlKty3mr4nSL4HkGx63OigaYODBr4ZyPp8o0WRoa9bN8IuGDXebs6c2naTJcL1AKooyZ3z_F4GfiMLOzoT9QWT5Ut2DkUT8Id-SOzyLbvPcY3-u9jrxtwfUAELJ',
  },
]

const NewArrivals = () => {
  const { products, loading } = useGetProductsData();
  const [selectedSort, setSelectedSort] = React.useState('All');
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  const productCategories = [...new Set(products.map((product) => product.category))];
  const filterNewProducts = (selectedSort) => {
    const sortProducts = [...products].filter(product => {
      const matchAll = selectedSort === 'All' && product?.badges?.[0]?.variant === 'new'
      const matchCategory = selectedSort === product.category && product?.badges?.[0]?.variant === 'new'
      return matchAll || matchCategory
    })
      .sort((a, b) => {
        if (selectedSort === 'new') {
          return 0;
        }
        else if (selectedSort === 'price-low')
          return a.price - b.price;

        else if (selectedSort === 'price-high')
          return b.price - a.price;
      });
    return sortProducts;
  }

  return (
    <main className="static-page new-arrivals-page">
      <section className="new-arrivals-hero">
        <h1 className="static-heading">Hang moi ve</h1>
        <p className="static-subtitle">
          Kham pha nhung thiet ke moi nhat trong bo suu tap mua nay.
        </p>
      </section>

      <section className="new-arrivals-toolbar">
        <div className="static-chip-row">
          <span className={`static-chip ${selectedSort === 'All' ? 'active' : ''}`} onClick={() => setSelectedSort('All')}>
            Tat ca san pham
          </span>
          {
            productCategories.map((category) => (
              <span className={`static-chip ${selectedSort === category ? 'active' : ''}`} key={category} onClick={() => setSelectedSort(category)}>
                {category}
              </span>
            ))
          }
          {/* <span className="static-chip">Ao nam</span>
          <span className="static-chip">Phu kien</span>
          <span className="static-chip">Giay dep</span> */}
        </div>
        <select className="static-select new-arrivals-sort" defaultValue="newest" onChange={(e) => setSelectedSort(e.target.value)}>
          <option value="new">Moi nhat</option>
          <option value="price-low">Gia thap den cao</option>
          <option value="price-high">Gia cao den thap</option>
        </select>
      </section>

      <section className="new-arrivals-grid">
        {filterNewProducts(selectedSort).slice(0, 4).map((product) => (
          <article className={`static-card new-product-card ${product.featured ? 'featured' : ''}`} key={product.name}>
            <div className="static-image-frame portrait">
              <img src={product.image} alt={product.name} />
              <span className="static-badge new-badge">MOI</span>
            </div>
            <div className="static-product-body">
              <p className="static-brand">{product.category}</p>
              <h2 className="static-product-title">{product.name}</h2>
              <p className="static-price">{product.price}</p>
              <button type="button" className="static-btn new-product-btn">
                <span className="material-symbols-outlined">add_shopping_cart</span>
                Them vao gio
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default NewArrivals
