<template>
<div>
    <div id="Container"> 
			<div class="row"> 
				{{ blog.id }}
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
              <textarea  class="form-control" rows="3" style="width:500px;" v-model="blog.content"></textarea>
						</div>
            <button type="button" class="btn btn-outline-primary postBlog" v-on:click="postBlog()" >update</button>    
        </div>
			</div>
    </div>  
</div>    
</template>

<script>
export default {
  name: "Post",
	props:{
		content:{
			type:Object
		}
	},
  data(){
      return{ 
				blog:this.content,
				magic_flag: false,
				token: '', 
      }
	},
	// watch:{
	// 	blog: function(){
	// 		this.blog = this.content
	// 	}
	// },
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
      },
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