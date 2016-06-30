$http({
    method: 'GET',
    url: 'http://localhost:3007/dogs'
}).then(function successCallback(data) {
    console.log(data)
}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
});