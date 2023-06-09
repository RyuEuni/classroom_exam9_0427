//business logic
//% 나머지 값을 내는 연산자 "%"
// 7 % 2 = 1
//숫자 7을 2로 나눈 나머지 값은 1이다.
// 8 % 2 = 0
//숫자 8을 2로 나눈 나머지 값은 0이다.

//홀수 odd number, 짝수 even number를 구분하는 근거로
//2로 나눈 값의 '몫'을 제외한 나머지가 0이면 짝수 0이 아니면 홀수라는 결론이 나온다.

//work: 오라클 빌딩에는 두개의 엘레베이터가 있다.

function oddElevator(floorNumber){

}

function evenElevator(floorNumber){

}

//홀수 전용 짝수 전용 엘레베이터 두개가 마련되어 있지만, 예외가 발생한다.
//짝수 엘레베이터는 1층도 가능하게 설계되어있다.
//홀수 엘레베이터는 10층도 가능하게 설계되어있다.
//짝수 홀수 엘레베이터 둘다 지하1층 -1까지 가능하게 설계되어있다.

//ESM 모듈 방식으로 사용가능한
//npm install inquirer 모듈을 설치하여
//지하 1층부터 10층까지의 숫자를 입력할 수 있는 인터페이스를 제작한다.
//"문을 열겠습니다"라는 문구가 나오게 한다.
//1초뒤에 "n층에 도착하였습니다"라는 문구가 나오게 한다.
//"문을 닫습니다"라는 문구가 나오게 한다.

/**
 * 위의 설명을 종합하여 orderlist(순서가 있는 목록)로
 * 예상되는 절차를 술어로 작성해보세요.
 */

//? 예상되는 절차
//* 1. 사용자에게 층수를 입력받을 수 있게 inquirer 모듈을 설치한다.
//* 2. 홀수 전용 엘레베이터는 oddElevator함수에 짝수 전용 엘레베이터는 evenElevator함수에 각 층에 도착했을 때 출력해 줄 문구를 setTimeout과 console.log를 이용해 작성해준다.
//* 3. 함수 아래쪽에 inquirer.prompt로 원하는 층수와 홀수, 짝수 엘레베이터 중 어떤 것을 이용할지 값을 받도록 해준다.
//* 4. 입력 받은 값을 처리해주는 로직을 %연산자를 이용해 작성해준다.
//* 5. 이때 입력 값이 -1일 땐 true값을 반환해 홀수, 짝수 어느 것이든 실행될 수 있게 해준다.
//* 6. 짝수 엘레베이터를 선택했는데 1층을 입력했거나 홀수 엘레베이터를 선택했는데 10을 입력했을 때에도 함수가 실행될 수 있도록 true값을 반환하도록 해준다.