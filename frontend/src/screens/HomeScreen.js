import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props){

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());

      return() =>{
    };
}, []);

  return(
  <div>
  {loading? <div>Loading...</div>:
  error? <div>{error}</div>:
  (
    <div>
    <div>HomeScreen</div>
    <div className="content">
      <ul className="products">
        {
          products.map(product =>
            <li key={product._id}>
            <div className="product">
            <Link to={ '/product/' + product._id }><img className="product-image" src={product.image} alt="Frock"/></Link>
              <div className="product-name">
                <Link to={ '/product/' + product._id }>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="price">{product.price}</div>
              <div className="product-rating">{product.rating}
                , {product.numReviews}</div>
            </div>
          </li>)
        }
      </ul>
    </div>
    </div>
  )
 }
 </div>
);
}export default HomeScreen;
