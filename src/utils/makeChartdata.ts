import { ChartDataWithRegionType } from 'types';

export const makeChartData = ({
  labelData,
  areaData,
  barData,
  region,
}: ChartDataWithRegionType) => {
  const chartData = {
    labels: labelData,
    datasets: [
      {
        type: 'line' as const,
        label: 'Area',
        yAxisID: 'y1',
        data: areaData.map(data => data.area),
        fill: true,
        backgroundColor: 'rgba(255, 175, 163, 0.3)',
        borderColor: 'rgb(255, 152, 152)',
        pointBackgroundColor: 'rgb(255, 152, 152)',
        hoverBackgroundColor: 'red',
      },
      {
        type: 'bar' as const,
        label: 'Bar',
        yAxisID: 'y',
        data: barData.map(data => data.bar),
        backgroundColor: barData.map(data => {
          return data.id === region ? '#1a5bff' : 'rgb(170, 214, 255)';
        }),
      },
    ],
  };
  return chartData;
};
