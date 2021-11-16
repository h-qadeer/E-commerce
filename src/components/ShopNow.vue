<template>
<div class="topnav">
    <router-link to="/home">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>

        <router-link to="/shop">Shop Now</router-link>
  
      <router-link id="logout" to="/">Logout</router-link>
</div>

</template>



<script>        
    export default {
    
    data: function () {
        return {
            
        }
    }
}
</script>

<style scoped>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;

}

.topnav {
  background-color: #333;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: #fff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}


#logout{
    float: right;
    margin-right: 50px;
}
</style>