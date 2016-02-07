angular.module('writ')
.controller('SettingsController', [
    function () {
        var ctrl = this;
        
        ctrl.appData = dataStore.data;
}
                                  ]);