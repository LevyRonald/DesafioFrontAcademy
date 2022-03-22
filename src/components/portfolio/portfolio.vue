<template>
<section class="manager">
      <div class="m-img m-box">
          <img src="../../assets/manager.svg" alt="">
      </div>
      <div class="m-texto m-box">
        <h1>Manage</h1>
        <p>Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
        <div>
          <a href="">Ver Projeto</a>
        </div>
      </div>
    </section>
</template>
<script>
export default{

}
</script>
<style scoped>
 .manager{
    display:flex;
    padding: 0 10%;
}
.m-img{
    width:50%;
    margin-right: 100px;
}
.m-box img{
    width:100%;
}
.m-texto{
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 30px 0;
    width:40%;
    border-top:1px solid #33323d33;
    border-bottom:1px solid #33323d33;
}
.m-texto h1{
    margin-bottom: 10px;
    font-size:2em;
    font-weight:700;
    color:#33323D;
    font-family: 'Ibarra Real Nova';
}
.m-texto p{
    font-family: 'Public Sans';
    line-height:30px;
    font-size: 16px;
    color:#33323D;
    margin-bottom: 60px;
}
.m-texto a{
    text-decoration:none;
    text-transform: uppercase;
    padding:20px 40px;
    border: 1px solid #33323D;
    color:#33323D;
}
</style>