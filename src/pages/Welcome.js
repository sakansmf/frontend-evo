import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="container">
            <div className="d-flex align-items-center" style={{ height: '100vh' }}>
                <div style={{ width: '100%' }}>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">Welcome</div>
                                <div className="card-body">
                                    <h5>EVONESIA</h5>
                                    <p>Blockchain Masa Depan Pemilihan Indonesia </p>
                                    <p><b>Kamu bertanya tanya??</b></p>
                                    <p>KAPAN nikah??</p>
                                    <Link to="Login" className="btn btn-primary me-2">Login</Link>
                                    <Link to="Register" className="btn btn-primary">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;