                                         // Chapter 21 - 25
// Task 1
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName+lastName
// alert("Welcome to our Website " + fullName)

// Task 2
// var favPhone = prompt("What is your favorite mobile phone model?")
// document.write("My favorite phone is : " + favPhone + "<br>")
// document.write("Length of string : " + favPhone.length)

// Task 3
// var string = "Pakistani"
// document.write("String : " + string + "<br>");
// document.write("Index of 'n' : " + string.indexOf("n"));

// Task 4
// var string = "Hello World"
// document.write("String : " + string + "<br>");
// document.write("Last Index of 'l' : " + string.lastIndexOf("l"));

// Task 5
// var string = "Pakistani"
// document.write("String : " + string + "<br>");
// document.write("Character at index 3 : " + string.charAt(3));

// Task 6
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// alert("Welcome to our Website " + firstName.concat(lastName))

// Task 7
// var city = "Hyderabad"
// document.write("City : " + city + "<br>")
// document.write("After replacement : " + city.replace("Hyder","Islam"))

// Task 8
// var message = " “Ali and Sami are best friends. They play cricket and football together.”"
// document.write("Message : " + message + "<br>")
// document.write("After replacement messeage : " + message.replace(/and/g,"&"))

// Task 9
// var string = "472"
// var num = Number(string)
// document.write("Value : " + string + "<br>")
// document.write("Type: " + typeof(string) + "<br>")
// document.write("Value : " + num + "<br>")
// document.write("Type: " + typeof(num))

// Task 10
// var data = prompt("Enter any data to convert in Upper case")
// dataUpper = data.toUpperCase()
// document.write("User Input : " + data + "<br>")
// document.write("Upper Case : " + dataUpper)

// Task 11
// var input = prompt("Enter any input to convert in Title Case")
// title = input.toLowerCase().split(' ')
// for(var i = 0 ; i < title.length ; i++){
//     title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1)
// }
// titlecase = title.join(' ');
// document.write("User Input : " + input + "<br>")
// document.write("Title Case : " + titlecase)

// Task 12
// var num = 35.36
// var string = num.toString()
// document.write("Number: " + num + "<br>")
// document.write("Result: " + string.replace(".",""))

// Task 13
// var name = prompt("Enter your name")
// if (name.indexOf('@') > -1 || name.indexOf('!') > -1 || name.indexOf(',') > -1 || name.indexOf('.') > -1)
// {
//   alert("Please enter a valid username");
// }

// Task 14
// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var item = prompt("Welcome ABC Bakery. What do you wan to order Sir / Ma,am?")
// item = item.toLowerCase()
// for(var i = 0 ; i<a.length ; i++){
//     if(item === a[i]){
//         document.write(item + " is <b>available</b> at index " + [i] + " in our bakery")
//     }  
// }
// if (item != a[0] && item != a[1] && item != a[2] && item != a[3] && item != a[4]){
//     document.write("We are sorry. " + item + " is <b>not available</b> in our bakery")
// } 

// Task 15
// var password = prompt("Enter Your Password")
// document.write("Entered Password : " + password + "<br>")
// for(var i = 0; i < password.length ; i++){
//     if((password.charCodeAt(i) < 97 || password.charCodeAt(i) > 122) && (password.charCodeAt(i) < 65 || password.charCodeAt(i) > 90) && (password.charCodeAt(i) < 48 || password.charCodeAt(i) > 57)){
//         document.write("Password must contain alphabets and numbers only.<br>Please enter a vaild password<br><br>")
//         break;
        
//     }
// }
// if(password.charCodeAt(0) > 48 && password.charCodeAt(0) < 57){
//     document.write("Password can not begin with a number.<br>Please enter a vaild password<br><br>")
// }
// if(password.length < 6){
//     document.write("Password must be atleast 6 characters long.<br>Please enter a vaild password")
// }

// Task 16
// var uni = "University of Karachi"
// uni = uni.split("")
// for(var i = 0 ; i < uni.length ; i++){
//     document.write(uni[i] + "<br>")
// }

// Task 17
// var input = prompt("Enter any word")
// document.write("User input: " + input + "<br>")
// document.write("Last character of input: " + input.charAt(input.length - 1))

// Task 18
// var str = "The quick brown fox jumps over the lazy dog"
// str1 = str.toLowerCase()
// document.write("Text: " + str + "<br>")
// str2 = str1.split('the').length-1
// document.write("There are " + str2 + " occurence(s) of word 'the'")



                                         // Chapter 26 - 30
// Task 1
// var inp = prompt("Enter a positive integer")
// inpRounded = Math.round(inp)
// inpCeil = Math.ceil(inp)
// inpfloor = Math.floor(inp)
// document.write("Number: " + inp + "<br>")
// document.write("Round off value: " + inpRounded + "<br>")
// document.write("Floor value: " + inpfloor + "<br>")
// document.write("Ceil value: " + inpCeil + "<br>")

// Task 2
// var inp = prompt("Enter a negative integer")
// inpRounded = Math.round(inp)
// inpCeil = Math.ceil(inp)
// inpfloor = Math.floor(inp)
// document.write("Number: " + inp + "<br>")
// document.write("Round off value: " + inpRounded + "<br>")
// document.write("Floor value: " + inpfloor + "<br>")
// document.write("Ceil value: " + inpCeil + "<br>")

// Task 3
// var inp = prompt("Enter any number to see its absolute value")
// inpAbs = Math.abs(inp)
// document.write("The absolute value of " + inp + " is " + inpAbs)

// Task 4
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("random dice value : " + numberOfStars)

// Task 5
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 2) + 1;
// var numberOfStars = Math.floor(improvedNum);
// if(numberOfStars === 1){
//     document.write(numberOfStars + "<br>")
//     document.write("random coin value : Tails")
// }
// else if(numberOfStars === 2){
//     document.write(numberOfStars + "<br>")
//     document.write("random coin value : Heads")
// }

// Task 6
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write(" random number between 1 and 100: " + numberOfStars)

// Task 7
// var weight = parseFloat(prompt("Enter your weight in kilograms"))
// document.write("The weight of user is " + weight + " kilograms.")

// Task 8
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 10) + 1;
// var numberOfStars = Math.floor(improvedNum);
// var input = prompt("Enter a number between 1 and 10")
// if(input === numberOfStars){
//     alert("Congratulations!!")
// }
// else{
//     alert("Try again!!")
// }
// document.write("Correct number is: " + numberOfStars)



                                         // Chapter 31 - 34
// Task 1
// var date = new Date();
// document.write(date);

// Task 2
// var date = new Date()
// var months = ["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"]
// var month = date.getMonth()
// alert("Current month : " + months[month])

// Task 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// alert("Today is " + dayNames[theDay]);

// Task 4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// if(theDay == 0 || theDay == 6){
//     alert("It’s Fun day")
// }
// else{
// alert("Today is " + dayNames[theDay]);
// }

// Task 5
// var now = new Date();
// date = now.getDate();
// if(date < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// Task 6
// var now = new Date();
// ms = now.getTime();
// minutes = ms/(1000*60)
// document.write("Current Date: " + now + "<br>")
// document.write("Elapsed milliseconds since January 1, 1970: " + ms + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + minutes)

// Task 7
// var now = new Date()
// hours = now.getHours()
// if(hours < 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// Task 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date : " + laterDate)

// Task 9
// var Ramadan = new Date("April 24, 2020")
// var now = new Date()
// Rday = Ramadan.getTime()
// today = now.getTime()
// diff = today - Rday
// days = diff/(1000*60*60*24)
// totalDays = Math.round(days)
// document.write(totalDays + " days have passed since 1st Ramadan, 2020")

// Task 10
// var ref = new Date()
// document.write("On reference date: " + ref + "<br>")
// var since = new Date("January 01, 2020")
// refMS = ref.getTime()
// sinceMS = since.getTime()
// var diff = (ref - since)/(1000)
// document.write(Math.round(diff) + " seconds had passed since beggining of 2020")

// Task 11 
// var curr = new Date();
// hour = curr.getHours()
// curr.setHours(hour+1)
// document.write("current date: " + curr + "<br>")
// var now = new Date()
// document.write("1 hour ago, it was " + now + "<br>")

// Task 12
// var now = new(Date)
// var back = new Date()
// back.setFullYear(1920)
// alert("Current date: " + now)
// alert("!00 years back, it was " + back)

// Task 13
// var age = prompt("Enter your age")
// document.write("Your age is : " + age + "<br>")
// var now = new Date()
// year = now.getFullYear()
// yob = year - age
// document.write("Your birth year is : " + yob)

// Task 14
// document.write("<h1>K-Electric Bill</h1>")
// var name = prompt("Enter Customer Name")
// document.write("Customer name: <b>" + name + "</b><br>")
// var month = prompt("Enter Momth")
// document.write("Month: <b>" + month + "</b><br>")
// var units = prompt("Enter Number of Units")
// document.write("Number of units: <b>" + units + "</b><br>")
// var charges = 16
// document.write("Charges per unit: <b>" + charges + "</b><br><br>")
// var nap = units*charges
// document.write("Net Amount Payable (within due date): <b>" + nap + "</b><br>")
// var late = 350
// document.write("Late Payment Surcharge: <b>" + late + "</b><br>")
// var gap = (+nap) + (+late) 
// document.write("Gross Amount Payable (after due date): <b>" + gap + "</b><br>")



                                         // Chapter 35 - 38
// Task 1
// function date(){
//     var now = new Date()
//     document.write(now)
// }
// date();

// Task 2
// function greeting(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     alert("Welcome " + firstName + " " + lastName)
// }
// greeting();

// Task 3
// function addition(){
//     var num1 = prompt("Enter first number")
//     var num2 = prompt("Enter second number")
//     sum = (+num1) + (+num2)
//     return sum
// }
// var a = addition();
// alert("Sum of two numbers is: " + a)

// Task 4
// function calculator(num1, num2, operation){
//     var sum;
//     if(operation == '+'){
//         sum = (+num1) + (+num2)
//     }
//     else if(operation == '-'){
//         sum = num1 - num2
//     }
//     else if(operation == '*'){
//         sum = num1 * num2
//     }
//     else if(operation == '/'){
//         sum = num1 / num2
//     }
//     return sum
// }
// var a = calculator(9, 3, "/")
// document.write("Answer = " + a)

// Task 5
// function square(num){
//     var sq = num*num
//     return sq;
// }
// var a = square(9);
// document.write("Square of argument = " + a)

// Task 6
// function factorial(num){
//     var fac = 1
//     for(var i = 1 ; i <= num; i++){
//         fac = fac*i
//     }
//     return fac
// }
// var a = factorial(6);
// document.write("Factorial = " + a)

// Task 7
// function counting(){
//     var start = prompt("Enter start number")
//     var end = prompt("Enter end number")
//     for(i = start ; i <= end ; i++){
//         document.write(i + "<br>")
//     }
// }
// counting()

// Task 8
// function hypotenuse(base, tri){
//     function square(num){
//         var sq = num*num
//         return sq
//     }
//     var base = square(base)
//     var tri = square(tri)
//     var sum = (+base) + (+tri)
//     var hyp = Math.sqrt(sum)
//     return hyp
// }
// var answer = hypotenuse(2,4)
// document.write(answer)

// Task 9
// function calcArea(width, height){
//     var area = width*height
//     return area;
// }
// // argument as variable
// var w = 5
// var h = 4
// var totalArea = calcArea(w,h)
// document.write("Area = " + totalArea + " cm<sup>2</sup>")
// // argument as value
// var totalArea = calcArea(3,6)
// document.write("Area = " + totalArea + " cm<sup>2</sup>")

// Task 10
// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// var a = palindrome("noon")
// alert(a)

// Task 11
// function titleCase(str="the quick brown fox") {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }
//   var a = titleCase();
//   document.write(a)

// Task 12
// function longestWord(str = "Web Tutorial Development"){
//     str = str.split(' ');
//     var result = str[0];
//     for(var i = 1 ; i < str.length ; i++)
//     {
//       if(result.length < str[i].length)
//       {
//       result = str[i];
//       } 
//     }
//     return result;
// }
// var a = longestWord()
// document.write(a)

// Task 13
// function occcurence(str, ltr){
//     str = str.toLowerCase().split(ltr).length-1
//     return str
// }
// var a = occcurence("JSResourceS.com", "o")
// alert(a + " times")

// Task 14
// var rad = 4
// function calcCircumference(radius){
//     var circ = 2 * 3.142 * radius
//     return circ
// }
// function calcArea(radius){
//     var area = 3.142 * radius * radius
//     return area
// }
// var a = calcCircumference(rad)
// document.write("The circumference is: " + a + "<br><br>")
// var b = calcArea(rad)
// document.write("The area is: " + b)