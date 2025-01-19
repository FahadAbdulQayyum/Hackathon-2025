// import React from 'react'
// import { useDispatch, useSelector, useStore } from 'react-redux'

// import { useRef } from 'react'
// import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'

// import {
//     initializeProduct,
//     setProductName,
//     Product
// } from '../lib/features/product/productSlice'

// const ProductName({ product }: { product: Product }) => {

//     // Initialize the store with the product information
//     const store = useAppStore()
//     const initialized = useRef(false)
//     if (!initialized.current) {
//         store.dispatch(initializeProduct(product))
//         initialized.current = true
//     }
//     const name = useAppSelector(state => state.product.name)
//     const dispatch = useAppDispatch()

//     return (
//         <div>
//             <h1>{ }</h1>
//             <button>Add</button>
//         </div>
//     )
// }

// export default ProductName;
