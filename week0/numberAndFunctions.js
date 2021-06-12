
// 1. Write function to get random value in range from -100 to 100
//const random = (num1, num2) => {};
function random(min, max){
    return Math.random() * (max-min)+ min;
}

console.log('1: ', random(-100, 100))

// 2. Write function to check is positive random number, 
const randomTwo = (num1, num2) => {
    var a = Math.random() * (num2-num1)+num1;
    if(a>0){
        return true;
    }
    return false;
}


console.log('2: ', randomTwo(-100, 100));
// output should be boolean

// 3. Write function, which create Array of random numbers. Array length = 6;
// Result of function should be sum of array elements
var randomArr= Array.from({length: 6}, () =>Math.floor(Math.random()*100));

function getArraySum(array){
    const reducer = (value, currentValue)=>value + currentValue;
    var sum =array.reduce(reducer);

    return sum;
}
console.log('3:', getArraySum(randomArr));

// 4. Write function to create random color
//var randomColor = Math.floor(Math.random()*16777215).toString(16);
function getRandomColor()
{
    var num = Math.round(0xffffff*Math.random());
    var r = num>>16;
    var g = num>>8 & 255;
    var b = num & 255;
    return 'rgb('+ r + ', '+ g +', '+ b +')';
}

//console.log('4: ', getRandomColor(*, *, *));
console.log('4: ', getRandomColor());
// output rgb(*, *, *);

// 5. Write function to find out if a number is a natural number or not
function getNaturalNumber(x,y,z,w){
    var a = ' natural ';
    var b = ' not natural';
    var arr = [x , y, z, w];
    var natural ='';
    for(var i =0; i<arr.length; i++)
    {
        if(Number.isInteger(arr[i]))
        {
            natural += arr[i] + a;
        }
        if(!Number.isInteger(arr[i]))
        {
            natural += arr[i] +b;
        }
        
    }
    
    return natural;
}

console.log('5: ', getNaturalNumber(10, 22, -23, 5.4));

// 6. Create function isDivideBy(number, firstDivider, secondDivider). Check if an integer number is divisible by each out of two arguments

/**
 * (45, 1, 6)    ->  false
 * (45, 5, 15)   ->  true
 * 
 * (-12, 2, -6)  ->  true
 * (-12, 2, -5)  ->  false
 */

//console.log('6: ', isDivideBy(*, *, *));