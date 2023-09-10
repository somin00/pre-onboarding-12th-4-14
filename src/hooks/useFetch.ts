import { useEffect, useState } from 'react';

import { ChartDataType } from 'types';

import { expressData } from 'utils/expressData';

function useFetch() {
  const [chartData, setChartData] = useState<ChartDataType | null>(null);
  useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => {
        const { labelData, areaData, barData, regionSet } = expressData(data.response);
        setChartData({
          labelData,
          areaData,
          barData,
          regions: regionSet,
        });
      });
  }, []);

  return chartData;
}

export default useFetch;
