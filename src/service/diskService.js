const fs = require('fs/promises');
const path = require('path');

async function modificarArchivoJSON(rutaArchivo) {
  try {
    const tecnologias = [
      "JavaScript",
      "Python",
      "Java",
      "C#",
      "Ruby",
      "Go",
      "Swift",
      "Kotlin",
      "PHP",
      "Rust"
    ];
    const data = await fs.readFile(rutaArchivo, 'utf-8');
    const json = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * tecnologias.length);
    json.tecnologias.push(tecnologias[randomIndex]);
    await fs.writeFile(rutaArchivo, JSON.stringify(json, null, 2), 'utf-8');
    console.log('Archivo JSON modificado exitosamente.');
  } catch (error) {
    console.error('Error al procesar el archivo JSON:', error.message);
  }
}

const ruta = path.join(__dirname, 'datos.json');
modificarArchivoJSON(ruta);