angular.module('writ')
.factory('dataStore', [
    '$mdDialog',
    function ($mdDialog) {
        var factory = {};

        factory.data = {};

        factory.save = function () {
            $mdDialog.show({
                controller: 'AboutDialogController',
                controllerAs: 'ctrl',
                templateUrl: './Views/AboutDialog/aboutDialog.html',
            }).then(function () {
                // Save everything
            });
        };

        return factory;
}
                      ]);