/**
 * Created by Administrator on 2017/8/15.
 */
;(function (angular) {
//1.创建模块
    var app=angular.module('app',['ui.router']);
//2.创建控制器
    app.controller('AppController',['$scope',function ($scope) {
        $scope.title='今日一刻';
        $scope.headTitle='首页';//设置默认的显示界面;
        //父级接受数据
        $scope.index=0;
      $scope.titleArr=['首页','关于','作者','我的'];
        $scope.$on('tab_notifice',function (e,regs) {
            console.log(regs.id);
            var index=regs.id;//获取下标
            $scope.index=index;
            // console.log(index);
            // console.log($scope.titleArr[index]);
            var title=$scope.titleArr[index];
            //将获取的数据传给儿子,由于一开始是兄弟传递广播,必须通过父级传递广播
            //但是传递广播的名字必须更改
          //  $scope.$broadcast('app_notifice',title).由于子级和父级是同一个作用域
            //所以直接可以使用下面的绑定方式,不用再次进行传递广播了
            $scope.headTitle=title;
        });
        
    }])
//3.创建nav指令
    app.directive('nav',function () {
        return {
            restrict:'EA',
            templateUrl:'../views/nav_tpl.html',
            controller:['$scope',function ($scope) {
                //接受父级传来的数据
                // $scope.$on('app_notifice',function (e,regs) {
                //     console.log(regs);
                //    $scope.headTitle=regs;//绑定到页面上
                // })
            }]
        }
    })
//4创建tapbar指令
    app.directive('tapbar',function () {
        return{
            restrict:'EA',
            templateUrl:'../views/tapbar_tpl.html',
            controller:['$scope',function ($scope) {
                $scope.tabChange=function (index) {
                    //发送数据
                    // alert(index)点击一下确定有没有过来
                    $scope.$emit('tab_notifice',{id:index});
                }
            }]
        }

    })
    //5.配置路由
    app.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('home',{
            url:'/home',
            views:{
                home:{
                   templateUrl:'./views/home_tpl.html',
                    controller:'homeController'
                },
                content:{
                    template:'<h1>content</h1>'
                },
                author:{
                    template:'<h1>author</h1>'
                },
                mine:{
                    template:'<h1>mine</h1>'
                },




            }
        }).state('home.list',{
            url:'/list',
            templateUrl:'./views/list_tpl.html'
        }).state('home.detail',{
            url:'/detail',
            template:'<div><h1>我是熊德伟我是熊德伟哦我是熊德伟我是熊德伟哦我德伟我是熊德伟哦</h1></div> '
        }),
            $urlRouterProvider.otherwise('/home/list');


    }])
    
    
    
//6首页控制器
    app.controller('homeController',['$scope','$http',function ($scope,$http) {
        $scope.headerTitle='首页1';
        $http({
            url:'http://127.0.0.1/code9/home.php',
            method:'jsonp',
        }).then(function (regs) {

  $scope.dataList=regs.data;
            console.log(regs);

        }).catch(function (err) {
            console.log(err);
        })
    }])
    //6.1设置白名单
    app.config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://127.0.0.1/code9/**'
        ])
    }])
})(angular);