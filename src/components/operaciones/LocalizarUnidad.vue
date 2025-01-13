<template>
    <h3>Localizar</h3>  
    <div class="container text-center"> 
      <div class="row"> 
        <div class="col-12 mb-3"> 

          <button type="button" class="btn btn-primary" @click="buscar">Buscar</button>
          <input type="text" class="form-control">
    
        </div>
      </div>
      <div class="row" v-if="restultadosVisible"> 
        <div class="col-12"> 
            <table class="table">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Ubicacion</th>
                <th scope="col">Ver foto</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>2025-01-12 14:00</td>
              <td>Patio externo</td>
              <td><a href="#" class="link-underline-primary" >Ver</a></td>
            </tr>
            <tr>
              <td>2025-01-12 14:00</td> 
              <td>Almacenamiento</td>
              <td><a href="#" class="link-underline-primary">Ver</a></td>
            </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>

   <p><a href="#" class="link-underline-primary" @click="$emit('ir-menu')">Inicio</a></p>
</template>
        
        <script>
        export default{
            name:"localizar-unidad",
            data(){
              return {
                restultadosVisible: false,
              }
            },
            methods: {
              buscar(){
                this.restultadosVisible = true;
              }
            }
        }
        </script>