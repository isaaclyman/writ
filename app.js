'use strict';

var module = angular.module('writ', ['ngMaterial', 'ngRoute']);

module.config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.definePalette('amber-light',         $mdThemingProvider.extendPalette('amber', {
            contrastDefaultColor: 'light'
        })
                                    );
    
    $mdThemingProvider.theme('default')
        .primaryPalette('amber-light')
        .accentPalette('blue')
        .warnPalette('purple')
        .backgroundPalette('grey');
    }
              ]);

module.config([
    '$routeProvider',
    function($routeProvider, $rootScope) {
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
    '$location', '$mdDialog', 'dataStore', '$rootScope',
    function ($location, $mdDialog, dataStore, $rootScope) {
        var app = this;
        
        app.$rootScope = $rootScope;
        
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
        
        app.save = function (event) {
            $mdDialog.show({
                controller: 'SaveDialogController',
                controllerAs: 'ctrl',
                templateUrl: './Views/SaveDialog/saveDialog.html',
                targetEvent: event,
                clickOutsideToClose: true
            }).then(function () {
                dataStore.save();
            });
        };
        
        app.about = function (event) {
            $mdDialog.show({
                controller: 'AboutDialogController',
                controllerAs: 'ctrl',
                templateUrl: './Views/AboutDialog/aboutDialog.html',
                targetEvent: event,
                clickOutsideToClose: true
            });
        };

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