import { useEffect, useState } from 'react';
import "./category.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { Link } from "react-router-dom";

function Category(props) {
	let [category, setCategory] = useState([]);
	let category1 = category[0]
	let category2 = category[1]
	let category3 = category[2]

	console.log("asdfsdafsdafasdf", props.info.category);
	console.log("category", category);

	useEffect(() => {
		if (props.info.category) {
			setCategory(props.info.category);
		}
	}, [props.info.category]);

	

  return (
    <>
      <div className="KJH_cg_container">
        <div className="KJH_cg_home_section">
          <div className="KJH_cg_home">
            <Link to="/" className="KJH_cg_home_section">
              <AiOutlineHome />
              <div>홈</div>
            </Link>
          </div>
        </div>
        <div className="KJH_cg_filter_section">
          <IoIosArrowForward />
          <div className="KJH_cg_filter_menu">
            <div className="KJH_cg_filter">
              <div className="KJH_cg_dropdown_section">{category1}</div>
              <div className="KJH_cg_dropdown">
                <Link to="/detailsearch/패션의류">여성의류</Link>
                <Link to="/">남성의류</Link>
                <Link to="/">신발</Link>
                <Link to="/">가방/지갑</Link>
                <Link to="/">시계</Link>
                <Link to="/">쥬얼리</Link>
                <Link to="/">패션 액세서리</Link>
                <Link to="/">디지털</Link>
                <Link to="/">가전제품</Link>
                <Link to="/">스포츠/레저</Link>
                <Link to="/">차량/오토바이</Link>
                <Link to="/">스타굿즈</Link>
                <Link to="/">키덜트</Link>
                <Link to="/">예술/희귀/수집품</Link>
                <Link to="/">음반/악기</Link>
                <Link to="/">도서/티켓/문구</Link>
                <Link to="/">뷰티/미용</Link>
                <Link to="/">가구/인테리어</Link>
                <Link to="/">생활/주방용품</Link>
                <Link to="/">공구/산업용품</Link>
                <Link to="/">식품</Link>
                <Link to="/">유아동/출산</Link>
                <Link to="/">반려동물용품</Link>
                <Link to="/">기타</Link>
                <Link to="/">지역 서비스</Link>
                <Link to="/">원룸/함께살아요</Link>
                <Link to="/">번개나눔</Link>
                <Link to="/">구인구직</Link>
                <Link to="/">재능</Link>
                <Link to="/">커뮤니티</Link>
              </div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className="KJH_cg_filter_section">
          <div className="KJH_cg_r-arrow">
            <IoIosArrowForward />
          </div>
          <div className="KJH_cg_filter_menu">
            <div className="KJH_cg_filter">
              <div className="KJH_cg_dropdown_section">{category[1]}</div>
              <div className="KJH_cg_dropdown">
                <Link to="/">아우터</Link>
                <Link to="/">상의</Link>
                <Link to="/">바지</Link>
                <Link to="/">점프수트</Link>
                <Link to="/">셋업/세트</Link>
                <Link to="/">언더웨어/홈웨어</Link>
                <Link to="/">테마/이벤트</Link>
              </div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className="KJH_cg_filter_section">
          <div className="KJH_cg_r-arrow">
            <IoIosArrowForward />
          </div>
          <div className="KJH_cg_filter_menu">
            <div className="KJH_cg_filter">
              <div className="KJH_cg_dropdown_section">{category[2]}</div>
              <div className="KJH_cg_dropdown">
                <Link to="/">후드티/후드집업</Link>
                <Link to="/">맨투맨</Link>
                <Link to="/">니트/스웨터</Link>
                <Link to="/">셔츠</Link>
                <Link to="/">반팔 티셔츠</Link>
                <Link to="/">긴팔 티셔츠</Link>
                <Link to="/">민소매 티셔츠</Link>
              </div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
