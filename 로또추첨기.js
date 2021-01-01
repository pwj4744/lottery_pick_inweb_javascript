// var 후보군 = Array(45); // Array(숫자)로 빈 배열을 만들 수 있어요 목적 : [ 1 ~ 45]
// var 필 = 후보군.fill(); // empty에 다채워넣는다.


// //empty의 특징, foreach를 통해 empty는 반복문이 불가하다는것을 알게됨. 


// 필.forEach(function(요소, 인덱스) {
//     필[인덱스] = 인덱스 + 1; // 1~ 45 까지 만들어주기 위해 
// }); // 뭐지 요소, 인덱스 ?
// console.log(필);

// // foreach 를 이용해서 [1 ~45 ]까지 만들기

// // [undefined, undefined, undefined];
// // [1, 2, 3]; 으로 바꾼거임

// // 더좋은 방법 2 mapping , 맵

// var 후보군 = Array(45); // Array(숫자)로 빈 배열을 만들 수 있어요 목적 : [ 1 ~ 45]
// var 필 = 후보군.fill(); // empty에 다채워넣는다.


//empty의 특징, foreach를 통해 empty는 반복문이 불가하다는것을 알게됨. 


// var 맵 = 필.map(function(요소, 인덱스) {
//     return 인덱스 + 1; // 1~ 45 까지 만들어주기 위해 
// }); // 뭐지 요소, 인덱스 ?
// console.log(맵);

// var 맵 = Array(45).fill().map(function(요소, 인덱스 ))로 한방에 쓸수도 있음. 


var 후보군 = Array(45).fill().map(function (요소, 인덱스) {
    return 인덱스 + 1;
});

var 셔플 = [];
while (후보군.length > 0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
} // for문은 내가 몇번 반복해야하는지 알 때 사용 while문은 내가 반복몇번해야 할지 모를때 사용 

console.log(셔플);
var 보너스 = 셔플[셔플.length - 1];
var 당첨숫자들 = 셔플.slice(0, 6); // 6은 포함이 안됨.
console.log('당첨숫자들', 당첨숫자들.sort(function (p, c) { return p - c; }), '보너스' , 보너스);
// sort의 이유 뺀 결과가 0 보다 크면 순서를 바꿉니다. 


// html을 자바스크립트로 가져오는

var 결과창 = document.getElementById('결과창');
// document.querySelector('#결과창') 쿼리셀렉터  **  쿼리셀렉터가 더 편하다. 근데 차이가 있긴하다.

// setTimeout(function 비동기콜백함수() { // 비동기로 몇초후에 실행하게 하겠다. , 클로저(closure) 문제
//     var 공 = document.createElement('div');
//     공.textContent = 당첨숫자들[i]
//     결과창.appendChild(공);
// }, 1000);


// for문안에 비동기함수가 들어있는 경우 클로져 문제

// for ( var i = 0; i < 당첨숫자들.length; i += 1) {
function 공색칠하기(숫자, 결과창) {
    var 공 = document.createElement('div');
        공.style.display = 'inline-block';
        공.style.border = '1px solid black';
        공.style.borderRadius = '10px';
        공.style.width = '20px';
        공.style.hegiht = '20px';
        공.style.textAlign = 'center';
        공.textContent = 숫자;
        공.style.marginRight = '10px';
        var 배경색;
        if (숫자 <= 10) {
            배경색 = 'red';
        } else if (숫자 <= 20) {
            배경색 = 'orange';
        } else if (숫자 <= 30) {
            배경색 = 'yellow';
        } else if (숫자 <= 40) {
            배경색 = 'blue';
        } else {
            배경색 = 'green';
        }
        공.style.background = 배경색;
        결과창.appendChild(공);
} 

    setTimeout(function 비동기콜백함수() { // 비동기로 몇초후에 실행하게 하겠다. , 클로저(closure) 문제
        공색칠하기(당첨숫자들[0], 결과창);
    }, 1000);
    setTimeout(function 비동기콜백함수() { // 비동기로 몇초후에 실행하게 하겠다. , 클로저(closure) 문제
        공색칠하기(당첨숫자들[1], 결과창);
    }, 2000);
    setTimeout(function 비동기콜백함수() { // 비동기로 몇초후에 실행하게 하겠다. , 클로저(closure) 문제
        공색칠하기(당첨숫자들[2], 결과창);
    }, 3000);
    setTimeout(function 비동기콜백함수() { // 비동기로 몇초후에 실행하게 하겠다. , 클로저(closure) 문제
        공색칠하기(당첨숫자들[3], 결과창);
    }, 4000);
    setTimeout(function 비동기콜백함수() { // 비동기로 몇초후에 실행하게 하겠다. , 클로저(closure) 문제
        공색칠하기(당첨숫자들[4], 결과창);
    }, 5000);
    setTimeout(function 비동기콜백함수() { // 비동기로 몇초후에 실행하게 하겠다. , 클로저(closure) 문제
        공색칠하기(당첨숫자들[5], 결과창);
    }, 6000);
    
// }

setTimeout(function 비동기콜백함수() { // 비동기로 몇초후에 실행하게 하겠다. , 클로저(closure) 문제
    var 칸 = document.getElementsByClassName('보너스')[0];
    공색칠하기(보너스, 칸);
}, 7000);

