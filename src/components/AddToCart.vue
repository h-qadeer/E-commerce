<template>
    <div class="add-to-cart">
        <div class="card column" v-for="item of items" :key="item.code">
            <img :src="addidas" alt="Denim Jeans" >
            <h1>{{item.name}}</h1>
            <p class="price">Rs :{{item.price}}</p>
            <p><button @click="addtoCart(item)">Add to Cart</button></p>
        </div>
 
    </div>
 

</template>

<script>
// import {mapActions} from "vuex";
import addidas from '../assets/addidas.jpg'
import puma from '../assets/puma.jpg'
import nike from '../assets/nike.jpg'
import reebok from '../assets/reebok.jpg'


export default{
  
    props:{
        items:Array,
    },
    data(){
        return{
            addidas: addidas,
            puma: puma,
            nike: nike,
            reebok: reebok,
            CardItem:{},


        }
        
    },

    // methods:{
    //     ...mapActions(["addProduct","drawerOpen"]),
    //    addtoCart(item){
    //        this.CardItem={...item,quantity:1}
    //        this.addProduct(this.CardItem);
    //     }
    // }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  /* padding: 20px; */
}

.price {
  color: grey;
  font-size: 22px;
  padding: 10px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
 .add-to-cart{
    padding: 25px;
} 
img{
    width: 210px
}
.column{
  float: left;
  width: 25%;
  margin: 20px;

}
</style>