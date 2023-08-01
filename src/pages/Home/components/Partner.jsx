import React from "react";
import { Link } from "react-router-dom";
import partner1 from "./img/partner-1.png"
import partner2 from "./img/partner-2.png"
import partner3 from "./img/partner-3.png"
import partner4 from "./img/partner-4.png"
import partner5 from "./img/partner-5.png"
import partner6 from "./img/partner-6.png"
import quoteleft from "./img/quote-left.png";
import quoteright from "./img/quote-right.png";
import profile1 from "./brand/profile1.jpg";
import profile2 from "./brand/profile2.jpg";
import profile3 from "./brand/profile3.jpg";
import profile4 from "./brand/profile4.jpg";
import profile5 from "./brand/profile5.jpg";
import profile6 from "./brand/profile6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination } from 'swiper/modules';

function Partner() {
          return (
            <div>
                     <section className="section partner">
        <div className="container">
          <h2 className="h2 section-title">Đối tác của chúng tôi</h2>

          <>
            <Swiper
              loop={true}
              spaceBetween={30}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                520: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                950: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src={partner1}
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src={partner2}
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src={partner3}
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src={partner4}
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src={partner5}
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="partner-item">
                  <figure className="partner-logo">
                    <img
                      src={partner6}
                      width={132}
                      height={134}
                      loading="lazy"
                      alt="Partner logo"
                    />
                  </figure>
                </li>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
                              </section>
                                  <section className="section testimonials">
        <div className="container">
          <h2 className="h2 section-title">NHẬN XÉT CỦA KHÁCH HÀNG</h2>
          <center style={{ marginBottom: 25, marginTop: "-25px" }}>
            <img src="/images/back-ground/bg_title.png" alt="" />
          </center>
          {/* Swiper */}
          <>
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 2,
                },
                950: {
                  slidesPerView: 3,
                },
              }}
              navigation={true}
            /*   modules={[Autoplay, Pagination, Navigation]} */
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testi-card">
                  <div className="card-headerr">
                    <img
                      src={quoteleft}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                      src={profile1}
                      width={90}
                      height={90}
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src={quoteright}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Minh Tâm</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testi-card">
                  <div className="card-headerr">
                    <img
                      src={quoteleft}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                       src={profile2}
                      width={90}
                      height={90}
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src={quoteright}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Minh Thúy</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testi-card">
                  <div className="card-headerr">
                    <img
                      src={quoteleft}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                        src={profile3}
                      width={90}
                      height={90}
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src={quoteright}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Tâm</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <li className="testi-item">
                  <div className="testi-card">
                    <div className="card-headerr">
                      <img
                        src={quoteleft}
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                      <img
                          src={profile4}
                        width={90}
                        height={90}
                        alt="Pamelia Hamrick"
                        className="card-avatar"
                      />
                      <img
                        src={quoteright}
                        width={25}
                        height={25}
                        aria-hidden="true"
                        alt=""
                      />
                    </div>
                    <div className="rating-wrapper">
                     
                    </div>
                    <blockquote className="card-text">
                      Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                      đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                      thân yêu.
                    </blockquote>
                    <h3 className="card-title">Minh Tú</h3>
                    <p className="card-subtitle">Designer</p>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testi-card">
                  <div className="card-headerr">
                    <img
                      src={quoteleft}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                       src={profile5}
                      width={90}
                      height={90}
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src={quoteright}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    {" "}
                    
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Hà Duy</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="testi-card">
                  <div className="card-headerr">
                    <img
                      src={quoteleft}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                    <img
                        src={profile6}
                      width={90}
                      height={90}
                      alt="Pamelia Hamrick"
                      className="card-avatar"
                    />
                    <img
                      src={quoteright}
                      width={25}
                      height={25}
                      aria-hidden="true"
                      alt=""
                    />
                  </div>
                  <div className="rating-wrapper">
                    
                  </div>
                  <blockquote className="card-text">
                    Nhờ có Organic tôi đã yên tâm chọn lựa những món thực phẩm
                    đầy dinh dưỡng và đảm bảo sức khỏe dành đến cho gia đình
                    thân yêu.
                  </blockquote>
                  <h3 className="card-title">Tâm</h3>
                  <p className="card-subtitle">Designer</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
                              </section>
                                <section className="cta">
        <div className="container">
          <p className="section-subtitle">Ưu đãi mùa hè</p>
          <h2 className="h2 section-title">Giảm đến 50% tất cả sản phẩm.</h2>
          <p className="cta-text">
            THỰC PHẨM LUÔN TƯƠI MỚI, KHÔNG CHẤT ĐỘC HẠI.
          </p>
          <Link to="/pizzas" className="btn btn-primary">
            <span>Mua ngay</span>
          </Link>
        </div>
      </section>
            </div>
   
  );
}

export default Partner;
