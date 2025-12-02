const input = document.getElementById('tarea');
const boton = document.getElementById('button');
const lista = document.getElementById('lista-de-tareas');

function agregarTarea() {
    if (input.value){

        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);
        
        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);
        iconos.appendChild(eliminar);

        let completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);
        iconos.appendChild(completar);

        lista.appendChild(tareaNueva);

        input.value = "";
        
        }else {
            alert("Por favor ingresa una tarea.");
        }
    }
    function completarTarea(e) {
        let tarea = e.target.parentNode.parentNode;
        tarea.classList.toggle('completada');
    }

    function eliminarTarea(e) {
        let tarea = e.target.parentNode.parentNode;
        tarea.remove();
    }
boton.addEventListener('click', agregarTarea);