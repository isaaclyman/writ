'use strict';

var module = angular.module('writ', ['ngMaterial', 'ngRoute']);

module.config(['$mdThemingProvider', '$compileProvider', function($mdThemingProvider, $compileProvider) {
    $mdThemingProvider.definePalette('amber-light',         $mdThemingProvider.extendPalette('amber', {
            contrastDefaultColor: 'light'
        })
                                    );
    
    $mdThemingProvider.theme('default')
        .primaryPalette('amber-light')
        .accentPalette('blue')
        .warnPalette('purple')
        .backgroundPalette('grey');
    
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|data):/);
    
    }    
              ]);

module.config([
    '$routeProvider',
    function($routeProvider, $rootScope) {
        $routeProvider
        .when('/overview', {
            templateUrl: './Views/Overview/overview.html',
            controller: 'OverviewController',
            controllerAs: 'ctrl'
        })
        .when('/research', {
            templateUrl: './Views/Research/research.html',
            controller: 'ResearchController',
            controllerAs: 'ctrl'
        })
        .when('/snippets', {
            templateUrl: './Views/Snippets/snippets.html',
            controller: 'SnippetsController',
            controllerAs: 'ctrl'
        })
        .when('/settings', {
            templateUrl: './Views/Settings/settings.html',
            controller: 'SettingsController',
            controllerAs: 'ctrl'
        })
        .otherwise('/settings');
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
            name: 'Overview',
            route: '/overview'
        },{
            name: 'Snippets',
            route: '/snippets'
        },{
            name: 'Research',
            route: '/research'
        }];
        
        app.save = function (event) {
            $mdDialog.show({
                controller: 'SaveDialogController',
                controllerAs: 'ctrl',
                templateUrl: './Views/SaveDialog/saveDialog.html',
                targetEvent: event,
                clickOutsideToClose: true
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