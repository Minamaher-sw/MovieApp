import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import heroImage from "../../assets/NL-en-20250623-TRIFECTA-perspective_da65940d-6ee0-42e2-a0cf-16da07a8f7e7_large.jpg";
import heroLogo from "../../assets/Netflix_Logo_PMS.png";
import Footer from "../Home/footer/Footer";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [error, setError] = useState({
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
    phoneError: "",
  });

  const navigate = useNavigate();

  const Validite = (ev) => {
    const { name, value } = ev.target;

    setUser({ ...user, [name]: value });

    switch (name) {
      case "firstName":
        setError({
          ...error,
          firstNameError: value.length === 0 ? "First name is required" : "",
        });
        break;

      case "lastName":
        setError({
          ...error,
          lastNameError: value.length === 0 ? "Last name is required" : "",
        });
        break;

      case "email":
        setError({
          ...error,
          emailError:
            value.length === 0
              ? "Email is required"
              : value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
              ? ""
              : "Email is invalid",
        });
        break;

      case "username":
        setError({
          ...error,
          usernameError:
            value.length === 0
              ? "Username is required"
              : value.includes(" ")
              ? "Username is invalid"
              : "",
        });
        break;

      case "password":
        setError({
          ...error,
          passwordError:
            value.length === 0
              ? "Password is required"
              : value.length >= 8
              ? ""
              : "Password must be at least 8 characters",
        });
        break;

      case "confirmPassword":
        setError({
          ...error,
          confirmPasswordError:
            value.length === 0
              ? "Confirm password is required"
              : value === user.password
              ? ""
              : "Passwords do not match",
        });
        break;

      case "phone":
        setError({
          ...error,
          phoneError:
            value.length === 0
              ? "Phone is required"
              : value.match(/^\+?[0-9]{10,15}$/)
              ? ""
              : "Phone number is invalid",
        });
        break;

      default:
        break;
    }
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();

    if (
      error.firstNameError === "" &&
      error.lastNameError === "" &&
      error.emailError === "" &&
      error.usernameError === "" &&
      error.passwordError === "" &&
      error.confirmPasswordError === "" &&
      error.phoneError === ""
    ) {
      const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        password: user.password,
        phone: user.phone,
      };

      try {
        console.log(newUser);
        const registeredUsers = await axios.post(
          // "https://movie-app-production-22b0.up.railway.app/api/v1/auth/signup",
          "/api/v1/auth/signup",
          newUser
        );
        console.log(registeredUsers);
        if (registeredUsers.status === 200 || registeredUsers.status === 201 || registeredUsers.status === 204 || registeredUsers.data.message=== "Registration successful") {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration successful",
            showConfirmButton: false,
            timer: 800,
          });

          navigate("/login");
        }
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: err.response?.data?.message || "Registration failed",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Validation failed. Please check the form.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <>
      <div
        className="position-relative text-white text-center top-0 start-0"
        style={{ height: "100vh", backgroundColor: "#000", width: "100%" }}
      >
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
          style={{ height: "5rem", zIndex: "2" }}
        />

        <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
          <div
            className="bg-black bg-opacity-75 p-4 rounded-1 z-2"
            style={{ maxWidth: "450px", width: "100%" }}
          >
            <h2 className="text-white mb-4">Sign Up</h2>

            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label text-light">First Name</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  name="firstName"
                  value={user.firstName}
                  onChange={Validite}
                />
                <p className="text-danger">{error.firstNameError}</p>
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Last Name</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  name="lastName"
                  value={user.lastName}
                  onChange={Validite}
                />
                <p className="text-danger">{error.lastNameError}</p>
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Email</label>
                <input
                  type="email"
                  className="form-control bg-dark text-white border-secondary"
                  name="email"
                  value={user.email}
                  onChange={Validite}
                />
                <p className="text-danger">{error.emailError}</p>
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Username</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  name="username"
                  value={user.username}
                  onChange={Validite}
                />
                <p className="text-danger">{error.usernameError}</p>
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Phone</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  name="phone"
                  placeholder="+2011..."
                  value={user.phone}
                  onChange={Validite}
                />
                <p className="text-danger">{error.phoneError}</p>
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Password</label>
                <input
                  type="password"
                  className="form-control bg-dark text-white border-secondary"
                  name="password"
                  value={user.password}
                  onChange={Validite}
                />
                <p className="text-danger">{error.passwordError}</p>
              </div>

              <div className="mb-3">
                <label className="form-label text-light">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control bg-dark text-white border-secondary"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={Validite}
                />
                <p className="text-danger">{error.confirmPasswordError}</p>
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
  );
}

export default Register;
