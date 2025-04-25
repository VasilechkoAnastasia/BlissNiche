import React, { useEffect, useRef } from "react";
import './SliderMain.css';  // Если есть отдельный CSS для этого компонента

// Получаем изображения через props
const SliderMain = ({ images }) => {
  const sliderRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);
  const sliderBodyRef = useRef(null);

  useEffect(() => {
    const sliderBody = sliderBodyRef.current;
    const slides = sliderBody ? sliderBody.querySelectorAll(".js-slide") : [];
    const slideWidth = slides.length > 0 ? slides[0].offsetWidth : 0;
    const slideStep = 1;
    const slidesSetCount = 40;
    let canAnimate = true;
    let startX = null;

    if (sliderBody) {
      // Клонирование слайдов
      for (let i = 0; i < slidesSetCount; i++) {
        slides.forEach((slide) => {
          const cloned = slide.cloneNode(true);
          sliderBody.appendChild(cloned);
        });
      }

      // Центрируем прокрутку
      sliderBody.scrollLeft = slideWidth * slides.length * Math.ceil(slidesSetCount / 2);

      const changeSlide = (newPosition) => {
        sliderBody.scrollLeft = newPosition;
        canAnimate = true;
      };

      const goPreviousSlide = () => {
        if (canAnimate) {
          canAnimate = false;
          changeSlide(sliderBody.scrollLeft - slideWidth * slideStep);
        }
      };

      const goNextSlide = () => {
        if (canAnimate) {
          canAnimate = false;
          changeSlide(sliderBody.scrollLeft + slideWidth * slideStep);
        }
      };

      if (btnLeftRef.current) {
        btnLeftRef.current.addEventListener("click", goPreviousSlide);
      }
      if (btnRightRef.current) {
        btnRightRef.current.addEventListener("click", goNextSlide);
      }

      sliderBody.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
      });

      sliderBody.addEventListener("touchmove", (event) => {
        if (!startX) return;
        const xDelta = startX - event.touches[0].clientX;

        if (xDelta > 45) {
          goNextSlide();
          startX = null;
        } else if (xDelta < -45) {
          goPreviousSlide();
          startX = null;
        }
      });

      return () => {
        if (btnLeftRef.current) {
          btnLeftRef.current.removeEventListener("click", goPreviousSlide);
        }
        if (btnRightRef.current) {
          btnRightRef.current.removeEventListener("click", goNextSlide);
        }
      };
    }
  }, []);

  return (
    <div className="slider__container js-slider-element" ref={sliderRef}>
      <span className="slider__btn slider__btn--left js-btn-left" ref={btnLeftRef}>
        <img src="./button for slider.png" alt="Left Button" id="leftButton" />
      </span>

      <div className="slider__wrapper">
        <div className="slider js-slider-body" ref={sliderBodyRef}>
          {images.map((image, i) => (
            <div
              className="slider__item js-slide"
              key={i}
              style={{ backgroundImage: `url(${image})` }} // Динамическое задание фона
            >
              <button className="buttonInSlider">Назва набору</button>
            </div>
          ))}
        </div>
      </div>

      {/* <span className="slider__btn slider__btn--right js-btn-right" ref={btnRightRef} id="rightButton">
        <img src="./button for slider.png" alt="Right Button"/>
      </span> */}
      <span className="slider__btn slider__btn--right js-btn-right" ref={btnRightRef}>
        <img src="./button for slider.png" id="rightButton" />
      </span>
    </div>
  );
};

export default SliderMain;
