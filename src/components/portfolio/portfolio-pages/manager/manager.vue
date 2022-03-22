<template>
  <div>
    <div class="fundo-manage">
        <img src="../../../../assets/Group6.jpg" alt="">
    </div>
    <interessados></interessados>
  </div>
</template>
<script>
import interessados from "../../../shared/interessados/interessados.vue";

export default {
  components: {
    interessados: interessados,
  },
};
</script>
<style>
.fundo-manage{
    
}
.fundo-manage img{
margin-left: 10%;
background-repeat: no-repeat;
width:80%;
height:80%;
}
</style>