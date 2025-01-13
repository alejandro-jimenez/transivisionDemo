<template>
<h3>Escanear QR</h3>
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      <button type="button" class="btn btn-primary" @click="togleScanner">Escanear</button>
    </div>
  </div>
  <div class="row align-items-start">
    <div class="col">
      <textarea type="textarea" v-model="mensaje"></textarea>
    </div>
  </div>
  <div v-if="scannerVisible" class="row align-items-start">
    <div class="col">
      <qrcode-stream @detect="onDetect" @error="onError"></qrcode-stream>
    </div>
  </div>  

  <div class="row align-items-start">

    <div class="row">
      <div class="col-4"><span class="input-group-text">Modelo</span></div>
      <div class="col-8"><input type="text" v-model="qrData.modelo" aria-label="modelo" class="form-control"></div>
    </div>
    <div class="row">
      <div class="col-4"><span class="input-group-text">VIN</span></div>
      <div class="col-8"><input type="text" v-model="qrData.vin" aria-label="vin" class="form-control"></div>
    </div>
    <div class="row">
      <div class="col-4"><span class="input-group-text">Color</span></div>
      <div class="col-8"><input type="text" v-model="qrData.color" aria-label="color" class="form-control"></div>
    </div>
    <div class="row">
      <div class="col-4"><span class="input-group-text">Prop X</span></div>
      <div class="col-8"><input type="text" v-model="qrData.propX" aria-label="propX" class="form-control"></div>
    </div>    
  </div>
</div>



<p><a href="#" class="link-underline-primary" @click="$emit('ir-menu')">Inicio</a></p>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader';

export default{
    name:"escanear-vin",
    data(){
        return {
          mensaje:"sin mensaje",
          scannerVisible: false,
          qrData:{
            modelo: "",
            vin: "",
            color: "",
            propX: "",
          }

        }
    },
    components:{
      QrcodeStream,
    },
    methods:{
      onDetect(dataQr){
        this.mensaje = JSON.stringify(dataQr);

        this.qrData.modelo = "Dolphin";
        this.qrData.color = "Blue";
        this.qrData.vin = "12345678";
        this.qrData.propX = "lorem ipsun";

        this.scannerVisible = false;

      },
      onError(error){
          console.log(error);
          this.mensaje = error;
      },
      togleScanner(){
        this.scannerVisible = !this.scannerVisible
      }
    }
}
</script>