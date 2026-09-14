import Link from "next/link";

export default function Bienvenida() {
  const documentacionAcademica = [
    {
      titulo: "Material para estudiantes nuevos",
      descripcion:
        "Información introductoria, reglamentos y contenidos necesarios para comenzar.",
      icono: "📘",
      enlace: "/documentacion/estudiantes-nuevos",
    },
    {
      titulo: "Material por asignatura",
      descripcion:
        "Apuntes, actividades y recursos organizados por materia y curso.",
      icono: "📚",
      enlace: "/documentacion/asignaturas",
    },
    {
      titulo: "Recuperación de contenidos",
      descripcion:
        "Material de apoyo para repasar o recuperar temas pendientes.",
      icono: "📝",
      enlace: "/documentacion/recuperacion",
    },
  ];

  const documentosPersonales = [
    {
      nombre: "Certificado Único de Salud (C.U.S.)",
      estado: "Consultar estado",
    },
    {
      nombre: "Fotocopia del DNI",
      estado: "Consultar estado",
    },
    {
      nombre: "Partida de nacimiento",
      estado: "Consultar estado",
    },
    {
      nombre: "Constancia de CUIL",
      estado: "Consultar estado",
    },
    {
      nombre: "Ficha de inscripción",
      estado: "Consultar estado",
    },
  ];

  const novedadesHorarios = [
    {
      fecha: "Fecha a confirmar",
      tipo: "Horarios",
      titulo: "Horarios habituales de clases",
      descripcion:
        "Consultá los horarios correspondientes a cada curso y división.",
    },
    {
      fecha: "Sin novedades",
      tipo: "Ausencias",
      titulo: "Ausencias de profesores",
      descripcion:
        "En este espacio se informarán las ausencias y modificaciones correspondientes.",
    },
    {
      fecha: "Sin novedades",
      tipo: "Institucional",
      titulo: "Eventos, paros y actividades especiales",
      descripcion:
        "Información sobre cambios que puedan afectar el desarrollo habitual de las clases.",
    },
  ];

  const entregasInstitucionales = [
    {
      fecha: "Fecha a confirmar",
      titulo: "Feria de Ciencias",
      descripcion: "Presentación de proyectos de los distintos cursos.",
    },
    {
      fecha: "Fecha a confirmar",
      titulo: "Proyectos finales",
      descripcion: "Entrega institucional de trabajos y proyectos finales.",
    },
    {
      fecha: "Fecha a confirmar",
      titulo: "Muestras institucionales",
      descripcion: "Exposición de producciones y actividades escolares.",
    },
  ];

  return (
    <div className="pagina-alumnos">
      {/* NAVEGACIÓN */}
      <nav className="navbar">
        <div className="logo">
          <h2>InfoProA</h2>
          <span>Despeñaderos</span>
        </div>

        <div className="menu">
          <Link href="/">Inicio</Link>
          <Link href="/alumnos">Alumnos</Link>
          <Link href="/directivos">Directivos</Link>
          <Link href="/PAICOR">PAICOR</Link>
          <Link href="/profesores">Profesores</Link>
        </div>
      </nav>

      <main>
        {/* BIENVENIDA */}
        <section className="bienvenida-alumnos">
          <div className="texto-alumnos">
            <span className="etiqueta-alumnos">
              ESPACIO DE ALUMNOS
            </span>

            <h1>
              Información para tu
              <br />
              <span>recorrido escolar</span>
            </h1>

            <p>
              En este espacio vas a encontrar materiales de estudio,
              documentación, horarios, novedades y fechas importantes de la
              institución.
            </p>

            <p>
              También vas a poder comunicar de manera privada situaciones
              personales que necesiten ser conocidas y atendidas por el equipo
              directivo.
            </p>

            <div className="botones-alumnos">
              <a
                href="#documentacion-academica"
                className="boton-alumnos boton-principal-alumnos"
              >
                Ver documentación
              </a>

              <a
                href="#contacto-privado"
                className="boton-alumnos boton-secundario-alumnos"
              >
                Hablar con directivos
              </a>
            </div>
          </div>

          {/* TARJETA PRINCIPAL */}
          <div className="tarjeta-alumnos">
            <div className="icono-alumnos">🎓</div>

            <h2>Tu espacio escolar</h2>

            <p>
              Accedé de manera ordenada a la información y los recursos que
              necesitás.
            </p>

            <div className="lista-alumnos">
              <div>
                <strong>01</strong>
                <span>Materiales y documentación</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Horarios y calendario</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Comunicación privada</span>
              </div>
            </div>
          </div>
        </section>

        {/* ACCESOS PRINCIPALES */}
        <section className="accesos-alumnos">
          <div className="titulo-alumnos">
            <span>ACCESOS PRINCIPALES</span>

            <h2>¿Qué necesitás consultar?</h2>

            <p>
              Elegí una sección para acceder a la información correspondiente.
            </p>
          </div>

          <div className="accesos-alumnos-grid">
            <a href="#documentacion-academica" className="acceso-alumno">
              <div className="icono-acceso">📚</div>
              <h3>Material académico</h3>
              <p>Apuntes, actividades y materiales para recuperar contenidos.</p>
              <span>Ver documentación →</span>
            </a>

            <a href="#documentacion-personal" className="acceso-alumno">
              <div className="icono-acceso">🪪</div>
              <h3>Documentación personal</h3>
              <p>
                Consultá qué documentación personal tiene registrada la
                institución.
              </p>
              <span>Consultar documentación →</span>
            </a>

            <a href="#horarios-novedades" className="acceso-alumno">
              <div className="icono-acceso">🕒</div>
              <h3>Horarios y novedades</h3>
              <p>
                Revisá horarios, ausencias, eventos y cambios institucionales.
              </p>
              <span>Ver novedades →</span>
            </a>

            <a href="#calendario-entregas" className="acceso-alumno">
              <div className="icono-acceso">📅</div>
              <h3>Calendario de entregas</h3>
              <p>
                Consultá las fechas importantes compartidas por todos los
                cursos.
              </p>
              <span>Ver calendario →</span>
            </a>

            <a href="#contacto-privado" className="acceso-alumno">
              <div className="icono-acceso">🔒</div>
              <h3>Contacto privado</h3>
              <p>
                Informá de manera reservada una situación personal o escolar.
              </p>
              <span>Enviar información →</span>
            </a>
          </div>
        </section>

        {/* DOCUMENTACIÓN ACADÉMICA */}
        <section
          id="documentacion-academica"
          className="seccion-alumnos seccion-fondo-claro"
        >
          <div className="titulo-alumnos">
            <span>MATERIAL DE ESTUDIO</span>

            <h2>Documentación académica</h2>

            <p>
              Encontrá materiales entregados por la institución para comenzar,
              estudiar o recuperar contenidos.
            </p>
          </div>

          <div className="documentacion-grid">
            {documentacionAcademica.map((documento) => (
              <article
                className="tarjeta-documentacion"
                key={documento.titulo}
              >
                <div className="icono-documentacion">
                  {documento.icono}
                </div>

                <h3>{documento.titulo}</h3>
                <p>{documento.descripcion}</p>

                <Link href={documento.enlace}>
                  Ver documentos →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* DOCUMENTACIÓN PERSONAL */}
        <section
          id="documentacion-personal"
          className="seccion-alumnos seccion-fondo-blanco"
        >
          <div className="titulo-alumnos">
            <span>LEGAJO PERSONAL</span>

            <h2>Documentación personal</h2>

            <p>
              Consultá el estado de los documentos presentados ante la
              institución.
            </p>
          </div>

          <div className="contenedor-documentacion-personal">
            <div className="aviso-privacidad">
              <div className="icono-aviso">🔐</div>

              <div>
                <h3>Información protegida</h3>

                <p>
                  Para visualizar esta información, cada estudiante o adulto
                  responsable deberá ingresar con una cuenta autorizada. Los
                  datos del legajo no deben ser públicos.
                </p>
              </div>
            </div>

            <div className="tabla-documentacion">
              <div className="fila-documentacion encabezado-documentacion">
                <span>Documento</span>
                <span>Estado</span>
              </div>

              {documentosPersonales.map((documento) => (
                <div
                  className="fila-documentacion"
                  key={documento.nombre}
                >
                  <span>{documento.nombre}</span>

                  <span className="estado-documentacion">
                    {documento.estado}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/alumnos/documentacion-personal"
              className="boton-alumnos boton-principal-alumnos"
            >
              Ingresar a mi documentación
            </Link>
          </div>
        </section>

        {/* HORARIOS Y NOVEDADES */}
        <section
          id="horarios-novedades"
          className="seccion-alumnos seccion-fondo-claro"
        >
          <div className="titulo-alumnos">
            <span>INFORMACIÓN DIARIA</span>

            <h2>Horarios y novedades</h2>

            <p>
              Consultá los horarios habituales y las modificaciones que puedan
              afectar las actividades escolares.
            </p>
          </div>

          <div className="contenido-horarios">
            <aside className="tarjeta-horario-principal">
              <div className="icono-horario">🕒</div>

              <h3>Horarios por curso</h3>

              <p>
                Seleccioná tu curso y división para consultar el horario
                correspondiente.
              </p>

              <label htmlFor="curso-horario">
                Curso y división
              </label>

              <select id="curso-horario" name="cursoHorario">
                <option value="">Seleccionar curso</option>
                <option value="1-a">1.º año A</option>
                <option value="2-a">2.º año A</option>
                <option value="3-a">3.º año A</option>
                <option value="4-a">4.º año A</option>
                <option value="5-a">5.º año A</option>
                <option value="6-a">6.º año A</option>
              </select>

              <button
                type="button"
                className="boton-alumnos boton-principal-alumnos"
              >
                Consultar horario
              </button>
            </aside>

            <div className="lista-novedades">
              {novedadesHorarios.map((novedad) => (
                <article className="novedad-alumno" key={novedad.titulo}>
                  <div className="datos-novedad">
                    <span className="tipo-novedad">
                      {novedad.tipo}
                    </span>

                    <span className="fecha-novedad">
                      {novedad.fecha}
                    </span>
                  </div>

                  <h3>{novedad.titulo}</h3>
                  <p>{novedad.descripcion}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CALENDARIO DE ENTREGAS */}
        <section
          id="calendario-entregas"
          className="seccion-alumnos seccion-fondo-blanco"
        >
          <div className="titulo-alumnos">
            <span>FECHAS INSTITUCIONALES</span>

            <h2>Calendario general de entregas</h2>

            <p>
              Fechas importantes compartidas por todos los cursos de la
              institución.
            </p>
          </div>

          <div className="calendario-entregas">
            {entregasInstitucionales.map((entrega, index) => (
              <article className="entrega-alumno" key={entrega.titulo}>
                <div className="numero-entrega">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="informacion-entrega">
                  <span>{entrega.fecha}</span>
                  <h3>{entrega.titulo}</h3>
                  <p>{entrega.descripcion}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="aclaracion-calendario">
            <strong>Recordatorio:</strong>

            <p>
              Las fechas pueden modificarse. Revisá periódicamente esta sección
              para conocer las actualizaciones.
            </p>
          </div>
        </section>

        {/* CONTACTO PRIVADO */}
        <section
          id="contacto-privado"
          className="seccion-alumnos seccion-contacto-privado"
        >
          <div className="titulo-alumnos titulo-contacto">
            <span>COMUNICACIÓN CONFIDENCIAL</span>

            <h2>Hablar de manera privada con directivos</h2>

            <p>
              Utilizá este espacio para informar una situación personal,
              familiar o escolar que necesite atención.
            </p>
          </div>

          <div className="contenedor-contacto">
            <aside className="informacion-contacto">
              <div className="icono-contacto">🛡️</div>

              <h3>Tu mensaje es importante</h3>

              <p>
                Podés comunicar enfermedades, alergias, malestares,
                preocupaciones, situaciones de violencia, abuso, acoso o
                bullying.
              </p>

              <p>
                La información deberá ser recibida únicamente por personal
                autorizado de la institución.
              </p>

              <div className="alerta-urgente">
                <strong>¿Necesitás ayuda urgente?</strong>

                <p>
                  Si existe peligro inmediato, no esperes una respuesta del
                  formulario. Buscá a una persona adulta de confianza, acudí a
                  la dirección de la escuela o contactá al servicio de
                  emergencias correspondiente.
                </p>
              </div>
            </aside>

            <form className="formulario-privado">
              <div className="campos-en-fila">
                <div className="campo-alumnos">
                  <label htmlFor="nombre-contacto">
                    Nombre y apellido
                  </label>

                  <input
                    id="nombre-contacto"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="campo-alumnos">
                  <label htmlFor="curso-contacto">
                    Curso y división
                  </label>

                  <input
                    id="curso-contacto"
                    name="curso"
                    type="text"
                    placeholder="Ejemplo: 3.º A"
                    required
                  />
                </div>
              </div>

              <div className="campo-alumnos">
                <label htmlFor="tipo-situacion">
                  Motivo del mensaje
                </label>

                <select
                  id="tipo-situacion"
                  name="tipoSituacion"
                  required
                >
                  <option value="">Seleccionar una opción</option>
                  <option value="salud">Salud o enfermedad</option>
                  <option value="alergia">Alergia o intolerancia</option>
                  <option value="malestar">Malestar personal o emocional</option>
                  <option value="bullying">Bullying o acoso escolar</option>
                  <option value="violencia">Violencia o abuso</option>
                  <option value="preocupacion">Otra preocupación</option>
                  <option value="otro">Otro motivo</option>
                </select>
              </div>

              <div className="campo-alumnos">
                <label htmlFor="mensaje-privado">
                  Contanos qué sucede
                </label>

                <textarea
                  id="mensaje-privado"
                  name="mensaje"
                  placeholder="Escribí la información que consideres necesaria..."
                  required
                />
              </div>

              <div className="campo-alumnos">
                <label htmlFor="forma-contacto">
                  ¿Cómo preferís que se comuniquen con vos?
                </label>

                <select
                  id="forma-contacto"
                  name="formaContacto"
                  required
                >
                  <option value="">Seleccionar una opción</option>
                  <option value="personalmente">Personalmente</option>
                  <option value="correo">Por correo electrónico</option>
                  <option value="telefono">Por teléfono</option>
                  <option value="responsable">
                    Mediante mi adulto responsable
                  </option>
                </select>
              </div>

              <div className="campo-alumnos">
                <label htmlFor="dato-contacto">
                  Correo o teléfono de contacto
                </label>

                <input
                  id="dato-contacto"
                  name="datoContacto"
                  type="text"
                  placeholder="Completalo si elegiste correo o teléfono"
                />
              </div>

              <label className="confirmacion-privacidad">
                <input
                  type="checkbox"
                  name="confirmacion"
                  required
                />

                <span>
                  Confirmo que la información ingresada es correcta y comprendo
                  que será recibida por el personal autorizado.
                </span>
              </label>

              <button
                type="submit"
                className="boton-alumnos boton-principal-alumnos"
              >
                Enviar mensaje privado
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer-alumnos">
        <h3>InfoProA | Despeñaderos</h3>

        <p>
          Información, acompañamiento y recursos para nuestros estudiantes.
        </p>
      </footer>
    </div>
  );
}