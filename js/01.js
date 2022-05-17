// document.write("자바스크립트 기초");
// console.log("헬로헬로");


/*
// < 변수 >

console.log(box);
// -> error

var box;
console.log(box);
// -> undefined

var box = 100;
console.log(box);
// -> 100

box = "안녕";
console.log(box);
// -> 안녕
// 오마이갓 자바스크립트는 스크립트 나부랭이

var a = 100;
var b = "100";
console.log(typeof(a)); // -> number
console.log(typeof(b)); // -> string
// -> typeof : 타입을 알려줌

var tag = "<h1>js 기초</h1>";
console.log(tag);
console.log(typeof(tag));
document.write(tag);
// -> 태그와 함께 쓰면 태그 속성 반영





var s = "100";
var t = 30;
var d = 100;

console.log(s);
console.log(typeof(s)); // -> string
console.log("-----");
console.log(s + t); // -> 여기서 +는 연결연산자.
console.log(typeof(s + t)); // -> string
console.log("-----");
console.log(t + d); // -> 여기서 +는 더하기 연산자
console.log(typeof(t + d)); // -> number

console.log(Number(s) + t); // 변환함수





var s1 = true;
var s2 = "true";
var s3 = false;

console.log(s1);
console.log(typeof(s1)); // -> boolean
console.log("-----");
console.log(s2);
console.log(typeof(s2)); // -> string
console.log("-----");
console.log(s3);
console.log(typeof(s3)); // -> boolean





var s1 = 0; 
var s2 = 5;
var s3 = null;
var s4 = ""; //?수업놓침

console.log(s1);
console.log(typeof(s1)); // -> number
console.log(Boolean(s1)); // -> 0 : false(값이 없음)
console.log("-----");
console.log(s2);
console.log(typeof(s2)); // -> string
console.log(Boolean(s2)); // -> true(값이 있음)
console.log("-----");
console.log(s3);
console.log(typeof(s3)); // -> object
console.log(Boolean(s3)); // -> false(값이 없음)
console.log(Boolean(s4)); //?수업놓침





var s;
var t = null;

console.log(s); // -> undefined(값이 정의되지 않음)
console.log(t); // -> null(값이 없다)


// 비교연산자
console.log(10<5); // -> false
console.log(2<5); // -> true

*/


// 결론 : 변수에 다양한 값을 담을 수 있다!










// < 함수 >

/*
var myNum = 100; //-> 전역변수
// 함수 선언
function test(){
    var myNum = 10; //-> 지역변수
    console.log("함수 안 :" + myNum); //-> 10
}

console.log("함수 밖1 : " + myNum); //-> 100

// 함수 호출
test();
console.log("함수 밖2 : " + myNum); //-> 100





// 중간 함수 호출O
var num1 = 10;
console.log(num1);

function test() {
    var num1 = 20;
    console.log("{} : " + num1);
}
test();
console.log(num1);


console.log("-----");


// 중간 함수 호출X
var num2 = 10;
console.log(num2);

function test() {
    var num2 = 20;
    console.log("{} : " + num2);
}
console.log(num2);





//var
var num1 = 10;
console.log(num1);

var num1 = 30;
console.log(num1);


//let
let num2 = 10;
console.log(num2);

let num3 = 20;
console.log(num3);


//const
const myName = "임주현";
let L_age = 21;
let L_height = 158;

console.log(myName);
console.log(L_age);
console.log(L_height);

// const myName = "임지현"; //오류
L_age = 22;
L_height = 180;

console.log(myName);
console.log(L_age);
console.log(L_height);




let num1 = 100;
console.log(num1);

{
    let num1 = 50;
    console.log(num1);
}
// let은 블록 레벨 스코프. 
// var과 같지만 { } 내에서 이미 선언한 변수를 중복 선언할 수 없음. 
// 블록 { }, 제어문 블록 { } 내에서도 지역 변수가 존재. 

// test();
console.log(num1);
*/



/*
결론
var : 재선언, 재할당 가능
let : 재선언 불가능, 재할당 가능
const : 재선언 불가능, 재할당 불가능
*/







// < 연산자 >

// 산술연산자
/*
let  num1 = 15;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
*/


// 문자 결합 연산자
/*
- 문자 결합 연산자는 피연산자 중 문자형 데이터를 포함. 
- 여러개 문자를 하나의 문자형 데이터로 결합할 때 주로 사용함. 
- 숫자 + 숫자 + 문자 의 경우 숫자와 숫자를 먼저 연산.
*/


// 대입연산자
/*
- 대입 연산자(=)는 연산된 데이터를 최종적으로 변수에 저장할 때 사용. 
- 복합 대입 연산자(+=, -=, *=, /=, %=) : 산술 연산자와 대입 연산자가 복합적으로 적용된 것. 


// 증감연산자
// ...
*/

window.onload = function(){
    let myNum = 0;
    let myNum2 = 0;
    const totalNum = 3;
    const totalNum2 = 3;

    // 함수 : 실행문 저장
    function numSetting(){
        // 아이디 선택자로 아이디 값이 num인 요소 찾기.
        // 그 요소 안의 텍스트를 myNum 값으로 변경.
        document.getElementById("num").innerText = `◀ ▶
        `+ myNum;
    }
    function numSetting2(){
        // 아이디 선택자로 아이디 값이 num인 요소 찾기.
        // 그 요소 안의 텍스트를 myNum 값으로 변경.
        document.getElementById("num2").innerText = `▲ ▼
        `+ myNum2;
    }

    // 아이디 값이 left_btn인 요소를 클릭했을 때 실행되는 함수
    document.getElementById("left_btn").onclick = function(){
        if(myNum == -3){
            myNum = totalNum;
        }else{
            myNum--;
        }
        numSetting();
        document.getElementById("box").style.backgroundColor = "#ff9191";
        document.getElementById("box").style.left = myNum * 100 + "px";
    }

    // 아이디 값이 right_btn인 요소를 클릭했을 때 실행되는 함수
    document.getElementById("right_btn").onclick = function(){
        if(myNum == totalNum){
            myNum = -3;
        } else{
            myNum++;
        }
        numSetting();
        document.getElementById("box").style.backgroundColor = "#8447ff";
        document.getElementById("box").style.left = myNum * 100 + "px";
    }

    // 아이디 값이 up_btn인 요소를 클릭했을 때 실행되는 함수
    document.getElementById("up_btn").onclick = function(){
        if(myNum2 == -3){
            myNum2 = totalNum2;
        }
        else{
            myNum2--;
        }
        numSetting2();
        document.getElementById("box").style.backgroundColor = "#ffc823";
        document.getElementById("box").style.top = myNum2 * 100 + "px";
    }

    // 아이디 값이 down_btn인 요소를 클릭했을 때 실행되는 함수
    document.getElementById("down_btn").onclick = function(){
        if(myNum2 == totalNum2){
            myNum2 = -3;
        } else{
            myNum2++;
        }
        numSetting2();
        document.getElementById("box").style.backgroundColor = "#2fc13d";
        document.getElementById("box").style.top = myNum2 * 100 + "px";
    }
}
