var app = app || {};
var billetes = [1000,2000,5000,10000,20000,50000];
var valBillete = 0;
app.controller('ControllerBilletes', ['$scope', function ($scope){
    $scope.val_selected = 0;

    $scope.selectBillete = function(value){
        if(value === 'mil')
            valBillete = billetes[0];
        else if(value === 'dosmil')
            valBillete = billetes[1];
        else if(value === 'cincomil')
            valBillete = billetes[2];
        else if(value === 'diezmil')
            valBillete = billetes[3];
        else if(value === 'veintemil')
            valBillete = billetes[4];
        else if(value === 'cincuentamil')
            valBillete = billetes[5];
        else
            return false;
        $scope.val_selected = valBillete;
    }
    $scope.calcular = function(){
        var cantidad = $scope.cantidad;
        if(cantidad == '')
            cantidad = 0;
        
        $scope.total = cantidad * valBillete;
    }
}]);