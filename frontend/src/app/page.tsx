"use client"

import Home from '@/Components/Home'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default Page















// "use client"
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState, AppDispatch } from '../lib/store'; // Import AppDispatch
// import { incrementValue } from '../lib/features/counter/counterSlice';
// import { fetchProducts } from '../lib/features/product/productSlice';

// const Page = () => {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch: AppDispatch = useDispatch(); // Use typed dispatch

//   const { products, loading, error } = useSelector((state: RootState) => state.product);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   useEffect(() => {
//     if (!loading) {
//       console.log('products....sss...', products);
//     }
//   }, [loading, products]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(incrementValue())}>Increment</button>
//       <div>
//         <h1>Product List</h1>
//         <ul>
//           {products.map(p => (
//             <li key={p.id}>{p.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div >
//   );
// };

// export default Page;
