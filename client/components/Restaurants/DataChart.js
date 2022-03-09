import React, { Component } from "react";

import * as V from "victory";
import {
  VictoryBar,
  VictoryChart,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryAxis,
} from "victory";
import SingleItem from "./SingleItem";

const data = [
  {
    cpd: 1,
    qpd: 2,
    calories: 390,
    price: 1.99,
    label: "mcdouble",
    imageUrl:
      "https://cdn-ffmp.pressidium.com/wp-content/uploads/2019/11/mcdonalds-mcdouble-review.jpg",
  },
  {
    cpd: 2,
    qpd: 3,
    calories: 500,
    price: 2.99,
    label: "large fry",
    imageUrl:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-large:nutrition-calculator-tile-desktop",
  },
  {
    cpd: 3,
    qpd: 5,
    calories: 310,
    price: 1.0,
    label: "large coke",
    imageUrl:
      "https://i.pinimg.com/originals/22/14/18/2214181fed0ac961a71d6ead84162045.jpg",
  },
  {
    cpd: 4,
    qpd: 4,
    calories: 940,
    price: 4.99,
    label: "mcnuggets 20 pc",
    imageUrl:
      "https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-20-Chicken-McNuggets-ShareBox.jpg",
  },
  {
    cpd: 5,
    qpd: 5,
    calories: 540,
    price: 4.99,
    label: "big mac",
    imageUrl:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-3-product-tile-desktop?wid=830&hei=516&dpr=off",
  },
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
        <div
          className="dataChart"
          style={{
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "&:hover": {
              boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
            },
          }}
        >
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [0, 1000], y: [0, 8] }}
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
                    },
                  },
                },
              ]}
              data={data}
              x="calories"
              y="price"
            />
          </VictoryChart>
        </div>
        <div>
          <SingleItem item={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}

export default DataChart;
