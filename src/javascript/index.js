$(function(){ // ready abreviado
    $("#listar").on("click",function(){
    
        $.get('https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes', function(data){
            $("#div_listar").text("OK"); // La función callback con los datos 'data', da el OK. GET exitoso.
        })
        
    })
    $("#grabar").on("click",function(){
        /*const dataToSend = {
            id: 3,
            nombre: "Marina",
            apellido: "Fernández"
        };
        */
        $.post(
            'https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes',
            dataToSend,
            function(data) {
                $("#div_grabar").text("¡Datos guardados correctamente!");
            }
        )
        .fail(function(xhr, status, error) {
            console.error("Error en POST: ", error);
            $("#div_grabar").text("Error al guardar los datos.");
        });
    })
    $("#actualizar").on("click",function(){
    
        $.ajax('https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes', put, function(data){
            $("#div_actualizar").text("OK"); // No existe un $.put como ocurre con get y post.
        })
        
    }) 
    
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

// json-server es un servidor de datos JSON simulado ... https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes

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