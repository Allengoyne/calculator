function calc(){

    var num1, num2;
    var sign = "+";
    var answer;

  function getNum1() {

    num1 = document.getElementById("num1").value;

    return num1;
  }

  function getNum2() {

    num2 = document.getElementById("num2").value;

    return num2;
  }

    function getSign() {

      sign = document.getElementById("sign").value;

      return sign;
  }

    function setAnswer() {

    answer = document.getElementById("answer").value = answer;

    }

    function doCalc(){

      var num1 = getNum1();
      var num2 = getNum2();

      if (getSign() == "*") {
        answer = num1 * num2;
      }
      else if (getSign() == "/") {
        answer = num1 / num2;
      }
      else if (getSign() == "-"){
        answer = num1 - num2;
      }

      else {
        answer = num1 + num2;
      }

      setAnswer();
    }
      doCalc();
}
