import { MouseEvent, useState } from 'react';

function useRegionSelect() {
  const [region, setRegion] = useState<string>('');

  const clickRegionButton = (e: MouseEvent<HTMLUListElement>) => {
    const target = e.target as Node;
    const text = target.textContent;
    if (target.nodeName !== 'BUTTON') return;
    if (text === '선택취소') {
      setRegion('');
      return;
    }
    if (text) {
      setRegion(text);
    }
  };
  return { region, setRegion, clickRegionButton };
}

export default useRegionSelect;
