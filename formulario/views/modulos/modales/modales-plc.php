<div class="modal fade" id="modal-insertar-plc"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" style="max-width: 800px;">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Insertar Nueva Plc</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formu-nuevo-plc">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Modelo</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Modelo" name="Modelo">
            </div>
          </div>
               <div class="form-group row">
            <label class="col-sm-2 col-form-label">Descripción</label>
            <div class="col-sm-10">
             
              <textarea class="form-control" placeholder="Texto descriptivo"  rows="2" name="Descripcion" ></textarea>
             
            </div>
          </div>
           
       <div class="form-group row">
  <label class="col-sm-2 col-form-label">Precio</label>
      <div class="input-group mb-3 col-sm-10">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" name="Precio" id="nuevoplc" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
          </div>

              <div class="form-group row">
            <label class="col-sm-2 col-form-label">Imagen</label>
            <div class="col-sm-10 conteNuevaImagen">
              <input type="file" class="form-control"  id="imagenPlc" name="imagenPlc">
              <img src="" id="imgPlc" alt="" class="thumbnail" width="200" style="display: none">
            </div>
          </div>
          <input type="hidden" name="tipoOperacion" value="insertarplc">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-primary">Guardar Datos</button>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- EDITAR SLIDER -->
<div class="modal fade" id="modal-editar-plc"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" style="max-width: 800px;">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar plc</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="formu-editar-plc">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Modelo</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Modelo" name="Modelo">
            </div>
          </div>
                   <div class="form-group row">
            <label class="col-sm-2 col-form-label">Descripción</label>
          <div class="col-sm-10">
              <textarea class="form-control" placeholder="Texto descriptivo"  rows="2" name="Descripcion" ></textarea>  
            </div>
          </div>

       <div class="form-group row">
  <label class="col-sm-2 col-form-label">Precio</label>
      <div class="input-group mb-3 col-sm-10">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" name="Precio" id="editarplc" class="form-control" aria-label="Amount (to the nearest dollar)">
</div>
          </div>

             <div class="form-group row">
            <label class="col-sm-2 col-form-label">Imagen</label>
            <div class="col-sm-10 conteNuevaImagen">
              <input type="file" class="form-control"  id="imagenPlcEditar" name="imagenPlc" >
              <img src="" id="imgPlc" alt="" class="thumbnail" width="200" >
            </div>
          </div>
          <input type="hidden" name="tipoOperacion" value="actualizarPlc">
            <input type="hidden" name="rutaActual">
          <input type="hidden" name="id_plc">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-primary">Actualizar</button>
        </form>
      </div>
    </div>
  </div>
</div>
<script type="text/javascript">
  

$("#nuevoplc").on({
  "focus": function(event) {
    $(event.target).select();
  },
  "keyup": function(event) {
    $(event.target).val(function(index, value) {
      return value.replace(/\D/g, "")
        .replace(/([0-9])([0-9]{0})$/, '$1$2')
        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
    });
  }
});
$("#editarplc").on({
  "focus": function(event) {
    $(event.target).select();
  },
  "keyup": function(event) {
    $(event.target).val(function(index, value) {
      return value.replace(/\D/g, "")
        .replace(/([0-9])([0-9]{0})$/, '$1$2')
        .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".");
    });
  }
});
</script>