import { ResponseDataType } from 'types';

export const expressData = (response: ResponseDataType) => {
  const labelData = Object.keys(response);
  const dataValues = Object.values(response);
  const areaData = dataValues.map(dataValue => ({ id: dataValue.id, area: dataValue.value_area }));
  const barData = dataValues.map(dataValue => ({ id: dataValue.id, bar: dataValue.value_bar }));
  const regionArr = dataValues.map(dataValue => dataValue.id);
  const regionSet = Array.from(new Set(regionArr));

  return { labelData, areaData, barData, regionSet };
};
