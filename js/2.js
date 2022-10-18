function startTime() {
  var today = new Date(); //定义日期对象

  var hh = today.getHours(); //通过日期对象的getHours方法返回小时

  var mm = today.getMinutes(); //通过日期对象的getMinutes方法返回分钟

  var ss = today.getSeconds(); //通过日期对象的getSeconds方法返回秒

  var vv = today.getMilliseconds();

  mm = checkTime(mm);

  ss = checkTime(ss);
  document.getElementById("nowDateTimeSpan").innerHTML =
    hh + ":" + mm + ":" + ss + "." + vv;
  setTimeout("startTime()", 3); //每一秒中重新加载startTime()方法
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }

  return i;
}
var cname = prompt("请输入你的名字", "名字");
var mm = prompt("请输入你的学号", "学号");

; //查找元素
var a = cname + "-" + mm;
document.getElementById("demo").innerHTML = a; //改变内容

