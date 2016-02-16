angular.module('writ')
.controller('ResearchController', [
    'dataStore',
    function (dataStore) {
        var ctrl = this;
        
        ctrl.appData = dataStore.data;
}
                                  ]);