<template>
    <div id="signUp">
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
                <div class=" col-md-6 col-md-offset-3 "></div>
                <h1 class="jumbotron" style="text-align: center">Sign Up!</h1>
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
                <button class="btn btn-primary" @click="submit" >Sign Up!</button>
            </div>
        </div>
    </div>
</template>


<script>
    var url='http://localhost:8000';
    export default {
        name: 'SignUp',
        data () {
            return {
                user : {
                    email : '',
                    password : ''
                }
            }
        },
        methods:{
            submit(){
                this.$http.post( url + '/users',this.user)
                    .then(response => {
                        return response.json();

                    }).then(data => {
                        console.log(data);
                        alert('User '+ data.email +' is Successfully Signed Up!!!');
                },error => {
                        alert("Entered Email is incorrect!!");
                    });
            }
        }
    }
</script>

<style lang="scss">
    /*#app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }*/

</style>