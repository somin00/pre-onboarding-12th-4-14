import { Dispatch, MouseEvent, SetStateAction, useRef } from 'react';

import { Chart as ChartJS } from 'chart.js';
import { getElementAtEvent } from 'react-chartjs-2';
import { BarDataType } from 'types';

interface ChartSelectPropsType {
  barData: BarDataType[];
  setRegion: Dispatch<SetStateAction<string>>;
}
function useChartSelect({ barData, setRegion }: ChartSelectPropsType) {
  const chartRef = useRef<ChartJS<'line', number[], string>>(null);

  const clickChartBar = (event: MouseEvent<HTMLCanvasElement>) => {
    if (!chartRef.current) return;
    const clickedBar = getElementAtEvent(chartRef.current, event);
    if (clickedBar.length === 0) return;
    const clickedIndex = clickedBar[0].index;
    setRegion(barData[clickedIndex].id);
  };
  return { chartRef, clickChartBar };
}

export default useChartSelect;
