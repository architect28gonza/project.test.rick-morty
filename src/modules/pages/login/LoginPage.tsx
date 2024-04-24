import bg from '../../../assets/img/rick1-removebg-preview.png'
import avatar from '../../../assets/img/Rick_and_Morty.svg.png'
import imgButton from '../../../assets/img/INICIAR-SESION-4-22-2024.png'
import wave from '../../../assets/img/wave.png'
import { useSound } from '../../hooks/useSound'
import { showAlert } from '../../util/alerts/Swal-Alert'
import { MESSAGE_TEXT_ERROR, MESSAGE_TITLE_ERROR } from '../../util/constants/message-alert'
import { useLogin } from '../../hooks/useLogin'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../../util/verifyAuth'

export const LoginPage = () => {

    const navigate = useNavigate();
    const { playSoundButton, playSoundInput } = useSound()
    const { inputs, handlerLogin, isValidateInputs, validateLogin } = useLogin()
    const handleClickSession = () => showAlert(MESSAGE_TITLE_ERROR, MESSAGE_TEXT_ERROR);

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/home');   
        }
    });

    return (
        <>
            <div className='container'>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-7">
                        <img className='wave-img' src={wave} alt="wave-img" />
                        <div className="container-login-img">
                            <img src={bg} className='bg-img' alt="container-login-img-alt" />
                        </div>
                    </div>
                    <div className="col col-lg-4 text-white container-login-card-input">
                        <div className="">
                            <div className="row justify-content-center align-items-start">
                                <div className="col-md-12">
                                    <div className="card card-inputs-body">
                                        <div className="card-header">
                                            <img src={avatar} className='img-fluid img-logo-welcome' alt="avatar" />
                                        </div>
                                        <br />
                                        <div className="card-body">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <i className="fas fa-user text-white mt-3"></i>
                                                </div>
                                                <input type="text"
                                                    name='username'
                                                    id='username'
                                                    value={inputs.username}
                                                    className="form-control font-rick-morty"
                                                    onClick={playSoundInput}
                                                    onChange={handlerLogin}
                                                    placeholder="username"
                                                    aria-label="Username"
                                                    autoComplete='off'
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                            <br />
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <i className="fas fa-lock text-white mt-3"></i>
                                                </div>
                                                <input type="password"
                                                    name='password'
                                                    id='password'
                                                    value={inputs.password}
                                                    className="form-control font-rick-morty"
                                                    onClick={playSoundInput}
                                                    onChange={handlerLogin}
                                                    placeholder="password"
                                                    aria-label="Username"
                                                    autoComplete='off'
                                                    aria-describedby="basic-addon1" />
                                            </div>
                                            <p className='text-white font-rick-morty'>Crear cuenta ? </p>
                                        </div>
                                        <div className="card-footer">
                                            <button className='btn-init-session'
                                                onClick={() => isValidateInputs(inputs)
                                                    ? validateLogin(inputs, handleClickSession)
                                                    : handleClickSession()}
                                                onMouseEnter={playSoundButton}>
                                                <img src={imgButton} className='img-fluid' alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}