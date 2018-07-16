var num = 1;

// 1 == true, 0 == false이므로 '다음'을 누르면 num++가 되고, '이전'을 누르면 num--가 된다.

function gallery(direct) {
  if (direct) {
    if (num == 7) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  // num==7이면 함수종료. 그 다음으로 넘어가지 않게.
  // num==1이면 함수종료.

  var imgTag = document.getElementById("photo");
  imgTag.setAttribute("src", "./imgs/pic_" + num + ".jpg");
}
//setAttribute는 ("속성명", "새값") 메서드는 선택한 태그의 지정한 속성을 새값으로 바꿉니다.
