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
        <div className='Category'>
            <h1>Danh mục nổi bật</h1>
            <div className="Category-items">
                <div className="Category-item">
                    <img src={featuredCategories[0].image} alt="" />
                    <p>{featuredCategories[0].name}</p>
                </div>
                <div className="Category-item">
                    <img src={featuredCategories[1].image} alt="" />
                    <p>{featuredCategories[1].name}</p>
                </div>
                <div className="Category-item">
                    <img src={featuredCategories[2].image} alt="" />
                    <p>{featuredCategories[2].name}</p>
                </div>
                <div className="Category-item">
                    <img src={featuredCategories[3].image} alt="" />
                    <p>{featuredCategories[3].name}</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategories
