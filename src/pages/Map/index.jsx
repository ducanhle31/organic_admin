import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./styles.scss";

function Map() {
  return (
    <>
      <Breadcrumbs title={"HỆ THỐNG CỬA HÀNG"} />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="google-map">
                <iframe
                  width="100%"
                height="380px"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.6489708125914!2d105.77425111053716!3d21.08667788049617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134554a2d998dd5%3A0x2ee9ee775277367f!2zNDUgxJAuVGjhu6V5IFBoxrDGoW5nLCDEkMO0bmcgTmfhuqFjLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1678900914283!5m2!1svi!2s"
                  allowFullScreen=""
                  loading="lazy"
                />
            {/*   <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=12hwJDNvLEDIGGwvYVM3jHMqJkDGDmnNH&ehbc=2E312F"
                width="100%"
                height="380px"
              ></iframe> */}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="shop-address">
              <h1 className="shop-address">CỬA HÀNG</h1>
              <ul className="shop-address__list">
                <li>Thụy Phương, Bắc Từ Liêm, HN</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
