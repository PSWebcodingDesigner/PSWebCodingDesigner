var bigNum = 121894739;
var biggerNum = 389023894283;
/* 연습
console.log(bigNum + biggerNum);

var strings = "안녕하세요";
var coffeelist = ["아아", "따아", "아카마", "아모카"];
var peopleInOffice = 15;

var me = {
  name: "영진",
  coffeePreference: coffeelist,
}
*/
var coffeeContent = document.getElementById("coffeeContent");

var coffeeStory = "";

var coffeeHistory = ["진수", "혜령", "선유"];
var stories = [
  "저는 커피를 좋아합니다",
  "그란데 말입니다",
  "지용님이 커피를... 사주셨습니다",
  coffeeHistory[0] + "님에게도,",
  coffeeHistory[1] + "님에게도,",
  coffeeHistory[2] + "님에게도요,",
  "저도",
  "커피 좋아합니다",
  "<a href='http://minishop.gmarket.co.kr/skocbs/List?Category=200001713&DisplayType=None&SortType=None'> 헤헤;;</a>"
];

// array의 length를 활용하면 stories항목을 수정할때마다 아래 숫자를 수정해줄 필요가 없겠죠?
var num = stories.length;
var totalNum = stories.length;

// javascript에서는 빈문자열을 써도 되지만,
// 숫자가 대입 될 것이라는 것을 암시해주면 유지보수에 좋습니다.
a = 0;

// 아니 근데 벌써 function이라니... 치고 나가기가 메시급...
function showCoffeeStory_yj() {
  // 우와 이거 엄청 기발한데요! 나머지를 활용한 무한루프!!
  console.log(a);
  a = num % totalNum;
  coffeeContent.innerHTML = stories[a];
  num += 1;
}

//////////////////////////////////////////////////////////////////////////////

// 우리가 배운 if문을 활용하면 이렇습니다.
var index = 0;
function showCoffeeStory() {
  coffeeContent.innerHTML = stories[index];
  index++;

  // index와 stories length가 같아지면 다시 index에 0을 대입
  if (index === stories.length) {
    index = 0;
  }
}

/* 연습
for (var ordering = 0; ordering < coffeeHistory.length; ordering++){
  console.log(coffeeHistory[ordering] + "님에게도.");
};*/
