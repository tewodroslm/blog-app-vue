<template>
	<div>
		<Navbar></Navbar><hr/>

			<div class="container">
				<div class="myform form">
					<div class="logo mb-3">
						<div class="col-md-12 text-center">
						<h1>Sign up</h1>
				</div>
			</div>
				<form @submit.prevent="submit">
				<!-- name: <label><input type="text" name="name"  v-model="user.name" /></label> -->
				<div class="form-group"> 
            <input type="text" name="name"  class="form-control" id="name" v-model="user.name"   placeholder="Enter name">
        </div>
				<!-- email: <label><input type="email" name="email" v-model="user.email" /></label><br/><br/><br/> -->
				<div class="form-group"> 
            <input type="email" name="email"  class="form-control" id="email" v-model="user.email"   placeholder="Enter email">
        </div>
				<div class="form-group"> 
            <input type="password" name="password"  class="form-control" id="password"  v-model="user.password"   placeholder="password">
        </div>
				<div class="form-group"> 
            <input type="password"  name="confirmpassword"  class="form-control" id="cpassword"   v-model="user.password_confirmation"  placeholder="confirm password" >
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
import Navbar from '../../components/Navbar.vue'
export default {
	name: 'login',
  components:{
    Navbar
  },
	data() {
		return{
			user: {
				name:'',
        email: '',
				password: '',
				password_confirmation: ''
			},
		}
	},

	methods: {
		submit(){
			fetch('http://127.0.0.1:8000/api/register',{
				method: 'POST',
				body: JSON.stringify(this.user),
				headers:{
					'Content-Type': 'application/json',
				}
			})
				.then(response => response.json())
				.then((data) => {
					console.log(data);
					this.$router.replace('/login');
				})
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
		margin-top: 35px;
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