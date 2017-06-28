(function() {

    angular
        .module('angularTranslation')
        .run(['gettextCatalog', function(gettextCatalog){
            var lang = 'en';
            gettextCatalog.setCurrentLanguage(lang);
            gettextCatalog.loadRemote('/scripts/translations/' + lang + '.json');
        }]);
})();
