import { ResponseDataType } from 'types';

export const expressData = (response: ResponseDataType) => {
  const labelData = Object.keys(response);
  const dataValues = Object.values(response);
  const areaData = dataValues.map(dataValue => dataValue.value_area);
  const barData = dataValues.map(dataValue => dataValue.value_bar);

  return { labelData, areaData, barData };
};
