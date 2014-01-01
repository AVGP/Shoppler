function ShoppingCtrl($scope) {
    $scope.scan = function() {
        cordova.plugins.barcodeScanner.scan(function(data) {
            $scope.rawData = data.text + "(" + data.format + ")";
        }, function fail(error) {
            alert(error);
        });
    };
}

function ListCtrl($scope) {
    
}
