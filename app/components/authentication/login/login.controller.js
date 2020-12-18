'use strict';

class LoginController {

    constructor($scope, AuthenticationService, $state) {
        this.$scope = $scope;
        this.AuthenticationService = AuthenticationService;
        this.$state = $state;

        this.init();
    }

    init() {

        // reset login status
        this.$scope.logout = () => {
            this.AuthenticationService.logout();
            console.log('Log-out successful')
            this.$state.go('login');
        };

        // Log in
        this.$scope.login = async () => {
            this.$scope.dataLoading = true;

            let user = {
                email: this.$scope.email,
                password: this.$scope.password
            }

            let response = await this.AuthenticationService.login(user.email, user.password);

            if (response) {
                console.log('Authentication successful')
                this.$state.go('home.transactions-list');
            }else {
                this.$scope.error = AuthenticationService.message;
                this.$scope.dataLoading = false;
            }

        };
    }
}

angular.
    module('Authentication')
    .controller('LoginController', LoginController);