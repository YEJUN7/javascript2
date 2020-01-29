






const u1 = {name:"1111"};
const u2 = {name:"2222"};
const u3 = {name:"3333"};
const u4 = {name:"4444"};
const u5 = {name:"3333"}; //키값 중복 ok 


const uRole = new Map();
uRole.set(u1, "kim");
uRole.set(u2, "lee");
uRole.set(u3, "park");
uRole.set(u4, "song");
uRole.set(u5, "chang");  //중복된 키에도 데이터저장
console.log(uRole.has(u2));
console.log(uRole.has(u4));
console.log(uRole.get(u3));
console.log(uRole.size);

for(let u of uRole.keys()){ console.log(u.name); } //키만 출력
for(let u of uRole.values()) {console.log(u);} //값만 출력
for(let u of uRole.entries()) {console.log(u);} //전체 출력
