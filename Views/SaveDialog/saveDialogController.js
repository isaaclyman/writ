angular.module('writ')
.controller('SaveDialogController', [
    '$mdDialog', 'dataStore',
    function ($mdDialog, dataStore) {
        var ctrl = this;
        var now = new Date();
        
        ctrl.dateString = now.getMonth() + '-' + now.getDate() + '-' + now.getFullYear();
        ctrl.saveLink = dataStore.createSaveFile();
        
        ctrl.accept = function () {
            $mdDialog.hide();
        };
        
        ctrl.cancel = function () {
            $mdDialog.cancel();
        };
}
                                     ]);