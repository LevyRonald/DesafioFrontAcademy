<template>
 <header>
   <img src="./assets/logo.svg" alt="">
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
header{
	display: flex;
	align-items: center;
	background-color: #ffffff;
  padding: 30px;
  width: 1111px;
  height: 32px;
  left: 165px;
  top: 64px;
}

header nav{
	list-style: none;	
	display: flex;
  justify-content: flex-end;
	width: 100%;
}

header nav li{
	text-align: center;
	width: 10%;
}

header nav li a{
  font-family: 'Public Sans';
	display: inline-block;
	padding: 10px 0;
	width: 100%;
	text-decoration: none;
	color: #33323D;
  font-size: 20px;
}

header nav li a:hover{
	transition: 0.5s;
  color: #5FB4A2;
}
</style>
