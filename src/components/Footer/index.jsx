import React, { memo } from "react";

import { useLocation } from "react-router-dom";
import "./styles.scss";
import facebook from "./btn/user-1.svg"
import google from "./btn/user-2.svg"
import twitter from "./btn/user-3.svg"
function Footer() {
  const params = useLocation();
  if (params.pathname === "/admin") return <></>;
  return (
    <footer className="footer">
  
      <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="/" className="logo">
                Orga<span className="span">nic</span>
              </a>
              <p className="footer-text">
                Organic chuyên cung cấp những sản phẩm được kiểm soát chặt chẽ
                từ khâu con giống, chế biến thức ăn, chăm sóc sức khỏe vật nuôi
                đến giết mổ, bao gói, bảo quản và vận chuyển một cách tốt nhất,
                sạch nhất cho thị trường.
              </p>
              <ul className="social-list">
                <li>
                  <a href="/" className="social-a">
                    <img
                      src={facebook}
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-a">
                    <img
                      src={google}
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="/" className="social-a">
                    <img
                      src={twitter}
                      width="30px"
                      height="30px"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Liên kết</p>
              </li>
              <li>
                <a href="/about" className="footer-a">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="/category-product" className="footer-a">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="/news" className="footer-a">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="/map" className="footer-a">
                  Cửa hàng
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Liên hệ</p>
              </li>
              <li className="footer-item">
                <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
                </div>
                <address className="contact-a">
                  Thụy Phương, Bắc Từ Liêm, HN.
                </address>
              </li>
              <li className="footer-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                </div>
                <address  className="contact-a">
                  034 444 9999
                </address>
              </li>
              <li className="footer-item">
                <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
                </div>
                <address className="contact-a">
                  organic.com
                </address>
              </li>
            </ul>
            <div className="footer-list">
              <p className="footer-list-title">Bản tin</p>
              <p className="newsletter-text">
                Bạn sẽ nhận được thông báo khi có tin mới.
              </p>
              <form action="" className="footer-formm">
                <input
                  type="email"
                  name="email"
                  placeholder="Địa chỉ Email *"
                  required=""
                  className="footer-input"
                />
                <button
                  type="submit"
                  className="footer-form-btnn"
                  aria-label="Submit"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              © 2023{" "}
              <a href="/" className="copyright-link">
                organic
              </a>
            </p>
            <ul className="footer-bottom-list">
              <li>
                <a href="/" className="footer-bottom-link">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
}

export default memo(Footer);
