var app = angular.module('TMDB', []);

app.controller('mainController', ['$scope', '$http', function ($scope, $http) {

    $http.get("http://api.themoviedb.org/3/movie/upcoming?api_key=a7f4e7531c0abfef4ade0b794873f5ce")
        .then(function (response) {
            $scope.data = response.data;
        });

    $scope.movData = function (id) {
        $http.get("http://api.themoviedb.org/3/movie/" + id + "?api_key=a7f4e7531c0abfef4ade0b794873f5ce")
            .then(function (response) {
                $scope.movie = response.data;

            });
    };
}]);
