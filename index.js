//Question -> 1 nth fibonacci number


var num1 = 0;
var num2 = 1;
var num3 = prompt("enter a num  ex:1,2,3.." );
num3 = parseInt(num3);
var num4;
if (isNaN(num3)||num3<=0){
	alert("please enter a valid number");
	console.log("please enter a valid number");}
else if (num3==1){
	alert(num3 + "st fibonacci number is " + num1);
	console.log(num3 + "nd fibonacci number is " + num1);
	}
else if(num3==2){
	alert(num3 + "th fibonacci number is " + num2);
	console.log(num3 + "th fibonacci number is " + num1);}
else{
	for (var i=3;i<=num3;i++){	
		num4 = num1+num2;
		//console.log(num4)
		num1=num2;
		num2=num4;
	}
	alert(num3 + "th fibonacci number is " + num4);
	console.log(num3 + "th fibonacci number is " + num4);
}


//Question -> 2 '1' to 'n' prime numberes

var n = prompt("enter a num" );
n = parseInt(n);
var str ="";
if(isNaN(n)||n<=1){
	alert("please enter a valid number")}
for(var i=1;i<=n;i++ ){
	var sum = 0;
	for(var j=1;j<=i/2;j++){
		if(i%j==0){
			sum=sum+j;}
	}
	if (sum==1){
		str = str + i + " ";}
}
alert("prime numbers from 1 to " + n +" are " + str);
console.log("prime numbers from 1 to " + n +" are " + str);
