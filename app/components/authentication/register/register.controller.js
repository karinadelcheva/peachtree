'use strict';

class RegisterController {
    constructor($scope, AuthenticationService, $state) {
        this.$scope = $scope;
        this.AuthenticationService = AuthenticationService;
        this.$state = $state;

        this.init();
    }

    init() {
        // Create user with Firebase
        this.$scope.register = () => {
            this.$scope.dataLoading = true;

            let user = {
                email: this.$scope.email,
                password: this.$scope.password
            }

            this.AuthenticationService.register(user.email, user.password)

                .then((response) => {
                    if (response) {
                        console.log('Registration successful')
                        this.$state.go('home.transactions-list');
                    }
                    else {
                        this.$scope.error = this.AuthenticationService.message;
                        this.$scope.dataLoading = false;
                    }
                });
        };
    }
}

angular.
    module('Authentication')

    .controller('RegisterController', RegisterController);