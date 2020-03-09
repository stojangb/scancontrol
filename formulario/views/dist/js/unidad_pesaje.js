$(document).ready(function(){
	$("#formu-nuevo-pesaje").submit(function (e) {
		e.preventDefault()
		var datos = new FormData($(this)[0])
		$.ajax({
			url: 'ajax/ajaxPesaje.php',
			type: 'POST',
			data: datos,
			processData: false,
			contentType: false,
			success: function(respuesta) {
				console.log(respuesta)
				if (respuesta == "ok") {
		Swal.fire(
  'Excelente!',
  'Unidad de Pesaje registrada con exito!',
  'success'
).then((result) => {
					  if (result.value) {
					    window.location = "unidadpesaje"
					  }
					})
				}
			}
		})
	})

	$("#formu-editar-pesaje").submit(function (e) {
		e.preventDefault()

		var datos = new FormData($(this)[0])

		$.ajax({
			url: 'ajax/ajaxPesaje.php',
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
					    window.location = "unidadpesaje"
					  }
					})
				}
			}
		})
	})
	$("body #mi_lista").on("click", ".btnEditarPesaje", function(){
		var idPesaje = $(this).attr("idPesaje")
		var datos = new FormData()
		datos.append("id_pesaje", idPesaje)
		datos.append("tipoOperacion", "editarPesaje")

		$.ajax({
			url: 'ajax/ajaxPesaje.php',
			type: 'POST',
			data: datos,
			processData: false,
			contentType: false,
			success: function(respuesta) {
				var valor = JSON.parse(respuesta)
				console.log(valor.id_unidad_acel)
	$('#formu-editar-pesaje input[name="id_pesaje"]').val(valor.id_unidad_pesaje)
				$('#formu-editar-pesaje select[name="TipoSensores"]').val(valor.tipo_sensores)
				$('#formu-editar-pesaje input[name="CantidadSensores"]').val(valor.cantidad_sensores)
				$('#formu-editar-pesaje select[name="TipoSprockets"]').val(valor.tipo_sprockets)
				$('#formu-editar-pesaje input[name="CantidadSprockets"]').val(valor.cantidad_sprockets)

                  $('#formu-editar-pesaje select[name="TipoBandas"]').val(valor.banda_modular_tipo)
				$('#formu-editar-pesaje input[name="BandasMedidas"]').val(valor.banda_medidas)
				$('#formu-editar-pesaje input[name="Eje"]').val(valor.eje)
				$('#formu-editar-pesaje input[name="MotorUsillo"]').val(valor.motor_usillo)
				$('#formu-editar-pesaje input[name="MotorCapacidad"]').val(valor.motor_capacidad)
			}
		})
	})

	$("body #mi_lista").on("click", ".btnEliminarPesaje", function(){
		var idPesaje = $(this).attr("idPesaje")
		var datos = new FormData()
		datos.append("id_pesaje", idPesaje)
		datos.append("tipoOperacion", "eliminarPesaje")
		console.log(idPesaje)
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
				url: 'ajax/ajaxPesaje.php',
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
						    window.location = "unidadpesaje"
						  }
						})
					}
				}
			})
		  }
		})
	})

	// PREVISUALIZAR IMAGENES
	$("#imagen").change(previsualizarImg)
	$("#imagenEditar").change(previsualizarImg)
	function previsualizarImg(e) {
		var contenedor = e.target.parentNode
		var identificador = contenedor.classList[1]
		imgSlider = this.files[0];
		if ( imgSlider["type"] != "image/jpeg" && imgSlider["type"] != "image/png" && imgSlider["type"] != "video/mp4") {
				$("#imagen").val("")
				swal({
					type:'error',
					title: 'No es un archivo valido',
					text: 'Debe subir archivos formato JPEG , PNG , MP4',
				})
			}
		if ( imgSlider["type"] > 100000000000) {
				$("#imagenSlider").val("")

				swal({
					type: "Error al subir la imagen",
					text: "La imagen debe pesar MAX 2MB",
					icon: 'error',
					confirmButtonText: "¡Cerrar!",
				})
			}
			else {
				$("#imagenSlider").css("display", "block")

				var datosImagen = new FileReader;
		  		datosImagen.readAsDataURL(imgSlider);

		  		$(datosImagen).on("load", function(event){

		  			var rutaImagen = event.target.result;

		  			$("." + identificador +" #imagenSlider").attr("src", rutaImagen);
		  		})
			}

		}

})