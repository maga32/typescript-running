// 한 변수에 여러 타입 사용시 -> Union타입
let one :number|string = 'baek';
// 리스트안에 여러타입 사용
let lists :(number|string)[] = [1,'2',3];
// * 괄호를 빼면 한타입 또는 다른타입 리스트 사용한다는 뜻
let list2 :number|string[] = 1;
    list2 = ['2','3'];
let objects :{a :number|string}= {a : '123'};
    objects = {a: 123};

// 모든 자료형 가능 (any타입) -> 일반 js변수로 사용 (타입 해제)
let anyType :any;
anyType = 123;
anyType = [];

// any타입은 안전성 x (아래 모두 가능 - 다른변수 오염가능성 o)
let test1 :string = anyType;
anyType - 1;


// 비슷하게 모든 자료형 가능 (unknown타입) -> 어느 타입이나 가능하지만 안정성 확보
let unknownType :unknown;
unknownType = 123;
unknownType = [];
/* unknown타입은 아래처럼 사용시 에러 (다른변수 보호)
let test2 :string = unknownType;
unknownType - 1;
*/

// *추가) js와 다른점 !!
let age1 :string|number;
// 아래결과 오류. age1을 string이나 number타입이 아닌 새로운 new 타입으로 봄.
// age1 + 1;

let age2 :unknown = 1;
// 아래도 마찬가지로 오류. 숫자타입이 아닌 unknown타입임.
// age2 + 1;

// 따라서 Narrowing / Assertion 적용하여 엄격하게 코드를 작성하면 됨.

/*
(숙제1) 다음 변수 4개에 타입을 지정
(조건) age 변수엔 undefined 말고 숫자도 들어올 수 있음
*/

let user :string = 'kim';
let age :undefined|number = undefined;
let married :boolean = false; 
let 철수 :(string|undefined|number|boolean)[] = [user, age, married];

/*
(숙제2) 학교라는 변수에 타입지정
타입지정을 안해줬더니 터미널에 에러가 나는군요.
에러안나게 학교라는 변수에 타입좀 지정해줍시다.
*/

let 학교 :{score :(number|boolean)[], teacher :string, friend :string|string[]} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher] 

