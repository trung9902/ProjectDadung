import React from 'react'
import './featuredCategories.css'

const featuredCategories = [
    { id: 1, name: 'Thiết Bị Bếp', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXgYYDg1GnQT2ogCmAglHTKLbyNFsin8Y_j26WSsWwRbM4upm_r0hrtI2aUMx3AaRFBKAul1o_C95I1gLwFzdw_j9mfjV_ID8SkwAA967OIFfocX4H74xe9SXEKbuJia6ChDwe2c74qJ7jd9OGATxbfGhvUVK3HMIQyG3mQ4fDiK9crJm8kM3piHrqon_swaH25Vp-RzBLEvvbcBxI1rA8MpsxQtdjOaiYl3PFVM5mb_r2sGpJZEZnt9gz7YnDsgstq4LCKDLSmx1J" },
    { id: 2, name: 'Laptop', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk00tN3E_iBEVUTUtZ1iJ3gIsBa9SjraCDg8dCtZXUpRJ9ODKsAzLfN9O7AeBcLssUCNVi1gj6AUPM2K34QN4-mkH5e3X1AxuBnLaUMgJ8gNCkWtQUnsY7Kmc-dBxwFUNfbBkjBP1JOyySGvgRRywTSx30y2qBk3elSYvJ_zEoBEdobreVvkou7oRN811rzRbUUQunC_iL7lXbUxnpI5zJziFZYiD6Vyia4Ul5SpHCSDXI5WTbd7_TPj2_xOFVdOH6C9Opn5ZvdRrT" },
    { id: 3, name: 'Tablet', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Kd-NpIO4JCI3k2BBltbMPaIFGFQwyqRjeWQuFBrhwYZEAVDXifuVGfyZ3Gd9FHoiyS7fu8hg3QVgnwUjdxfwdFRCCBfCDyv0Tn59tPpnZmeBx2S_xC-wtZ99l5kXQM2mN3cep0MdzFY0IwWq2bs4nf9GvamJJdCpTNPukrEx6_x5guc9OET2r78Lo6gYPUO7VPapIJuV9Yk5MXLBiDiGWq2239VmClRg42IvHDUxAk5vHaGGNt95xjE_mxnCtCRemrBx_X0Sc8UE" },
    { id: 4, name: 'Phụ kiện', image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXgYYDg1GnQT2ogCmAglHTKLbyNFsin8Y_j26WSsWwRbM4upm_r0hrtI2aUMx3AaRFBKAul1o_C95I1gLwFzdw_j9mfjV_ID8SkwAA967OIFfocX4H74xe9SXEKbuJia6ChDwe2c74qJ7jd9OGATxbfGhvUVK3HMIQyG3mQ4fDiK9crJm8kM3piHrqon_swaH25Vp-RzBLEvvbcBxI1rA8MpsxQtdjOaiYl3PFVM5mb_r2sGpJZEZnt9gz7YnDsgstq4LCKDLSmx1J" }
]

function FeaturedCategories() {
    return (
        <section className="category-section">
            <div className="section-header">
                <h2 className="section-title">Danh Mục Nổi Bật</h2>
            </div>
            <div className="category-grid">
                <a className="category-card group" href="#">
                    <div className="category-img-container level-1-shadow">
                        <img
                            alt=""
                            className="category-img"
                            src={featuredCategories[0].image}
                        />
                    </div>
                    <span className="category-title">{featuredCategories[0].name}</span>
                </a>
                <a className="category-card group" href="#">
                    <div className="category-img-container level-1-shadow">
                        <img
                            alt=""
                            className="category-img"
                            src={featuredCategories[1].image}
                        />
                    </div>
                    <span className="category-title">{featuredCategories[1].name}</span>
                </a>
                <a className="category-card group" href="#">
                    <div className="category-img-container level-1-shadow">
                        <img
                            alt=""
                            className="category-img"
                            src={featuredCategories[2].image}
                        />
                    </div>
                    <span className="category-title">{featuredCategories[2].name}</span>
                </a>
                <a className="category-card group" href="#">
                    <div className="category-img-container level-1-shadow">
                        <img
                            alt=""
                            className="category-img"
                            src={featuredCategories[3].image}
                        />
                    </div>
                    <span className="category-title">{featuredCategories[3].name}</span>
                </a>
            </div>
        </section>
    )
}

export default FeaturedCategories
