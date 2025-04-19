// Este archivo se llama code.gs
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function guardarTarea(tarea, descripcion) {
  try {
    Logger.log("👉 Tarea: " + tarea);
    Logger.log("👉 Descripción: " + descripcion);

    const hoja = SpreadsheetApp.openById('TU_ID_DE_HOJA')
                               .getSheetByName('Tareas');
    
    if (!hoja) {
      Logger.log("❌ No se encontró la hoja llamada 'Tareas'");
      throw new Error("Hoja 'Tareas' no encontrada");
    }

    hoja.appendRow([tarea, descripcion, new Date(), 'Pendiente']);
    Logger.log("✅ Fila agregada correctamente");
  } catch (e) {
    Logger.log("❌ ERROR al guardar: " + e.message);
    throw new Error("No se pudo guardar la tarea: " + e.message);
  }
}
