import { Link } from "react-router-dom";
function ProductItem({ product }) {
  return (
    <div className="featured-products__list">
  <Link
      to={`/detail-product/${product.id}`}
      className="featured-products__item col-md-3 col-lg-3"
      data-id={product.id}
    >
  
    
           <div class="product-card ">
                  <figure class="card-banner">
                    <img src={`${product.imageProduct[1]}`} alt="featured-products_image" />

        {product.discount_sale !== "null" ? (
          <div className="discount">{product.discount_sale}</div>
        ) : undefined}

                    <div class="btn-wrapper">
                      <button className="product-btn" aria-label="Quick View">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
              
              </button>
                    </div>
                  </figure>

                  <div class="card-content">
                  <h3 class="h4 card-title">
                    {product.name_product}
                    </h3>

            <div class="price-wrapper">
                <data class="price" >  {product.price_product}</data> 
                      {product.initialPrice != "null" ? (
          <del  className="initialPrice del">{product.initialPrice}</del>
        ) : undefined}

                    
                    </div>

                    
                  </div>
                </div>
    </Link>
    </div>
  
  );
}

export default ProductItem;
