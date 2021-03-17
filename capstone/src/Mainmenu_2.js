import React from 'react';
import './css/Mainmenu_2.css';

function Mainmenu_2() {
    return (
        <div className="dHead">
            <div className="header-wrap">
                <div className="inner">
                    <h1>
                        <a href="#">
                            "EV WMap"
                            </a>
                    </h1>

                    <nav className="gub-wrap">
                        <ul>
                            <li className="gub-01">
                                <a href="">소개</a>
                                <div className="sub">
                                    <div className="sub-list">
                                        <ul>
                                            <li>
                                                <a href="#">서비스소개</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="gub-02">
                                <a href="">지도</a>
                                <div className="sub">
                                    <div className="sub-list">
                                        <ul>
                                            <li>
                                                <a href="">주변시설 추천</a>
                                            </li>
                                            <li>
                                                <a href="">예약</a>
                                            </li>
                                            <li>
                                                <a href="">조회</a>
                                            </li>
                                            <li>
                                                <a href="">신고</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="gub-03">
                                <a href="">커뮤니티</a>
                                <div className="sub">
                                    <div className="sub-list">
                                        <ul>
                                            <li>
                                                <a href="">공지사항</a>
                                            </li>
                                            <li>
                                                <a href="">게시판</a>
                                            </li>
                                            <li>
                                                <a href="">뉴스</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="gub-04">
                                <a href="">문의하기</a>
                                <div className="sub">
                                    <div className="sub-list">
                                        <ul>
                                            <li>
                                                <a href="">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="">문의하기</a>
                                            </li>
                                            <li>
                                                <a href="">문의목록</a>
                                            </li>
                                            <li>
                                                <a href="">문의내역</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="gub-05">
                                <a href="">마이페이지</a>
                                <div className="sub">
                                    <div className="sub-list">
                                        <ul>
                                            <li>
                                                <a href="">회원정보수정</a>
                                            </li>
                                            <li>
                                                <a href="">활동내역</a>
                                            </li>
                                            <li>
                                                <a href="">충전소 이용 내역</a>
                                            </li>
                                            <li>
                                                <a href="">카드등록 및 수정</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </nav>

                    <ul className="global-menu">
                        <li>
                            <a href="#">로그인</a>
                        </li>
                        <li>
                            <a className="join" href="#">회원가입</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Mainmenu_2;