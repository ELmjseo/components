import React from "react";
import Loader from "../components/common/Loader";

const Home = () => {
  return (
    <main>
      <div className="bg" style={{ padding: "0 20px" }}>
        <p>1. 로딩</p>
        <Loader />
        <p style={{ marginTop: "30px" }}>2.커뮤니티 탭</p>
        <ul className="tab" style={{ marginTop: "30px" }}>
          <li className="tab__list active">공지사항</li>
          <li className="tab__list">FAQ</li>
          <li className="tab__list">1:1 문의</li>
          <li className="tab__list">이벤트</li>
        </ul>

        <p style={{ marginTop: "30px" }}>3. 상품 상세 탭</p>
        <ul className="detail_tab" style={{ marginTop: "30px" }}>
          <li className="detail_tab__list active">상품 설명</li>
          <li className="detail_tab__list">이용 후기 (1200)</li>
          <li className="detail_tab__list">이용 안내</li>
          <li className="detail_tab__list">취소 환불</li>
        </ul>

        <p style={{ marginTop: "30px" }}>4. tooltip</p>
        <span className="tooltip" style={{ marginTop: "30px" }}>
          이용후기 정책이 표시됩니다
        </span>
        <span className="tooltip bottom" style={{ marginTop: "30px" }}>
          잊기 전에 생생한 후기를 남겨주세요
        </span>

        <p style={{ marginTop: "30px" }}>5. Dropdown</p>
        <div className="dropdown show" style={{ marginTop: "30px" }}>
          <div className="dropdown__option">
            <p className="dropdown__option-title selected">선택해 주세요</p>
          </div>
          <ul className="dropdown__optionBox">
            <li className="dropdown__optionBox-list">
              <p className="dropdown__optionBox-text">선택 사항1</p>
            </li>
            <li className="dropdown__optionBox-list">
              <p className="dropdown__optionBox-text">선택 사항1</p>
            </li>
            <li className="dropdown__optionBox-list">
              <p className="dropdown__optionBox-text">선택 사항1</p>
            </li>
            <li className="dropdown__optionBox-list">
              <p className="dropdown__optionBox-text">선택 사항1</p>
            </li>
            <li className="dropdown__optionBox-list">
              <p className="dropdown__optionBox-text">선택 사항1</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Home;
