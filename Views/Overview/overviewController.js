angular.module('writ')
.controller('OverviewController', [
    'dataStore',
    function (dataStore) {
        var ctrl = this;
        
        ctrl.appData = dataStore.data;
        
        ctrl.editTweetable =
            !dataStore.data.overview.tweetable;
        ctrl.editJacket = !dataStore.data.overview.jacket;
        ctrl.editFullSummary = !dataStore.data.overview.full;
}
                                  ]);