import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components"; //destructuring  .... see index.js in components
import styles from "./App.module.css";
import { fetchData } from "./api/index"; // as it is index file so no need to specify as /index it will automatically find it

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch and set
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state; // destructuring

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
