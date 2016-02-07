angular.module('writ')
.controller('AboutDialogController', [
    '$mdDialog', '$window',
    function ($mdDialog, $window) {
        var ctrl = this;
        
        ctrl.cancel = function () {
            $mdDialog.cancel();
        };
        
        ctrl.sayHello = function () {
            $window.location.href = 'http://isaaclyman.com';
            $mdDialog.hide();
        };
}
                                     ]);