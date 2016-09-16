$http.get("http://api.themoviedb.org/3/movie/upcoming?api_key=a7f4e7531c0abfef4ade0b794873f5ce")
         .then(function (response) {
             $scope.data = response.data.data;
             console.log($scope.data);
         });
this.idAcc = function (id) {
    idData.xxx = id;
    console.log(idData.xxx);
};


var auxC = this;
$http.get("http://api.themoviedb.org/3/movie/" + idData.xxx + "?api_key=a7f4e7531c0abfef4ade0b794873f5ce")
.then(function (data) {
    auxC.movdata = data;
    auxC.movdata.poster_path = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + auxC.movdata.poster_path;
    console.log(aux.movdata.poster_path);
});


<div ng-repeat="result in data.results">
                <a data-toggle="modal" href="#myModal">
                    <figure id="{{result.id}}" ng-click="main.idAcc(result.id)">
                        {{result.title}}
                        <img ng-src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/{{result.poster_path}}" />
                    </figure>
                </a>
        </div>