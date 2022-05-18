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
        document.getElementById("box").style.border = "5px solid #ff9191";
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
        document.getElementById("box").style.border = "5px solid #8447ff";
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
        document.getElementById("box").style.border = "5px solid #ffc823";
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
        document.getElementById("box").style.border = "5px solid #2fc13d";
        document.getElementById("box").style.top = myNum2 * 100 + "px";
    }
}
