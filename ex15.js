//클래스 만들기 2
//생성자 함수에 의한 클래스 만들기
function Pro(name,price){
this.name = name;
this.price = price;
this.getInfo = function(){
    return "제품이름은 "+this.name + "이며, 가격은 "+this.price+"입니다.";
    }  
}
let p1 = new Pro("lee",3000);
let p2 = new Pro("mee",2000);
let p3 = new Pro();
p3.name = "san";
p3.price = 1950;
console.log(p1.getInfo());
console.log(p2.getInfo());
console.log(p3.getInfo());

