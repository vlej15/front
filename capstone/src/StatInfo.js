import React from 'react';
import './css/StatInfo.css';
const StatInfo = () => {
    return (
        <div className='main'>
            <h2>복현동 전기차 충전소</h2>
            <div className='middle'>
                <div className='infomation'>
                    <p>대구 광역시 북부구구구국구구구구구구구 복현도오오온ㄹ만윰나ㅓ앚ㄷㅁ래ㅏㅁㅇㄴ;ㅜㅇ남</p>
                    <p>종강 시켜주세용</p>
                    <p>08:00~24:00</p>
                </div>
                <div className='btns'>
                    <ul>
                        <li><a href="#" onclick="xxx" className='btn01'>예약하기</a></li>
                        <li><a href="www.naver.com" onclick="xxx" className='btn02'>자세히보기</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default StatInfo;