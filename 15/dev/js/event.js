// 1.객체를 찾는다. Student stu = new Student(); => 객체배열 => Collection Framework
    // Document( 화면에 있는 모든 객체를 다 가지고 있다.) => 어떻게 찾을건데 ( css 선택자기능을 가지고 찾는다)
    //  한개만 찾고 싶다면 id를 줘야한다. class 이름으로 찾으면 => 객체 참조배열[첨자] 반복문을 이용하면 된다.
   let h1obj= document.querySelector('#heading'); 

   // 2. 객체를 내마음대로 설정(기본속성, style속성, 이벤트속성:on, content) : 이벤트설정
   h1obj.onclick =   ()=> {
    h1obj.style.color = "#ff0000"
    window.alert();
   };