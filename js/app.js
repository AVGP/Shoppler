shoppler = angular.module("shoppler", ["ngRoute"]);

shoppler.config([ "$routeProvider", function($routeProvider) {
    $routeProvider.when("/list", {
        templateUrl: "templates/list.html"
    }).when("/shopping", {
        templateUrl: "templates/shopping.html",
        controller: "ShoppingCtrl"
    }).otherwise({
        redirectTo: "/shopping"
    })
}]);