// interface는 class 또는 객체를 위한 타입을 지정할 때 사용

// interface로 class type 지정하기
interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    // radius: number;

    // constructor(radius: number) {
    //     this.radius = radius;
    // }
    
    // 위의 코드를 아래처럼 작성 가능
    // public 혹은 private 으로 지정가능
    // public 이랑 private은 ts 안에서만 유효함
    constructor(public radius: number) {
        this.radius = radius;
    }
    
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    // width: number;
    // height: number;

    // constructor(width: number, height: number) {
    //     this.width = width;
    //     this.height = height;
    // }

    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// const circle: Circle = new Circle(5);
const circle = new Circle(5);
// const rectangle: Rectangle = new Rectangle(2, 5);
const rectangle = new Rectangle(2, 5);

const shapes: Shape[] = [circle, rectangle];
shapes.forEach(shape => {
    console.log(shape.getArea());
})


// interface로 객체 type 지정하기
interface Person {
    name: string;
    age?: number; // age가 있을 수도 있고 없을 수도 있다
}

interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: 'abde',
    // age: 30
    // skills: ['javascript'] // interface에서 지정하지 않은 것을 넣으려고 하면 IDE에서 error 발생
}

const expert: Developer = {
    name: 'abc',
    age: 30,
    skills: ['javascript', 'react', 'typescript']
}