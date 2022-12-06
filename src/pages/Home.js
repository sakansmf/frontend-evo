import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    //token e 
    const token = localStorage.getItem("token");

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('http://127.0.0.1:8000/api/auth/me')
            .then((response) => {
                setUser(response.data);
            })
    }

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        fetchData();
    }, []);

    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('http://127.0.0.1:8000/api/auth/logout')
            .then(() => {
                localStorage.removeItem("token");

                navigate('/login');
            })
    }

    return (
        <div className="container">
            <div className="d-flex align-items-center" style={{ height: '100vh' }}>
                <div style={{ width: '100%' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Home</div>
                                <div className="card-body">
                                    <h5>Selamat Datang, {user.name}</h5>
                                    <p>Blockchain Masa Depan Pemilihan Indonesia </p>
                                    <p><b>Kamu bertanya tanya??</b></p>
                                    <p>Rungkate jerman & argentina ??</p>
                                    <button onClick={logoutHandler} className="btn btn-danger">Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;