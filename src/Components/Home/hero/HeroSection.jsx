import { NavLink } from 'react-router-dom';
import heroImage from "../../../assets/NL-en-20250623-TRIFECTA-perspective_da65940d-6ee0-42e2-a0cf-16da07a8f7e7_large.jpg"
import heroLogo from "../../../assets/Netflix_Logo_PMS.png"
const Hero = () => {
  return (
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
        
         <NavLink  to="/login" 
            style={{zIndex:"2"}}
            className={({ isActive }) => {
                return isActive ? "btn btn-danger me-5 mt-2 fw-semibold position-absolute top-0 end-0" :"btn btn-danger me-5 mt-2 fw-semibold position-absolute top-0 end-0 "
              }}>
              Login
        </NavLink>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}></div>

        <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 px-3">
            <h1 className="fw-bold display-4 mb-3">
            Unlimited films,<br /> series and more
            </h1>
            <p className="fs-5 mb-2">Starts at €8.99. Cancel at any time.</p>
            <p className="mb-4">Ready to watch? Enter your email to create or restart your membership.</p>

            <form className="w-100" style={{ maxWidth: '600px' }}>
            <div className="input-group">
                <input
                type="email"
                className="form-control py-3"
                placeholder="Email address"
                />
                <button className="btn btn-danger px-4 fw-semibold" type="submit">
                Get Started
                </button>
            </div>
            </form>
        </div>
    </div>
    );
};

export default Hero;