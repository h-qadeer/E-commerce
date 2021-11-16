<template>
    <div class="topnav">

        <router-link to="/home">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <!-- <router-link to="/shop">Shop Now</router-link> -->
    
        <router-link id="logout" to="/">Logout</router-link>
    
    </div>
<div class="Table">
 <table id="firstTable">
    <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="rows in rows" v-bind:key="rows" v-bind:todo="rows">
        <td>{{row.id}}</td>
        <td>{{row.name}}</td>
        <td>{{row.phone}}</td>
        <td>{{row.email}}</td>
        </tr>
    </tbody>
 </table>
</div>

</template>

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
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
.Table{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
}
</style>