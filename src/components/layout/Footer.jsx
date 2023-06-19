import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
    <div class="foot__cont1">
        <strong>고객센터</strong>
        <div class="tel">
            <span>1661-0999</span>
            <a href="/">Q&A 바로가기</a>
        </div>
        <div class="consultant">
            <span>상담가능시간</span>
            <p>
                월-금 : 10:00 ~ 18:00<br />
                (주말 및 공휴일 휴무)
            </p>
        </div>
    </div>
    <div class="foot__cont2">
        <img src="assets/images/foot_logo01.svg" alt="푸터영역 로고이미지" />
        <strong>개인정보처리방침</strong>
        <address>서울특별시 중구 을지로5길 19(수하동) 페럼타워 15층 │ 경기도 성남시 중원구 사기막골로9번길 40</address>
        <span>
            대표이사 한상준 │ 사업자등록번호 722-85-02459<br />
            COPYRIGHT 2021 UNID ALL RIGHTS RESERVED
        </span>
        <select name="FAMILY SITE" id="FAMILY SITE">
            <option value="0">FAMILY SITE</option>
            <option value="1">(주)유니드</option>
            <option value="2">유니드비티플러스</option>
        </select>
    </div>
</footer>
  )
}

export default Footer