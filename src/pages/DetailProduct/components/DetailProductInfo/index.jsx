import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Error, Success } from "../../../../components/Alert";
import { LoadingBtn } from "../../../../components/Loading";
import addToCartSlice from "../../../../redux/slice/addToCartSlice";
import ProductQuantityInput from "../ProductQuantityInput";
import { addQuantityProductCart } from "./addQuanityProductCart";
import { checkProductCart } from "./checkProductCart";

const BoxSupportInFoArray = [
  {
    image:
      "../assets/image/image_product-detail/icon/chinhsach_1.webp",
    nameSupport: "Miễn phí vẫn chuyển",
  },
  {
    image:
      "../assets/image/image_product-detail/icon/chinhsach_2.webp",
    nameSupport: "Miễn phí đổi - trả",
  },
  {
    image:
      "../assets/image/image_product-detail/icon/chinhsach_3.webp",
    nameSupport: "Hỗ trợ nhanh chóng",
  },
  {
    image:
      "../assets/image/image_product-detail/icon/chinhsach_4.webp",
    nameSupport: "Ưu đãi combo",
  },
];
function BoxSupportItem({ BoxSupport }) {
  return (
    <div className="box-support">
      <div className="image">
        <img src={BoxSupport.image} alt="Ảnh icon support" />
      </div>
      <span>{BoxSupport.nameSupport}</span>
    </div>
  );
}
function ProductSize({ size, setSize }) {
  const sizeArray = ["0.2kg", "0.5kg", "1kg", "1.5kg", "2kg"];
  const handleChangeSize = (sizeText) => {
    setSize(sizeText);
  };
  return (
    <div className="detailProduct__size">
      <div className="detailProduct__size-title">Khối lượng:</div>
      {sizeArray.map((sizeText) => {
        return (
          <span
            className={
              size == sizeText
                ? "detailProduct__size-item borderColor-active"
                : "detailProduct__size-item "
            }
            key={sizeText}
            onClick={() => handleChangeSize(sizeText)}
          >
            {sizeText}
          </span>
        );
      })}
    </div>
  );
}

function DetailProductInfo({ product, loading }) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("0.2kg");
  const [successAddCart, setSuccessAddCart] = useState(false);
  const cartProductArray = useSelector((state) => state.add_cart);
  const dispatch = useDispatch();
  useEffect(() => {
    setSuccessAddCart(false);
  }, [size]);

  useEffect(() => {
    const id1 = setTimeout(() => {
      setLoadingBtn(false);
    }, 400);
    const id2 = setTimeout(() => {
      setSuccessAddCart(false);
    }, 3000);
    return () => {
      clearTimeout(id1);
      clearTimeout(id2);
    };
  }, [loadingBtn]);

  const handleAddToCart = () => {
    if (loadingBtn) return;
    const productInfo = {
      id: product.id,
      nameProduct: product.name_product,
      image: product.imageProduct[1],
      price_product: product.price_product,
      priceNumber: product.priceNumber,
      quantity,
      size,
    };
    setSuccessAddCart(false);
    setLoadingBtn(true);

    const action = addToCartSlice.actions.ADD_TO_CART(productInfo);
    dispatch(action);
    let newCartProduct;
    if (checkProductCart(cartProductArray, productInfo)) {
      newCartProduct = addQuantityProductCart(cartProductArray, productInfo);
    } else {
      newCartProduct = [...cartProductArray, productInfo];
    }

    localStorage.setItem("cart", JSON.stringify(newCartProduct));
    setSuccessAddCart(true);
  };
  return (
    <>
      <div className="detailProduct__info ">
        <div className="detailProduct__header">
          <h3 className="detailProduct__name">{product.name_product}</h3>
          <div className="detailProduct__price">
            {product.price_product}
            {product.initialPrice != "null" && (
              <span className="initialPrice">{product.initialPrice}</span>
            )}
          </div>
        </div>
    
        <div className="detailProduct__support">
            <div className="detailProduct__support-title">
          Thương hiệu: Đang cập nhật
          </div>
          <div className="detailProduct__support-title">
            100% BẠN SẼ HÀI LÒNG
          </div>
          <div className="detailProduct__support-content">
            <div className="row">
              {BoxSupportInFoArray.map((BoxSupport) => {
                return (
                  <div className="col-6 " key={BoxSupport.nameSupport}>
                    <BoxSupportItem BoxSupport={BoxSupport} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="detailProduct__user-buy">
          {product.typeProduct != "raucu" && (
            <ProductSize size={size} setSize={setSize} />
          )}
          <div className="detailProduct__quantity">
            <div className="detailProduct__quantity-title">Số lượng :</div>
            <ProductQuantityInput
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <div className="detailProduct__status">Còn hàng</div>
          </div>
          <div className="detailProduct__btn">
            <div className="btn btn__add-to-cart " onClick={handleAddToCart}>
              {loadingBtn && <LoadingBtn />}
              {!loadingBtn && (
                <>
                  <i className="fas fa-shopping-cart"></i>
                  <span>Thêm vào giỏ</span>
                </>
              )}
            </div>
            <Link
              className="btn btn__buyProduct"
              to="/checkout"
              onClick={handleAddToCart}
            >
              Mua ngay
            </Link>
          </div>
        </div>
      </div>

      <div className={successAddCart ? "alert active-alert" : "alert"}>
        <Success
          text={"Thêm sản phẩm vào giỏ hàng thành công !"}
          linkHref={"/cart"}
          linkText={"Đến Giỏ Hàng"}
        />
      </div>
    </>
  );
}

export default DetailProductInfo;
