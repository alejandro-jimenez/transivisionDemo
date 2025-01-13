<template>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a @click="$emit('panel-prev')" class="page-link" href="#">Previo</a></li>
<!--     <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li> -->
    <li class="page-item"><a @click="$emit('panel-next')" class="page-link" href="#">Siguiente</a></li>
  </ul>
</nav>
</template>

<script>
    export default {
    name: 'panel-botones',
    }
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>