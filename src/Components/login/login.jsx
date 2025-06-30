import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import heroImage from "../../assets/NL-en-20250623-TRIFECTA-perspective_da65940d-6ee0-42e2-a0cf-16da07a8f7e7_large.jpg"
import heroLogo from "../../assets/Netflix_Logo_PMS.png"
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Home/footer/Footer";
import Swal from 'sweetalert2'
import { AuthContext } from "../../context/auth";

function Login() {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        emailError: "required",
        passwordError: "",
    });
    const navigate = useNavigate();

    // context 
    const {login} = useContext(AuthContext);
    const Validite = (ev) => {
        if (ev.target.name === "email") {
        setUserLogin({ ...userLogin, email: ev.target.value });
        setError({
            ...error,
            emailError:
            ev.target.value.length === 0
                ? "Email is required"
                : ev.target.value.match(
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                )
                ? ""
                : "Email is invalid",
        });
        } else if (ev.target.name === "password") {
        setUserLogin({ ...userLogin, password: ev.target.value });
        setError({
            ...error,
            passwordError:
            ev.target.value.length === 0
                ? "Password is required"
                : ev.target.value.match(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                )
                ? ""
                : "Password is invalid",
        });
        }
    };
    const loc = useLocation();
    const sumbit_ = (ev) => {
        ev.preventDefault();
        if (error.emailError.length === 0 && error.passwordError.length === 0) {
            login(userLogin);
            console.log(userLogin);
            const path =loc.state?.path||"/main/movies"
            console.log(path)
            navigate(path);
            Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registeration sucess",
                    showConfirmButton: false,
                    timer: 500
                    });
        } else {
            // Optionally, show a general error or prevent navigation
            Swal.fire({
                title: 'Error!',
                text: 'Register validataion not sucess ',
                icon: 'error',
                confirmButtonText: 'ok'
            })
        }
    };

    return (<>
        <div className="position-relative text-white text-center top-0 start-0" style={{ height: '100vh', backgroundColor: '#000',width:"100%"}}>
                <img
                    src={heroImage}
                    alt="Background"
                    className="w-100 h-100 object-fit-fill position-absolute top-0 start-0"
                    style={{ opacity: 0.6 }}
                />
                <img 
                    src={heroLogo}
                    alt="logo"
                    className="object-fit-fill position-absolute top-0 start-0 ms-5"
                    style={{ height: '5rem' ,zIndex:"2"}}
                ></img>
        <div className="d-flex align-items-center justify-content-center vh-100 bg-dark z-3">
        <div
            className="bg-black z-3 bg-opacity-75 p-5 rounded-1  "
            style={{ maxWidth: "400px", width: "100%" }}>
            <h2 className="text-white mb-4">Sign In</h2>
            <form onSubmit={sumbit_}>
            <div className="mb-3">
                <input
                type="email"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Email address or mobile number"
                name="email"
                value={userLogin.email}
                onChange={Validite}
                />
                <p className="text-danger">{error.emailError}</p>
            </div>

            <div className="mb-3">
                <input
                type="password"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Password"
                name="password"
                value={userLogin.password}
                onChange={Validite}
                />
                <p className="text-danger">{error.passwordError}</p>
            </div>

            <button type="submit" className="btn btn-danger w-100 mb-3">
                Sign in
            </button>

            <div className="text-center text-white mb-3">OR</div>

            <button type="button" className="btn btn-secondary w-100 mb-3">
                Use a sign-in code
            </button>

            <div className="text-center mb-3">
                <Link to="/signup" className="text-white text-decoration-none">
                    Forgot password?
                </Link>
            </div>

            <div className="form-check mb-3 d-flex gap-2">
                <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                />
                <label
                className="form-check-label text-white"
                htmlFor="rememberMe"
                >
                Remember me
                </label>
            </div>

            <div className="text-secondary mb-2">
                New to Netflix?{" "}
                <Link to="/signup" className="text-white text-decoration-none">
                Sign up now.
                </Link>
            </div>

            <div className="text-white" style={{ fontSize: "0.75rem" }}>
                This page is protected by Google reCAPTCHA to ensure you're not a
                bot.
                <a href="#" className="text-primary text-decoration-none ms-1">
                Learn more.
                </a>
            </div>
            </form>
        </div>
        </div>
        </div>
         <Footer />
        </>
    );
}

export default Login;
