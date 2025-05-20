//전체 document 메모리 모두가 로드가 되었을때 onLoad함수 콜
function onLoad() {
  //id 패턴 검색을 진행할 이벤트 정의
  let idPattern = /^[\w]{3,12}$/;
  let pwPattern = /^[\w]{6,8}$/;
  let namePattern = /^[가-힣]{1,4}|[a-zA-Z]{1}[a-zA-Z\x20]{1,10}$/;
  let nicknamePattern = /^[가-힣]{2,}|[a-zA-Z]{4,}$/;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let telPattern = /^(0\d{1,2})-(\d{3,4})-(\d{4})$/;
  let phoneNumPattern = /^(01[0|1|6|7|8|9])-(\d{3,4})-(\d{4})$/;
  


  let id = document.querySelector("#id");
  let pw = document.querySelector("#pw");
  let pwcheck = document.querySelector("#pwCheck");
  let submit = document.querySelector('#submit');
  let name = document.querySelector('#name');
  let nickname = document.querySelector("#nickname");
  let tel = document.querySelector("#tel");
  let phoneNum = document.querySelector("#phoneNum");
  let email = document.querySelector("#email");
  let addrSearch = document.querySelector('#addrSearch');
  let zipcode =document.querySelector('#zipcode');
  let addr1 = document.querySelector('#addr1');
  let addr2 = document.querySelector('#addr2');
  let checkHuman = document.querySelector('#checkHuman');

  
  
  id.addEventListener("blur",()=>{
    validate(id,idPattern,"영문자, 숫자, _만 입력 가능. 최소 3자이상 입력하세요.");
  });
  
  pw.addEventListener("blur",()=>{
    validate(pw,pwPattern,"영문자, 숫자, _만 입력 가능. 최소 6자이상 8자 이하 입력하세요.");
  });
  pwcheck.addEventListener("blur",()=>{
    if(pwcheck.value.match(pwPattern) && pwcheck.value === pw.value) {
       pwcheck.nextSibling.innerHTML = "패스워드 일치";
       pwcheck.nextSibling.style.color = "blue";
      //  let span = document.querySelector('#id + span');
      //  span.innerHTML = "사용가능";
      //  span.style.color = "blue";
    }else {
      // let span = document.querySelector('#pw + span');
      // span.innerHTML = "영문자, 숫자, _만 입력 가능. 최소 6자이상 8자 이하 입력하세요.";
      // span.style.color = "tomato";
      pwcheck.nextSibling.innerHTML = "패스워드가 일치하지 않습니다.";
      pwcheck.nextSibling.style.color = "tomato";
      pwcheck.value = "";
      pwcheck.focus();
    }
  });
     name.addEventListener("blur",()=> {
       validate(name,namePattern,"입력해라");
     });
     nickname.addEventListener("blur",()=> {
       validate(nickname,nicknamePattern,"한글 2자 이상, 영어 4자이상 입력");
     });
     email.addEventListener("blur",()=>{
      validate(email,emailPattern,"이메일 형식에 맞게 입력하세요.");
     });
     tel.addEventListener("blur",()=>{
      validate(tel,telPattern,"형식에 맞게 입력하세요.");
     });
     phoneNum.addEventListener("blur",()=>{
      validate(phoneNum,phoneNumPattern,"형식에 맞게 입력하세요.");
     })
     addr2.addEventListener("blur",()=> {
      if(addr2.value === "") {
        addr2.nextSibling.innerHTML = "입력해주세요.";
        addr2.nextSibling.style.color = "red";
      }else {
      }
     });
     checkHuman.addEventListener("blur",()=> {
        if(checkHuman.value === "RcAP") {
          checkHuman.nextSibling.innerHTML = "사람이 맞습니다.";
        }
     })
    
     //우편번호 이벤트처리
    addrSearch.addEventListener("click", ()=> {
      new daum.Postcode({
    oncomplete: function(data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드
      if(data !== null && data !== undefined) {
        console.log('zipcode', data.zonecode); 
        console.log('data.roadAddress', data.roadAddress); 
        zipcode.value = data.zonecode;
        addr1.value = data.roadAddress;
      }else {
        addrSearch.nextSibling.innerHTML = "daum api 오류발생"
        zipcode.focus();
      }
    }
  }).open();
    });

    //회원가입 전송기능 점검
  submit.addEventListener("click",function(){
    //회원의 전체데이터를 점검
    //아이디
    let idReturn = validate(id,idPattern,"값을 정확하게 입력요청");
    if(idReturn === false)  return;
    let pwReturn = validate(pw,pwPattern,"값을 정확하게 입력요청");
    if(pwReturn === false)  return;
    let nameReturn = validate(name,namePattern,"값을 정확하게 입력요청");
    if(nameReturn === false)  return;
    
   

  });
    //공동으로 사용되는 함수
    function validate(inputObj,pattern, message) {
       if(inputObj.value.match(pattern)) {
       inputObj.nextSibling.innerHTML = "사용가능";
       inputObj.nextSibling.style.color = "blue";
       return true;
    }else {
      inputObj.nextSibling.innerHTML = message;
      inputObj.nextSibling.style.color = "tomato";
      inputObj.value = "";
      inputObj.focus();
      return false;
    }
}
}