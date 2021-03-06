
$(document).ready(function(){
	$("#formu-nuevo-tableroelectrico").submit(function (e) {
		e.preventDefault()
		var datos = new FormData($(this)[0])
		$.ajax({
			url: 'ajax/ajaxTableroelectrico.php',
			type: 'POST',
			data: datos,
			processData: false,
			contentType: false,
			success: function(respuesta) {
				console.log(respuesta)
				if (respuesta == "ok") {

		Swal.fire(
  'Excelente!',
  'Tablero electrico registrado con exito!',
  'success'
).then((result) => {
					  if (result.value) {
					    window.location = "tableroelectrico"
					  }
					})
				}
			}
		})
	})

	$("#formu-editar-tableroelectrico").submit(function (e) {
		e.preventDefault()
		var datos = new FormData($(this)[0])



		$.ajax({
			url: 'ajax/ajaxTableroelectrico.php',
			type: 'POST',
			data: datos,
			processData: false,
			contentType: false,
			success: function(respuesta) {
				console.log(respuesta)
				if (respuesta == "ok") {
							Swal.fire(
  'Excelente!',
  'datos actualizados con exito!',
  'success'
).then((result) => {
					  if (result.value) {
					    window.location = "tableroelectrico"
					  }
					})
				}
			}
		})
	})
	$("body #mi_lista").on("click", ".btnEditarTableroelectrico", function(){
		var idTableroelectrico = $(this).attr("idTableroelectrico")
		var datos = new FormData()
		datos.append("id_tableroelectrico", idTableroelectrico)
		datos.append("tipoOperacion", "editarTableroelectrico")
		$.ajax({
			url: 'ajax/ajaxTableroelectrico.php',
			type: 'POST',
			data: datos,
			processData: false,
			contentType: false,
			success: function(respuesta) {
				var valor = JSON.parse(respuesta)
				console.log(valor.id_tableroelectrico)
				console.log(valor.imagen)
$('#formu-editar-tableroelectrico input[name="id_tableroelectrico"]').val(valor.id_tableroelectrico)
$('#formu-editar-tableroelectrico input[name="Altura"]').val(valor.altura)
$('#formu-editar-tableroelectrico input[name="Fondo"]').val(valor.fondo)
$('#formu-editar-tableroelectrico input[name="Ancho"]').val(valor.ancho)
$('#formu-editar-tableroelectrico input[name="Contactor"]').val(valor.contactor)
$('#formu-editar-tableroelectrico #imgTableroElectrico').attr("src", valor.imagen)
$('#formu-editar-tableroelectrico input[name="rutaActual"]').val(valor.imagen)
			}
		})
	})

	



	$("body #mi_lista").on("click", ".btnEliminarTableroelectrico", function(){
		var idTableroelectrico = $(this).attr("idTableroelectrico")
		var rutaImagen = $(this).attr("rutaImagen")
		var datos = new FormData()
		datos.append("id_tableroelectrico", idTableroelectrico)
		datos.append("tipoOperacion", "eliminarTableroelectrico")
		datos.append("rutaImagen", rutaImagen)
	console.log(idTableroelectrico)
		Swal.fire({
		  title: '¿Estás seguro de eliminar?',
		  text: "Los cambios no son reversibles!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, Elimina!'
		}).then((result) => {
		  if (result.value) {
		  	$.ajax({
				url: 'ajax/ajaxTableroelectrico.php',
				type: 'POST',
				data: datos,
				processData: false,
				contentType: false,
				success: function(respuesta) {
					if ( respuesta == "ok") {
						Swal.fire(
					      'Eliminado!',
					      'Su archivo a sido eliminado.',
					      'success'
					    ).then((result) => {
						  if (result.value) {
						    window.location = "tableroelectrico"
						  }
						})
					}
				}
			})
		  }
		})
	})

		$("body #dinamiautomatico").on("click", ".Eliminar_automatico", function(){
		var idAutomatico = $(this).attr("idAutomatico")
		var idtablero = $(this).attr("idtablero")

		var datos = new FormData()
		datos.append("id_automatico", idAutomatico)
		datos.append("tipoOperacion", "eliminarTautomatico")
	console.log(idAutomatico)
		Swal.fire({
		    width: 400,
		  padding:'2em',
		  text: "Estas seguro de eliminar!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, Elimina!'
		}).then((result) => {
		  if (result.value) {
		  	$.ajax({
				url: 'ajax/ajaxTableroelectrico.php',
				type: 'POST',
				data: datos,
				processData: false,
				contentType: false,
				success: function(respuesta) {
					if ( respuesta == "ok") {
						Swal.fire(
					      'Eliminado!',
					      'Elemento Eliminado.',
					      'success'
					
					    ).then((result) => {
						  if (result.value) {
						  $("#example").load(" #example");
				
				var valor = $('.btnEditarTableroelectrico').attr("idtableroelectrico",10).click();  
		 
console.log(valor)

						  }
						})
					}
				}
			})
		  }
		})
	})
$("body #dinamifuente").on("click", ".Eliminar_fuente", function(){
		var idFuente = $(this).attr("idFuente")
		var idtablero = $(this).attr("idtablero")

		var datos = new FormData()
		datos.append("id_fuente", idFuente)
		datos.append("tipoOperacion", "eliminarTfuente")
	console.log(idFuente)
		Swal.fire({
		    width: 400,
		  padding:'2em',
		  text: "Estas seguro de eliminar!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, Elimina!'
		}).then((result) => {
		  if (result.value) {
		  	$.ajax({
				url: 'ajax/ajaxTableroelectrico.php',
				type: 'POST',
				data: datos,
				processData: false,
				contentType: false,
				success: function(respuesta) {
					if ( respuesta == "ok") {
						Swal.fire(
					      'Eliminado!',
					      'Elemento Eliminado.',
					      'success'
					
					    ).then((result) => {
						  if (result.value) {
						  $("#example").load(" #example");
				
				var valor = $('.btnEditarTableroelectrico').attr("idtableroelectrico",10).click();  
		 
console.log(valor)

						  }
						})
					}
				}
			})
		  }
		})
	})
$("body #dinamivdf").on("click", ".Eliminar_vdf", function(){
		var idVdf = $(this).attr("idVdf")


		var datos = new FormData()
		datos.append("id_vdf", idVdf)
		datos.append("tipoOperacion", "eliminarTvdf")
	console.log(idVdf)
		Swal.fire({
		    width: 400,
		  padding:'2em',
		  text: "Estas seguro de eliminar!",
		  icon: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, Elimina!'
		}).then((result) => {
		  if (result.value) {
		  	$.ajax({
				url: 'ajax/ajaxTableroelectrico.php',
				type: 'POST',
				data: datos,
				processData: false,
				contentType: false,
				success: function(respuesta) {
					if ( respuesta == "ok") {
						Swal.fire(
					      'Eliminado!',
					      'Elemento Eliminado.',
					      'success'
					
					    ).then((result) => {
						  if (result.value) {
						  $("#example").load(" #example");
				
				var valor = $('.btnEditarTableroelectrico').attr("idtableroelectrico",10).click();  
		 
console.log(valor)

						  }
						})
					}
				}
			})
		  }
		})
	})

	// PREVISUALIZAR IMAGENES
	$("#imagenTableroelectrico").change(previsualizarImg)
	$("#imagenTableroelectricoEditar").change(previsualizarImg)
	function previsualizarImg(e) {
		var contenedor = e.target.parentNode
		var identificador = contenedor.classList[1]
		imgSlider = this.files[0];
		if ( imgSlider["type"] != "image/jpeg" && imgSlider["type"] != "image/png" && imgSlider["type"] != "video/mp4") {
				$("#imagenTableroelectrico").val("")
				$("#imagenTableroelectricoEditar").val("")
			Swal.fire(
					  'No es un archivo valido',
					      'Debe subir archivos formato JPEG , PNG',
					      'error'
				)	
			}
		if ( imgSlider["type"] > 100000) {
				$("#imagenTableroelectrico").val("")
			
Swal.fire(
					  'Error al subir la imagen',
					      'La imagen debe pesar MAX 2MB',
					      'error'
				)
			}
			else {
				$("#imgTableroElectrico").css("display", "block")
				var datosImagen = new FileReader;
		  		datosImagen.readAsDataURL(imgSlider);
		  		$(datosImagen).on("load", function(event){
		  			var rutaImagen = event.target.result;
		  			$("." + identificador +" #imgTableroElectrico").attr("src", rutaImagen);
		  		})
			}
		}



})

