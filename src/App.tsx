import React from 'react';

import styled from 'styled-components';

import ButtonContainer from 'components/Button/ButtonContainer';
import useRegionSelect from 'hooks/useRegionSelect';

import MultiChart from './components/Chart/MultiChart';
import useFetch from './hooks/useFetch';

function App() {
  const chartData = useFetch();
  const { region, setRegion, clickRegionButton } = useRegionSelect();

  return (
    <AppWrapper>
      <h1>시계열 차트</h1>
      <main>
        {chartData ? (
          <>
            <ButtonContainer
              regions={chartData.regions}
              selectedRegion={region}
              clickRegionButton={clickRegionButton}
            />
            <MultiChart {...chartData} region={region} setRegion={setRegion} />
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
