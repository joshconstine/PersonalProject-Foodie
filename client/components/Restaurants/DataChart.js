import React, { Component } from "react";

import * as V from "victory";
import {
  VictoryBar,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
import SingleItem from "./SingleItem";

const data = [
  {
    cpd: 1,
    qpd: 2,
    calories: 480,
    price: 1.99,
    label: "mcdouble",
    imageUrl:
      "https://cdn-ffmp.pressidium.com/wp-content/uploads/2019/11/mcdonalds-mcdouble-review.jpg",
  },
  { cpd: 2, qpd: 3, label: "large fry" },
  { cpd: 3, qpd: 5, label: "diet coke" },
  { cpd: 4, qpd: 4, label: "mcnuggets" },
  { cpd: 5, qpd: 5, label: "big mac" },
];

class DataChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
    };
  }
  state = {};
  render() {
    return (
      <div>
        <VictoryChart
          theme={VictoryTheme.material}
          domain={[0, 5]}
          domainPadding={30}
        >
          <VictoryScatter
            style={{ data: { fill: "balck" } }}
            size={7}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onClick: (event, data) => {
                    this.setState({ selectedItem: data.datum });
                    console.log(this.state);
                  },
                },
              },
            ]}
            data={data}
            x="cpd"
            y="qpd"
          />
        </VictoryChart>
        <div>
          <SingleItem item={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}

export default DataChart;
