import { useNavigate } from "react-router-dom";
import { useState } from "react";

import NavigationBar from "../components/NavigationBar";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";

const GuideRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    description: "",
    photo: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccessMessage("");

    if (formData.password !== formData.confirmPassword) {
      setError("Password do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/guides/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: parseInt(formData.phone),
          password: formData.password,
          description: formData.description,
          photo: formData.photo,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Registration failed.");
        return;
      }

      const result = await response.json();
      console.log("Guide registered with ID:", result.id);
      setSuccessMessage("Registartion successful!");

      setTimeout(() => {
        setFormData ({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          description: "",
          photo: "",
        });
      }, 2000);

      setTimeout(() => navigate("/guide-dashboard"), 2000);
      
    } catch (err) {
      console.error("Error registering guide:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <>
      {/* <NavigationBar /> */}

      <HeroImage />

      {/* Page title */}
      <div className="w3-container w3-margin-top">
        <h2 className="w3-center w3-margin-top">Register as a guide</h2>
        <p>Join our platform and start offering your own excursions</p>
      </div>

      {/* Registration form */}
      <div className="w3-container" style={{ maxWidth: "700px", margin: "auto" }}>
        <div className="w3-card w3-white w3-padding-32 w3-round-large w3-margin-top w3-margin-bottom">
          <form onSubmit={handleSubmit}>
            <label className="w3-text-black">First Name</label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
            />

            <label className="w3-text-black">Last Name</label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />

            <label className="w3-text-black">Email</label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />

            <label className="w3-text-black">Phone</label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              required              
            />

            <label className="w3-text-black">Password</label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose a password"
              required
            />

            <label className="w3-text-black">Confirm Password</label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat your password"
              required
            />

            <label className="w3-text-black">Short Description</label>
            <textarea
              className="w3-input w3-border w3-margin-bottom"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell something about yourself"
              rows="4"
              required
            ></textarea>

            <label className="w3-text-black">Photo URL</label>
            <input
              className="w3-input w3-border w3-margin-bottom"
              type="url"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="Link to your photo"
            />

            {error && (
              <div className="w3-text-red w3-margin-bottom">
                <strong>{error}</strong>
              </div>
            )}

            {successMessage && (
              <div className="w3-panel w3-blue w3-padding w3-margin-bottom">
                <strong>{successMessage}</strong>
              </div>
            )}

            <div className="w3-center">
              <button
                type="submit"
                className="w3-button w3-red w3-round-large"
                style={{ width: "150px"}}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      <Newsletter />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default GuideRegister;
