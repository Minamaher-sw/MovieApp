import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black py-5">
        <div className="container text-light">
            <p className="mb-4">Questions? <Link className="text-light text-decoration-underline">Contact us.</Link></p>
            <div className="row row-cols-2 row-cols-md-4 g-3">
            <div>
                <Link className="d-block text-light text-decoration-underline">FAQ</Link>
                <Link className="d-block text-light text-decoration-underline">Cookie Preferences</Link>
            </div>
            <div>
                <Link className="d-block text-light text-decoration-underline">Help Centre</Link>
                <Link className="d-block text-light text-decoration-underline">Corporate Information</Link>
            </div>
            <div>
                <Link className="d-block text-light text-decoration-underline">Terms of Use</Link>
                <Link className="d-block text-light text-decoration-underline">Advert choices</Link>
            </div>
            <div>
                <Link className="d-block text-light text-decoration-underline">Privacy</Link>
            </div>
            </div>

            <div className="mt-4">
            <select className="form-select w-auto bg-light text-secondary border-secondary">
                <option>English</option>
                <option>French</option>
                <option>German</option>
            </select>
            </div>
        </div>
        </footer>
    );
};

export default Footer;