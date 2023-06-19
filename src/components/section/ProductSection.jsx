import React from 'react'

const ProductSection = () => {
  return (
    <section id="product__section" class="container">
    <h2 class="blind">상품 섹션</h2>
    <div class="product__main">
        <div class="product__text">
            <strong>Product</strong>
            <h3>OLGODA Object</h3>
            <p>
                <b>165mm의 광폭 사이즈와 컬러 베리에이션</b><br />
                공간에 예술 감각을 더해 줄 올고다 오브제
            </p>
            <a href="/">MORE</a>
        </div>
        <div class="product__slide__main">
            <div class="slide__main__wrapper">
                <div class="slide">
                    <img src="assets/images/product_slider01.jpg" alt="상품이미지" />
                </div>
            </div>
        </div>
    </div>
    <div class="product__slide__sub">
        <div class="slide__sub__wrapper">
            <div class="slide">
                <img src="assets/images/product_slider02.jpg" alt="product_slider01" />
                <span>OLGODA Object</span>
            </div>
            <div class="slide">
                <img src="assets/images/product_slider03.jpg" alt="product_slider01" />
                <span>OLGODA Roca</span>
            </div>
            <div class="slide">
                <img src="assets/images/product_slider04.jpg" alt="product_slider01" />
                <span>OLGODA Solid</span>
            </div>
            <div class="slide">
                <img src="assets/images/product_slider05.jpg" alt="product_slider01" />
                <span>OLGODA Balance</span>
            </div>
            <div class="slide">
                <img src="assets/images/product_slider06.jpg" alt="product_slider01" />
                <span>OLGODA Groove</span>
            </div>
        </div>
    </div>
</section>
  )
}

export default ProductSection