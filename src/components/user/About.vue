<template>
  <div class="hello">
        <Navbar></Navbar><hr/>
        <div class="container h-10" style="margin-top:40px;">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  about the writer ...
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-info mr-4">Search</button>
                    <a data-toggle='modal' data-target='#login' class="btn custom-btn btn-outline-secondary">Your Blogs</a>
                </div>
              </div>
            </div>
          </div>
        </div>    
  </div>
</template>

<script>
import Navbar from './../Navbar.vue'
export default {
  name: 'HelloWorld',
  components:{
    Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{ 
    width: 100%;
    height: 50px;
    text-align: left;
  }

</style>
