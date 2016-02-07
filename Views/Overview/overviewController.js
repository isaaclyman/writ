angular.module('writ')
.controller('OverviewController', [
    function () {
        var ctrl = this;
        
        ctrl.appData = dataStore.data;
}
                                  ]);