import React, { useState } from 'react';
import './css/Login.scss';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="contentsLogin">
                <div className="banner">
                    <p className="banner-title">로그인</p>
                    <br></br>
                    <p className="subtitle">로그인을 하시면 EV WMAP의 다양한 서비스를 이용하실 수 있습니다.</p>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-input">
                            <input ref={register({ required: true })} className="input-id" name="input-id" type="Id" placeholder="아이디 입력" required />
                            <br></br>
                            <input ref={register({ required: true })} className="input-pw" name="input-pw" placeholder="비밀번호 입력" type="password" required />
                            <input type="submit" className="login-btn" value="로그인"></input>
                        </div>
                        <div className="form-check">
                            <div className="check">
                                <input ref={register} type="checkbox" />
                                <label><span> 아이디 저장</span></label>
                            </div>
                            <a href="" className="find">아이디 찾기</a>
                            <a href="" className="find"> | 비밀번호 찾기</a>
                        </div>
                    </form>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="btn-area">
                        <p className="btn-subtitle">아직 EV WMAP 계정이 없으신가요?</p>
                        <br></br>
                        <a href="" className="sign-btn">회원가입</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;