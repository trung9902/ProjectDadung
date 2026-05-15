import React from 'react'
import './featuredCategories.css'
import item1 from '@/img/Content/category/Gemini_Generated_Image_5jih7r5jih7r5jih.png'
import item2 from '@/img/Content/category/Gemini_Generated_Image_fhie7tfhie7tfhie.png'
import item3 from '@/img/Content/category/Gemini_Generated_Image_xdbm9wxdbm9wxdbm.png'
import item4 from '@/img/Content/category/Gemini_Generated_Image_5jih7r5jih7r5jih.png'
const featuredCategories = [
    { id: 1, name: 'Điện thoại', image: item1 },
    { id: 2, name: 'Laptop', image: item2 },
    { id: 3, name: 'Tablet', image: item3 },
    { id: 4, name: 'Phụ kiện', image: item4 }
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
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXgYYDg1GnQT2ogCmAglHTKLbyNFsin8Y_j26WSsWwRbM4upm_r0hrtI2aUMx3AaRFBKAul1o_C95I1gLwFzdw_j9mfjV_ID8SkwAA967OIFfocX4H74xe9SXEKbuJia6ChDwe2c74qJ7jd9OGATxbfGhvUVK3HMIQyG3mQ4fDiK9crJm8kM3piHrqon_swaH25Vp-RzBLEvvbcBxI1rA8MpsxQtdjOaiYl3PFVM5mb_r2sGpJZEZnt9gz7YnDsgstq4LCKDLSmx1J"
                        />
                    </div>
                    <span className="category-title">Thiết Bị Bếp</span>
                </a>
                <a className="category-card group" href="#">
                    <div className="category-img-container level-1-shadow">
                        <img
                            alt=""
                            className="category-img"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk00tN3E_iBEVUTUtZ1iJ3gIsBa9SjraCDg8dCtZXUpRJ9ODKsAzLfN9O7AeBcLssUCNVi1gj6AUPM2K34QN4-mkH5e3X1AxuBnLaUMgJ8gNCkWtQUnsY7Kmc-dBxwFUNfbBkjBP1JOyySGvgRRywTSx30y2qBk3elSYvJ_zEoBEdobreVvkou7oRN811rzRbUUQunC_iL7lXbUxnpI5zJziFZYiD6Vyia4Ul5SpHCSDXI5WTbd7_TPj2_xOFVdOH6C9Opn5ZvdRrT"
                        />
                    </div>
                    <span className="category-title">Vệ Sinh Nhà Cửa</span>
                </a>
                <a className="category-card group" href="#">
                    <div className="category-img-container level-1-shadow">
                        <img
                            alt=""
                            className="category-img"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Kd-NpIO4JCI3k2BBltbMPaIFGFQwyqRjeWQuFBrhwYZEAVDXifuVGfyZ3Gd9FHoiyS7fu8hg3QVgnwUjdxfwdFRCCBfCDyv0Tn59tPpnZmeBx2S_xC-wtZ99l5kXQM2mN3cep0MdzFY0IwWq2bs4nf9GvamJJdCpTNPukrEx6_x5guc9OET2r78Lo6gYPUO7VPapIJuV9Yk5MXLBiDiGWq2239VmClRg42IvHDUxAk5vHaGGNt95xjE_mxnCtCRemrBx_X0Sc8UE"
                        />
                    </div>
                    <span className="category-title">Không Gian Sống</span>
                </a>
                <a className="category-card group" href="#">
                    <div className="category-img-container level-1-shadow">
                        <img
                            alt=""
                            className="category-img"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKqQUDPeSAzXwGnPyac4v8l8TbpK4SOqGfvg0pqJZeaVrtjL88ZNF5xjhIQfCyP_2adT-yn619p1xWgL9I7FegmRXx6S1A7btH5AqEArfDUL4pFZARphGpJtALgRRIfzTvlwJV5U31GRBAmvWgnPi2Ln6a2GY3MAX4zidlAO7fPztDB-Hqzo5xSXeW7zh32zgb21EL5ikZSoSFTUUgUYU1ZUUfWwJedsX7tjcGTN50dW4-4ru4G9-Z8mbLxpTXIhoSH1LFQMXCLyP-"
                        />
                    </div>
                    <span className="category-title">Chăm Sóc Cá Nhân</span>
                </a>
            </div>
        </section>
    )
}

export default FeaturedCategories
