<template>
  <div class="contato">
    <main>
      <section class="entre_Contato">
        <h1>Entre Em Contato</h1>
        <div class="conteudo"> <p>
          Eu adoraria escutar sobre seu trabalho atual e como eu poderia ajudar.
          Atualmente estou procurando por um cargo e aberto para várias
          oportunidades. Minha preferência é uma oportunidade em uma empresa
          Britânica. Mas também estou feliz em escutar sobre oportunidades
          remotas. Sou uma pessoa trabalhadora e positiva que sempre fará as
          tasks com um senso de propósito e atenção aos detalhes. Fique livre
          para checar meu perfis abaixo e entrar em contato utilizando o
          formulário.
        </p>
        <nav>
            <li><a href=""><img src="../.././assets/github_Preto.svg" alt=""></a></li>
            <li><a href=""><img src="../.././assets/twitter_Preto.svg" alt=""></a></li>
            <li><a href=""><img src="../.././assets/linkedin_Preto.svg" alt=""></a></li>
        </nav></div>
      </section>
      <section class="area_formulario">
          <h1>Contato</h1>
          <form action="" class="formulario">
              <label for="nome">nome</label>
              <input type="text" class="nome">
              <label for="email">email</label>
              <input type="text" class="email">
              <label for="mensagem">mensagem</label>
              <textarea name="mensagem" id="" cols="30" rows="10"></textarea>
              <button>Enviar</button>
          </form>
      </section>
    </main>
  </div>
</template>
<script>
</script>
<style>
main{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.entre_Contato{
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    height: 300px;
    width: 80%;
    padding-top: 50px;
    border-top: #33323d34 solid 1px;
}
.entre_Contato>h1{
  font-size:2em;
  font-weight:700;
  color:#3d3c44;
  font-family: 'Ibarra Real Nova','Bold';
  width: 40%;
  height: 60%;
}
.conteudo{
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 60%;
    height: 100%;
}
.conteudo>p{
  font-family: 'Public Sans', 'Regular', sans-serif;
  line-height:30px;
  font-size: 14px;
  color:#525258;
}
.conteudo>nav{
    display: flex;
    gap: 15px;
}
.conteudo>nav>li{
    list-style: none;
}
.area_formulario{
    height: 500px;
    border-top: #33323d34 solid 1px;
    width: 80%;
    padding-top: 50px;
    display: flex;
}
.area_formulario>h1{
  font-size:2em;
  font-weight:700;
  color:#3d3c44;
  font-family: 'Ibarra Real Nova','Bold';
  width: 40%;
  height: 60%;
}
.formulario{
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 15px;
}
.formulario>textarea{
    resize: none;
    background-color: rgb(231, 227, 227);
    border: none;
    height: 20%;
}
.formulario>input{
    border:none;
    background-color: rgb(231, 227, 227);
    height: 8%;
}
.formulario>label{
  font-family: 'Ibarra Real Nova','Bold';
  line-height:30px;
  font-size: 15px;
  color:#131314;
}
.formulario>button{
    width: 32%;
    height: 10%;
    font-family: 'Ibarra Real Nova','Bold';
    line-height:30px;
    font-size: 15px;
    color:#ffffff;
    background-color: rgb(53, 50, 85);
    border: none;
}

</style>