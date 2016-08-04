angular.module("sharedModule", ['ui.bootstrap'])

.factory("sharedService", function ($q, $uibModal) {

    var _showConfirmDialog = function (title, message) {
        var defer = $q.defer();


        var modalInstance = $uibModal.open({
            animation: true,
            size: "sm",
            templateUrl: '/app/views/modal.html',
            controller: function ($scope, $uibModalInstance, $sce) {
                $scope.title = title;
                $scope.message = $sce.trustAsHtml(message);

                $scope.ok = function () {
                    modalInstance.close();
                    defer.resolve();
                };

                $scope.cancel = function () {
                    $uibModalInstance.dismiss();
                    defer.reject();
                };
            }
        });


        return defer.promise;
    };


    return {
        showConfirmDialog: _showConfirmDialog

    };
});