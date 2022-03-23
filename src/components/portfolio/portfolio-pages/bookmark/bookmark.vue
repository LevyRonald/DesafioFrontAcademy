<template>
  <div>
    <div class="fundo-bookmark">
      <img src="../../../../assets/bookmark/bookmark-portfolio.svg" alt="" />
    </div>
    <section class="conteudo">
      <div class="projeto">
        <h1>Projeto</h1>
        <p>
          Este projeto foi um desafio de front-end do Frontend Mentor. É uma
          plataforma que te faz práticar construindo websites a partir de um
          design e casos de usuário. Cada desafio contém designs mobile e
          desktop para ilustrar como o website seria em diferentes tamanhos de
          tela. Criar esses projetos me ajudou a refinar meu fluxo de trabalho e
          resolver problemas de código da vida real. Eu aprendi algo novo com
          cada projeto, me ajudando a melhorar e adaptar meu estilo.
        </p>
        <div class="preview">
          <h1>Previews Estáticos</h1>
          <img src="../../../../assets/bookmark/bookmark-preview.svg" alt="">
          <img class="image2" src="../../../../assets/bookmark/bookmark-preview2.svg" alt="">
        </div>
      </div>
      <div class="bookmark">
        <h1>Bookmark</h1>
        <p>
            Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como a área de Features.
        </p>
        <p class="subT">Interaction Design / Front End Development
          HTML / CSS / JS
        </p>
        <a href="">Visitar</a>
      </div>
    </section>
    <navegador>
      <a slot="anterior" class="anterior" href="/manager"><h1>Manage</h1></a>
      <a slot="proximo" class="proximo" href="/insure"><h1>Insure</h1></a>
    </navegador>
    <interessados></interessados>
  </div>
</template>
<script>
import interessados from "../../../shared/interessados/interessados.vue";
import navegador from '../../../shared/navegador/navegador.vue'
export default {
  components: {
    interessados: interessados,
    navegador: navegador
  },
};
</script>
<style>
.conteudo{
  display: flex;
  flex-direction: row-reverse;
  padding: 10%;
}
.conteudo > .bookmark > .subT{
  height: 19px;
  color: #5FB4A2;
}
.preview .image2{
  margin-top: 19px;
  background-repeat: no-repeat;
  width: 100%;
  height: 80%;
}
.bookmark h1{
  font-family: 'Ibarra Real Nova','Bold';
  font-size:2em;
}
.projeto h1{
  font-family: 'Ibarra Real Nova','Bold';
  font-size:2em;
}
.bookmark{
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 30px 0;
    width: 55%;
    height: 5%;
    border-top: 1px solid #33323d33;
    margin-right: 14%;
    border-bottom: 1px solid #33323d33;
}
.projeto{
    margin-top: -25px ;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 100%;
}
.bookmark p{
  font-family: 'Public Sans', 'Regular', sans-serif;
  line-height:30px;
  font-size: 16px;
  color:#33323D;
  margin-bottom: 60px;
}
.projeto p{
  font-family: 'Public Sans', 'Regular', sans-serif;
  line-height:30px;
  font-size: 14px;
  color:#33323D;
  margin-bottom: 60px;
  width: 100%;
}
.fundo-bookmark img {
  margin-left: 10%;
  background-repeat: no-repeat;
  width: 80%;
  height: 80%;
}
.conteudo a{
  font-family: 'Public Sans',sans-serif;
  text-decoration:none;
  text-transform: uppercase;
  padding:15px 40px;
  border: 1px solid #33323D;
  color:#33323D;
}
</style>