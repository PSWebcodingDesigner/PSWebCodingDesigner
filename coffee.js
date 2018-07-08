
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

var coffeeHistory = ["진수", "혜령", "선유"]
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
]

num = 9;
a = "";
function showCoffeeStory() {
  a = num%9;
  coffeeContent.innerHTML = stories[a];
  num += 1;
}

/* 연습
for (var ordering = 0; ordering < coffeeHistory.length; ordering++){
  console.log(coffeeHistory[ordering] + "님에게도.");
};*/



