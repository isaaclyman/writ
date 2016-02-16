angular.module('writ')
.factory('dataStore', [
    '$mdDialog', '$window',
    function ($mdDialog, $window) {
        var factory = {};
        var prefix = 'data:application/json,';

        factory.data = {
            overview: {},
            snippets: [],
            research: {},
            settings: {}
        };

        factory.createSaveFile = function () {
            var data = $window.JSON.stringify(factory.data);
            
            return prefix + $window.encodeURIComponent(data);
        };
        
        factory.loadSaveFile = function (file) {
            factory.data = $window.decodeURIComponent(file.substring(prefix.length));
        };

        return factory;
}
                      ]);