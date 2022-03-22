<template>
<section>
    <div class="Manager">
        <div class="M-imagem">
        </div>
        <div class="M-conteudo">
            <h1>Manage</h1>
            <p>Esse projeto me fez criar uma landing page responsivo de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
            <div class="M-botao">
                <a href="" class="ctn"> VER projeto </a>
            </div>
        </div>
    </div>
    <div class="Bookmark">
        <div class="B-imagem">
        </div>
        <div class="B-conteudo">
            <h1>Bookmark</h1>
            <p>Esse projeto me fez criar uma landing page responsivo de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
            <div class="B-botao">
                <a href="" class="ctn"> VER projeto </a>
            </div>
        </div>  
    </div>
</section>
</template>
<script>
export default{

}
</script>
<style scoped>
 .Manager{
    margin-top: 100px;
    display: grid;
    grid-template-columns: 50% 30%;
    gap: 20%;
    padding: 0 10%;
 }
 
 .M-imagem{
    background-color: goldenrod;
    background: url('../../assets/manager.svg');
    background-repeat: no-repeat;
    width: 100vh;
    height: 100vh;

 }
 .M-conteudo{
    padding: 50px 0;
    border-top:1px solid #33323d33;
    border-bottom:1px solid #33323d33;
 }

 h1{
    margin-bottom: 10px;
    font-size:2em;
    font-weight:700;
    color:#33323D;
    font-family: 'Ibarra Real Nova';
 }

 p{
    font-family: 'Public Sans';
    line-height:30px;
    font-size: 16px;
    color:#33323D;
    margin-bottom: 60px;
 }

a{
    text-decoration:none;
    text-transform: uppercase;
    padding:20px 40px;
    border: 1px solid #33323D;
    color:#33323D;
}

.Bookmark{
    margin-top: 100px;
    display: grid;
    direction: rtl;
    grid-template-columns: 50% 30%;
    gap: 20%;
    padding: 0 10%;
 }
 .B-imagem{
    background-color: goldenrod;
    background: url('../../assets/Bookmark.svg');
    background-repeat: no-repeat;
    width: 100vh;
    height: 100vh;

 }
 .B-conteudo{
    padding: 50px 0;
    border-top:1px solid #33323d33;
    border-bottom:1px solid #33323d33;
 }

 h1{
    margin-bottom: 10px;
    font-size:2em;
    font-weight:700;
    color:#33323D;
    font-family: 'Ibarra Real Nova';
 }

 p{
    font-family: 'Public Sans';
    line-height:30px;
    font-size: 16px;
    color:#33323D;
    margin-bottom: 60px;
 }

a{
    text-decoration:none;
    text-transform: uppercase;
    padding:20px 40px;
    border: 1px solid #33323D;
    color:#33323D;
}
</style>