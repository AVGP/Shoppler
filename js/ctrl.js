function ShoppingCtrl($scope) {
    $scope.scan = function() {
        alert("Yeah...")
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");
        scanner.scan(function(data) {
            $scope.$apply(function() {
                $scope.rawData = data.text + "(" + data.format + ")";
            });
        }, function fail(error) {
            alert(error);
        });
    };
}

function ListCtrl($scope) {

}
