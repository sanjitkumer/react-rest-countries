// import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h3>Visiting Every Country of the World!!</h3>
//       <p>Available Countries: {countries.length}</p>
//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           flag={country.flag}
//           population={country.population}
//           region={country.region}
//         ></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div style={{ border: "3px solid green", margin: "30px" }}>
//       <h2>Name: {props.name}</h2>
//       <h3>Flag: {props.flag}</h3>
//       <h4>Population: {props.population}</h4>
//       <h4>Region: {props.region}</h4>
//     </div>
//   );
// }

export default App;
