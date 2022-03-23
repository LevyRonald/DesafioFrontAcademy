<template>
<section>
<section class="manager">
      <div class="m-img m-box">
          <img src="../../assets/portfolio/manager.svg" alt="">
      </div>
      <div class="m-texto m-box">
        <h1>Manage</h1>
        <p>Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
        <div>
          <a href="/manager">Ver Projeto</a>
        </div>
      </div>
    </section>
    <section class="bookmark">
      <div class="b-img b-box">
          <img src="../../assets/portfolio/Bookmark.svg" alt="">
      </div>
      <div class="b-texto b-box">
        <h1>Bookmark</h1>
        <p>Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
        <div>
          <a href="/bookmark">Ver Projeto</a>
        </div>
      </div>
    </section>
    <section class="insure">
      <div class="i-img i-box">
          <img src="../../assets/portfolio/insure.svg" alt="">
      </div>
      <div class="i-texto i-box">
        <h1>insure</h1>
        <p>Este foi um projeto pequeno que consistiu em HTML e CSS principalmente. Eu construí uma landing page totalmente responsiva. O único JavaScript que usei foi para o menu de navegação mobile.</p>
        <div>
          <a href="/insure">Ver Projeto</a>
        </div>
      </div>
    </section>
    <section class="fylo">
      <div class="f-img f-box">
          <img src="../../assets/portfolio/fylo.svg" alt="">
      </div>
      <div class="f-texto f-box">
        <h1>Fylo</h1>
        <p>Este projeto foi puramente HTML e CSS. Eu recebi designs mobile e desktop para construir, então ele foi totalmente responsivo. Eu tomei um caminho mobile-first e usei CSS moderno como Flexbox e Grid para criar o layout.</p>
        <div>
          <a href="/fylo">Ver Projeto</a>
        </div>
      </div>
    </section>
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
    padding-bottom: 10%;
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


 .bookmark{
    display: flex;
    flex-direction: row-reverse;
    padding: 0 10%;
    padding-bottom: 10%;
}
.b-img{
    width:55%;
}
.b-box img{
    width:100%;
}
.b-texto{
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 30px 0;
    width: 30%;
    border-top: 1px solid #33323d33;
    margin-right: 14%;
    border-bottom: 1px solid #33323d33;
}
.b-texto h1{
    margin-bottom: 10px;
    font-size:2em;
    font-weight:700;
    color:#33323D;
    font-family: 'Ibarra Real Nova';
}
.b-texto p{
    font-family: 'Public Sans';
    line-height:30px;
    font-size: 16px;
    color:#33323D;
    margin-bottom: 60px;
}
.b-texto a{
    text-decoration:none;
    text-transform: uppercase;
    padding:20px 40px;
    border: 1px solid #33323D;
    color:#33323D;
}


 .insure{
    display:flex;
    padding: 0 10%;
    padding-bottom: 10%;
}
.i-img{
    width:50%;
    margin-right: 100px;
}
.i-box img{
    width:100%;
}
.i-texto{
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 30px 0;
    width:40%;
    border-top:1px solid #33323d33;
    border-bottom:1px solid #33323d33;
}
.i-texto h1{
    margin-bottom: 10px;
    font-size:2em;
    font-weight:700;
    color:#33323D;
    font-family: 'Ibarra Real Nova';
}
.i-texto p{
    font-family: 'Public Sans';
    line-height:30px;
    font-size: 16px;
    color:#33323D;
    margin-bottom: 60px;
}
.i-texto a{
    text-decoration:none;
    text-transform: uppercase;
    padding:20px 40px;
    border: 1px solid #33323D;
    color:#33323D;
}

.fylo{
    display: flex;
    flex-direction: row-reverse;
    padding: 0 10%;
    padding-bottom: 10%;
}
.f-img{
    width:55%;
}
.f-box img{
    width:100%;
}
.f-texto{
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 30px 0;
    width: 30%;
    border-top: 1px solid #33323d33;
    margin-right: 14%;
    border-bottom: 1px solid #33323d33;
}
.f-texto h1{
    margin-bottom: 10px;
    font-size:2em;
    font-weight:700;
    color:#33323D;
    font-family: 'Ibarra Real Nova';
}
.f-texto p{
    font-family: 'Public Sans';
    line-height:30px;
    font-size: 16px;
    color:#33323D;
    margin-bottom: 60px;
}
.f-texto a{
    text-decoration:none;
    text-transform: uppercase;
    padding:20px 40px;
    border: 1px solid #33323D;
    color:#33323D;
}
</style>