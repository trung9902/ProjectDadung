import React from 'react'
import './Product.css'
import product from '@/img/Content/Product/product.png'
import product2 from '@/img/Content/Product/product2.png'
import product3 from '@/img/Content/Product/product3.png'
const ProductList = [
    {
        id: 1,
        name: "Loa Không Dây Studio",
        price: "6.990.000",
        originalPrice: "8.200.000",
        category: "THIẾT BỊ THÔNG MINH",
        image: product
    },
    {
        id: 2,
        name: "Máy Giặt Thông Minh",
        price: "19.990.000",
        originalPrice: "24.990.000",
        category: "MÁY GIẶT & SẤY",
        image: product2
    },
    {
        id: 3,
        name: "Máy Pha Cà Phê Cao Cấp",
        price: "17.990.000",
        originalPrice: "21.990.000",
        category: "ĐỒ GIA DỤNG",
        image: product3
    },
    {
        id: 4,
        name: "Máy Pha Cà Phê Cao Cấp",
        price: "17.990.000",
        originalPrice: "21.990.000",
        category: "ĐỒ GIA DỤNG",
        image: product3
    },
    {
        id: 5,
        name: "Máy Pha Cà Phê Cao Cấp",
        price: "17.990.000",
        originalPrice: "21.990.000",
        category: "ĐỒ GIA DỤNG",
        image: product3
    }
]
function Product() {
    return (
        <div className='Product'>
            <h1>Xu Hướng hiện tại</h1>
            <div className="Product-items">
                <div className="Product-item" key={ProductList[0].id}>
                    <img src={ProductList[0].image} alt={ProductList[0].name} />
                    <div className="Product-item_content">
                        <p className='Product-item_Category'>{ProductList[0].category}</p>
                        <h2 className='Name'>{ProductList[0].name}</h2>
                        <div className='price-container'>
                            <span className='price'>{ProductList[0].price}₫</span>
                            <span className='original-price'>{ProductList[0].originalPrice}₫</span>
                        </div>
                    </div>
                </div>
                <div className="Product-item" key={ProductList[1].id}>
                    <img src={ProductList[1].image} alt={ProductList[1].name} />
                    <div className="Product-item_content">
                        <p className='Product-item_Category'>{ProductList[1].category}</p>
                        <h2 className='Name'>{ProductList[1].name}</h2>
                        <div className='price-container'>
                            <span className='price'>{ProductList[1].price}₫</span>
                            <span className='original-price'>{ProductList[1].originalPrice}₫</span>
                        </div>
                    </div>
                </div>
                <div className="Product-item" key={ProductList[2].id}>
                    <img src={ProductList[2].image} alt={ProductList[2].name} />
                    <div className="Product-item_content">
                        <p className='Product-item_Category'>{ProductList[2].category}</p>
                        <h2 className='Name'>{ProductList[2].name}</h2>
                        <div className='price-container'>
                            <span className='price'>{ProductList[2].price}₫</span>
                            <span className='original-price'>{ProductList[2].originalPrice}₫</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product
