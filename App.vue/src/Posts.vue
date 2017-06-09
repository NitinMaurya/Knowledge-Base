<template>
    <div >
        <ul>
            <li v-for="p in postsArray">
                <div id="Posts" class="panel panel-primary">
                    <div class="panel-heading" >{{p.title}}</div>
                    <div class="panel-content" >{{p.url}}</div>
                    <div class="panel-content" >{{p.description}}</div>
                </div>
            </li>
        </ul>
    </div>


</template>

<script>
    export default {
        name: 'postView',
        data () {
            return {
                postsArray : {
                    title : '',
                    url : '',
                    description : ''
                }
            }
        },
        methods :{
          loadData(){
              this.$http.get(url + '/users/posts').
              then(response=>{
                  return response.json();
              }).then(data=>{
                  const resultArray = [];
                  for(let key in data){
                      resultArray.push(data[key]);
                  }
                  this.postsArray = resultArray;
              },error =>{
                  console.log(error);
              });
          }
        },
        ready: function () {
            this.loadData();

            setInterval(function () {
                this.loadData();
            }.bind(this), 1000);
        }
    }
</script>

<style lang="scss">


</style>