const map = new Map();
map.set("01","a");
map.set("02","b");
map.set("03","c");

console.log("## for each with arrow ##");
map.forEach((value, key) => console.log(key, value));
console.log("## for-of ##"); //for-in [X], for-of[0]
for(let item of map){console.log(item[0],item[1]);}
console.log("## for-of2 ##");
for(let [key, value] of map){ console.log(key,value); }
console.log("## key값 만 추출하는 keys() ##");
const key = map.keys();  //keys()메서드는 Map의 key값만 별도로 추출함
for(let key of keys){
    console.log(map.get(key)); //map.get(key) - 맵에 기억된 데이터 출력
}
console.log("## map.get(key) ##");
console.log("key가 02인데이터 : "+map.get("02"));
map.delete("02"); //key가 02데이터 소거
console.log("02를 삭제한 후 값은?", map.has("02"));
//map.has(key) : 메모리맵에 key에 해당하는 값이 존재하는지 true 나 false로 유무출력

