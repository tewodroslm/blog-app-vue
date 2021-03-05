<template>
<div>
    <Navbar></Navbar><hr/>
    <div id="post"> 
        <h2>Add a New Post</h2>
        <div>
            <form>
                <div class="form-group">
                    <label class="Title">Title: </label>
                    <input class="form-control" type="text" required v-model="blog.title" >
                </div>
                <div class="form-group">
                    <label class="content">Description : </label>
                    <textarea class="form-control" rows="8" cols="200"  style="width:500px;" v-model="blog.content"></textarea>
                </div>       
                <button type="button" class="btn btn-outline-primary postBlog" v-on:click="postBlog()" >Post</button>
                <!-- <button type="button" class="btn btn-outline-primary postBlog" v-on:click="getPost()" >Retrieve Old Posts</button> -->
                <div id="retr"><a href="#" @click="getPost()" > Retrieve your Old Posts and edit or delete</a> </div>
               
            </form>
        </div>            
    </div>  
</div>    
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
  name: "Post",
  components:{
    Navbar
  },
  data(){
      return{ 
        blog:{
            title: '',
            content: ''
        },
        token: '',
      }
  },
  mounted(){
      this.token = this.$store.state.accessToken;
  },
  methods:{
      postBlog: function(){
          fetch('http://127.0.0.1:8000/api/create-content',{
              method: 'POST',
              body: JSON.stringify(this.blog),
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ this.token,
              }
          })
            .then(response => response.json())
            .then((data) => {
                console.log(data.status);
                if(data.status == 200) { alert('Content uploaded');}
            })
          this.blog.title = ''
          this.blog.content = ''  
      },
      getPost(){
          this.$router.replace('/ownedpost')
      }
  }
} 
</script>
<style scoped>
#retr{
    margin-top:10px;
}
 #post{
     box-sizing: border-box;
 }
 #post{
     margin: 20px auto;
     max-width: 500px;
     margin-top: 10px;
 }
 label{
     display: block;
     margin: 20px 0 10px;
     margin-right: 390px;
     font-weight: bold;
     font-size: 15px;
 }
 input[type="text"], textarea{
     display: block;
     width: 100%;
     padding: 8px;
 }
#preview{
    padding: 10px 20px;
    border: 10px 20px;
    margin: 30px 0;
    font-weight: bold;
}
h3{
    margin-top: 10px;
}
#checkboxes{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
.User{
    margin-right: 460px;
}
.Title{
    margin-right: 470px;
}
.content{
    margin-right: 400px;
}
.postBlog{
    margin-left: 400px;
    margin-top: 30px;
}
.photo{
    margin-right: 440px;
}
.catagory{
    margin-right: 425px;
}
</style>