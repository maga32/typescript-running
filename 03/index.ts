// 1강 복습
let myName :string = 'baek';
let age :number = 30;
let married :boolean = true;
let names :string[] = ['baek', 'kim'];
let members :{member1 : string, member2 : string} = { member1: 'baek', member2: 'kim' };

// 굳이 모든곳에 지정 안해도 알아서 지정해줌
let test = 3;

// Q1. 이름, 나이, 출생지역을 변수로 각각 저장
let local :string = 'seoul';

// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 작성
// object 안엔 노래 제목과 가수이름이 들어가면 됩니다.
// 근데 제목과 가수는 문자만 들어올 수 있어야합니다.
let song :{subject :string, singer :string} = {subject : '희망', singer : '박세아,박윤나'}

/*
Q3. 다음과 같이 생긴 자료의 타입지정
let project = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
project 변수 우측에 적으면 됩니다. 
member 안엔 문자로 가득한 array만 들어올 수 있고 
days는 숫자, started는 true/false만 들어올 수 있습니다.
*/
let project :{member :string[], days :number, started :boolean} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}