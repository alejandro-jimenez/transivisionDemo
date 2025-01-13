<template>
<h3>Inspeccionar unidad</h3>

<div class="container text-center">
    <div class="row" v-if="camaraVisible">
      <div class="col-12">
        <camera :resolution="{ width: 1024, height: 812 }" ref="camera" autoplay></camera>
      </div>
      <div class="col-12"> 
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Comentarios</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      </div>
      <div class="col-12">
        <button @click="snapshot">Guardar</button>        
      </div>
    </div>

    <div class="row">
      <div class="col-12"><span class="input-group-text">VIN correcto</span></div>
      <div class="col-6">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Bien</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">Mal</label>
          </div>
      </div>      
      <div class="col-6"><a href="#" class="link-underline-primary" @click="tomarFoto">Foto</a></div>
    </div>
    
    <div class="row">
      <div class="col-12"><span class="input-group-text">Carrocería</span></div>
      <div class="col-6">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Bien</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">Mal</label>
          </div>
      </div>      
      <div class="col-6"><a href="#" class="link-underline-primary" @click="tomarFoto">Foto</a></div>
    </div>    

    <div class="row">
      <div class="col-12"><span class="input-group-text">Interiores</span></div>
      <div class="col-6">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Bien</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">Mal</label>
          </div>
      </div>      
      <div class="col-6"><a href="#" class="link-underline-primary" @click="tomarFoto">Foto</a></div>
    </div>

    <div class="row">
      <div class="col-12"><span class="input-group-text">Se puede manejar</span></div>
      <div class="col-6">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Bien</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">Mal</label>
          </div>
      </div>      
      <div class="col-6"><a href="#" class="link-underline-primary" @click="tomarFoto">Foto</a></div>
    </div>    

</div>
        
    <p><a href="#" class="link-underline-primary" @click="$emit('ir-menu')">Inicio</a></p>
</template>
        
<script>
import Camera from 'simple-vue-camera';

export default{
    name:"inspeccion-unidad",
    data(){
        return {
          camaraVisible: false,
        }
    },
    methods:{
      tomarFoto(){
        this.camaraVisible=true;
      },
      snapshot(){
        this.camaraVisible=false;
      }
    },
    components:{
      Camera,
    },

}



</script>