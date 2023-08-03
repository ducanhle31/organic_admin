import React, { useRef } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Success } from "../../components/Alert";
import "./styles.scss";

function Map() {
  
  
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  
    
  

  const submitHandler = (e) => {
    e.preventDefault();
  

/*   toast.success("Gửi tin thành công", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  }); */
  
  };

  return (
    <>
      <Breadcrumbs title={"CỬA HÀNG"} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">  <div className="icons">
                  <div className="iconss">
                    <i className="bi bi-telephone"></i>
                  </div>

                  <h3>Điện thoại</h3>
                  <p>034.444.9999</p>
                </div></div>
          <div className="col-12 col-lg-4">  <div className="icons">
                  <div className="iconss"> 
                  <i className="bi bi-envelope"></i>
                  </div>

                  <h3>Email</h3>
                  <p>organic.com</p>
                </div></div>
          <div className="col-12 col-lg-4">  <div className="icons">
                  <div className="iconss">
                  <i className="bi bi-geo-alt"></i>
                  </div>

                  <h3>Địa chỉ</h3>
                  <p>Thụy Phương, Bắc Từ Liêm, Hà Nội</p>
                </div></div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="google-map">
            
                <iframe
                  className="map"   width="100%"
                height="416px"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.6489708125914!2d105.77425111053716!3d21.08667788049617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134554a2d998dd5%3A0x2ee9ee775277367f!2zNDUgxJAuVGjhu6V5IFBoxrDGoW5nLCDEkMO0bmcgTmfhuqFjLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1678900914283!5m2!1svi!2s"
                  allowFullScreen=""
                  loading="lazy"
                />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="shop-address">
            
                <form className="formm" action="" onSubmit={submitHandler}>
                  <h3>Liên hệ với chúng tôi</h3>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="box"
                      required
                      ref={signupNameRef}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="box"
                      required
                      ref={signupEmailRef}
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="number"
                      required
                      placeholder="Số điện thoại "
                      ref={signupPasswordRef}
                      className="box"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Chủ đề "
                      className="box"
                    />
                  </div>
                  <textarea
                    placeholder="Lời nhắn"
                    cols={30}
                    rows={10}
                    required
                    defaultValue={""}
                  />

                  <button
                  
                    type="submit"
                    className="addTOCart__btn"
                  >
                    Gửi tin
                </button>
                <div>
                  
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
