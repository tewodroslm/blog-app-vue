<template>
	<div>
		<Navbar></Navbar><hr/>
		<div>
			<h3>My posts</h3>
			
			<div class="container" >
          <div class="card-deck" style="background-color:#ebe9e4;">
            <div class="card-columns" style="margin-top:3px;padding-top:10px;padding-right:3px;">
              <div v-if="lists.length > 0">
               <div v-for='(list, index) in lists' :key='index' class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mr-5 ml-0">                        
                  <div class="card" style="max-width: 510px;">
                            <!-- <img v-bind:src=imgsrc+list+imgtype  class="card-img-top" alt="card-img"/> -->
                    <div class="card-block text-left">
                            <!-- <h4 class="card-title">Mathmatics</h4> -->
                      <div class="card-text lead " style="margin:8px;"> 
                            {{ list['content']}}          
                      </div><br/>
                            <!-- <a href="#" class="btn btn-outline-primary active dropdown-toggler" v-on:click="more_btn_clicked" data-toggle="collapse" data-target="#More">{{ more }}</a> -->
                    </div>    
                    <div class="card-footer">{{ list['title'] }}</div>
										<div class="card-footer" >
											<a href="#" @click="edit(index)" class="btn btn-outline-primary active dropdown-toggler" data-toggle="collapse" data-target="#More" style="margin-left:20px;background-color:lightblue;">edit</a>
											<a href="#" @click="remove(list['id'])" class="btn btn-outline-primary active dropdown-toggler" data-toggle="collapse" data-target="#More" style="margin-left:20px;background-color:lightblue;color:red;">remove</a>
										</div>
										
                  </div>
               </div>
							</div>
							<div v-else>
								<h3> Oh no posts 😢 </h3>
							</div>
         </div>
       </div>
			<div v-if="editClicked">
				<!-- <Update :content=contentToBeEdited :key="componentKey"></Update> -->
				<div id="Container"> 
					<div class="row">
						<div class="col-sm">
							<div class="form-group">
								<label class="Title">Title: </label>
								<input
									class="form-control"
									v-model="blog.title"
									type="text"
									@focus="magic_flag = true"
									@blur="magic_flag = false"
									required >
							</div>
						</div> 
						<div class="col-sm">   
								<label class="content">Description : </label>
								<div  class="form-group">
									<textarea  class="form-control" rows="3" cols="200" style="width:500px;" v-model="blog.content"></textarea>
								</div>
								<button type="button" class="btn btn-outline-primary postBlog" v-on:click="updateBlog()" style="margin-top:-3px;margin-bottom:35px;">update</button>    
						</div>
						</div>
         </div>  
			</div>
     </div>
			
		</div>
	</div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
	name: "ownedposts",
  components:{
		Navbar,
	},
	data(){
		return{
			token: '',
			lists:[],
			editClicked:false, 
			blog:{}
		}
	},
	methods: {
		edit(index){
			console.log(index)
			this.editClicked = true
			this.blog = this.lists[index]
			console.log(this.blog.title)  
		},
		updateBlog: function(){
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
                if(data.status == 200) { alert('Content updated');}
            })  
    },
		remove($id){
			fetch('http://127.0.0.1:8000/api/content/'+$id,{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ this.token
				}
			})
				.then((response) => response.json())
				.then((resp) => {
					console.log(resp)
				})
			let arr = []
			this.lists.forEach((value) => {
				if(value.id != $id){
					arr.push(value)
				}
			})
			this.lists = [...arr]
		}
	},
	mounted: function(){
		this.token = this.$store.state.accessToken;
		fetch('http://127.0.0.1:8000/api/owned-content',{
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
			})
	}
}
</script>



<style scoped>
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