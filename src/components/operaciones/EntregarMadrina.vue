<template>
<h3>Madrina</h3>
<div class="container text-center">

  <div class="row align-items-start">

    <div class="row">
      <div class="col-4"><span class="input-group-text">Modelo</span></div>
      <div class="col-8"><input type="text" aria-label="modelo" class="form-control"></div>
    </div>
    <div class="row">
      <div class="col-4"><span class="input-group-text">VIN</span></div>
      <div class="col-8"><input type="text" aria-label="vin" class="form-control"></div>
    </div>
    <div class="row">
      <div class="col-4"><span class="input-group-text">Color</span></div>
      <div class="col-8"><input type="text" aria-label="color" class="form-control"></div>
    </div>
    <div class="row">
      <div class="col-4"><span class="input-group-text">Prop X</span></div>
      <div class="col-8"><input type="text" aria-label="propX" class="form-control"></div>
    </div>    
  </div>
</div>



<p><a href="#" class="link-underline-primary" @click="$emit('ir-menu')">Inicio</a></p>
</template>
        
        <script>
        export default{
            name:"entregar-madrina"
        }
        </script>