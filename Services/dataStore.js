angular.module('writ')
.factory('dataStore', [
    '$mdDialog',
    function ($mdDialog) {
        var factory = {};

        factory.data = {};

        factory.save = function () {
            // Save all data as JSON
        };

        return factory;
}
                      ]);