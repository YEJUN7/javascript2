let st = {
    'id':002,
    'name': "yejun",
    'scores':[20,30,40,50],
'getTotalScore':function(){
    return this.scores.reduce((prev, curr) => prev+curr);
    }
};
console.log(st.name+"님의 점수는 "+st.getTotalScore()+"입니다.");
//위 예제에서 st를 인스턴트라고 하며, id/name/scores 등을 속성(프로퍼티)라고 하고 
//getTotalScore를 메서드라고 한다.
//인스턴트: 클래스에 의해 만들어진 언제든지 데이터가 변할 수 있는 객체로서 클래스로 부터 유도되어 진다.
//클래스: 각기 다른 하나 이상의 속성(맴버변수=프로퍼티)과 맴버 메서드로 이루어지며 객체 인스턴트를 만들기 위한 모임(집합)
//속성(맴버변수): 객체가 가지는 속성 값을 저장하기 위한 피라미터
//매서드(맴버 메서드): 객체가 처리해야 할 일을 정의 하기 위한 파라미터
//this : 객체 자기 자신을 의미