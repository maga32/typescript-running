"use strict";
// npm install -g typescript
// tsc -w 로 변경사항 추적해서 js파일로 실시간 변경 가능
// 기본형
let myName = 'baek';
// 리스트형
let names = ['baek', 'kim'];
// Object형
// ?는 이 속성이 들어올수도 안들어올수도 있음
let nameAge = { name: 'baek' };
// 타입 종류 : string, number, boolean, bigint, null, undefined,[], {}
// |로 여러타입 받음
let nameOrAge = 'baek';
nameOrAge = 30;
let nameOrNames = 'baek';
nameOrNames = ['baek', 'kim'];
let nameAge2 = ['baek', 30];
// 함수에도 타입지정 가능
// 파라미터에 똑같이 타입지정 & 바깥에 리턴타입지정
function multiplyTwice(x) {
    return x * 2;
}
let baek = {
    name: 'baek',
    age: '30',
};
// class에도 타입지정 가능
class User {
    constructor(name) {
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
