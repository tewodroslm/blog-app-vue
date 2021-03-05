<template>
  <div class="hello" style="background-color:#ebe9e4;">
  <nav class="navbar navbar-expand-lg navbar-light bg-lights">
  <router-link to='/' class="navbar-brand">Home</router-link>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->
   <router-link to='/blog' class="navbar-brand nav-link" >Blogs</router-link>
   <router-link to='/upload' class="navbar-brand nav-link">Create Content</router-link>
   <router-link to='/about' class="navbar-brand nav-link">About Us</router-link>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
        <!-- <router-link to='/blog' class="nav-link">Blogs</router-link> -->
      </li>
      <li class="nav-item">
        <!-- <router-link to='/about' class="nav-link">About Us</router-link> -->
      </li>
    </ul>
    <div v-show="!isAuthenticated">
      <router-link to='/login' class="nav-link"> 
        <a class="btn btn-outline-success my-2 my-sm-0 " data-toggle="modal" data-target="#login">Sign In</a>
      </router-link>
    </div>
    <div v-show="!isAuthenticated">
      <router-link to='/signup' class="nav-link"> 
        <a class="btn btn-outline-success my-2 my-sm-0 " data-toggle="modal" data-target="#login">Sign Up</a>
      </router-link>
    </div>
    <div v-show="isAuthenticated">
      <router-link to='/login' class="nav-link"> 
        <a class="btn btn-outline-success my-2 my-sm-0 ins" data-toggle="modal" data-target="#login" @click="logout">Sign Out</a>
      </router-link>
    </div>
  </div> 
 </nav>

  </div>
</template>

<script> 
export default {
  name: 'navbar',
  data(){
    return{
      isAuthenticated: false, 
    }
  },
  mounted(){
    if(this.$store.state.accessToken !== null){
      this.isAuthenticated = true
    }
  },
  methods: {
    logout(){
      this.$store.state.accessToken = null;
      this.$store.state.isAuthenticated = false
      this.$router.replace('/login');
    }
  }
}
</script>

<style scoped >
.ins{
  margin-left: 2px;
}
</style>


