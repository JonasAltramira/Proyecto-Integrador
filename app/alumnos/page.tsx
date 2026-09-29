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
         <Link href="/" className="identidad-institucional">
          <div className="logo">
            <img
              src="/logo_proaa.jpg"
              alt="Logo de ProA Despeñaderos"
            />
          </div>

          <div className="nombre-institucion">
            <strong>InfoProA</strong>
            <span>Despeñaderos</span>
          </div>
        </Link>

        <nav className="menu" aria-label="Navegación principal">
          <Link href="/homepage">Inicio</Link>
          <Link href="/directivos">Directivos</Link>
          <Link href="/PAICOR">PAICOR</Link>
          <Link href="/profesores">Profesores</Link>
        </nav>
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
              En este espacio vas a encontrar horarios, novedades y fechas importantes de la
              institución.
            </p>

            <p>
              También vas a poder comunicar de manera privada situaciones
              personales que necesiten ser conocidas y atendidas por el equipo
              directivo.
            </p>

          </div>

          {/* TARJETA PRINCIPAL */}
          <div className="tarjeta-alumnos">

            <h2>Tu espacio escolar</h2>

            <p>
              Accedé de manera ordenada a la información y los recursos que
              necesitás.
            </p>

            <div className="lista-alumnos">
              <div>
                <strong>01</strong>
                 <a
                href="#horarios-novedades"
                className="boton-alumnos boton-secundario-alumnos"
                >
                Revisá horarios, ausencias, eventos y cambios institucionales.
              </a>
              </div>

              <div>
                <strong>02</strong>
                <a
                href="#calendario-entregas"
                className="boton-alumnos boton-secundario-alumnos"
                >
                Calendario
              </a>
              </div>

              <div>
                <strong>03</strong>
                <a
                href="#contacto-privado"
                className="boton-alumnos boton-secundario-alumnos"
                >
                Hablar con directivos
              </a>
              </div>
            </div>
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