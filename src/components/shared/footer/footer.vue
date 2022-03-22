<template>
<div class="footer">
    <slot class="logo_footer"></slot>
     <nav class="paginas">
        <li> <a href="/"> HOME </a></li>
        <li> <a href="/portfolio"> PORTFOLIO </a></li>
        <li> <a href="/contato"> CONTATO </a></li> 
    </nav> 
     <nav class="links">
        <li> <a href=""> <img src="../../../assets/github.svg" alt=""></a></li> 
        <li> <a href=""> <img src="../../../assets/twitter.svg" alt=""></a></li>
        <li> <a href=""> <img src="../../../assets/linkedin.svg" alt=""></a></li>
    </nav>         
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.footer{
    background-color: rgba(51, 50, 61, 1);
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    padding: 25px;
}
.paginas{
    display: flex;
    gap: 45px;
    align-items: center;
    width: 55%;
    justify-content: flex-start;
}
.paginas>li{
    list-style: none;
}
.paginas>li>a{
    color: rgba(255, 255, 255, 0.788);
    text-decoration: none;
    font-weight: lighter;
    font-size: 14px;
}
.links{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    width: 25%;
}
.links>li{
    list-style: none;
}
.links>li>a{
    text-decoration: none;
}
</style>
