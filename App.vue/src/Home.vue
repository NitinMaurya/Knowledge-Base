<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <router-link to="/users/login">Login</router-link>
          <router-link to="/users">Sign Up!</router-link>
        </ul>
      </div>
    </nav>
  </div>


</template>

<script>
export default {
  name: 'Home'

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
