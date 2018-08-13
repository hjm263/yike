// 创建app引用模块
var yike = angular.module("yike",[]);

/*
  调用run方法
  该方法的作用是,当模块创建好之后就可以直接执行
*/
// 该模块依赖的是根作用域,子作用域通常是与控制器绑定的
yike.run(["$rootScope",function($rootScope){
  // 给头部的a标签绑定toggle方法
  // 点击a 标签,整个面板向右滑动,或者向左滑动
  $rootScope.left = false; // 设置移动,初始值为false,表示不移动
  $rootScope.toggle = function(){
    // 取反.原值为true的,取值为false,false的取值为true
    $rootScope.left = !$rootScope.left;     
    // 对导航栏中所有的dd的移动进行设置
    // 获取所有的dd
    var dd = document.querySelectorAll("dd");
    // 遍历dd,将每一个dd设置位移
    // 当$rootScope.left的值为true时,需要向右移动,false时不需要移动
    if($rootScope.left){
      for(var i=0; i<dd.length; i++) {
        dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';
        dd[i].style.transitionProperty = 'all';
        dd[i].style.transitionDelay = '0.2s';
        dd[i].style.transitionTimingFunction = 'ease-out';
        dd[i].style.transform = 'translate(0)';
      }
    }else{
      for(var i=dd.length - 1; i>=0; i--) {
        dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
        dd[i].style.transitionProperty = 'all';
        dd[i].style.transitionDelay = '';
        dd[i].style.transitionTimingFunction = 'ease-out';
        dd[i].style.transform = 'translate(-100%)';
      }
    }
  };
}]);