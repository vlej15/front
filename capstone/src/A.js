import React, { useState } from 'react';
import './css/A.css';
import { useForm } from "react-hook-form";

const A = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="contents">
                <div className="banner">
                    <p className="banner-title">문의내역</p>
                    <p className="subtitle">문의하신 내역을 확인할 수 있습니다.</p>
                </div>
                <div className="qna-area">
                    <table className="question">
                        <thead>
                            <tr>
                                <th><div class="th-title">아니~ 카드 인식이 않되요.</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="line">
                                    <div className="td-info">
                                        <div>
                                            <span><em>Date :</em> 2021.03.12 23:47:33</span>
                                        </div>
                                        <div>
                                            <span><em>Name :</em> jay@****</span>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="q-contents">
                                        아니 카드 인식이 안된다니까요 ㅠ
                                            </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default A;