import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
const ProductComponent = () =>
{
  const products=useSelector((state)=>state.allProducts.products);
  const renderList=products.map((product)=>
  {
    const {id,title,price,image}=product;
    return(<>
    
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={id}>
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/product-3.jpg" styles={{ minWidth: 30, minHeight: 30, maxHeight:50,maxWidth:30 }} alt="" />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart" /></a>
              <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt" /></a>
              <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search" /></a>
            </div>
          </div>
          
          <Link to={"/product/"+id}>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href="">{title}</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5><span class="WebRupee">Rs.</span>{price}</h5><h6 className="text-muted ml-2"><del><span class="WebRupee">Rs.</span>{price}</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(301)</small>
            </div>
          </div>
          </Link>
        </div>
      </div>
            </>)
  })

  return (
    <>
     <div>
          <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
    <div className="row px-xl-5">
    <>{renderList}</>
    </div>
    </div>
    </div>
    </>
  )
}

export default ProductComponent