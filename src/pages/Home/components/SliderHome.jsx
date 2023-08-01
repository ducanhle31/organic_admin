import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../../../components/Image";
import product_31_image_03 from "./—Pngtree—healthy eating fruit and vegetable_6783161.png";
function SliderItem({ sliderData }) {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p
              className="hero-subtitle"
              style={{ fontFamily: '"Rubik", sans-serif' }}
            >
              Sale 25% tất cả sản phẩm.
            </p>
            <h2 className=" hero-titlee ">
              Thực phẩm sạch
              <span className="span">nhập khẩu 100%</span>
            </h2>
            <p className="hero-text">Chúng tôi cam kết chất lượng sản phẩm giàu dinh dưỡng.</p>
            <Link to="/category-product?typeProduct=hoaqua&isSale=false" className="btn btn-primary">
              <span className="span">Mua ngay</span>
            </Link>
          </div>
          <figure className="hero-banner">
          {/*   <img src={product_31_image_03}     className="w-100"   alt="Vegetables"
            /> */}
                <Image
        className={`w-100`}
        srcImage={sliderData.image_slider_desktop}
      />

      <Image
        className={`slider_mobile w-100`}
        srcImage={sliderData.image_slider_mobile}
      />
          </figure>
        </div>
      </section>
      {sliderData.image_slider_text && (
      
  <Image
          className="textslider slider_desktop wow animate__animated animate__backInRight"
          srcImage={sliderData.image_slider_text}
        />

      )} 
    </div>
  );
}
function SliderHome({ slider }) {
  if (!slider) return <></>;
  const sliderReverse = [...slider].reverse();
  const settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <div className="slider-home">
  
      <div
      
        className="slider-header__item"
      >
        <Slider {...settings}>
            <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p
              className="hero-subtitle"
              style={{ fontFamily: '"Rubik", sans-serif' }}
            >
              Sale 25% tất cả sản phẩm.
            </p>
            <h2 className=" hero-titlee ">
              Thực phẩm hữu cơ
              <span className="span">giàu dinh dưỡng.</span>
            </h2>
            <p className="hero-text">Tốt cho sức khỏe, tốt cho cuộc sống.</p>
            <Link to="/category-product?typeProduct=raucu&isSale=false" className="btn btn-primary">
              <span className="span">Mua ngay</span>
            </Link>
          </div>
          <figure className="hero-banner">
          <img src={product_31_image_03}     className="w-100"   alt="Vegetables"
            /> 
              
          </figure>
        </div>
      </section>
          {sliderReverse.map((sliderData, i) => {
            return <SliderItem sliderData={sliderData} index={i + 1} key={i} />;
          })}
          
        </Slider>
      </div>
      
    </div>
  );
}

export default SliderHome;
