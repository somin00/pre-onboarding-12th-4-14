import { ChartOptions } from 'chart.js';
import { BarDataType, ChartDataWithRegionType } from 'types';

export const makeChartOptions = (barData: BarDataType[]) => {
  const options: ChartOptions = {
    responsive: false,
    elements: {
      point: {
        radius: 1,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'start' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
        },
      },
      tooltip: {
        callbacks: {
          title: tooltipItem => {
            const dataIndex = tooltipItem[0].dataIndex;
            const targetData = barData[dataIndex];
            return targetData.id;
          },
        },
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,

        title: {
          display: true,
          text: 'Bar',
          font: {
            size: 15,
          },
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        suggestedMin: 0,
        suggestedMax: 150,
        ticks: {
          stepSize: 10,
        },
        title: {
          display: true,
          text: 'Area',
          font: {
            size: 15,
          },
        },
      },
    },
  };
  return options;
};

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
