class config {
    constructor ($firebaseRefProvider, $scope, firebase) {
        this.$firebaseRefProvider = $firebaseRefProvider;
        this.$scope               = $scope;
        this.firebase             = firebase;

        this.init();
    }
    init () {

        this.$firebaseRefProvider
            .registerUrl({
                default: config.databaseURL,
                transactions: config.databaseURL + '/transactions'
            });

}
}

angular
    .module('Authentication')
    .config( config );