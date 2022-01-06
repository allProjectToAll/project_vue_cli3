//  (function (designWidth, maxWidth) {
//   var doc = document,
//     win = window,
//     docEl = doc.documentElement,
//     remStyle = document.createElement("style"),
//     tid;

//   function refreshRem() {
//     var width = docEl.getBoundingClientRect().width;
//     maxWidth = maxWidth || 540;
//     width > maxWidth && (width = maxWidth);
//     var rem = width * 100 / designWidth;
//     remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
//   }

//   if (docEl.firstElementChild) {
//     docEl.firstElementChild.appendChild(remStyle);
//   } else {
//     var wrap = doc.createElement("div");
//     wrap.appendChild(remStyle);
//     doc.write(wrap.innerHTML);
//     wrap = null;
//   }
//   //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
//   refreshRem();

//   win.addEventListener("resize", function () {
//     clearTimeout(tid); //防止执行两次
//     tid = setTimeout(refreshRem, 300);
//   }, false);

//   win.addEventListener("pageshow", function (e) {
//     if (e.persisted) { // 浏览器后退的时候重新计算
//       clearTimeout(tid);
//       tid = setTimeout(refreshRem, 300);
//     }
//   }, false);

//   if (doc.readyState === "complete") {
//     doc.body.style.fontSize = "16px";
//   } else {
//     doc.addEventListener("DOMContentLoaded", function (e) {
//       doc.body.style.fontSize = "16px";
//     }, false);
//   }
// })(1080, 1920);



// 设置 rem 函数
function setRem () {

  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0];
//设置根元素字体大小
  htmlDom.style.fontSize= htmlWidth/23.4375 + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
