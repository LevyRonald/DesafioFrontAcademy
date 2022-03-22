<template>
  <div>
    <section class="conteudo">
      <div class="info-box">
        <div class="info-sub-box">
          <h1>Olá, me chamo Alex Spencer e eu amo construir websites lindos</h1>
          <a href="#sobre-mim"><button><span></span>sobre mim</button></a>
        </div>
      </div>
    </section>
    <section class="sobre-mim" id="sobre-mim">
      <div class="img-perfil info-sobre">
        <img src="../../assets/Bitmap.png" alt="">
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
          <a href="/portfolio" class="ctn"
            >ir para portfolio</a
          >
        </div>
      </div>
    </section>
    <section class="interessado">
      <h1>Interessado em fazer projetos comigo?</h1>
      <a href="/contato" class="ctn">contato</a>
    </section>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.conteudo{
  display:flex;
  justify-content:center;
  padding:0 10%;
}
.info-box{
  width:100%;
  height:600px;
  background:url('../../assets/Group16.png');
  background-size:contain;
  background-repeat: no-repeat;
  background-size: 100%;
  display:flex;
  align-items: flex-end;
}
.info-sub-box{
  background-color: white;
  width:440px;
  height:360px;
}
.info-sub-box h1{
  padding: 40px 19px 10px;
  font-family: 'Ibarra Real Nova','Bold';
  font-size:2.5em;
  max-width: 360px;
  margin-bottom: 48px;
}
.info-box a{
  text-decoration: none;
}
.info-sub-box button{
  font-family: 'Public Sans', 'Regular', sans-serif;
  width:200px;
  height:60px;
  margin-bottom: 20px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color:#203A4C;
  border:0;
  cursor: pointer;
  text-transform: uppercase;
  padding-right: 30px;
}
.info-sub-box button:hover,
.info-sub-box button > span:hover{
  background-color:#5FB4A2;
  transition: 1s;
}
.info-sub-box button > img{
  height:100%;
}
.info-sub-box button > span{
  display:flex;
  align-items: center;
  justify-content:center;
  width:100%;
  max-width:50px;
  height:100%;
  background-color:#1f2f3b;
}
.sobre-mim{
  margin-top: 100px;
  display:flex;
  padding: 0 10%;
}
.img-perfil{
  width:50%;
  margin-right: 100px;
}
.texto-info{
  padding: 30px 0;
  width:40%;
  border-top:1px solid #33323d33;
  border-bottom:1px solid #33323d33;
}
.box-sobre img{
  width:100%;
}
.texto-info h1{
  margin-bottom: 10px;
  font-size:2em;
  font-weight:700;
  color:#33323D;
  font-family: 'Ibarra Real Nova','Bold';
}
.texto-info p{
  font-family: 'Public Sans', 'Regular', sans-serif;
  line-height:30px;
  font-size: 16px;
  color:#33323D;
  margin-bottom: 60px;
}
.link-box{
  text-align:center;
}
.texto-info a{
  font-family: 'Public Sans',sans-serif;
  text-decoration:none;
  text-transform: uppercase;
  padding:20px 40px;
  border: 1px solid #33323D;
  color:#33323D;
  font-size: 15px;
}
.interessado{
  display:flex;
  padding:10% 10%;
  align-items:center;
  justify-content: space-between;
}

.interessado h1{
  font-family: 'Ibarra Real Nova','Bold';
  font-size:2.2em;
  max-width:400px;
}

.interessado a{
  font-family: 'Public Sans',sans-serif;
  text-decoration:none;
  text-transform: uppercase;
  padding:15px 40px;
  border: 1px solid #33323D;
  color:#33323D;
}
span{
    background:url('../../assets/Group3.svg');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
}
</style>