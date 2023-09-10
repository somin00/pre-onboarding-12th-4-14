export interface ChartDataType {
  labelData: string[];
  areaData: number[];
  barData: number[];
}

export interface ResponseDataType {
  [key: string]: { id: string; value_area: number; value_bar: number };
}
