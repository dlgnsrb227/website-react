import React from 'react'

const SliderSection = () => {
  return (
    <section id="slider__section">
    <h1 class="blind">슬라이드 섹션</h1>
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide banner__slider s1">
                <div class="slider__text container">
                    <span>옳고, 곧고, 다른</span>
                    <img src="assets/images/olgoda_logo01.svg" alt="OLGODA LOGO" />
                    <a href="/">MORE</a>
                </div>
            </div>
            <div class="swiper-slide banner__slider s2">
                <div class="slider__text container">
                    <span>찍힘에 5배 강한 마루</span>
                    <img src="assets/images/olgoda_logo01.svg" alt="OLGODA LOGO" />
                    <a href="/">MORE</a>
                </div>
            </div>
            <div class="swiper-slide banner__slider s3">
                <div class="slider__text container">
                    <span>마루는 올고다</span>
                    <img src="assets/images/olgoda_logo01.svg" alt="OLGODA LOGO" />
                    <a href="/">MORE</a>
                </div>
            </div>
            <div class="swiper-slide banner__slider s4">
                <div class="slider__text container">
                    <span>옳고, 곧고, 다른</span>
                    <img src="assets/images/olgoda_logo01.svg" alt="OLGODA LOGO" />
                    <a href="/">MORE</a>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-scrollbar"></div>
    </div>
</section>
  )
}

export default SliderSection