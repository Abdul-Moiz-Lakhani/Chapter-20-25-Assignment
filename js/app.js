/*var userName = "Haider Ali Shah";

var index = userName.indexOf("i");

var lastIndex = userName.lastIndexOf("i");

console.log("First index of i: " + index + " and Lastindex of i: " + lastIndex);

*/

/*var get = prompt("Enter any String");

console.log("You inserted: " + get);

for(var i = 0; i < get.length; i++)
{
    console.log(get[i] + " is at the index " + i + "\n");
}*/

/*var userName = prompt("Enter your Name");
userName = userName.toLowercase();
var vowels = [a, e, i, o, u];

var num = 0;

for(var i = 0; i < userName.length; i++)
{
    if( vowels[0] === userName[i] )
    {
        num = num + 1;
    }
}

console.log("You have " + num + " A's in you Name.");*/

/*var string = prompt("Enter any string");

var index = string.length;

console.log("Last Character is " + string.charAt(index-1));*/

/*
var string = prompt("Enter any string with !");

for(var i = 0; i < string.length; i++)
{
    if(string[i] == "!")
    {
        console.log("Yes, there is a Exclamation.");

        break;
    }
    
}*/

/*var names = ["basit","kamran","noman","faizan","muzammil"];
var search =  prompt("Enter name to Search");
search = search.toUpperCase();

for(var i = 0; i < names.length; i++)
{
    names[i] = names[i].toUpperCase();
}
    
if ( names.indexOf(search) != -1 )
{
        console.log("Yes, he is in my list.");
}
else
{
    console.log("No, he is not in my list.");
}
*/

/*// Question # 1

var firstName = prompt("Please Enter First Name");
var lastName = prompt("Please Enter Last Name");

var fullName;

console.log("Your Full Name is " + firstName + " " + lastName);

// Question # 2

var favMobile = prompt("Please Enter your Favorite Mobile");

console.log("Your Favorite Mobile Phone is " + favMobile + "\n");
console.log("Its String Length is: " + favMobile.length);

// Question # 3

var string = "Pakistani";

console.log("String: " + string);

console.log("Index of n is: " + string.indexOf("n"));
*/

// Question # 4

/*var string = "Hello World";

console.log("String: " + string);

console.log("Last Index of 'l' is: " + string.lastIndexOf("l"));
*/

// Question # 5

/*var string = "Pakistani";

console.log("String: " + string);

console.log("Character at 3rd Index is: " + string.charAt(3));
*/

// Question # 6

/*var firstName = prompt("Please Enter First Name");
var lastName = prompt("Please Enter Last Name");

var fullName = firstName.concat(lastName);

console.log("Your Full Name is " + fullName);*/

// Question # 7

/*var string = "Hyderabad";

console.log("City: " + string);

console.log("After replacement: " + string.replace("Hyder", "Islam"));
*/

// Question # 8

/*var message = "Ali and Sami are best friends. They play cricket and football together.";

console.log("Message is: \n" + message);

console.log("After replacement: " + message.replace(/and/g, "&"));
*/

// Question # 11

/*var string = prompt("Please Enter First Name");

console.log("User Input: " + string);
console.log("Upper Case: " + string.toUpperCase());
console.log("Lower Case: " + string.toLowerCase());

var firstChar = string.slice(0, 1);
var otherChars = string.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var firstUpper = firstChar + otherChars;

console.log("First Character in Upper Case: " + firstUpper);
*/

// Question # 11

/*var password = prompt("Enter Password");
var toString = typeof(password);

var firstChar = password.slice(0, 1);

var flag = true;

for(var i = 0; i < 9; i++)
{
    if(firstChar == i)
    {
        flag = false;
        alert("Enter a Valid Password");
    }
    break;
}

if(flag)
{
    if(password.length < 6)
    {
        alert("Enter a Valid Password");
    }
}
*/

// Question # 23

