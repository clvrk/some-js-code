//function sayHello() {
 //   console.log('Hello, World!')
//}
//var sayGoodbye = function() {
//    console.log('Goodbye, World!')
//}

function distanceProblem(x1, y1, x2, y2) {
    let deltaX = x2-x1;
    let deltaY = y2-y1;
    let powerOne = Math.pow(deltaX, 2);                                            
    let powerTwo = Math.pow(deltaY, 2);
    let sum = powerOne + powerTwo;
    let distance = Math.sqrt(sum)
    return distance;
}

let distance = distanceProblem(3, 5, 7, 9)
console.log (distance)

function doSomething() {
    if (2 < 4) {
        let a = 14
        console.log(a)
    }
}
doSomething();