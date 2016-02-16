angular.module('writ')
.controller('SettingsController', [
    'dataStore',
    function (dataStore) {
        var ctrl = this;
        
        ctrl.appData = dataStore.data;
        
        ctrl.editType = !dataStore.data.settings.type;
}
                                  ]);