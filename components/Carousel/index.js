import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { SliderStyle } from "./style";

function SampleNextArrow({ currentSlide, slideCount, ...props }) {
  const { className, style, onClick } = props;
  return (
    <button
        {...props}
        className={
          "slick-next slick-arrow" +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
      <MdKeyboardArrowRight />
    </button>
  );
}

function SamplePrevArrow({ currentSlide, slideCount, ...props }) {
  const { className, style, onClick } = props;
  return (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <MdKeyboardArrowLeft />
    </button>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const Carousel = (props) => {
  const { data, className } = props;
  return (
    <SliderStyle {...settings}>
      {data.map(({ fields }, k) => (
        <figure className={`h-400 ${className}`} key={k.toString()}>
          <img
            src={fields.heroImage.fields.file.url}
            className="card-img-top" alt={fields.title}
          />
          <figcaption>
            <Link
              href={{
                pathname: `/blog/[slug]`,
              }}
              as={`/blog/${fields.slug}`}
            >
              {fields.title}
            </Link>
          </figcaption>
        </figure>
      ))}
    </SliderStyle>
  )
}
Carousel.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
};
Carousel.defaultProps = {
  className: ''
};

export default Carousel;
