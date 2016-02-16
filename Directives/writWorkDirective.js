angular.module('writ')
.directive('writWork', [
    'dataStore',
    function (dataStore) {
        return {
            restrict: 'E',
            templateUrl: './Directives/writWorkDirective.html'
        };
    }
]);