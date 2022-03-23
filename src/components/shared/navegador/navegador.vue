<template>
  <div class="navegador">
    <div class="campo_anterior">
      <img src="../../../assets/navegador/indicador_esquerdo.svg" alt="">
      <div>
      <slot name="anterior"></slot>
      <p>Projeto Anterior</p>
      </div>
    </div>
    <div class="proximo_campo">
      <div>
      <slot name="proximo"></slot>
      <p>Proximo Projeto</p>
      </div>
      <img src="../../../assets/navegador/indicador_direito.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.navegador{
    width: 80%;
    border-top: #33323d34 solid 1px;
    border-bottom: #33323d34 solid 1px;
    display: flex;
    justify-content: space-between;
    height: 150px;
    align-items: center;
    margin: auto;
}
.anterior{
   color:#33323D;
   text-decoration: none;
}
.proximo{
   color:#33323D;
   text-decoration: none;
}
.campo_anterior{
  display: flex;
  gap: 20px;
}
.campo_anterior>div>p{
    color: #535357;
}
.proximo_campo{
  display: flex;
  gap: 20px;
}
.proximo_campo>div>p{
    color: #535357;
    text-align: end;
}
</style>