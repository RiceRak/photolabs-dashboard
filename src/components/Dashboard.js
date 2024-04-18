import React, { Component } from "react";

import classnames from "classnames";
import Loading from "./Loading";


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
