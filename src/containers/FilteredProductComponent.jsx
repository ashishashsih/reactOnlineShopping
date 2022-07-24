import React from 'react'
import { useSelector } from 'react-redux';

const FilteredProductComponent = () => {
  
    const products=useSelector((state)=>state.allProducts.products);
    const renderList=products.map((product)=>
    {
      const {id,title,price,image,rating}=product;
      return(<>
          <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/product-1.jpg" alt />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                  <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                  <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                  <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href>{title}</a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>${price}</h5><h6 className="text-muted ml-2"><del>${price}</del></h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small className="fa fa-star text-primary mr-1" />
                  <small>(99)</small>
                </div>
              </div>
            </div>
          </div>
              </>)
    })
  
    return (
      <>
       <div>
            
      <div className="row px-xl-5">
      <>{renderList}</>
      
      </div>
      </div>
      </>
    )
}

export default FilteredProductComponent