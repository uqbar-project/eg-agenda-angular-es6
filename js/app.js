class AgendaController {

	constructor() {
		this.textoBusqueda = ''
		this.filtroActual = ''
	}

	get contactos() {
		return [
		    {
		    	"nombre" : "Juan",
		    	"apellido" : "Perez",
		    	"telefono" : "321472352",
		    	"email" : "juan@gmail.com",
		    	"direccion" : "Corrientes 1234, 3B"
		    },
		    { "nombre" : "Pablo", "apellido" : "Alvarez", "telefono" : "666", "email" : "pablo@gmail.com", "direccion" : "Corrientes 1234, 3B"},
		    { "nombre" : "Maria", "apellido" : "Rodriguez", "telefono" : "47584777", "email" : "maria@gmail.com", "direccion" : "Corrientes 1234, 3B"},
		    { "nombre" : "Andrea", "apellido" : "Garcia", "telefono" : "888890", "email" : "andrea@gmail.com", "direccion" : "Corrientes 1234, 3B"}
		]
	}

	buscar() {
		this.filtroActual = this.textoBusqueda
	}

}

angular.module('agendaApp', [])
	.controller('AgendaController', AgendaController);
  
  
