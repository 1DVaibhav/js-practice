function helloWorld(){
    console.log("Hello World!, This is my first function.");
}
helloWorld();

//comparing values by using strict equals operator;
function operators(val) {
    if (val === 10) {
      return true;
    }
    return false;
  }
  console.log(operators("10"));//here 10 will not be converted from string to number so o/p will be false;



  //comparing values by using equals operator;

  function operator(val) {
    if (val == 10) {
      return true;
    }
    return false;
  }
  console.log(operator("10"));//"10" wil be convrted to number so o/p will be true;
  