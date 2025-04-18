<script>
document.getElementById('formTarea').addEventListener('submit', function(e) {
  e.preventDefault();

  const tarea = document.getElementById('tarea').value;
  const descripcion = document.getElementById('descripcion').value;

  // Llama a la función del servidor
  google.script.run
    .withSuccessHandler(function() {
      document.getElementById('mensaje').innerText = '✅ ¡Tarea guardada!';
      document.getElementById('formTarea').reset();
    })
    .guardarTarea(tarea, descripcion);
});
</script>