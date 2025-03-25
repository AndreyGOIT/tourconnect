import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  return (
    <div className="w3-bar w3-white w3-border-bottom w3-xlarge">
      <Link to="/" className="w3-bar-item w3-button w3-text-red w3-hover-red">
        <b>
          <i className="fa fa-map-marker w3-margin-right"></i>TourConnect
        </b>
      </Link>

      {location.pathname === "/" && (    
        <Link
          to="/guide-register"
          className="w3-bar-item w3-button w3-right w3-text-red w3-hover-red"
        >
          <b>Become a Guide</b>
        </Link>
      )}

      <a href="#" className="w3-bar-item w3-button w3-right w3-hover-red w3-text-grey">
        <i className="fa fa-search"></i>
      </a>
    </div>
  );
};
export default NavigationBar;
