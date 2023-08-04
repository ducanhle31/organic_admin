import React, { useState } from "react";
function ImageSize({ product }) {
  return (
    <div className="tab-describe row" id="tab1-content">
      <div className="col-12">
        <div className="image">
          {product.vender_value_image != "null" ? (
            <img
              src={`../${product.vender_value_image}`}
              alt="Chi tiết"
            />
          ) : (
            <p>Thông số sản phẩm đang được cập nhật !</p>
          )}
        </div>
      </div>
    </div>
  );
}
function WarrantyPolicy() {
  return (
    <div className="tab-describe">
    
      <ul className="policy-1">
        <li>
          <span className="margin-top-bottom-7 fontWeight-600">
          Bước 1: Truy cập website và lựa chọn sản phẩm cần mua
          </span>
      
        </li>
        <li>
          <span className="margin-top-bottom-7 fontWeight-600">
          Bước 2: Click và sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau
          </span>
          <ul className="padding-left-40">
            <li>Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng</li>
            <li>
              Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng
            </li>
            <li>
            Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán
            </li>
        
          </ul>
        </li>
        <li>
          <span className="margin-top-bottom-7 fontWeight-600">
          Bước 3: Lựa chọn thông tin tài khoản thanh toán
          </span>
          <ul>
            <li>
        
              <ul className="padding-left-40">
                <li>
                Nếu bạn đã có tài khoản vui lòng nhập thông tin tên đăng nhập là email và mật khẩu vào mục đã có tài khoản trên hệ thống
                </li>
                <li>Nếu bạn chưa có tài khoản và muốn đăng ký tài khoản vui lòng điền các thông tin cá nhân để tiếp tục đăng ký tài khoản. Khi có tài khoản bạn sẽ dễ dàng theo dõi được đơn hàng của mình</li>
                <li>
                Nếu bạn muốn mua hàng mà không cần tài khoản vui lòng nhấp chuột vào mục đặt hàng không cần tài khoản
                </li>
              
              </ul>
            </li>
        
            
            
          
          
          </ul>
        </li>
          <li>
          <span className="margin-top-bottom-7 fontWeight-600">
        Bước 4: Điền các thông tin của bạn để nhận đơn hàng, lựa chọn hình thức thanh toán và vận chuyển cho đơn hàng của mình
          </span>
        
        </li>
        <li>
          <span className="margin-top-bottom-7 fontWeight-600">
          Bước 5: Xem lại thông tin đặt hàng, điền chú thích và gửi đơn hàng
          </span>
        
        </li>
      </ul>
    </div>
  );
}
function SizeSpecification({ product }) {
  const tabs = ["Mô tả sản phẩm", "Hướng dẫn mua hàng"];
  const [tab, setTab] = useState(tabs[0]);
  return (
    <section id="sizeSpecification">
      <div className="container">
        <div className="tab_list d-flex">
          <div
            className={
              tab == tabs[0]
                ? "tab tab__btn-header tab-activity"
                : "tab tab__btn-header"
            }
            id="tab1"
            onClick={() => setTab(tabs[0])}
          >
            {tabs[0]}
          </div>
          <div
            className={
              tab == tabs[1]
                ? "tab tab__btn-header tab-activity"
                : "tab tab__btn-header"
            }
            id="tab2"
            onClick={() => setTab(tabs[1])}
          >
            {tabs[1]}
          </div>
        </div>
        <div className="tab-content">
          {tab == tabs[0] ? (
            <div className="detailProduct__describer">
          {/*   <div className="detailProduct__describer-title">
              Mô tả sản phẩm :
            </div> */}
            <div className="detailProduct__describer-content">
              {product.describe?.replaceAll("<p>", "")?.replaceAll("</p>", "")}
            </div>
          </div>
      
          ) : (
            <WarrantyPolicy />
          )}
            
        </div>
      </div>
    </section>
  );
}

export default SizeSpecification;
