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
  }
`

exports.getStudentNumero_control = `
query getStudentNumero_control($numero_control: String){
getStudentNumero_control(numero_control: $numero_control){
            id
            nombres
            apellido_paterno
            apellido_materno
            numero_control
            telefono
            carrera
            correo_electronico
            estilo_aprendizaje
	}
}`