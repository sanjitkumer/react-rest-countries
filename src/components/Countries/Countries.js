import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Hello from Countries: {countries.length}</h2>
      <div className="countries-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            // name={country.name.common}
            // flag={country.flags.png}
            // population={country.population}
            // area={country.area}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
