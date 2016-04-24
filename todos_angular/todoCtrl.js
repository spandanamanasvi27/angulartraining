/**
 * Created by t_boyas on 4/22/16.
 */

app.controller("todosAppCtrl", function ($scope,$filter) {

    $scope.products = ["milk", "bread"]

    $scope.addProductToList = function () {
        if (event.keyCode == 13 && $scope.productItem) {
            $scope.products.push($scope.productItem);
        }
    }

    $scope.deleteProduct = function (r) {
        $scope.products.pop(r);

    }
    var date=new Date();
$scope.datecntl=$filter('date')(new Date(),'hh:mm:ss a');



    $scope.todosList = [
        {"task":$scope.deleteProduct(),"createdAt":$scope.datecntl,"isDone":false}
       /* {"task": "do the home work","createdAt":"04/23/2016 12:00","isDone":false},
        {"task": "do the home work","createdAt":"04/23/2016 12:00","isDone":false},
        {"task": "do the home work","createdAt":"04/23/2016 12:00","isDone":false}*/
    ]


});
