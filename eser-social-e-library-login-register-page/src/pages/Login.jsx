import { React, useState } from 'react'
import { Link } from 'react-router-dom';

import "../styles/Login.css"


function Login() {
    const [haveAccount, setHaveAccount] = useState(true);

    return (
        <> {
            haveAccount ? <>
                <div className="login-page-css">

                    <div className="login-container-css">

                        <div className="login-form-container-css">

                            <div className="login-title-css">
                                Giriş Yap
                            </div>

                            <form id='login-form' name='login-form' className='login-form-css' method='post' onSubmit={(e) => { e.preventDefault() }}>

                                <div className="login-input-bar-container-css">
                                    <input type='email' id='login-email' name='login-email' placeholder='Email' required />
                                </div>

                                <div className="login-input-bar-container-css">
                                    <input type='password' id='login-password' name='login-password' placeholder='Şifre' required />
                                </div>

                            </form>

                            <div className="login-forgot-password-css">
                                <Link className='login-forgot-password-link-css' to="/forgot-password"> Şifremi unuttum</Link>
                            </div>

                            <div className="login-button-container-css">
                                <button className='login-button-css' form='login-form'>Giriş yap</button>
                            </div>

                        </div>

                        <div className="login-create-account-css">
                            <button className="login-create-account-button-css" onClick={() => { setHaveAccount(false) }}>Hesap oluştur</button>
                        </div>

                    </div>

                </div>
            </>

                : <>

                    <div className="register-page-css">

                        <div className="register-container-css">

                            <div className="register-form-container-css">

                                <div className="register-title-css">
                                    Hesap Oluştur
                                </div>

                                <form id='register-form' name='register-form' className='register-form-css' method='post' onSubmit={(e) => { e.preventDefault() }} >

                                    <div className="register-input-bar-container-css">
                                        <input type='text' id='register-username' name='register-username' placeholder='Kullanıcı adı' required />
                                    </div>


                                    <div className="register-input-bar-container-css">
                                        <input type='email' id='register-email' name='register-email' placeholder='Email' required />
                                    </div>

                                    <div className="register-input-bar-container-css">
                                        <input type='password' id='register-password' name='register-password' placeholder='Şifre' required />
                                    </div>

                                </form>

                                <div className="register-forgot-password-css">
                                    <Link className='register-forgot-password-link-css' to="/forgot-password"> Şifremi unuttum</Link>
                                </div>

                                <div className="register-button-container-css">
                                    <button className='register-button-css' form='register-form'>Hesap oluştur</button>
                                </div>

                            </div>

                            <div className="register-login-css">
                                <button className="register-login-button-css" onClick={() => { setHaveAccount(true) }}>Giriş yap</button>
                            </div>

                        </div>

                    </div>

                </>
        } </>
    )
}

export default Login
