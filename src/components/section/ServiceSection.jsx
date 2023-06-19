import React from 'react'

const ServiceSection = () => {
  return (
    <section id="service__section" class="container">
    <h2 class="blind">서비스 안내</h2>
    <div class="service__text">
        <h2>올고다 OL-care 서비스</h2>
        <p>
            마루 시공 후 1년 이내라면, <br />
            찍힘 보수까지 가능한 마루 관리 서비스<br /><br />
        </p>
        <p>마루 전문가 올마스터(OL-master)가 당신을 찾아갑니다. <br />
            마루와 관련된 모든 궁금증을 풀어드리고, 마루 관리 꿀팁도 알려드릴게요.
        </p>
        <p>
            무엇보다 찍힘에 강한 올고다 마루이기에<br />
            작은 찍힘은 그 자리에서 바로 복원시켜 드리겠습니다.
        </p>
        <div class="service__btn">
            <a href="/">OL-care Service</a>
            <a href="/">Service Apply</a>
        </div>
    </div>
    <div class="service__img"></div>
</section>
  )
}

export default ServiceSection