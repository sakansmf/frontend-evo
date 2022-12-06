import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    //fungsi untuk login ya mazzzehh
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //go validasi register yo
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    useEffect(
        () => {
            if (localStorage.getItem('token')) {
                navigate('/home');
            }
        }, []
    );

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        await axios.post('http://127.0.0.1:8000/api/auth/login', formData)
            .then((response) => {
                console.log(response.data.access_token);
                localStorage.setItem('token', response.data.access_token);
                navigate('/home');

            }).catch((error) => {
                console.log(error.response.data);
                setValidation(error.response.data);
            })
    }

    return (
        <div className="container">
            <div className="d-flex align-items-center" style={{ height: '100vh' }}>
                <div style={{ width: '100%' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                    {
                                        validation.error && (
                                            <div className="alert alert-danger" role="alert">
                                                {validation.error}
                                            </div>
                                        )
                                    }
                                    <form onSubmit={loginHandler}>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Masukkan Alamat Email</label>
                                            <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
                                            {
                                                validation.email && (
                                                    <small className="text-danger">
                                                        {validation.email[0]}
                                                    </small>
                                                )
                                            }
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Masukkan Password Anda</label>
                                            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                                            {
                                                validation.password && (
                                                    <small className="text-danger">
                                                        {validation.password[0]}
                                                    </small>
                                                )
                                            }
                                        </div>
                                        <button className="btn btn-primary" type="submit">Masuk</button>
                                        <div className="md-6"><Link>forget password ?</Link></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;