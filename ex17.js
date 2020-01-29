class Pro {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return this.name+"님은 춘추가 "+this.age+"가 되십니다.";
    }
}
let w1 = new Pro("name1", 30);
let w2 = new Pro("name2", 23);
console.log(w1.getInfo());
console.log(w2.getInfo());