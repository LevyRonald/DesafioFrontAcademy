<template>
    <div class="Manager">
        <div class="imagem">
            <slot></slot>
        </div>
        <div class="conteudo">
            <h1>Manage</h1>
            <p>Esse projeto me fez criar uma landing page responsivo de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
            <input type="button" value="VER PROJETO" class="botao">
        </div>  
    </div>
</template>
<script>

</script>
<style scoped>
 .Manager{
    display: grid;
    grid-template-columns: 200px 200px;
    justify-content: center;
    gap: 10%;
 }
 .imagem{
     background-color: goldenrod;
     
 }
</style>
