import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import heroImage from "../../assets/NL-en-20250623-TRIFECTA-perspective_da65940d-6ee0-42e2-a0cf-16da07a8f7e7_large.jpg"
import heroLogo from "../../assets/Netflix_Logo_PMS.png"
import Footer from "../Home/footer/Footer";
function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState({
        emailError: "",
        nameError: "required",
        usernameError: "",
        passwordError: "",
        confirmPassword: ""
    });

    const navigate =useNavigate()
    const Validite = (ev) => {
        switch (ev.target.name) {
        case "name":
            setUser({ ...user, name: ev.target.value });
            setError({
            ...error,
            nameError: (ev.target.value.length === 0)
                ? "Name is required"
                : ""
            });
            break;
        case "email":
            setUser({ ...user, email: ev.target.value });
            setError({
            ...error,
            emailError: (ev.target.value.length === 0)
                ? "Email is required"
                : (ev.target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
                ? ""
                : "Email is invalid"
            });
            break;
        case "username":
            setUser({ ...user, username: ev.target.value });
            setError({
            ...error,
            usernameError: (ev.target.value.length === 0)
                ? "Username is required"
                : (ev.target.value.includes(" "))
                ? "Username is invalid"
                : ""
            });
            break;
        case "password":
            setUser({ ...user, password: ev.target.value });
            setError({
            ...error,
            passwordError: (ev.target.value.length === 0)
                ? "Password is required"
                : (ev.target.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
                ? ""
                : "Password is invalid"
            });
            break;
        case "confirmPassword":
            setUser({ ...user, confirmPassword: ev.target.value });
            setError({
            ...error,
            confirmPassword: (ev.target.value.length === 0)
                ? "Confirm password is required"
                : (ev.target.value === user.password)
                ? ""
                : "Passwords do not match"
            });
            break;
        default:
            console.log(ev.target.name);
        }
    }

   const submitHandler = (ev) => {
    ev.preventDefault();

    // Check for errors before navigating
    if (
        error.nameError === "" && error.emailError === "" && error.usernameError === "" &&
        error.passwordError === "" &&
        error.confirmPassword === ""
    ) {
        // Proceed only if all errors are empty
        navigate("/login");
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
}

    return <>
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
        <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
        <div className="bg-black bg-opacity-75 p-4 rounded-1 z-2" style={{ maxWidth: "450px", width: "100%" }}>
            <h2 className="text-white mb-4">Sign Up</h2>
            <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">Name</label>
                <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                id="name"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                onChange={Validite}
                />
                <p className="text-danger">{error.nameError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Email address</label>
                <input
                type="email"
                className="form-control bg-dark text-white border-secondary"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={user.email}
                onChange={Validite}
                />
                <p className="text-danger">{error.emailError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label text-light">Username</label>
                <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                id="username"
                placeholder="Choose a username"
                name="username"
                value={user.username}
                onChange={Validite}
                />
                <p className="text-danger">{error.usernameError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label text-light">Password</label>
                <input
                type="password"
                className="form-control bg-dark text-white border-secondary"
                id="password"
                placeholder="Create a password"
                name="password"
                value={user.password}
                onChange={Validite}
                />
                <p className="text-danger">{error.passwordError}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label text-light">Confirm Password</label>
                <input
                type="password"
                className="form-control bg-dark text-white border-secondary"
                id="confirmPassword"
                placeholder="Confirm your password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={Validite}
                />
                <p className="text-danger">{error.confirmPassword}</p>
            </div>

            <button type="submit" className="btn btn-danger w-100 mb-3">
                Sign Up
            </button>

            <div className="text-center text-light">
                Already have an account?{" "}
                <Link className="text-white text-decoration-none" to="/login">
                    Sign in now.
                </Link>
            </div>
            </form>
        </div>
        </div>
        </div>
         <Footer />
        </>
}

export default Register;
