/**
 * Created by nitin on 7/6/17.
 */
var Login = new Vue({
    el: '#LoginPage',
    data : function() {
            return {
                // We need to initialize the component with any
                // properties that will be used in it
                credentials: {
                    email: '',
                    password: ''
                },
                error: ''
            }
        },
    methods: {
            submit : function() {
                var credentials = {
                    email: this.credentials.email,
                    password: this.credentials.password
                };
            }
        }

});*/