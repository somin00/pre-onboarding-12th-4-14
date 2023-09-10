import React from 'react';

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { ChartDataType } from 'types';

import { makeChartData, options } from 'utils/makeChartdata';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
);

function MultiChart({ labelData, areaData, barData }: ChartDataType) {
  const chartData = makeChartData({ labelData, areaData, barData });
  return <Chart type='bar' options={options} data={chartData} width='1000px' height='500px' />;
}

export default MultiChart;
