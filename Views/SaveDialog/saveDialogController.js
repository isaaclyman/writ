angular.module('writ')
.controller('SaveDialogController', [
    '$mdDialog',
    function ($mdDialog) {
        var ctrl = this;
        
        ctrl.accept = function () {
            $mdDialog.hide();
        };
        
        ctrl.cancel = function () {
            $mdDialog.cancel();
        };
}
                                     ]);