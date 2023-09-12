import React, { MouseEvent } from 'react';

import styled from 'styled-components';

import RegionButton from './RegionButton';

interface ButtonContainerPropsType {
  regions: string[];
  selectedRegion: string;
  clickRegionButton: (e: MouseEvent<HTMLUListElement>) => void;
}
function ButtonContainer({ regions, selectedRegion, clickRegionButton }: ButtonContainerPropsType) {
  return (
    <ButtonContainerWrapper onClick={clickRegionButton}>
      {regions.map(region => {
        const isSelected = selectedRegion === region;
        return <RegionButton key={region} value={region} isSelected={isSelected} />;
      })}

      <button type='button'>선택취소</button>
    </ButtonContainerWrapper>
  );
}

export default ButtonContainer;

const ButtonContainerWrapper = styled.ul`
  margin: 30px 0;
  display: flex;
  gap: 10px;
`;
