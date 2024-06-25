// Call the dataTables jQuery plugin



$(document).ready(function() {
	alert("golamunado");
  cargarUsuarios();
  	
  $('#usuarios').DataTable();
});

async function cargarUsuarios() {
	const response = await fetch('api/usuario', {
		method : "GET",
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
	});
    const usuarios = await response.json() ;
    
    
    let listadoHTML = '';
    
    
    
    for (let usuario of usuarios) {
		
		let botonEliminar = `
		<a href="#" class="btn btn-danger btn-circle btn-sm">
			<i class="fas fa-trash"></i>
		</a>
		`;
		
		let usuarioHTML = `
		<tr>
			<td>${usuario.id}</td>
			<td>${usuario.nombre} ${usuario.apellido}</td>
			<td>${usuario.email}</td>
			<td>${usuario.telefono}</td>
			<td>
				${botonEliminar}
			</td>
		</tr>`;
		console.log(usuario.nombre);
		listadoHTML+=usuarioHTML;
	}
	
	document.querySelector('#usuarios tbody').outerHTML=listadoHTML;
}