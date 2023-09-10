export interface AreaDataType {
  id: string;
  area: number;
}

export interface BarDataType {
  id: string;
  bar: number;
}

export interface ResponseDataType {
  [key: string]: { id: string; value_area: number; value_bar: number };
}

export interface ChartDataType {
  labelData: string[];
  areaData: AreaDataType[];
  barData: BarDataType[];
  regions: string[];
}

export interface ChartDataWithRegionType {
  labelData: string[];
  areaData: AreaDataType[];
  barData: BarDataType[];
  region: string;
}
