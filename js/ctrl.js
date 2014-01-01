function ShoppingCtrl($scope) {
    $scope.scan = function() {
        cordova.plugins.barcodeScanner.scan(function(data) {
            $scope.rawData = data;
        }, function fail(error) {
            alert(error);
        });
    };
}

function ListCtrl($scope) {
    
}
