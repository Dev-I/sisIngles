import gql from 'graphql-tag'

export const GETSTUDENTS_QUERY = gql`{

    getStudents{
        id
        nombres
        apellido_paterno
        apellido_materno
        fecha_nacimiento
        ingreso_personal
        genero
        nacionalidad
        curp
        rfc
        correo_electronico
        telefono
        estado_civil
        estilo_aprendizaje
        discapacidad
        beca
        comunidad_indigena
        lengua_extranjera
        servicio_medico{
            nombre
            clave
            programa_oportunidades
        }
        vive_con
        depende_de
        tipo_sangre
        familia{
            contacto_emergencia
            vive
            tutor
            nombre
            apellido_paterno
            apellido_materno
            parentesco
            nivel_estudios
            ocupacion
            telefono
            ingresos
            lugar_trabajo{
                nombre
                telefono
            }
        }
        domicilio{
            actual
            tipo_domicilio
            calle
            estado
            municipio
            codigo_postal
            colonia_localidad
            propiedad
            cantidad_cuartos
            cantidad_personas
            cantidad_personas_dependientes
        }
        ingresos_extra{
            hermanos
            otros
        }
        nivel_estudio
        carrera
        status
        username
        password
        numero_control

    }

}`

export const GETSTUDENT_QUERY = gql`
    query ConsultarEstudiante($id:ID){
        getStudent(id: $id){
            nombres
            apellido_paterno
            apellido_materno
            numero_control
            telefono
            carrera
            correo_electronico
            estilo_aprendizaje
        }
    }
`