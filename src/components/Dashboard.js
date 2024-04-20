import React, { Component } from "react";

import classnames from "classnames";
import Loading from "./Loading";

const data = [
  {
    id: 1,
    label: "Total Photos",
    value: 10
  },
  {
    id: 2,
    label: "Total Topics",
    value: 4
  },
  {
    id: 3,
    label: "User with the most uploads",
    value: "Allison Saeng"
  },
  {
    id: 4,
    label: "User with the least uploads",
    value: "Lukas Souza"
  }
];


class Dashboard extends Component {
  state = { 
    loading: true 
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    return this.state.loading ? <Loading /> : <main className={dashboardClasses} />;
  }
}

export default Dashboard;
