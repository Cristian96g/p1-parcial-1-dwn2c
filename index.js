// Creamos la clase disco
class Disco {
    constructor(nombre, autor, codigo) {
        this.nombre = nombre;
        this.autor = autor;
        this.codigo = codigo;
        this.pistas = [];
        this.duracion = 0;
        this.mayorDuracion = 0;
    }

    // creamos el metodo para añadir las pistas al array
    addPistas(pistas) {
        this.pistas.push(pistas);
    }

    // creamos el metodo para la duracion maxima y duracion total de las pistas
    generarDuracion() {
        // Generamos una variable
        let duracionMaxima = 0;
        let acum = 0;
        // Recorremos pistas
        for (const pista of this.pistas) {
            // Sumamos pistas
            acum += pista.duracionPista;
            if (duracionMaxima < pista.duracionPista) {
                duracionMaxima = pista.duracionPista;
            }
        }

        // Devuelve la duración total de las pistas
        this.duracion = acum;

        this.mayorDuracion = duracionMaxima;
    }
}

const cargar = document.getElementById("cargar");
const mostrar = document.getElementById("mostrar");

cargar.addEventListener("click", cargarDatos);

let discos = [];

// funcion para cargar los datos
function cargarDatos() {
    // variable para validar 
    let validar = false;
    do {
        if(validar) {
            alert("Debe ingresar el nombre del disco")
        }
        var nombre = prompt("Ingrese el nombre del disco");
        validar = true
    } while (nombre == "");

    validar = false
    do {
        if(validar) {
            alert("Debe ingresar el autor")
        }
        var autor = prompt("Ingrese el autor");
        validar = true
    } while (autor == "");

    do {
        var codigo = prompt("Ingrese el codigo unico que debe ser entre 1 y 999");
        if((codigo > 1 && codigo < 999 && validarCodigo(codigo))){
            validar = false
        }else{
            validar= true;
            alert("Debe ingresar un codigo unico")
        }
    } while (validar);

    let cd = new Disco(nombre, autor, codigo);


    do {
        // creando objeto pistas
        let pistas = {
            nombrePista: "",
            duracionPista: 0,
        };

        // asignando valores al objeto pistas
        let flag = false;
        do {
            if(flag) {
                alert("Debe ingresar el nombre de la pista")
            }
            pistas.nombrePista = prompt("Ingrese el nombre de la pista");
            flag = true;
        } while (pistas.nombrePista == " ");

        flag = false
        do {
            if (flag) {
                alert("La duracion debe ser entre 1 y 7200(segundos)")
            }
            pistas.duracionPista = parseInt(prompt("Ingrese la duración de la pista, esta debe ser entre 1 y 7200"));
            flag = true;
        } while (!(pistas.duracionPista > 0 && pistas.duracionPista < 7201));



        // asignando el objeto "pistas" a la instancia "cd" de la clase "Disco" con el metodo "addPistas"
        cd.addPistas(pistas);

    } while (confirm("¿Desea ingresar una nueva pista?"));
    // Ya tenemos las pistas cargadas, generaramos la duración y la mayor duracion
    cd.generarDuracion();

    discos.push(cd);
}

// -------------


// boton para invocar la funcion mostrarDatos
mostrar.addEventListener("click", mostrarDatos);


// funcion para crear los elementos
function mostrarDatos() {
    let contador = 0;
    
    const div = document.getElementById("contenidoCard");
    div.textContent = ""
    
    
    // recorrer los discos cargados
    discos.forEach((item) => {
        const acumuladorUl = document.createElement("div");
        acumuladorUl.classList.add("contenedor");
        acumuladorUl.classList.add("background");
        acumuladorUl.textContent = "";

        const lista = document.createElement("ul");
        lista.classList.add("datosDisco")

        const titulo = document.createElement("h1");
        titulo.textContent = "Disco";
        lista.appendChild(titulo);

        const nombre = document.createElement("li");
        nombre.textContent = `Nombre: ${item.nombre}`;
        lista.appendChild(nombre);

        const autor = document.createElement("li");
        autor.textContent = `Autor: ${item.autor}`;
        lista.appendChild(autor);

        const codigo = document.createElement("li");
        codigo.textContent = `Codigo: ${item.codigo}`;
        lista.appendChild(codigo);



        const tituloPistas = document.createElement("h4")

        const contenedorPista = document.createElement("div");
        contenedorPista.classList.add("contenedorPista");
        tituloPistas.textContent = "Pistas"

        contenedorPista.appendChild(tituloPistas)

        // recorrer las propiedades de los discos
        item.pistas.forEach((element) => {
            contador++;

            const datosPista = document.createElement("ul");
            datosPista.classList.add("datosPista");

            const nombrePista = document.createElement("li");
            const duracionPista = document.createElement("li");

            nombrePista.textContent = `nombre: ${element.nombrePista}`;
            datosPista.appendChild(nombrePista)

            duracionPista.textContent = `Duración: ${element.duracionPista}`;

            if (element.duracionPista > 180) {
                duracionPista.style.backgroundColor = "red";
            }

            datosPista.appendChild(duracionPista);

            contenedorPista.appendChild(datosPista);

        });

        const pistasCargados = document.createElement("li");
        pistasCargados.textContent = `Pistas cargadas: ${contador}`;
        lista.appendChild(pistasCargados);

        const duracionTotalPistas = document.createElement("li");
        duracionTotalPistas.textContent = `Duracion total pistas: ${item.duracion}`;
        lista.appendChild(duracionTotalPistas);


        lista.appendChild(contenedorPista);
        acumuladorUl.appendChild(lista);
        div.appendChild(acumuladorUl)

    });
}



// funcion para buscar por codigo y mostrarlo 
function buscar() {
    let busqueda = prompt()
        
            let contador = 0;
    
            const div = document.getElementById("contenidoCard");
            
            
            // recorrer los discos cargados
            discos.forEach((item) => {
                if(item.codigo == busqueda){
                    div.textContent = "";
                const acumuladorUl = document.createElement("div");
                acumuladorUl.classList.add("contenedor");
                acumuladorUl.classList.add("background");
                acumuladorUl.textContent = "";

                const lista = document.createElement("ul");
                lista.classList.add("datosDisco");

                const titulo = document.createElement("h1");
                titulo.textContent = "Disco";
                lista.appendChild(titulo);
        
                const nombre = document.createElement("li");
                nombre.textContent = `Nombre: ${item.nombre}`;
                lista.appendChild(nombre);
        
                const autor = document.createElement("li");
                autor.textContent = `Autor: ${item.autor}`;
                lista.appendChild(autor);
        
                const codigo = document.createElement("li");
                codigo.textContent = `Codigo: ${item.codigo}`;
                lista.appendChild(codigo);
        
        
        
                const tituloPistas = document.createElement("h4");

                const contenedorPista = document.createElement("div");
                contenedorPista.classList.add("contenedorPista");
                tituloPistas.textContent = "Pistas";
        
                contenedorPista.appendChild(tituloPistas);
        
                // recorrer las propiedades de los discos
                item.pistas.forEach((element) => {
                    contador++;
        
                    const datosPista = document.createElement("ul");
                    datosPista.classList.add("datosPista");
                    const nombrePista = document.createElement("li");
                    const duracionPista = document.createElement("li");
        
                    nombrePista.textContent = `nombre: ${element.nombrePista}`;
                    datosPista.appendChild(nombrePista);
        
                    duracionPista.textContent = `Duración: ${element.duracionPista}`;
        
                    if (element.duracionPista > 180) {
                        duracionPista.style.backgroundColor = "red";
                    }
        
                    datosPista.appendChild(duracionPista);
        
                    contenedorPista.appendChild(datosPista);
        
                });
        
                const pistasCargados = document.createElement("li");
                pistasCargados.textContent = `Pistas cargadas: ${contador}`;
                lista.appendChild(pistasCargados);
        
                const duracionTotalPistas = document.createElement("li");
                duracionTotalPistas.textContent = `Duracion total pistas: ${item.duracion}`;
                lista.appendChild(duracionTotalPistas);
        
        
                lista.appendChild(contenedorPista);
                acumuladorUl.appendChild(lista);
                div.appendChild(acumuladorUl);
            }
            })
            
    


}


// Validar que el codigo no haya sido ingresado
function validarCodigo(codigo) {
    
    for (const disco of discos) {
        if (codigo == disco.codigo) {
            alert("El codigo ya fue registrado, ingrese otro")
            return false;
        }
    }
    return true;
}



// buscar por codigo
const buscarCodigo = document.getElementById('buscar');

buscarCodigo.addEventListener('click', buscar);





// funcion para limpiar datos de la pantalla
const borrar = document.getElementById('borrar');

borrar.addEventListener('click', function(){
    document.getElementById("contenidoCard").textContent = " ";
})