import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import heroImage from "../../assets/NL-en-20250623-TRIFECTA-perspective_da65940d-6ee0-42e2-a0cf-16da07a8f7e7_large.jpg";
import heroLogo from "../../assets/Netflix_Logo_PMS.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Home/footer/Footer";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../context/auth";

function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  // -----------------------------
  // ⭐ Input Validation
  // -----------------------------
  const validateInputs = (e) => {
    const { name, value } = e.target;

    setUserLogin((prev) => ({ ...prev, [name]: value }));

    switch (name) {
      case "email":
        setError((prev) => ({
          ...prev,
          emailError:
            value.length === 0
              ? "Email is required"
              : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
              ? ""
              : "Email format is invalid",
        }));
        break;

      case "password":
        setError((prev) => ({
          ...prev,
          passwordError: value.length === 0 ? "Password is required" : "",
        }));
        break;

      default:
        break;
    }
  };

  // -----------------------------
  // ⭐ Handle Login Submit
  // -----------------------------
  const submitLogin = async (e) => {
    e.preventDefault();

    if (error.emailError || error.passwordError) {
      Swal.fire({
        title: "Error!",
        text: "Please fix validation errors before logging in.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const res = await axios.post(
        "/api/v1/auth/signin",
        userLogin
      );

      // Save user in context (token, name, etc)
      login(res.data);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successful",
        showConfirmButton: false,
        timer: 700,
      });

      const redirectPath = location.state?.path || "/main/movies";
      navigate(redirectPath);
    } catch (err) {
      Swal.fire({
        title: "Login failed!",
        text: err.response?.data?.message || "Invalid email or password",
        icon: "error",
        confirmButtonText: "Try Again",
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

        <div className="d-flex align-items-center justify-content-center vh-100 bg-dark z-3">
          <div
            className="bg-black z-3 bg-opacity-75 p-5 rounded-1"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <h2 className="text-white mb-4">Sign In</h2>

            <form onSubmit={submitLogin}>
              {/* Email */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Email address"
                  name="email"
                  value={userLogin.email}
                  onChange={validateInputs}
                />
                {error.emailError && (
                  <p className="text-danger">{error.emailError}</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Password"
                  name="password"
                  value={userLogin.password}
                  onChange={validateInputs}
                />
                {error.passwordError && (
                  <p className="text-danger">{error.passwordError}</p>
                )}
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
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label text-white">
                  Remember me
                </label>
              </div>

              <div className="text-secondary mb-2">
                New to Netflix?
                <Link to="/signup" className="text-white text-decoration-none">
                  {" "}
                  Sign up now.
                </Link>
              </div>

              <div className="text-white" style={{ fontSize: "0.75rem" }}>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a href="#" className="text-primary ms-1">
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
