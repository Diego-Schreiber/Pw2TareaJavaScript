// Este archivo se llama code.gs
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function guardarTarea(tarea, descripcion) {
  Logger.log("recibido: " + tarea + " - " + descripcion);
  const hoja = SpreadsheetApp.openById('124u9GIfdgsQAzjypdelfrelzlDSUTXZ70sfwfwsSNIg').getSheetByName('Tareas');
  hoja.appendRow([tarea, descripcion, new Date(), 'Pendiente']);
}