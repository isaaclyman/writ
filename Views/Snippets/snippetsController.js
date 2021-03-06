angular.module('writ')
.controller('SnippetsController', [
    'dataStore', '$mdDialog',
    function (dataStore, $mdDialog) {
        var ctrl = this;
        
        ctrl.appData = dataStore.data;
        
        ctrl.showAddSnippet = false;
        ctrl.newSnippet = {
            name: '',
            text: '',
            comments: ''
        };
        
        ctrl.edit = function (snippet) {
            ctrl.newSnippet = snippet;
            dataStore.data.snippets.splice(dataStore.data.snippets.indexOf(snippet), 1);
            ctrl.showAddSnippet = true;
        };
        
        ctrl.delete = function (snippet, $event) {
            $mdDialog.show($mdDialog.confirm({
                title: 'Delete this snippet?',
                textContent: 'This action cannot be undone.',
                ariaLabel: 'Confirm snippet deletion',
                targetEvent: $event,
                ok: 'Delete',
                cancel: 'Cancel'
            })).then(function () {
                dataStore.data.snippets.splice(dataStore.data.snippets.indexOf(snippet), 1);
            });
            
        };
        
        ctrl.discardNewSnippet = function () {
            ctrl.newSnippet = {
                name: '',
                text: '',
                comments: ''
            };
            ctrl.showAddSnippet = false;
        };
        
        ctrl.saveNewSnippet = function () {
            ctrl.newSnippet.name = ctrl.newSnippet.name.trim() || new Date().toDateString();
            dataStore.data.snippets.push(angular.copy(ctrl.newSnippet));
            ctrl.discardNewSnippet();
        };
}
                                  ]);