'use strict';

class AuthenticationService {
    constructor($firebaseAuth, $state, firebase) {
        this.$firebaseAuth = $firebaseAuth;
        this.$state = $state;
        this.firebase = firebase;

        this.init();
    }

    init() {
        var config = {
            apiKey: "AIzaSyCb6b4qTGqQmjLgjIx78q2Sb3ciaOG8TWg",
            authDomain: "peachtreeapp-vlc.firebaseapp.com",
            databaseURL: "https://peachtreeapp-vlc.firebaseio.com",
            projectId: "peachtreeapp-vlc",
            storageBucket: "peachtreeapp-vlc.appspot.com",
            messagingSenderId: "278992529138"
        };

        this.firebase.initializeApp(config);

        // TODO: Error messages!
        this.register = (email, password) => {
            return this.$firebaseAuth().$createUserWithEmailAndPassword(email, password)
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode == 'auth/email-already-in-use') {
                        alert('Looks like this email is already in use.');
                    } else {
                        alert(errorMessage);
                    }
                });
        }

        this.login = (email, password) => {
            return this.$firebaseAuth().$signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    switch (errorCode) {
                        case errorCode = 'auth/user-not-found':
                            alert("User can't be found. Try signing up.");
                            break;
                        case errorCode = 'auth/wrong-password':
                            alert("Wrong password");
                            break;
                        default:
                            alert(errorMessage);
                            break;
                    }
                });
        }

        this.logout = () => {
            this.firebase.auth().signOut().then(() => {
                this.$state.go('login');
            }).catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorCode + ': Oh, no! Something went wrong.0' + errorMessage)
            });
        }

        this.isLoggedIn = () => {
            return this.$firebaseAuth().$getAuth();
        }

        this.getUser = () => {
            return firebase.auth().currentUser;
        }
    };
};

angular
    .module('Authentication', ['firebase', 'ui.router'])
    .service('AuthenticationService', AuthenticationService);