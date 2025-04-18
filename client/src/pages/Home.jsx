const Home = () => {
  return (
    <div className="w3-content" style={{ maxWidth: "1100px" }}>
      {/* <!-- Good offers --> */}
      <div className="w3-container w3-margin-top">
        <h3>Good Offers Right Now</h3>
        <h6>
          Up to <strong>50%</strong> discount.
        </h6>
      </div>
      <div className="w3-row-padding w3-text-white w3-large">
        <div className="w3-half w3-margin-bottom">
          <div className="w3-display-container">
            <img
              src="https://www.w3schools.com/w3images/cinqueterre.jpg"
              alt="Cinque Terre"
              style={{ width: "100%" }}
            />
            <span className="w3-display-bottomleft w3-padding">
              Cinque Terre
            </span>
          </div>
        </div>
        <div className="w3-half">
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half w3-margin-bottom">
              <div className="w3-display-container">
                <img
                  src="https://www.w3schools.com/w3images/newyork2.jpg"
                  alt="New York"
                  style={{ width: "100%" }}
                />
                <span className="w3-display-bottomleft w3-padding">
                  New York
                </span>
              </div>
            </div>
            <div className="w3-half w3-margin-bottom">
              <div className="w3-display-container">
                <img
                  src="https://www.w3schools.com/w3images/sanfran.jpg"
                  alt="San Francisco"
                  style={{ width: "100%" }}
                />
                <span className="w3-display-bottomleft w3-padding">
                  San Francisco
                </span>
              </div>
            </div>
          </div>
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half w3-margin-bottom">
              <div className="w3-display-container">
                <img
                  src="https://www.w3schools.com/w3images/pisa.jpg"
                  alt="Pisa"
                  style={{ width: "100%" }}
                />
                <span className="w3-display-bottomleft w3-padding">Pisa</span>
              </div>
            </div>
            <div className="w3-half w3-margin-bottom">
              <div className="w3-display-container">
                <img
                  src="https://www.w3schools.com/w3images/paris.jpg"
                  alt="Paris"
                  style={{ width: "100%" }}
                />
                <span className="w3-display-bottomleft w3-padding">Paris</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Explore Nature --> */}
      <div className="w3-container">
        <h3>Explore Nature</h3>
        <p>Travel with us and see nature at its finest.</p>
      </div>
      <div className="w3-row-padding">
        <div className="w3-half w3-margin-bottom">
          <img
            src="https://www.w3schools.com/w3images/ocean2.jpg"
            alt="Norway"
            style={{ width: "100%" }}
          />
          <div className="w3-container w3-white">
            <h3>West Coast, Norway</h3>
            <p className="w3-opacity">Roundtrip from $79</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="w3-button w3-margin-bottom">Buy Tickets</button>
          </div>
        </div>
        <div className="w3-half w3-margin-bottom">
          <img
            src="https://www.w3schools.com/w3images/mountains2.jpg"
            alt="Austria"
            style={{ width: "100%" }}
          />
          <div className="w3-container w3-white">
            <h3>Mountains, Austria</h3>
            <p className="w3-opacity">One-way from $39</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="w3-button w3-margin-bottom">Buy Tickets</button>
          </div>
        </div>
      </div>

      {/* <!-- Newsletter --> */}
      <div className="w3-container">
        <div className="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
          <h2>Get the best offers first!</h2>
          <p>Join our newsletter.</p>
          <label>E-mail</label>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Your Email address"
          />
          <button type="button" className="w3-button w3-red w3-margin-top">
            Subscribe
          </button>
        </div>
      </div>

      {/* <!-- Contact --> */}
      <div className="w3-container">
        <h2>Contact</h2>
        <p>Let us book your next trip!</p>
        <i className="fa fa-map-marker" style={{ width: "30px" }}></i> Chicago,
        US
        <br />
        <i className="fa fa-phone" style={{ width: "30px" }}></i> Phone: +00
        151515
        <br />
        <i className="fa fa-envelope" style={{ width: "30px" }}>
          {" "}
        </i>{" "}
        Email: mail@mail.com
        <br />
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Name"
              required
              name="Name"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Email"
              required
              name="Email"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Message"
              required
              name="Message"
            />
          </p>
          <p>
            <button
              className="w3-button w3-black w3-padding-large"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </p>
        </form>
      </div>

      {/* <!-- End page content --> */}
    </div>
  );
};
export default Home;
