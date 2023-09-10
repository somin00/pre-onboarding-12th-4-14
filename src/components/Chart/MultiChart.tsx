import React, { Dispatch, SetStateAction } from 'react';

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
import { ChartDataWithRegionType } from 'types';

import { OPTIONS } from 'constants/chartOptions';
import useChartSelect from 'hooks/useChartSelect';
import { makeChartData } from 'utils/makeChartdata';

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

interface MultiChartPropsType extends ChartDataWithRegionType {
  setRegion: Dispatch<SetStateAction<string>>;
}

function MultiChart({ labelData, areaData, barData, region, setRegion }: MultiChartPropsType) {
  const chartData = makeChartData({ labelData, areaData, barData, region });
  const { chartRef, clickChartBar } = useChartSelect({ barData, setRegion });

  return (
    <Chart
      ref={chartRef}
      onClick={clickChartBar}
      type='bar'
      options={OPTIONS}
      data={chartData}
      width='1000px'
      height='500px'
    />
  );
}

export default MultiChart;
