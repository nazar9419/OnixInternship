// instead of **** put your name and last name;

const firstName = 'Nazar;'
const lastName = 'Solokha';

// 1. concat first and last name, to create full name e.g (Vitalii Danchul)
const fullName = 'Nazar Solokha';

console.log('1: ', fullName);

// 2. log fullName third character. Please, use more than one solution
console.log('2.1: ',fullName );

let thirdcharacter = 'third character'
console.log("2.2: ",thirdcharacter);


// 3. replace all vowels in fullName with number
const number = 10;
var str = fullName
var newstr = str.replace(/[aeiou]/ig, number);

console.log('3: ', newstr);


// 4. check if replaced string on position 8 ends with number 10

console.log('4: ', );

// 5. log part of fullName from 3 to 7 character
console.log('5: ', str.slice(3,7));

// 6. Divide replaced string by number 10
console.log('6:', newstr.split("10"))

// 7. Write function capitalize(), to capitalize first letter of string 
const lowerCased = 'new york';
function capitalize(str)
{
    str = str.charAt(0).toUpperCase()+str.slice(1);
    return str;
}
console.log('7:', capitalize(lowerCased));

// 8. Write insert function, that will accept main string, string to insert and position to insert
// Change **** with your name 

const mainString = 'Hello, my name is ****, I want to learn Node.js';
function insert(str,strIn,pos){
    str = str.replace(/[*]/g,"");
    str = str.slice(0, pos)+ strIn+str.slice(pos);
    
    return str;

}

console.log('8:' , insert(mainString, fullName, 18))

// 9. Write your own reverse() function. (do not use .reverse())
function reverse(str){

    var newString ="";

    for(var i = str.length -1; i>=0; i--){
        newString +=str[i]
    }
    return newString;
}


console.log('9', reverse('my random string'));


