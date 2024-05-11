interface cvSchema {
    basics: schemaBasic;
    trabajo: schemaTrabajo;
    educacion: schemaEducacion;
  }

  interface schemaBasic{
    nombre: string,
    edad: string,
    ciudad: string,
    titulo: string,
    email: string,
    telefono: string,
    summary: string,
    location: schemaLocation,
    perfil: schemaPerfil
  }

  interface schemaLocation{
    direccion: string,
    ciudad: string,
    pais: string
  }

  interface schemaPerfil{
    network: string,
    username: string
  }

  interface schemaTrabajo{
    nombre: string,
    direccion: string,
    decripcion: string,
    posicion: string,
    inicio: string,
  }

  interface schemaEducacion{
    institucion: string,
    url: string,
    area: string,
    tipo: string,
    inicio: string,
    puntaje: string,
    cursos: schemaCursos
  }
  
  interface schemaCursos {
    [index: number]: string;
  }

  export default cvSchema