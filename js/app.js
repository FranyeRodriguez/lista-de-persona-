const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersonas(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apelido = forma ['apellido']; 
    if(nombre.value!=' ' && apellido.value!=''){
        const persona =new Persona (nombre.value, apellido.value)
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        alert("Eno hay informacion que agregar")
    }
    
}

function limpiar(){
    forma.reset();
}