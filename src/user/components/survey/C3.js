import React from "react";

import c3 from "c3";

class Chart extends React.PureComponent {
  constructor(props) {
    super();

    this.c3Instance = c3;
    this.chart = null;
  }

  ref = (el) => (this.chartContainer = el);

  componentDidMount() {
    this.setChart();
  }
  componentDidUpdate(prevProps) {
    const { columns, type, config } = this.props.data;

    this.chart.load({ columns, type, ...config });
  }

  setChart() {
    const { data, onClick, onMouseOver, onMouseOut, type, config } = this.props;

    data["onclick"] = onClick;
    data["onmouseover"] = onMouseOver;
    data["onmouseout"] = onMouseOut;

    this.chart = this.c3Instance.generate({
      bindto: this.chartContainer,
      data: { ...data, type: type || "pie" },
      ...config,
    });
  }

  render() {
    return <div ref={this.ref}></div>;
  }
}

const donut = {
  data: {},
  config: {
    donut: {
      title: "Үнэлгээ",
      label: {
        format: function (value) {
          return value;
        },
      },
    },
  },
};

class MainApp extends React.Component {
  render() {
    const good = parseInt(this.props.evaVal ? this.props.evaVal.good : 0);
    const mid = parseInt(this.props.evaVal ? this.props.evaVal.mid : 0);
    const bad = parseInt(this.props.evaVal ? this.props.evaVal.bad : 0);

    donut.data = {
      columns: [
        ["Муу", bad],
        ["Дунд", mid],
        ["Сайн", good],
      ],
    };
    return (
      <div>
        <div style={{ width: "180px", display: "inline-block" }}>
          <Chart type="donut" data={donut.data} config={donut.config} />
        </div>
      </div>
    );
  }
}

export default MainApp;
