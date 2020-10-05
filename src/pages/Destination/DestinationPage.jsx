import React from "react";
import { Link } from "react-router-dom";
import "./DestinationPage.css";

const DestinationPage = () => {
  return (
    <div className="destinationPage">
      <h1>WHERE I’VE BEEN</h1>
      <hr className="divider" />
      <h4> Number of countries: 7 out of 196</h4>
      <h4>Number of continents: 5 out of 7</h4>

      <h2>List of Countries:</h2>
      <h3></h3>

      <div className="list-class">
        <ul>
          <li>
            <Link to="">Rio De Janeiro, Brazil</Link>
          </li>
          <li>Abu Dhabi, United Arab Emirates (U.A.E)</li>
          <li>Sydney, Australia</li>
          <li>Beijing, China.</li>
          <li>London, England</li>
          <li>Lagos, Nigeria</li>
          <li>Mumbai, India</li>
        </ul>
      </div>
    </div>
  );
};

export default DestinationPage;
