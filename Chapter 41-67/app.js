                                           // CHAPTER 38 - 42
// Task 1
// var num = prompt("Enter any number")
// var pow = prompt("Enter its power")
// function power (a,b){
//     var ans = a
//     for(i=1 ; i<b ; i++){
//         ans = ans*a
//     }
//     return ans;
// }
// var a = power(num,pow)
// document.write("Answer : " + a)

// Task 2
// var year = prompt("Enter any year")
// if(year%4 == 0){
//     alert(year + " is a leap year")
// }
// else{
//     alert(year + " is not a leap year")
// }

// Task 3
// var a = prompt("Enter length of side a of triangle in cm")
// var b = prompt("Enter length of side b of triangle in cm")
// var c = prompt("Enter length of side c of triangle in cm") 
// function valueOfS(x, y, z){
//     var ans = ((+x)+(+y)+(+z))/2
//     return ans
// }
// function area(g, h, i){
//     var S = valueOfS(a, b, c)
//     var result = S*((S-g)*(S-h)*(S-i))
//     return result
// }
// var areaOfTriangle = area(a, b, c)
// document.write("Area of the triangle is : " + areaOfTriangle + " cm<sup>3</sup>")

// Task 4
// var sub1 = prompt("Enter marks of first subject")
// var sub2 = prompt("Enter marks of second subject")
// var sub3 = prompt("Enter marks of third subject")
// var full = prompt("Enter total marks of 1 subject")

// function average(x, y, z){
//     var avg = (((+x)+(+y)+(+z))/3)
//     return avg
// }
// function percentage(x, y, z, tot){
//     var avrg = average(sub1, sub2, sub3)
//     var per = (avrg/tot) * 100
//     return per
// }
// function mainFunc(){
//     var avgMarks = average(sub1, sub2, sub3)
//     document.write("Average Marks : " + avgMarks.toFixed(2) + "<br>")
//     var totalPercentage = percentage(sub1, sub2, sub3, full)
//     document.write("Percentage : " + totalPercentage.toFixed(2))
// }
// mainFunc()

// Task 5
// function indexOf(word){
//     var arr = word.split('')
//     var find = 'n'
//     for(i=0; i<word.length ; i++){
//         if(find == word[i]){
//             document.write("Index of letter 'n' in Pakistan is : " + [i])
//         }
//     }
// }
// indexOf("Pakistan")

// Task 6
// var sen = prompt("Enter an sentence (Max length: 25 characters)");
// function removeVowels(str) {
//     return str.replace(/[aeiou]/gi, '');
// }
// var a = removeVowels(sen)
// document.write("Sentence : " + sen + "<br>")
// document.write("After removing vowels : " + a)

// Task 7 incomplete
// var string = prompt('Enter the string to count two vowels in succesion : ');
// var answer = countVowels(string);
// alert('The vowels in succesion are ' + answer + ' times');

// function countVowels(str) {
//   var count = 0;
//   for (var i = 1; i <= str.length; i++) {
//     switch (str[i]) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         if ((str[i] + str[i - 1])){
//           count++;
//         }
//         break;

//       default:
//         break;
//     }
//   }
//   return count;
// }

// Task 8
// var input = prompt("Enter distance between two cities (in km)")
// function inMeter(a){
//     a = a * 1000
//     return a
// }
// function inFeet(b){
//     b = b*3281
//     return b
// }
// function inInch(c){
//     c = c*39370
//     return c
// }
// function inCentimeter(d){
//     d = d*100000
//     return d
// }

// var m = inMeter(input)
// var ft = inFeet(input)
// var inch = inInch(input)
// var cm = inCentimeter(input)
// document.write(input + "km in meter are " + m + "m<br>")
// document.write(input + "km in feet are " + ft + "ft<br>")
// document.write(input + "km in inch are " + inch + "inch<br>")
// document.write(input + "km in centimeter are " + cm + "cm<br>")

// Task 9
// var input = prompt("Enter number of hours you have worked")
// function calcOvertime(a){
//         a = (a-40)*12
//         return a
// }
// if(input > 40){
//     var result = calcOvertime(input)
//     document.write("Your overtime pay of " + (input-40) + " hours is " + result + " rupees")
// }
// else{
//     alert("No overtime pay")
// }

// Task 10
// var input = prompt("Enter amount to withdraw")
// function hundreds(a){
//     a=a/100
//     return Math.floor(a)
// }
// function fifties(b){
//     b = (b%100)/50
//     return b.toFixed(0)
// }
// function tens(c){
//     c = ((c%100)%50)/10
//     return c.toFixed(0)
// }
// var hund = hundreds(input)
// var fif = fifties(input)
// var ten = tens(input)
// document.write("You will have " + hund + " hundred notes, " + fif + " fifty notes and " + ten + " ten notes.")


                                           // CHAPTER 43 - 48
// Task 3
// function deleteRow(e){
//     var table = document.getElementById('table')
//     e.parentNode.parentNode.remove()
// }

// Task 5
// var counter = 0
// function increase(){
//     var a = document.getElementById("count")
//     counter++
//     a.innerHTML = counter

// }
// function decrease(){
//     var a = document.getElementById("count")
//     counter--
//     a.innerHTML = counter

// }



                                           // CHAPTER 49 - 52
// Task 1
// function submit(){
//     var data = document.getElementById("data")
//     var name = document.getElementById("name")
//     var email = document.getElementById("email")
//     var password = document.getElementById("password")

//     var p1 = document.createElement('p')
//     var p1Text = document.createTextNode(name.value)
//     p1.appendChild(p1Text)
//     data.appendChild(p1)
//     p1.value = ""

//     var p2 = document.createElement('p')
//     var p2Text = document.createTextNode("Email : " + email.value)
//     p2.appendChild(p2Text)
//     data.appendChild(p2)
//     p2.value = ""

//     var p3 = document.createElement('p')
//     var p3Text = document.createTextNode("Password : " + password.value)
//     p3.appendChild(p3Text)
//     data.appendChild(p3)
//     p3.value = ""
// }

// Task 2
// function readMore(){
//     var text = "She sat in the darkened room waiting. It was now a standoff. He had the power to put her in the room, but not the power to make her repent. It wasn't fair and no matter how long she had to endure the darkness, she wouldn't change her attitude. At three years old, Sandy's stubborn personality had already bloomed into full view."
//     var para = document.getElementById("para")
//     para.innerHTML = text
// }

// Task 3 incomplete
// var table = document.getElementById("table")
// function submit(){
//     var name = document.getElementById("name")
//     var dept = document.getElementById("dept")
//     var sem = document.getElementById("sem")

//     var tr = document.createElement('tr')
//     var td1 = document.createElement('td')
//     var td1Text = document.createTextNode(name.value)
//     td1.appendChild(td1Text)
//     tr.appendChild(td1)

//     var td2 = document.createElement('td')
//     var td2Text = document.createTextNode(dept.value)
//     td2.appendChild(td2Text)
//     tr.appendChild(td2)

//     var td3 = document.createElement('td')
//     var td3Text = document.createTextNode(sem.value)
//     td3.appendChild(td3Text)
//     tr.appendChild(td3)

//     var td4 = document.createElement('td')
//     var editBtn = document.createElement('button')
//     var editBtnText = document.createTextNode("Edit")
//     editBtn.appendChild(editBtnText)
//     editBtn.setAttribute("onclick", "editRow(this)")
//     td4.appendChild(editBtn)
//     tr.appendChild(td4)

//     var td5 = document.createElement('td')
//     var delBtn = document.createElement('button')
//     var delBtnText = document.createTextNode("Delete")
//     delBtn.appendChild(delBtnText)
//     delBtn.setAttribute("onclick", "deleteRow(this)")
//     td5.appendChild(delBtn)
//     tr.appendChild(td5)

//     table.appendChild(tr)
//     name.value = ""
//     dept.value = ""
//     sem.value = ""
// }
// function deleteRow(e){
//     var table = document.getElementById('table')
//     e.parentNode.parentNode.remove()
// }
// function editRow(e){
//     var val1 = e.parentNode.parentNode.childNodes[1].nodeValue;
//     // var editName = prompt("Edit Name", val1)
//     // e.parentNode.parentNode.childNodes[0].nodevalue = editName
//     console.log(val1)
// }


                                           // CHAPTER 53 - 58
// Task 1
// incomplete

// Task 2
// var para = document.getElementById("para")
// var currTextSize = 15;
// para.style.fontSize = currTextSize + 'px';
// function zoomIn(){
//     currTextSize = +currTextSize + (+10);
//     para.style.fontSize = currTextSize + 'px';
// }
// function zoomOut(){
//     currTextSize = currTextSize - 10;
//     para.style.fontSize = currTextSize + 'px';
// }



                                           // CHAPTER 58 - 67
// Task 1
// // i
// var mainContent = document.getElementById("main-content")
// // ii
// console.log(mainContent.childNodes)
// // iii
// var render = document.getElementsByClassName("render")
// for(var i = 0; i < render.length ; i++){
//     console.log(render[i].innerHTML)
// }
// // iv
// var firstName = document.getElementById("first-name")
// firstName.value = "Vineeta"
// // v
// var lastName = document.getElementById("last-name")
// lastName.value = "Punjabi"
// var email = document.getElementById("email")
// email.value = "vineetapunjabi9@gmail.com"

// Task 2
// // i
// var formContent = document.getElementById("form-content")
// document.write("Node type of element having id 'form-content' is  " + formContent.nodeType)
// // ii
// var lastName = document.getElementById("lastName")
// document.write("Node type of element having id 'lastName' is  " + lastName.nodeType + "<br>")
// document.write("Node type of childNode of element having id 'lastName' is  " + lastName.childNodes[0].nodeType)
// // iii
// var updateNode = document.createTextNode("Last Name : Khan")
// var lastName = document.getElementById("lastName")
// var update = lastName.replaceChild(updateNode, lastName.childNodes[0])
// // iv
// var mainContent = document.getElementById("main-content")
// console.log(mainContent.firstChild)
// console.log(mainContent.lastChild)
// // v
// var last = document.getElementById("lastName")
// console.log(last.nextSibling)
// console.log(last.previousSibling)
// // vi
// var email = document.getElementById("email")
// console.log(email.parentNode)
// console.log(email.nodeType)