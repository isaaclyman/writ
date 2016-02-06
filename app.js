var module = angular.module('writ', ['ngMaterial', 'ngRoute']);

module.config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('amber')
        .accentPalette('red')
        .warnPalette('deep-orange')
        .backgroundPalette('grey');
    }
              ]);

module.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './Views/Snippets/snippets.html',
        controller: 'SnippetsController',
        controllerAs: 'ctrl'
    })
    .when('/research', {
        templateUrl: './Views/Research/research.html',
        controller: 'ResearchController',
        controllerAs: 'ctrl'
    })
    .when('/overview', {
        templateUrl: './Views/Overview/overview.html',
        controller: 'OverviewController',
        controllerAs: 'ctrl'
    })
    .when('/settings', {
        templateUrl: './Views/Settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'ctrl'
    })
    .otherwise('/');
}
              ]);

module.controller('app', [
    '$location', '$mdDialog', 'dataStore',
    function ($location, $mdDialog, dataStore) {
        var app = this;
        
        app.location = $location;
        app.data = dataStore;

        app.mainTabs = [{
            name: 'Snippets',
            route: '/'
        },{
            name: 'Research',
            route: '/research'
        },{
            name: 'Overview',
            route: '/overview'
        }];

        app.openTab = function (tab) {
            $location.path(tab.route);
        };
        
        app.openSettings = function () {
            $location.path('/settings');
        };
        
        app.isActive = function (route) {
            return !!~$location.path().indexOf(route);
        };
}
                         ]);