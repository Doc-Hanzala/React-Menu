import React from 'react'

const Categories = ({categories,displayItems}) => {
  return (
    <div className="btn-container">
        {categories.map((category)=>{
            return <button  onClick={()=>displayItems(category)} className='btn'  key={category} >{category}</button>
        })}
    </div>
  )
}

export default Categories