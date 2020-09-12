var googleUser = {};
const startApp = () => {
    gapi.load('auth2', function(element) {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({

            client_id: ' 903325061264-rdo83avhlkkdai0lmnad6r439tpet1a9.apps.googleusercontent.com',
            cookiepolicy: 'localhost',
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
        });
        attachSignin(document.getElementById('btngoogle'));

        function attachSignin(element) {
            console.log(element.id);
            auth2.attachClickHandler(element, {},
                function(googleUser) {
                    return googleUser.getBasicProfile();
                },
                function(error) {
                    return alert(JSON.stringify(error, undefined, 2));
                });
        }
    });

};



const googleAuth = (e) => {
    var user = startApp(e);


}

export default googleAuth;