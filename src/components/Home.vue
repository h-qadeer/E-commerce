<template>
        <div class="topnav">
           
            <router-link to="/home">Home</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
            <router-link id="logout" to="/">Logout</router-link>
                <!-- <router-link to="/shop">Shop Now</router-link> -->
        </div>

        <div class="background">
         
        </div>
        <div add-to-cart-div>
            <AddToCart :items="items"/>
        </div>


</template>

<script>
    import AddToCart from './AddToCart.vue'
export default{
    async mounted(){
            const res = await fetch("http://localhost:5000/items");
             this.items = await res.json();
        },
    data(){
        return{
              items:[]
        }
    },
    components:{
        AddToCart
    }
}
</script>

<style scoped>
*{
    margin: 0;
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

.background{
    background-image: url("~@/assets/ShoesImage.jpg");
    background-repeat: no-repeat;
    position: relative;
    background-size: 100% 100%;
    height: 85vh;
}

.cart-component{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
img{
    width: 60px;
    height: 50px;
}
.add-to-cart-div{
    margin: 0 -5px;
}
.add-to-cart-div {
  content: "";
  display: table;
  clear: both;
}
</style>