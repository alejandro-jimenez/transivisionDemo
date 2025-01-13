<template>
    <div v-if="panelActivo==0" class="container-MD"><AutenticacionInicial /></div>
    <div v-if="panelActivo==1" class="container-md"><MenuOperaciones @panel-go="panelGo"/></div>
    <div v-if="panelActivo==2" class="container-md"><EscanearVin @ir-menu="irMenu"></EscanearVin></div>
    <div v-if="panelActivo==3" class="container-md"><InspeccionUnidad @ir-menu="irMenu"></InspeccionUnidad></div>
    <div v-if="panelActivo==4" class="container-md"><LocalizarUnidad @ir-menu="irMenu"></LocalizarUnidad></div>
    <div v-if="panelActivo==5" class="container-md"><EntregarMadrina @ir-menu="irMenu"></EntregarMadrina></div>
</template>

<script>
import AutenticacionInicial from './login/AutenticacionInicial.vue';
import MenuOperaciones from './login/MenuOperaciones.vue';
import EscanearVin from './operaciones/EscanearVin.vue';
import InspeccionUnidad from './operaciones/InspeccionUnidad.vue';
import LocalizarUnidad from './operaciones/LocalizarUnidad.vue';
import EntregarMadrina from './operaciones/EntregarMadrina.vue';

export default{
    name: "contenedor-panels",
    components:{
        AutenticacionInicial,
        MenuOperaciones,
        EscanearVin,
        InspeccionUnidad,
        LocalizarUnidad,
        EntregarMadrina
    },
    data(){
        return{
            panelActivo: 0,
            paneles:["LOGIN","MENU","ESCANEAR","INSPECCIONAR","LOCALIZAR","TO_MADRINA",],
        }
    },
    methods:{
        panelNext(){
            this.panelActivo++;
            if (this.panelActivo >= this.paneles.length) this.panelActivo = 0;
        },
        panelPrev(){
            this.panelActivo--;
            if (this.panelActivo < 0) this.panelActivo = this.paneles.length - 1 ;
        },
        panelGo(panelName){
            this.panelActivo = this.paneles.findIndex(pa => pa === panelName)
            console.log('vamos al panel: ' +  this.panelActivo);
        },
        irMenu(){
            this.panelGo('MENU');
        }


    }

}

</script>