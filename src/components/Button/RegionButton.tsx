import React from 'react';

import styled from 'styled-components';

interface RegionButtonPropsType {
  value: string;
  isSelected: boolean;
}
function RegionButton({ value, isSelected }: RegionButtonPropsType) {
  return (
    <li>
      <Button type='button' className={isSelected ? 'selected' : ''}>
        {value}
      </Button>
    </li>
  );
}

export default RegionButton;

const Button = styled.button`
  &.selected {
    border: 2px solid #7d7dff;
    color: #7d7dff;
    font-weight: 700;
  }
`;
