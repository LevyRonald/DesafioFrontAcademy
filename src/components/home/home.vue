<template>
  <div>
    <section class="conteudo">
      <div class="info-box">
        <div class="info-sub-box">
          <h1>Olá, me chamo Alex Spencer e eu amo construir websites lindos</h1>
          <button href="#sobre-mim"><span></span>sobre mim</button>
        </div>
      </div>
    </section>
    <section class="sobre-mim" id="">
      <div class="img-perfil info-sobre">
        <slot></slot>
      </div>
      <div class="texto-info info-sobre">
        <h1>Sobre mim</h1>
        <p>
          Sou um desenvolvedor front-end júnior procurando por uma oportunidade.
          Eu foco em escrever HTML acessível, usando práticas modernas de CSS e
          escrevendo um JavaScript limpo. Quando estou escrevendo código
          JavaScript, na maioria das vezes estou usando React, mas posso me
          adapta para qualquer ferramenta se necessário. Moro em Londres, UK,
          mas também seria feliz trabalhando remotamente e tenho experiência em
          times remotos. Quando não estou codando, poderá me achar fora de casa.
          Eu adoro estar próximo a natureza seja para uma caminhada, corrida ou
          ciclismo. Eu amaria se você desse uma olhada no meu trabalho.
        </p>
        <div class="link-box">
          <a href="#" class="ctn"
            >ir para portfolio</a
          >
        </div>
      </div>
    </section>
    <section class="interessado">
      <h1>Interessado em fazer projetos comigo?</h1>
      <a href="#" class="ctn">contato</a>
    </section>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>