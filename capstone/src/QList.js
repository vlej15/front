import React, { useState } from 'react';
import './css/QList.css';
import { useForm } from "react-hook-form";

const QList = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="contents">
                <div className="banner">
                    <p className="banner-title">문의내역</p>
                    <br></br>
                    <p className="subtitle">문의하신 내역을 확인할 수 있습니다.</p>
                </div>
                <table className="list">
                    <thead>
                        <tr>
                            <th>상태</th>
                            <th>제목</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="list-td">
                                <span className="list-span">답변대기</span>
                            </td>
                            <td className="list-title"><a href="#" onclick="" className="list-link">아니~ 카드 인식이 않되요.</a></td>
                            <td className="list-date">2021.02.14</td>
                        </tr>
                        <tr>
                            <td class="list-td">
                                <span className="list-span">답변완료</span>
                            </td>
                            <td className="list-title"><a href="#" onclick="" className="list-link">아 아직도 할거 개많에 아아아아아앙아가가가가누리마ㅜㄷ라ㅣㅈ두랒둥</a></td>
                            <td className="list-date">2020.02.01</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default QList;