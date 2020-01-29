let obj1 = { id:"sikickpoce", site:"naver.com", name:"yejun"};
for(var key in obj1){
    console.log(key+" = "+obj1[key]);
}

let obj2 = [{name:"a", age: 20},{name:"b",age:22}, {name:"3",age:24}];
for(var i=0;i<3;i++){
    for(var key in obj2[i]){
        console.log((i+1)+"번째 데이터의 "+key+" = "+obj2[i][key]);
    }
}