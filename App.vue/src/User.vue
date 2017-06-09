<template>
<div>
    <div class="sidebar">
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            <a href="#">About</a>
        </div>

        <span onclick="openNav()">open</span>

    </div>
    <div id="userPage">
        <div >
            <header>
                <textarea rows="4" cols="50" name="PostArea" id="postArea" placeholder="Write a Post....." v-model="postArray">
                </textarea>
                <br>
                <button class="btn btn-danger" @click="submitPost">Submit</button>
            </header>
            <div class="section">
                <postView>

                </postView>
            </div>

        </div>
    </div>
</div>


</template>

<script>
    const url = 'http://localhost:8080';
    import postView from './Posts.vue'
    import Login from './Login.vue'
    export default {
        name: 'User',
        components : {postView,Login},
        data () {
            return {
                postArray : '',
                email : ''
            }
        },
        methods:{
            submitPost(){
                this.$http.post(url + '/users/posts',this.postArray)
                    .then(response => {
                        return response.json();
                    }).then(data => {
                        alert('Posted Successfully!!')
                },error => {
                        alert(error + 'Error Occurred!!');
                })

            },
            loadData (){
                this.$http.get(url + '/users/' + Login.data().userId)
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    this.email=data.email;
                },error =>{
                    alert('Error Occured!!!');
                });
            }
        },
        ready : function () {
            this.loadData();

        }
    }
</script>

<style lang="scss">
    .sidenav {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1; /* Stay on top */
        top: 0;
        left: 0;
        background-color: #111; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    }
    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s
    }

    .sidenav a:hover, .offcanvas a:focus{
        color: #f1f1f1;
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    #userPage {
        transition: margin-left .5s;
        padding: 20px;
    }
    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }

</style>