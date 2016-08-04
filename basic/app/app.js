var app;
(function () {
    app = angular.module("app", ['sharedModule', 'angularSpinners', 'ui.bootstrap', 'ngSanitize']);

    app.factory('contactService', function ($http) {
        return {
            getApi: function () {
                return $http.get('/api/contactApi/test');
            }


        }
    });



    app.controller('testModalController', function ($scope, sharedService) {
        $scope.showConfirm = function () {
            sharedService
              .showConfirmDialog('Alert', '<p class="alert alert-warning">Test Service<p>')
              .then(function () {
                  // $scope.msg = "pop up ";
              });
        }
    });

    app.controller('testSpinnerController', function ($scope, spinnerService) {

        $scope.showSpinner = function () {
            spinnerService.show('booksSpinner');
        };
        $scope.hideSpinner = function () {
            spinnerService.hide('booksSpinner');
        };

    });

    app.controller('testApiController', function ($scope, contactService) {
        contactService.getApi().then(function (d) {
            $scope.message = d.data;
        });
    });

})();