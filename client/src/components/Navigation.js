import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import styles from "../css/Navigation.module.css";
import THREEIDIOTS_LOGO from "../img/세얼간이_logo.jpg";

const Navigation = () => {
  let navigate = useNavigate();
  const onClick = (event) => {
    const changePage = event.target.id;
    navigate("/" + changePage);
  };
  const [keyword, setKeyWord] = useState("");
  const onChange = (event) => {
    setKeyWord(event.target.value);
    console.log(keyword);
  };

  return (
    <div>
      <div className={styles.topBar}>
        <div className={styles.topUserBar}>
          <a
            className={styles.topUserOption}
            onClick={onClick}
            id="member/signup"
          >
            회원가입
          </a>
          <div className={styles.topBarLine}></div>
          <a
            className={styles.topUserOption}
            onClick={onClick}
            id="member/login"
          >
            로그인
          </a>
          <div className={styles.topBarLine}></div>

          <div className={styles.clientcenter}>
            <a
              className={styles.topUserOption}
              onClick={onClick}
              id="member/signup"
            >
              고객센터
              <span className={styles.downArrow}></span>
            </a>
            <div className={styles.clientcenterBox}>
              <div className={styles.clientcenterFont}>공지사항</div>
              <div className={styles.clientcenterFont}>자주하는 질문</div>
              <div className={styles.clientcenterFont}>1:1 문의</div>
              <div className={styles.clientcenterFont}>대량주문 문의</div>
            </div>
          </div>
        </div>
        <div className={styles.midBar}>
          <div className={styles.midChoiceBar}>
            <img
              id="market"
              src={THREEIDIOTS_LOGO}
              alt="세얼간이_로고"
              style={{ height: "42px", width: "82px" }}
              onClick={onClick}
            />
            <button
              onClick={onClick}
              id="market"
              className={styles.midBarButton}
            >
              마켓컬리
            </button>
            <button
              onClick={onClick}
              id="beauty"
              className={styles.midBarButton}
            >
              뷰티컬리
            </button>
          </div>
          <div className={styles.searchDiv}>
            <div className={styles.searchBar}>
              <input
                className={styles.searchInput}
                type="text"
                id="keyword"
                value={keyword}
                placeholder="검색을 입력해주세요"
                onChange={onChange}
              ></input>
            </div>
          </div>
          <div>
            <div className={styles.tmpDiv}></div>
          </div>
        </div>
      </div>
      <div className={styles.lowDiv}>
        <div className={styles.lowBar}>
          <div>
            <div className={styles.lowCategoryDiv}>
              <span className={styles.CategoryBar}></span>
              <span>카테고리</span>
            </div>
          </div>
          <ul className={styles.lowUl}>
            <li className={styles.lowLi}>
              <span className={styles.lowSpan}>신상품</span>
            </li>
            <li className={styles.lowLi}>
              <span className={styles.lowSpan}>베스트</span>
            </li>
            <li className={styles.lowLi}>
              <span className={styles.lowSpan}>알뜰쇼핑</span>
            </li>
            <li className={styles.lowLi}>
              <span className={styles.lowSpan}>특가/혜택</span>
            </li>
          </ul>
          <div>
            <a>
              <div className={styles.tmpDiv2}></div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.tmpDiv3} hidden></div>
    </div>
  );
};

export default Navigation;
