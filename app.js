(function(){
    'use strict';
    angular.module ('myFirstApp', [] )
    .controller('myFirstController', function ($scope){

    $scope.sayHello =  function() {
    return "Hello Coursera!";
}
    })
    .controller('mySecondController', function ($scope){
        $scope.name = "Fred";


    })
    .controller('myThirdController', function ($scope){
        $scope.fame = "Christine";

    });
})();
