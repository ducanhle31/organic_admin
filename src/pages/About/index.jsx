import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import gallery1 from "./slide/gallery-img-1.jpg";
import gallery2 from "./slide/gallery-img-2.jpg";
import gallery3 from "./slide/gallery-img-3.jpg";
import gallery4 from "./slide/gallery-img-4.jpg";
import gallery5 from "./slide/gallery-img-5.jpg";
import gallery6 from "./slide/gallery-img-6.jpg";
import "./styles.scss";
 
import about from "./about-img.jpg"
function About() {
  return (
    <>
      <Breadcrumbs title={"GIỚI THIỆU"} />
      <div className="container">
        <section className="container">
          <div className="about">
            <div className="content">
              <h3>Thực phẩm hữu cơ giàu dinh dưỡng.</h3>
              <p>
                Organic chuyên cung cấp những sản phẩm được kiểm soát chặt chẽ
                từ khâu con giống, chế biến thức ăn, chăm sóc sức khỏe vật nuôi
                đến giết mổ, bao gói, bảo quản và vận chuyển một cách tốt nhất,
                sạch nhất cho thị trường.
              </p>
              <p>
                Các sản phẩm rau hữu cơ của Michimart cung cấp đều nằm trong dự
                án ADDA được tổ chức Hệ thống bảo đảm cùng tham gia– PGS
                (Participatory Guarantee System) chứng nhận, đảm bảo tính hữu
                cơ.
              </p>
              <p>
                Thực phẩm sạch, trái cây an toàn đều có giấy chứng nhận an toàn
                VIETGAP, GLOBAL GAP, HACCP, có xuất xứ rõ ràng, không những sạch
                – mà còn ngon.
              </p>
            </div>
            <div className="image">
              <img src={about} alt="" />
            </div>
          </div>
        </section>
        {/*  */}
        <section className="container">
          <div className="gallery">
            <div className="box-container">
              <div className="box">
                <img src={gallery1} alt="" />
              </div>
              <div className="box">
                <img src={gallery2} alt="" />
              </div>
              <div className="box">
                <img src={gallery3} alt="" />
              </div>
              <div className="box">
                <img src={gallery4} alt="" />
              </div>
              <div className="box">
                <img src={gallery5} alt="" />
              </div>
              <div className="box">
                <img src={gallery6} alt="" />
              </div>
            </div>
          </div>
        </section>

      {/*   <div className="row">
          <div className="col-12 col-lg-6">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=12hwJDNvLEDIGGwvYVM3jHMqJkDGDmnNH&ehbc=2E312F"
                width="100%"
                height="380px"
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="shop-address">
              <h1 className="shop-address">HỆ THỐNG CỬA HÀNG</h1>
              <ul className="shop-address__list">
                <li>1, Vluxury Chùa Bộc: Số 19, Chùa Bộc, Đống Đa, Hà Nội</li>
                <li>2, Vluxury Cầu Giấy: Số 330 Cầu Giấy, Cầu Giấy, Hà Nội</li>
                <li>
                  3, Vluxury Cầu Giấy 2: 213 Cầu Giấy, Dịch Vọng, Cầu giấy, Hà
                  Nội
                </li>
                <li>4, Vluxury Phố Huế: 351 Phố Huế, Hai Bà Trưng, Hà Nội</li>
                <li>
                  5, Vluxury Trần Phú: Số 53 Trần Phú, P.Văn Quán, Q.Hà Đông,
                  TP.Hà Nội
                </li>
                <li>
                  6, Vluxury Nguyễn Văn Cừ: Số 211 Nguyễn Văn Cừ, Long Biên, Hà
                  Nội
                </li>
                <li>
                  7, Vluxury Quang Trung - Hà Đông: Số 405 Quang Trung, Hà Đông,
                  Hà Nội
                </li>
                <li>
                  8, Vluxury Chúc Sơn: Số 7 Bắc Sơn, TT Chúc Sơn, Chương Mỹ, Hà
                  Nội
                </li>
                <li>9, Vluxury Đông Anh: Số 244 Cao Lỗ, Đông Anh, Hà Nội</li>
                <li>
                  10, Vluxury Sơn Tây: 263 Quang Trung - tx Sơn Tây (Gần ngã ba
                  Quang Trung sang Cầu Trì)
                </li>
                <li>
                  11,Vluxury Lê Văn SỸ: 370 Lê Văn Sỹ, Phường 14, Quận 3,Thành
                  phố Hồ Chí Minh
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default About;
