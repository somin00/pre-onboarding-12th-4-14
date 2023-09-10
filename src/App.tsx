import React, { useState } from 'react';

import styled from 'styled-components';

import ButtonContainer from 'components/Button/ButtonContainer';

import MultiChart from './components/Chart/MultiChart';
import useFetch from './hooks/useFetch';

function App() {
  const chartData = useFetch();
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  return (
    <AppWrapper>
      <h1>시계열 차트</h1>
      <main>
        {chartData ? (
          <>
            <ButtonContainer
              regions={chartData.regions}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
            <MultiChart {...chartData} region={selectedRegion} setRegion={setSelectedRegion} />
          </>
        ) : (
          <div>데이터를 로딩중입니다.</div>
        )}
      </main>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
