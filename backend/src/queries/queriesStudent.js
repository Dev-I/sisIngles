exports.getStudents = `
  query getStudents {
      getStudents{
        id
        numero_control
        nombres
        apellido_paterno
        apellido_materno
        genero
        correo_electronico
        telefono
        carrera
    }
}`;

exports.getStudent = `
  query getStudent($id: ID){
    getStudent(id: $id){
      numero_control
        nombres
        apellido_paterno
        apellido_materno
        genero
        correo_electronico
        telefono
        carrera
    }
  }
`


   