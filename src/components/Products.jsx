import React from 'react';
import './Products.css'

const Products = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
   <>
    <div className='container'>
    {posts.map((post, id) => (
        <div key={id} className = 'posts'>
        <img src={post.thumbnail} alt="products" />
        <p>  {post.title}</p>
        </div>
      ))}
    </div>
   </>
  );
};

export default Products;