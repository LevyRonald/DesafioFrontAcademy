<template>
 <header class="menu">
     <slot>
     </slot>
    <nav>
        <li> <a href=""> Home </a></li>
        <li> <a href=""> Portfólio </a></li>
        <li> <a href=""> Contato </a></li> 
    </nav>      
    </header>
</template>
<script>
export default {
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}
.menu{
  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin-top: 65px;
  margin-left: 164px;
  margin-right: 164px;
}

.menu nav{
  list-style: none; 
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.menu nav li{
  text-align: center;
  width: 10%;
}

.menu nav li a{
  font-family: 'Public Sans', 'Regular', sans-serif;
  display: inline-block;
  padding: 10px 0;
  width: 100%;
  text-decoration: none;
  color: #33323D;
  font-size: 14px;
}

.menu nav li a:hover{
  transition: 0.5s;
  color: #5FB4A2;
}
</style>
