var a=parseInt(prompt("Enter the first value"));
var operator=prompt("Enter the operator");
var b=parseInt(prompt("Enter the second  value"));
var c;
switch(operator){
case"+":
                   c=a+b;
                   document.write(c);
                    console.log(c);
                   break;
case"-":
                   c=a-b;
                   document.write(c);
                    console.log(c);
                   break;
case"*":
                   c=a*b;
                   document.write(c); 
                    console.log(c);
                   break;
case"/":
                   c=a/b;
                   document.write(c);
                    console.log(c);
                   break;
}
