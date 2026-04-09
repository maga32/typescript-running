"use strict";
// 타입 narrowing
// typeof 패러미터 === '속성명' 
// 속성명 in {}자료
// 인스턴스 instanceof 인스턴스 부모
const myFunc1 = (x) => {
    // 아래처럼 그냥 더해주면 에러
    // return x + 1;
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
};
myFunc1('123');
myFunc1(123);
const myFunc2 = (x) => {
    const array = [];
    // 얘도 타입검증 없이 넣으면 에러
    if (typeof x === 'number') {
        array[0] = x;
    }
};
// assertion : 여러개 타입중에 하나로 확정 (타입 덮어쓰기)
// 무슨 타입이 들어올지 100% 알고있을때 사용. but, 디버깅이나 비상용으로만 사용하기
const myFunc3 = (x) => {
    const array = [];
    // x를 넘버로 인정
    array[0] = x;
};
myFunc3(123);
// assertion시 이런 에러 못잡아줌
myFunc3('123');
/*
(숙제1) 숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다.

클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
모르는 부분은 구글검색해도 봐드림
*/
const cleanToNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    return arr;
};
console.log(cleanToNumber(['1', 2, '3']));
/*
(숙제2) 다음과 같은 함수를 만들어보십시오.
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }
지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.

과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
'철수쌤' 같은 object 자료를 파라미터로 집어넣으면
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
그리고 타입지정도 엄격하게 해보도록 합시다.

(동작예시)
만들함수( { subject : 'math' } )  //이 경우 'math'를 return
만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다
Q. 이 자료가 array type 인지 어떻게 검사하냐고요? 모르는건 구글에 검색해봐야합니다.
*/
const getLastSubject = (obj) => {
    let result = '';
    if (typeof obj.subject === 'string') {
        result = obj.subject;
    }
    else if (Array.isArray(obj.subject)) {
        result = obj.subject[obj.subject.length - 1];
    }
    return result;
};
console.log(getLastSubject({ subject: 'math' })); // 이 경우 'math'를 return
console.log(getLastSubject({ subject: ['science', 'art', 'korean'] })); // 이 경우 'korean'을 return
//console.log(getLastSubject( { hello : 'hi' } )                          ); // 이 경우 타입에러 나면 됩니다
