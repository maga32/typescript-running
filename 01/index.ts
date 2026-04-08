// npm install -g typescript
// tsc -w 로 변경사항 추적해서 js파일로 실시간 변경 가능

// 기본형
let myName :string = 'baek';
// 리스트형
let names :string[] = ['baek','kim'];
// Object형
// ?는 이 속성이 들어올수도 안들어올수도 있음
let nameAge :{name :string, age? :number} = {name : 'baek'};

// 타입 종류 : string, number, boolean, bigint, null, undefined,[], {}

// |로 여러타입 받음
let nameOrAge :string|number = 'baek';
nameOrAge = 30;

// 타입 재사용 가능 : 보통 대문자로 만듦
type MyType = string|string[];
let nameOrNames :MyType = 'baek';
nameOrNames = ['baek','kim'];

// 튜플형도 가능
// 첫번째는 무조건 스트링, 두번째는 무조건 숫자
type Member = [string, number];
let nameAge2 :Member = ['baek', 30];

// 함수에도 타입지정 가능
// 파라미터에 똑같이 타입지정 & 바깥에 리턴타입지정
function multiplyTwice(x :number) :number {
    return x*2;
}

// 여러속성 한번에 지정 가능
// : string으로 들어오는 모든 키는 string 형식을 가짐
type Member2 = {
    [key :string] : string,
};
let baek :Member2 = {
    name : 'baek',
    age : '30',
};

// class에도 타입지정 가능
class User {
    name :string; // 먼저 변수 지정필요
    constructor(name :string) {
        this.name = name;
    }
}

/*
+ React 프로젝트에서 Typescript 사용할 경우
1. 이미 있는 React 프로젝트에 설치시
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest
2. 새로 만들시
    npx create-react-app my-app --template typescript

+ Vue 프로젝트에서 Typescript 사용할 경우
1. 작업폴더경로에서 터미널을 오픈 후
    vue add typescript
2. lang 옵션을 켜두면 사용 가능. tsconfig.json 파일 만들어서도 사용 가능
    <script lang="ts"> ... </script>
*/