export const OPTIONS = {
  responsive: false,
  elements: {
    point: {
      radius: 1,
    },
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
