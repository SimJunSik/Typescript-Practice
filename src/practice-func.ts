// 두 number를 매개변수로 받고, return 값도 number
function sum(x: number, y: number): number {
    return x + y;
}

const result = sum(1, 2);
console.log(result);

// number array를 받아서 요소의 총 합(number) 를 return
function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1,2,3,4,5]);
console.log(total);

// return 값이 없을 때
function returnNothing(): void{
    console.log("qwokdo");
}

returnNothing();

// return값이 string 혹은 number
function returnStringOrNumber(): string | number {
    return 'abcd';
    // return 4;
}

returnStringOrNumber();