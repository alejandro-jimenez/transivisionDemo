<template>

<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button" @click="$emit('panel-go','ESCANEAR')" >Escanear QR</button>
  <button class="btn btn-primary" type="button" @click="$emit('panel-go','INSPECCIONAR')">Inspeccion unidades</button>
  <button class="btn btn-primary" type="button" @click="$emit('panel-go','LOCALIZAR')">Localizacion de unidades</button>
  <button class="btn btn-primary" type="button" @click="$emit('panel-go','TO_MADRINA')">Traslado a madrina</button>
</div>

</template>

<script>
export default{
    name:"menu-operaciones"
}
</script>