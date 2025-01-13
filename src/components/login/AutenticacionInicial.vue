<template>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Usuario</label>
    <input type="email" class="form-control" id="userName" placeholder="miUsuario@transvision.com">
    </div>
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="userData">
    </div>    
<!--     <div clas="mb-3">
        <button type="button" class="btn btn-link">Ingresar con huella</button>
    </div> -->
</template>

<script>
export default{
    name:"autenticacion-inicial"
}
</script>