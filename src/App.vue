<template>
  <PanelBotones @panel-next="panelNext" @panel-prev="panelPrev"/>
  <ContenedorPaneles ref="contenedorPaneles"/>
</template>

<script>
import ContenedorPaneles from './components/ContenedorPaneles.vue';
import PanelBotones from './components/PanelBotones.vue';

export default {
  name: 'App',
  components: {
    PanelBotones,
    ContenedorPaneles
  },
  methods: {
      panelNext(){
        this.$refs.contenedorPaneles.panelNext();
      },
      panelPrev(){
        this.$refs.contenedorPaneles.panelPrev();
      }

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
