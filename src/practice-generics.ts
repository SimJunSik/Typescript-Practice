// generics는 ts에서 함수, 클래스, interface, type alias를 사용할 때
// 여러 종류의 타입에 대해 호환을 맞춰야 할 때 사용하는 문법
// type을 any라고 지정하게 되면 return값도 any로만 나옴
// generics를 적용하면 type을 제대로 확인 가능

// function - generics
function merge<T1, T2>(a: T1, b: T2) {
    return {
        ...a,
        ...b
    }
}
const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });

function wrap<T>(param: T) {
    return {
        param
    }
}
const wrapped = wrap(10);

// interface - generics
interface Items<T> {
    list: T[];
};
const items: Items<string> = {
    list: ['a', 'b', 'c']
};

// type alias - generics
type tItems<T, V> = {
    list: T[];
    value: V
};
const titems: tItems<number, string> = {
    list: [1, 2, 3],
    value: 'aaa'
};

// class - generics
class Queue<T> {
    list: T[] = [];

    // getter setter는 정보 은닉을 위해 사용
    get length() {
        return this.list.length;
    }

    enqueue(item: T) {
        this.list.push(item);
    }

    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

while(queue.length > 0){
    console.log(queue.dequeue());
}

