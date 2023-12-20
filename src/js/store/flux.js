const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			agregarContacto: (full_name, email, phone, address) => {
				//Objeto con la informacion que queremos enviar en el fetch

				let datos = {
					full_name: full_name,
					email: email,
					agenda_slug: "richard",
					address: address,
					phone: phone
				};

				//Esta es la url donde se va a hacer el POST(Crear/guardar) con su respectiva configuracion(metodo,cuerpo,tipo de dato)

				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json()) //Convierte en json
					.then(data => console.log(data)) // Muestra la info por consola
					.catch(error => console.log(error)); //muestra los errores por console(sí los hay)
			},

			obtenerContacto: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/richard")
					.then(response => response.json()) //Convierte en json
					.then(data => setStore({ contactos: data })) // Muestra la info por consola
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
