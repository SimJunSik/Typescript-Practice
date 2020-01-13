// type alias(별칭)는 interface와 비슷한 역할
// type alias는 extend 되거나 implements 될 수 없음
// 확장성을 생각한다면 type alias 보다는 interface를 사용
// interface로 표현할 수 없는 shape이고 union, tuple을 이용해야 한다면 type alias를 사용

type tPerson = {
    name: string;
    age?: number; 
}

type tDeveloper = tPerson & {
    skills: string[];
}

const tperson: tPerson = {
    name: 'abde',
    // age: 30
    // skills: ['javascript'] // interface에서 지정하지 않은 것을 넣으려고 하면 IDE에서 error 발생
}

const texpert: tDeveloper = {
    name: 'abc',
    age: 30,
    skills: ['javascript', 'react', 'typescript']
}

type People = tPerson[];
const people: People = [tperson, texpert];

type Color = 'red' | 'orange' | 'yellow';
const tcolor: Color = 'red';

