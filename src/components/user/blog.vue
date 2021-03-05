<template>
	<div>
		<Navbar></Navbar><hr/>
		<br/><br/>
		<div class="container" >
      <div class="card-deck" style="background-color:#ebe9e4;">
         <div class="card-columns" style="margin-top:3px;padding-top:10px;padding-right:3px;">
                
            <div v-for='list in lists' v-bind:key='list.index' class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mr-5 ml-0">
                <div class="card" style="max-width: 510px;">
                            <!-- <img v-bind:src=imgsrc+list+imgtype  class="card-img-top" alt="card-img"/> -->
                  <div class="card-block text-left">
                            <!-- <h4 class="card-title">Mathmatics</h4> -->
                    <div class="card-text lead" style="margin:8px;">
                      <div v-if="isLess">
                        {{ list['content'].slice(0,19) }} 
                      </div>
                      <div class="collapse " id="More">
                       {{ list['content']}}          
                      </div>
                    </div>                    
                  </div>    
                  <div class="card-footer"> {{ list['title'] }}
                    
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div><a href="#" class="btn btn-outline-primary active dropdown-toggler" v-on:click="more_btn_clicked" data-toggle="collapse" data-target="#More" style="background-color:#ebe9e4;color:blue;margin:45px;">{{ more }}</a></div>
     </div>
	</div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
	name: 'blog',
	components:{
    Navbar
  },
	data(){
		return{
			token: '',
			lists:[],
      more:"more",
      isLess: true
		}
	},
	methods: {
		getToken(){
			this.token = this.$store.state.accessToken;
		},
		more_btn_clicked:function(){
        if(this.more=='more'){
         this.more='less'
         this.isLess=false
         
        }
        else{
            this.more='more'
            this.isLess=true
        }
         
     }
	},
	mounted() {
    this.token = this.$store.state.accessToken;
		fetch('http://127.0.0.1:8000/api/contents',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ this.token
					},
			})
				.then((response) => response.json())
        .then((resp) => {
          this.lists = resp.data
          console.log(this.lists)
      }).catch(function() {
       this.$router.replace('/login');
      });	
	}
}
</script>

<style scoped>
.modal-backdrop {
   background-color: transparent;
}

div.modal-backdrop.fade{
	pointer-events: none;

  /* for "disabled" effect */
  opacity: 0.5;
  background: #CCC;
}
.modal-backdrop.fade {
    -webkit-transition: none;
    -moz-transition: none;
    -ms-transition: none;
    -o-transition: none;
    transition: none;
}
</style>