import React, { Dispatch, MouseEvent, SetStateAction } from 'react';

import styled from 'styled-components';

import RegionButton from './RegionButton';

interface ButtonContainerPropsType {
  regions: string[];
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
}
function ButtonContainer({ regions, selectedRegion, setSelectedRegion }: ButtonContainerPropsType) {
  const clickRegionButton = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as Node;
    const text = target.textContent;
    if (target.nodeName !== 'BUTTON') return;
    if (text === '선택취소') {
      setSelectedRegion('');
      return;
    }
    if (text) {
      setSelectedRegion(text);
    }
  };
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
