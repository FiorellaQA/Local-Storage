//Funciones
function guardarElementos(){        
    /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("nombretxt").value;
        var apel = document.getElementById("apellidotxt").value;
    /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Apellido", apel);
    /*Limpiando los campos o inputs*/
        document.getElementById("nombretxt").value = "";
        document.getElementById("apellidotxt").value = "";
};   

function cargarMostrar(){                       
    /*Obtener datos almacenados*/
        var nombre = localStorage.getItem("Nombre");
        var apellido = localStorage.getItem("Apellido");
    /*Mostrar datos almacenados*/      
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido; 
}; 

//Eventos
document.getElementById("boton-guardar").addEventListener("click",guardarElementos);
document.getElementById('boton-cargar').addEventListener("click",cargarMostrar);
     
            