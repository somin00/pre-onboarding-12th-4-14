# 프리온보딩 4주차 개인 과제

## 배포 링크

https://time-series-chart.netlify.app/

<br/>

## 실행 방법

```
npm install
npm start
```

<br/>

## 프로젝트 구조

```
📦public
┣ 📂 data
┃ ┣ 📂 mockData.json # 주어진 mockData 저장 파일
📦src
┣ 📂 components
┃ ┣ 📂 Button
┃ ┃ ┣ 📂 ButtonContainer # 지역 버튼을 감싸는 컴포넌트
┃ ┃ ┣ 📂 RegionButton # 지역 버튼 컴포넌트
┃ ┣ 📂 Chart
┃ ┃ ┣ 📂 MultiChart # 차트 컴포넌트
┣ 📂 hooks
┃ ┣ 📂 useChartSelect # 차트 데이터 선택 커스텀 훅
┃ ┣ 📂 useFetch # mockData fetch 커스텀 훅
┃ ┣ 📂 useRegionSelect # 지역 선택 커스텀 훅
┣ 📂 utils
┃ ┣ 📂 expressData # mockData를 가공하여 반환하는 함수 파일
┃ ┣ 📂 makeChartdata # 차트 데이터, 옵션 반환하는 함수 파일
┣ 📂 App
┣ 📂 types # 데이터 타입 선언 파일
┗ 📂 .eslintrc # 코드 스타일 통일을 위한 esLint 설정 파일
┗ 📂 .prettierrc # 코드 포맷팅을 위한 prettier 설정 파일

```

<br/>

## 사용한 기술

<img src="https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/STYLED COMPONENTS-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/CHART.JS-FF6384?style=flat-square&logo=chart.js&logoColor=white"/>

<br/>

## 구현 기능

주어진 mockData 기반으로 시계열 차트를 만들었습니다.

<br/>

## 구현 기능 설명

### **[ 시계열 차트 만들기]**

mockData를 public/data 폴더 하위에 두고 '/data/mockData.json’ 경로로 fetch 하여 데이터 가공 후 사용했습니다.

<img width="1034" alt="구현설명-시계열차트" src="https://github.com/somin00/pre-onboarding-12th-4-14/assets/61578822/b8326a23-ecda-487e-a31b-47b20e53583b">

JSON 데이터의 key 값을 x축으로 설정했습니다.  
react-chartjs-2에서 지원하는 Multitype Chart를 이용하여 Area 형태 그래프(value_area 데이터 사용)와 Bar 형태 그래프(value_bar 데이터 사용)가 존재하는 복합 그래프 형태를 구현했습니다.

<br/>

**[구현 방법]**

MultiChart 컴포넌트를 만들어 차트를 렌더링했습니다.  
차트에 적용할 데이터 구조를 만드는 makeChartData 함수와 옵션을 만드는 makeChartOptions함수를 컴포넌트 파일에서 분리하여 작성했습니다.

<br/>

### **[ 호버 기능 구현 ]**

![구현기능-호버툴팁](https://github.com/somin00/pre-onboarding-12th-4-14/assets/61578822/c50f784f-d9e5-4eb0-82f1-19c246daaec4)

마우스 호버시 id(지역이름), value_area(Area 그래프 데이터), value_bar(Bar 그래프 데이터)를 툴팁 형태로 제공합니다.

<br/>

**[구현 방법]**

툴팁에 포함할 내용 수정은 chart에 적용할 options에서 구현했습니다.

같은 index에 해당하는 모든 그래프의 데이터를 하나의 툴팁에 표시하기 위해 interaction 옵션을 아래와 같이 설정했습니다.

```tsx
// utils/makeChartdata/makeChartOptions
interaction: {
    intersect: false,
    mode: 'index',
},
```

지역 이름을 툴팁 제목으로 사용하기 위해 tooltip 옵션을 아래와 같이 설정했습니다.

```tsx
// utils/makeChartdata/makeChartOptions
tooltip: {
  callbacks: {
    title: tooltipItem => {
      const dataIndex = tooltipItem[0].dataIndex;
      const targetData = barData[dataIndex];
      return targetData.id;
    },
  },
},
```

<br/>

### **[ 필터링 기능 구현 ]**

![구현기능-필터링](https://github.com/somin00/pre-onboarding-12th-4-14/assets/61578822/f880e4d6-856f-442f-bef4-d56e0852977a)

그래프 상단에 위치한 지역 버튼을 클릭 하거나 그래프 내에서 특정 데이터 구역을 클릭 했을 때 동일한 지역의 데이터 구역을 하이라이트합니다.

특정 데이터 구역을 선택하는 경우 선택한 데이터의 id와 일치하는 지역 버튼이 선택된 형태로 작동하기 때문에 하이라이트 기능은 `선택취소` 버튼으로 취소 가능합니다.

<br/>

**[구현 방법]**

지역 버튼을 클릭하거나 특정 데이터 구역을 선택하는 경우 선택한 지역 이름을 설정하고, 차트에 적용할 데이터 구조를 만드는 makeChartData 함수에서 선택한 지역에 해당하는 데이터만 배경색을 다르게 지정하도록 구현했습니다.

```tsx
// utils/makeChartdata/makeChartData
backgroundColor: barData.map(data => {
  return data.id === region ? '#1a5bff' : 'rgb(170, 214, 255)';
}),
```

선택한 지역을 설정하는 기능은 커스텀훅으로 분리하여 작성했습니다.

- useRegionSelect: 지역 버튼 클릭 커스텀 훅. 이벤트 위임 사용
- useChartSelect: 특정 데이터 구역 선택 커스텀 훅

<br/>

### 어려웠던 점

###

1. y축 ID 지정
yAxisID를 설정했음에도 Multitype Chart에서 Bar 그래프 값을 기준으로 Area 그래프가 그려지는 문제가 있었습니다. yAxisID를 yAxisId로 작성해서 발생한 문제였습니다.

   <br/>

2. 호버 tooltip 옵션
Bar 그래프 데이터와 Area 그래프 데이터를 함께 표시하기 위해 옵션을 지정해야 했습니다. plugin 내부에 지정하는 tooltip 옵션과 외부에 지정하는 tooltips 옵션 중 어떤 옵션을 사용해야 하는지 헷갈렸습니다.

   <br/>
   위 두 문제는 chart.js 라이브러리에 대한 이해가 부족하여 적절한 키 값을 사용한 것인지 알 수 없어 발생한 문제입니다. 공식 문서를 읽고 바로 해결하여 공식 문서의 중요성을 다시 한 번 느꼈습니다. 정보가 많다는 장점때문에 chart.js를 선택했는데 처음 사용해보는 것이라 읽기 쉬운 한국어로 정리된 문서를 참고하려고 했던 것이 실수였습니다.
<br/>

3. 성북구 선택시 그래프 정보 표시 라벨 색상이 바뀌는 문제
   데이터 필터링 기능 작동시 성북구를 선택하면 그래프 정보를 표시해주는 라벨의 색상도 함께 바뀌는 문제가 발생했습니다. 선택한 지역과 일치하는 데이터의 배경색만 다르게 설정하도록 구현한 부분때문에 발생한 문제입니다. Bar 그래프의 마지막 데이터가 성북구에 해당하여 마지막 return 값이 하이라이트 색상이라 라벨도 하이라이트 색상으로 변경된 것입니다.

   <br/>

   **[문제 해결을 위해 시도한 방법]**

   1. 배경색 지정 부분에서 그래프 데이터보다 요소가 하나 더 있는 배열을 생성하여 마지막 요소에서 기본 배경 색상을 반환하여 라벨에 기본 색상을 적용한다.
   2. 그래프 데이터에 의해 기본적으로 설정되는 라벨을 사용하지 않고 차트 옵션에서 라벨 커스텀 함수를 사용하여 커스텀 라벨을 사용한다. ✨

   <br/>

   **[선택한 방법]** 2번

   <br/>

   수정 전 성북구 선택 화면
   <img width="1082" alt="성북구 선택 버그" src="https://github.com/somin00/pre-onboarding-12th-4-14/assets/61578822/d57c5895-00e0-4718-8077-9900c49613bd">

   <br/>

   수정 후 성북구 선택 화면
   <img width="1019" alt="성북구수정" src="https://github.com/somin00/pre-onboarding-12th-4-14/assets/61578822/808d9cc0-c2dd-429c-a542-0de2b8d66eb5">
