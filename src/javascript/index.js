$(function(){ // ready abreviado

    $("#leer").on("click", function(){
        $.ajax({
            url: 'https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes',  // URL de la API.
            type: 'GET',  // Método HTTP GET.
            dataType: 'json',  // Especificamos que esperamos un objeto JSON como respuesta.
            success: function(data) {
                // Aseguramos que la respuesta es un arreglo con datos
                if (Array.isArray(data) && data.length > 0) {
                    // Limpiamos el contenido previo y mostramos los datos de cada solicitud
                    let htmlContent = '';
                    data.forEach(function(item) {
                        htmlContent += 'Nombre: ' + item.nombre + '<br>Edad: ' + item.edad + '<br><br>';
                    });
                    $('#div_leer').html(htmlContent);  // Insertamos el contenido generado
                } else {
                    $('#div_leer').html('No hay datos disponibles');
                }
            },
            error: function(xhr, status, error) {
                console.error('Error: ' + error);
                $('#div_leer').html('Error al cargar los datos');
            }
        });
    });
});

console.log('Consoleando que es gerundio');

// Web para pruebas de llamada a servidor ... https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes

/* Opción de visualización: raw data
[
  {
    "id": 1,
    "nombre": "Fernando",
    "apellido": "Alguno"
  },
  {
    "id": 2,
    "nombre": "Nico",
    "apellido": "Otro"
  }
]
  
*/
// Observamos que es un array.