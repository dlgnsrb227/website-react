import React from 'react'

const Header = () => {
  return (
    <header id="header">
    <nav id="nav">
        <div class="logo">
            <img src="assets/images/header_logo01.svg" alt="로고이미지" />
        </div>
        <div class="nav__menu">
            <ul class="main__menu">
                <li>
                    <a href="/">OLGODA 소개</a>
                    <ul class="sub__menu">
                        <li><a href="/">옳고, 곧고, 다른</a></li>
                        <li><a href="/">브랜드 스토리</a></li>
                        <li><a href="/">올고다 BI</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/">제품 소개</a>
                    <ul class="sub__menu">
                        <li><a href="/">올고다 마루</a></li>
                        <li><a href="/">오브제</a></li>
                        <li><a href="/">로카&로카 프리미엄</a></li>
                        <li><a href="/">밸런스</a></li>
                        <li><a href="/">시그니처</a></li>
                        <li><a href="/">그루브</a></li>
                        <li><a href="/">솔리드</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/">VR 인테리어</a>
                    <ul class="sub__menu">
                        <li><a href="/">24평형</a></li>
                        <li><a href="/">32평형</a></li>
                        <li><a href="/">40평형</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/">OL-care 서비스</a>
                    <ul class="sub__menu">
                        <li><a href="/">올케어 소개</a></li>
                        <li><a href="/">서비스 신청</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/">올고다 컨텐츠</a>
                    <ul class="sub__menu">
                        <li><a href="/">시공사례</a></li>
                        <li><a href="/">Moment</a></li>
                        <li><a href="/">Catalog</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/">고객 지원</a>
                    <ul class="sub__menu">
                        <li><a href="/">Contact us</a></li>
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Q&A</a></li>
                        <li><a href="/">전시장/대리점</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="nav__cont">
            <div class="login__box">
                <a href="/">로그인</a> | 
                <a href="/">회원가입</a>
            </div>
            <div class="button__box">
                <a href="/">전시장/대리점</a>
                <a href="/">시공사례</a>
            </div>
            <div class="sns">
                <a href="/"><img src="assets/images/blog_icon01.svg" alt="blog" /></a>
                <a href="/"><img src="assets/images/insta_icon01.svg" alt="insta" /></a>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header