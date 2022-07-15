var init = function () {
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientWidth >= 640) {
      clientWidth = 640;
    }
    //设计稿为750px ，css则需/2，为375px
    var fontSize = 16 / 375 * clientWidth;
    document.documentElement.style.fontSize = fontSize + "px";
  }
  
  init();
  
  window.addEventListener("resize", init);