<?php
require_once "../controllers/tableroelectrico.controller.php";
require_once "../models/tableroelectrico.modelo.php";
Class ajaxTableroelectrico {
	public function crearTableroelectrico(){
		$datos = array(
			            "altura"=>$this->altura,
						"ancho"=>$this->ancho,
						"fondo"=>$this->fondo,
						"cantidadautomaticos"=>$this->cantidadautomaticos,
						"tipoautomaticos"=>$this->tipoautomaticos,
						"tipofuentepoder"=>$this->tipofuentepoder,
						"cantidadvdf"=>$this->cantidadvdf,
						"tipovdf"=>$this->tipovdf,
						"contactor"=>$this->contactor,
						"imagen"=>$this->imagen_tableroelectrico
				
					);


		$respuesta = ControllerTableroelectrico::ctrCrearTableroelectrico($datos);
		echo $respuesta;
	}
	public function editarTableroelectrico(){
		$id_tableroelectrico = $this->id_tableroelectrico;
		$respuesta = ControllerTableroelectrico::ctrEditarTableroelectrico($id_tableroelectrico);
		$datos = array("id_tableroelectrico"=>$respuesta["id_tableroelectrico"],
						"altura"=>$respuesta["altura"], 
						  "ancho"=>$respuesta["ancho"],
				          "fondo"=>$respuesta["fondo"],
						"contactor"=>$respuesta["contactor"],
				        "imagen"=>substr($respuesta["rutaImg"], 3)
						);


		echo json_encode($datos);
	}
	public function editarTableroautomaticos(){
		$id_tableroelectrico = $this->id_tableroelectrico;
		$respuesta = ControllerTableroelectrico::ctrEditarTableroautomaticos($id_tableroelectrico);

	echo json_encode($respuesta);
	}
		public function editarTablerofuente(){
		$id_tableroelectrico = $this->id_tableroelectrico;
		$respuesta = ControllerTableroelectrico::ctrEditarTablerofuente($id_tableroelectrico);

	echo json_encode($respuesta);
	}
		public function editarTablerovdf(){
		$id_tableroelectrico = $this->id_tableroelectrico;
		$respuesta = ControllerTableroelectrico::ctrEditarTablerovdf($id_tableroelectrico);

	echo json_encode($respuesta);
	}
	public function actualizarTableroelectrico(){
		$datos = array( "id_tableroelectrico"=>$this->id_tableroelectrico,
				        "altura"=>$this->altura,
						"ancho"=>$this->ancho,
						"fondo"=>$this->fondo,
						"cantidadautomaticos"=>$this->cantidadautomaticos,
						"tipoautomaticos"=>$this->tipoautomaticos,
						"tipofuentepoder"=>$this->tipofuentepoder,
						"cantidadvdf"=>$this->cantidadvdf,
						"tipovdf"=>$this->tipovdf,
						"contactor"=>$this->contactor,
						"imagen"=>$this->imagen_tableroelectrico,
						"rutaActual"=>$this->rutaActual

						);
		$respuesta = ControllerTableroelectrico::ctrActualizarTableroelectrico($datos);
		echo $respuesta;
	}
	public function eliminarTableroelectrico(){
		$id_tableroelectrico = $this->id_tableroelectrico;
		$ruta = $this->imagen_tableroelectrico;
		$respuesta = ControllerTableroelectrico::ctrEliminarTableroelectrico($id_tableroelectrico,$ruta);
		echo $respuesta;
	}
		public function eliminarTautomatico(){
		$id_tautomatico = $this->id_tautomatico;
		$respuesta = ControllerTableroelectrico::ctrEliminarTautomatico($id_tautomatico);
		echo $respuesta;
	}
		public function eliminarTfuente(){
		$id_tfuente = $this->id_tfuente;
		$respuesta = ControllerTableroelectrico::ctrEliminarTfuente($id_tfuente);
		echo $respuesta;
	}
		public function eliminarTvdf(){
		$id_tvdf = $this->id_tvdf;
		$respuesta = ControllerTableroelectrico::ctrEliminarTvdf($id_tvdf);
		echo $respuesta;
	}

}
$tipoOperacion = $_POST["tipoOperacion"];
if($tipoOperacion == "insertartableroelectrico") {
	$crearNuevoTableroelectrico = new ajaxTableroelectrico();
	$crearNuevoTableroelectrico -> altura = $_POST["Altura"];
	$crearNuevoTableroelectrico -> ancho = $_POST["Ancho"];
	$crearNuevoTableroelectrico -> fondo = $_POST["Fondo"];
	$crearNuevoTableroelectrico -> cantidadautomaticos = $_POST["Cantidadautomaticos"];
	$crearNuevoTableroelectrico -> tipoautomaticos = $_POST["Tipoautomaticos"];
	$crearNuevoTableroelectrico -> tipofuentepoder = $_POST["TipoFuentePoder"];
	$crearNuevoTableroelectrico -> cantidadvdf = $_POST["CantidadVdf"];
	$crearNuevoTableroelectrico -> tipovdf = $_POST["TipoVdf"];
	$crearNuevoTableroelectrico -> contactor = $_POST["Contactor"];
    $crearNuevoTableroelectrico -> imagen_tableroelectrico = $_FILES["imagenTableroelectrico"];
	$crearNuevoTableroelectrico ->crearTableroelectrico();
}

if ($tipoOperacion == "editarTableroelectrico") {
	$editarTableroelectrico = new ajaxTableroelectrico();
	$editarTableroelectrico -> id_tableroelectrico = $_POST["id_tableroelectrico"];
	$editarTableroelectrico -> editarTableroelectrico();
}
if ($tipoOperacion == "editarTableroautomaticos") {
	$editarTableroautomaticos = new ajaxTableroelectrico();
	$editarTableroautomaticos -> id_tableroelectrico = $_POST["id_tableroelectrico"];
	$editarTableroautomaticos -> editarTableroautomaticos();
}
if ($tipoOperacion == "editarTablerofuente") {
	$editarTablerofuente = new ajaxTableroelectrico();
	$editarTablerofuente -> id_tableroelectrico = $_POST["id_tableroelectrico"];
	$editarTablerofuente -> editarTablerofuente();
}
if ($tipoOperacion == "editarTablerovdf") {
	$editarTablerovdf = new ajaxTableroelectrico();
	$editarTablerovdf -> id_tableroelectrico = $_POST["id_tableroelectrico"];
	$editarTablerovdf -> editarTablerovdf();
}
if ($tipoOperacion == "actualizarTableroelectrico") {
	$actualizarTableroelectrico = new ajaxTableroelectrico();



	$actualizarTableroelectrico -> id_tableroelectrico = $_POST["id_tableroelectrico"];
	$actualizarTableroelectrico -> altura = $_POST["Altura"];
    $actualizarTableroelectrico -> ancho = $_POST["Ancho"];
	$actualizarTableroelectrico -> fondo = $_POST["Fondo"];
	$actualizarTableroelectrico -> cantidadautomaticos = $_POST["Cantidadautomaticos"];
	$actualizarTableroelectrico -> tipoautomaticos = $_POST["Tipoautomaticos"];
	$actualizarTableroelectrico -> tipofuentepoder = $_POST["TipoFuentePoder"];
	$actualizarTableroelectrico -> cantidadvdf = $_POST["CantidadVdf"];
	$actualizarTableroelectrico -> tipovdf = $_POST["TipoVdf"];
	$actualizarTableroelectrico -> contactor = $_POST["Contactor"];
    $actualizarTableroelectrico -> imagen_tableroelectrico = $_FILES["imagenTableroelectrico"];
	$actualizarTableroelectrico -> rutaActual = $_POST["rutaActual"];
	$actualizarTableroelectrico -> actualizarTableroelectrico();
}
if ($tipoOperacion == "eliminarTableroelectrico") {
	$eliminarTableroelectrico = new ajaxTableroelectrico();
	$eliminarTableroelectrico -> id_tableroelectrico = $_POST["id_tableroelectrico"];
	$eliminarTableroelectrico -> imagen_tableroelectrico = $_POST["rutaImagen"];
	$eliminarTableroelectrico -> eliminarTableroelectrico();
}
if ($tipoOperacion == "eliminarTautomatico") {
	$eliminarTautomatico = new ajaxTableroelectrico();
	$eliminarTautomatico -> id_tautomatico = $_POST["id_automatico"];
	$eliminarTautomatico -> eliminarTautomatico();
}

if ($tipoOperacion == "eliminarTfuente") {
	$eliminarTfuente = new ajaxTableroelectrico();
	$eliminarTfuente -> id_tfuente = $_POST["id_fuente"];
	$eliminarTfuente -> eliminarTfuente();
}

if ($tipoOperacion == "eliminarTvdf") {
	$eliminarTvdf = new ajaxTableroelectrico();
	$eliminarTvdf -> id_tvdf = $_POST["id_vdf"];
	$eliminarTvdf -> eliminarTvdf();
}
?>