var usuarios = [{
    nombre: 'Eric',
    apellido: 'Alvarez',
    edad: 25,
    codigoPostal: 76334
},
{
    nombre: 'Maria',
    apellido: 'Aguilar',
    edad: 32,
    codigoPostal: 71446
},
{
    nombre: 'Andrea',
    apellido: 'Morales',
    edad: 27,
    codigoPostal: 61741
},
{
    nombre: 'Jose',
    apellido: 'Caracas',
    edad: 24,
    codigoPostal: 91340
},
{
    nombre: 'Luis',
    apellido: 'Hernandez',
    edad: 21,
    codigoPostal: 75480
}]

function informacionDeUsuarios(usuario){
    document.write(
    '<tr>' +
        '<td>' + usuario.nombre + '</td>' +
        '<td>' + usuario.apellido + '</td>' +
        '<td>' + usuario.edad + '</td>' +
        '<td>' + usuario.codigoPostal + '</td>' +
    '</tr>')
}


for(var i = 0; i < usuarios.length; i++) {
    informacionDeUsuarios(usuarios[i])
}