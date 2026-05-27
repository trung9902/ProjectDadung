import React from 'react'
import './Collections.css'

const collections = [
  {
    title: 'Khong gian bep',
    text: 'Thiet bi va phu kien cho can bep hien dai.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBojEpK8FlDyrd02MKMZ0zoiTcW6_3UOzzUfRcnVLJP1tKEwm1-dnQNr5Zg4QiEaPpjZZiqIM7UNx8ml6rcqiA5ZPcPKZWGX8cwNU9tcIC-vugM3_dHKsTnn7aseJGwEhr0w0tk7g6nBqon-W6dTnYgNMIF7VuDjI3T2J7gBKY_LOxhTcFMDwUjxB_O9v_YCJ-1aEEk-_a2XF9oVZ4eOFbkCiM4kmcfPdDIH6TIUggwsAWtnB_geFflqiygRw0hNJodI_q6XCSvXIwy',
  },
  {
    title: 'Phong khach',
    text: 'Noi that va do dung tao cam giac am cung.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNJ1L7rM6j8Og3lf3qDwvbf8EwqD7-JZt5126hAPr06vvkp0YYCbFi1qJ5Ezrui8t3GjC9sSoywi7-qEeLFfFk0R_Upbe0PzDA6vwWnYu4rVPNuvpY_sL9v1r4qtz-yvt7jeJKjY5SpPeqO-DtoQYExTqFi1FMekWj5cQbdsaIV2LzRY_FBTnmjrnkUQ22ZHceISSu1sv-6_Cj9EE5esn9eKoavqY32JEoPv81kk3R_HswwWg0Z94vvH-z96Z7OqdYuJ2wa_ZUnSBG',
  },
  {
    title: 'Phong tam',
    text: 'Vat dung cham soc ca nhan va khong gian thu gian.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbyrCJCXWisJIiGBgdpgqq-BOIhS8AFuO4ojBV_uEzWg4sDGymVTJXuqG0PE4Ri4mApQdxCdirifpA8VeNEEScm-jinCj5IPsnJ6XZvUh9s5gWa6TzvUzfFZnyV6cLDc2WpeAfSc5eb64tgQ8iUXjZ4duohPaA8cel2M24oTsHo7GQqbR7PgCW2kQdlzGnkwHDoFNfzG9Rp0T-yEuuBJZ9w6K2vuhuyB3elNPMIONU3cMivx8RVT05htOz-x0OTlBuXkItQErnwC_B',
  },
  {
    title: 'Phong ngu',
    text: 'Nhung lua chon toi gian cho giac ngu tot hon.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmqWB-5NWJCg7CuS60ViPIUT9d_n5h6FfknI-nLCdJlXdXldUfDeOBQcETGxhaLaOP8NA4T34RUn16XDHDLpR_ICIb4tg6Grhq9uOAKfYfZkfaaq2qEdAdNG2kmuw4JU2tOUSDOXAv7MWZltWQjDPpLsgHIJfzUwKYEUowC16n_qCIs6hatmAmCyzwWSrv7FrTu44eBRjK_y_JToUnA8KBwrP2O9LDCotERI8Mcvk-Y8hO7LOhqa0eycRGphOg0R5CwctYSd8RI97u',
  },
]

const Collections = () => {
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
        {collections.map((collection) => (
          <article className="collections-card" key={collection.title}>
            <img src={collection.image} alt={collection.title} />
            <div className="collections-overlay">
              <h2>{collection.title}</h2>
              <p>{collection.text}</p>
              <button type="button" className="static-btn">Xem bo suu tap</button>
            </div>
          </article>
        ))}
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
