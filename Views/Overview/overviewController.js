angular.module('writ')
.controller('OverviewController', [
    'dataStore',
    function (dataStore) {
        var ctrl = this;
        
        ctrl.appData = dataStore.data;
}
                                  ]);