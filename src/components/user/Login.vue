<template>
	<div>
		<Navbar></Navbar>
		<hr>
		<div class="container">
		<div class="myform form ">
			<div class="logo mb-3">
				<div class="col-md-12 text-center">
					<h1>Login</h1>
				</div>
			</div>
	
			<form @submit.prevent="submit">
	
				<div class="form-group"> 
            <input type="email" name="email"  class="form-control" id="email" v-model="credentials.email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
				<div class="form-group"> 
            <input type="password" name="password"  class="form-control" id="password"  v-model="credentials.password"  placeholder="password">
        </div>
				<div class="col-md-4 text-center mb-3" style="float:right">
          <button type="submit" class=" btn btn-block btn-primary ">submit</button>
        </div> 
			</form> 
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from '../../components/Navbar.vue'
export default {

	name: 'login',
	components:{
    Navbar
  },
	data() {
		return{
			credentials: {
        email: '',
				password: '',
			},
			user:{},
		}
	},

	methods: {
		...mapActions([
			'login',
			]),
		submit(){
			this.login(this.credentials)			
					.then(() => {
						console.log(this.$store.state.user)
						if(Object.keys(this.$store.state.user).length !== 0){
							this.$router.replace('/blog');
						}
					})
					.catch((error) => {
						console.log(error + "Error WHEN LOGING IN USING CREDENTIAL ");
					});
		},
	},
}
</script>

<style scoped>
   .myform{ 
		margin: auto;
		position: relative;
		display: -ms-flexbox;
		display: flex;
		margin-top: 100px;
		padding: 1rem;
		-ms-flex-direction: column;
		flex-direction: column;
		width: 100%;
		pointer-events: auto;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid rgba(0,0,0,.2);
		border-radius: 1.1rem;
		outline: 0;
		max-width: 500px;
	}

	.tx-tfm{
    text-transform:uppercase;
  }
</style>