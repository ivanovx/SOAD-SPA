app.controller("AlbumsController", function ($scope, Albums) {
	Albums.getAlbums(function (albums) {
        $scope.albums = albums;
    });
});

app.controller("AlbumController", function ($scope, $routeParams, Albums) {
	Albums.getAlbum($routeParams.id, function (album) {
		 $scope.album = album;
	});
});