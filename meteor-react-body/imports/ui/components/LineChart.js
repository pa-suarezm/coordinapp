import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: [
        "1er semestre",
        "2do semestre",
        "3er semestre",
        "4to semestre",
        "5to semestre",
        "6to semestre",
        "7mo semestre",
        "8vo semestre"
      ],
      datasets: [
        {
          data: [130, 126, 122, 128, 126, 117, 127, 110],
          label: "Semestre 2019-2",
          backgroundColor: 'rgba(247, 180, 73, 0.7)',
          borderWidth: 0
        }
      ]
    };
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={{
            labels: this.state.labels,
            datasets: this.state.datasets
          }}
          height={100}
        />
      </div>
    );
  }
}
