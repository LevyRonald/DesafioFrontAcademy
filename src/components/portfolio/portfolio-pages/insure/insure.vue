<template>
  <div>
    <div class="container">
      <img
        class="img-inicio"
        src="../../../../assets/insure/porto 1.png"
        alt=""
      />
      <div class="conteudo">
        <section class="tecnologias">
          <h1>Insure</h1>
          <p>
            Este foi um projeto pequeno que consistiu em HTML e CSS
            principalmente. Eu construí uma landing page totalmente responsiva.
            O único JavaScript que usei foi para o menu de navegação mobile.
          </p>
          <p class="sub-text">
            Interaction design/Front End Development HTML/CSS/JS
          </p>
          <a href="">visitar</a>
          <br />
        </section>
        <section class="descricao">
          <h1>Projeto</h1>
          <p>
            Este projeto foi um desafio de front-end do Frontend Mentor. É uma
            plataforma que te faz práticar construindo websites a partir de um
            design e casos de usuário. Cada desafio contém designs mobile e
            desktop para ilustrar como o website seria em diferentes tamanhos de
            tela. Criar esses projetos me ajudou a refinar meu fluxo de trabalho
            e resolver problemas de código da vida real. Eu aprendi algo novo
            com cada projeto, me ajudando a melhorar e adaptar meu estilo.
          </p>
          <h1>Previews Estáticos</h1>
          <img src="../../../../assets/insure/bitmap.png" alt="" />
          <img src="../../../../assets/insure/bitmap copy.png" alt="" />
        </section>
      </div>
    </div>
    <navegador>
      <a slot="anterior" class="anterior" href="/bookmark"><h1>Bookmark</h1></a>
      <a slot="proximo" class="proximo" href="/fylo"><h1>Fylo</h1></a>
    </navegador>
    <interessados></interessados>
  </div>
</template>

<script>
import interessados from "../../../shared/interessados/interessados.vue";
import navegador from "../../../shared/navegador/navegador.vue";
export default {
  components: {
    interessados: interessados,
    navegador: navegador,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-inicio {
  width: 80%;
}
.conteudo {
  display: flex;
  margin-top: 100px;
  margin-bottom: 50px;
  justify-content: space-evenly;
}
.tecnologias {
  width: 30%;
  height: 95%;
  display: flex;
  flex-direction: column;
  border-top: #33323d34 solid 1px;
  border-bottom: #33323d34 solid 1px;
  gap: 20px;
}
.tecnologias > h1 {
  color: #33323d;
  font-size: 40px;
}
.tecnologias > p {
  font-family: "Public Sans", "Regular", sans-serif;
  line-height: 30px;
  font-size: 18px;
  color: #33323d;
  width: 100%;
}
.tecnologias > .sub-text {
  color: #5fb4a2;
}
.tecnologias > a {
  font-family: "Public Sans", sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid #33323d;
  color: #33323d;
  width: 40%;
  text-align: center;
  padding: 15px 0px;
}
.descricao {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.descricao > p {
  font-family: "Public Sans", "Regular", sans-serif;
  line-height: 30px;
  font-size: 16px;
  color: #33323d;
  width: 100%;
}
.descricao > h1 {
  color: #33323d;
  font-size: 30px;
}
</style>