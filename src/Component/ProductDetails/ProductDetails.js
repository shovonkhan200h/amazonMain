import React from 'react'
import { useParams } from 'react-router-dom'
import { fakeProducts } from '../../Constants/Fake Products'

const ProductDetails = () => {
    const {id}=useParams()
    const pd = fakeProducts.find(pd=> pd.id == id)

  return (
    
       <div className='w-full'>
            <div className=''>
                <img src={pd.img} alt=''/>
            </div>

            <div>
                <h2>{pd.name}</h2>
                <p>{pd.des}</p>
                <p>{pd.seller}</p>
                <p>{pd.stock}</p>
                <p>{pd.price}</p>

            </div>
       </div>
    
  )
}

export default ProductDetails
