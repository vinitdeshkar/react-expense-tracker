import "./ChartBar.css";

interface IChartBar {
  key: string;
  value: number;
  maxValue: number;
  label: string;
}

const ChartBar = (props: IChartBar) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight =
      Math.round((props.value / props.maxValue) * 100).toString() + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
