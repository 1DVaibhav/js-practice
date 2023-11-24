//strings in js are immutable;
let toDoList = "Learn React and Springboot";
console.log(toDoList.length);//26;
console.log(toDoList.indexOf("and"));//12;

//slice string
console.log(toDoList.slice(0,5));//Learn ;

//changing string content
vai = toDoList.replace("Springboot","HTML5");
console.log(vai);//"Learn Reat and HTML5";

