import ChartBar from "./ChartBar";
import "./Chart.css";

interface IDataPoint {
  label: string;
  value: number;
}

interface IChartProps {
  dataPoints: IDataPoint[];
}

const Chart = (props: IChartProps) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: IDataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
