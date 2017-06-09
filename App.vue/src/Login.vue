<template>
    <div id="login">
        <!--<img src="./assets/logo.png">
        <h1></h1>
        <h2>Essential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>-->
        <div class="container">
            <div class="row">
                <div class=" col-md-4 col-md-offset-4"></div>
                <h1 class="jumbotron" style="text-align: center">LogIn!</h1>
                <div class="form-group">
                    <label >
                        E-mail
                    </label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <div class="form-group">
                    <label >
                        Password
                    </label>
                    <input class="form-control" type="text" v-model="user.password">
                </div>
                <button class="btn btn-primary" @click="submit">Log In!</button>
            </div>
        </div>
    </div>
</template>

<script>
    import router from './routes.js'
    var url='http://localhost:8000';
    export default {
        name: 'Login',
        data () {
            return {
                userId : '',
                user: {

                    email : '',
                    password : ''
                }
            }
        },
        methods:{
            submit(){
                this.$http.post( url + '/users/login',this.user).then(function(response) {
                    return response.json();
            }).then(function(data) {
                alert('User '+ data.email +' is Successfully Logged in!!!');
                this.userId=data.id;
                this.$router.replace('/users/' + this.userId);

            },function(error){
                    alert("Entered Email is incorrect!!");
                });
            }
        }
    }
</script>

<style lang="scss">


</style>