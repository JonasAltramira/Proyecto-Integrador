import Link from "next/link";

export default function Directivos() {
  /*
   * Reemplazá este correo por la dirección oficial
   * en la que recibirán la documentación.
   */
  const emailInscripciones = "despenaderos.ds@escuelasproa.edu.ar";

  return (
    <div className="pagina-directivos">
      {/* NAVBAR */}
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
          <Link href="/PAICOR">PAICOR</Link>
          <Link href="/profesores">Profesores</Link>
          <Link href="/alumnos">Alumnos</Link>
        </nav>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main>
        {/* BIENVENIDA */}
        <section className="bienvenida-directivos">
          <div className="texto-directivos">
            <span className="etiqueta-directivos">
              ESPACIO DIRECTIVO
            </span>

            <h1>
              Información y
              <br />
              <span>gestión institucional</span>
            </h1>

            <p>
              Les damos la bienvenida al espacio destinado a brindar
              información y recursos importantes para nuestra comunidad
              educativa.
            </p>

            <p>
              Aquí podrán consultar los requisitos de inscripción, conocer las
              formas de presentación de la documentación y acceder al portal de
              CiDi.
            </p>

          </div>

          {/* TARJETA PRINCIPAL */}
          <div className="tarjeta-directivos">

            <h1>Información institucional</h1>

            <p>
              Un espacio para acceder de forma simple y ordenada a los
              principales trámites y servicios escolares.
            </p>

            <div className="lista-directivos">
              <div>
                <strong>01</strong>
                 <a
                href="#inscripciones"
                className="boton-directivos boton-secundario-directivos"
              >
                Ver requisitos de inscripción
              </a>
              </div>

              <div>
                <strong>02</strong>
                 <a
                href="#portal-cidi"
                className="boton-directivos boton-secundario-directivos"
              >
                Consultar informacion en CiDi
              </a>

              </div>
            </div>
          </div>
        </section>

        {/* REQUISITOS DE INSCRIPCIÓN */}
        <section
          id="inscripciones"
          className="seccion-inscripciones-directivos"
        >
          <div className="titulo-directivos">
            <span>INSCRIPCIONES</span>

            <h2>Requisitos de inscripción</h2>

            <p>
              Antes de presentar la documentación, verificá que esté completa y
              actualizada.
            </p>
          </div>

          <div className="contenido-inscripciones">
            <article className="tarjeta-requisitos">
              <div className="encabezado-requisitos">
                <div className="icono-requisito">📄</div>

                <div>
                  <span>DOCUMENTACIÓN</span>
                  <h3>Documentación requerida</h3>
                </div>
              </div>

              <ul className="lista-requisitos">
                <li>
                  <span>01</span>
                  <p>Formulario de inscripción completo y firmado.</p>
                </li>

                <li>
                  <span>02</span>
                  <p>DNI del estudiante y del adulto responsable.</p>
                </li>

                <li>
                  <span>03</span>
                  <p>Partida de nacimiento del estudiante.</p>
                </li>

                <li>
                  <span>04</span>
                  <p>Constancia de CUIL del estudiante.</p>
                </li>

                <li>
                  <span>05</span>
                  <p>Certificado o constancia de estudios correspondiente.</p>
                </li>

                <li>
                  <span>06</span>
                  <p>
                    Certificado de salud, ficha médica o documentación
                    adicional solicitada por la institución.
                  </p>
                </li>
              </ul>

              <div className="aviso-inscripcion">
                <strong>Importante:</strong>

                <p>
                  Esta lista debe adaptarse a los requisitos oficiales
                  establecidos por la institución para cada ciclo lectivo.
                </p>
              </div>
            </article>

            <aside className="tarjeta-entrega-documentacion">
              <span className="etiqueta-entrega">
                PRESENTACIÓN
              </span>

              <h3>¿Cómo entregar la documentación?</h3>

              <div className="opcion-entrega">
                <div className="icono-entrega">🏫</div>

                <div>
                  <h4>Entrega presencial</h4>
                  <p>
                    La documentación puede entregarse físicamente en la
                    institución, dentro de los días y horarios informados.
                  </p>
                </div>
              </div>

              <div className="opcion-entrega">
                <div className="icono-entrega">✉️</div>

                <div>
                  <h4>Entrega digital</h4>
                  <p>
                    También puede enviarse por correo electrónico. Los
                    documentos deben ser legibles y estar preferentemente en
                    formato PDF.
                  </p>
                </div>
              </div>

              <a
                className="correo-inscripciones"
              >
                {emailInscripciones}
              </a>
            </aside>
          </div>
        </section>

        {/* PORTAL CIDI */}
        <section id="portal-cidi" className="seccion-cidi-directivos">
          <div className="contenido-cidi">
            <div className="texto-cidi">
              <span className="etiqueta-directivos">
                CIUDADANO DIGITAL
              </span>

              <h2>Consultá la información escolar en CiDi</h2>

              <p>
                Desde el portal de Ciudadano Digital podés ingresar a los
                servicios habilitados para consultar notas, inasistencias y
                otros datos relacionados con la trayectoria escolar.
              </p>

              <p className="aclaracion-cidi">
                Para ingresar es necesario contar con una cuenta de Ciudadano
                Digital. La disponibilidad de cada consulta depende de los
                servicios habilitados por el Gobierno de Córdoba y la
                institución.
              </p>

              <a
                href="https://cidi.cba.gov.ar/portal-publico/"
                target="_blank"
                rel="noopener noreferrer"
                className="boton-directivos boton-principal-directivos"
              >
                Ingresar al portal CiDi
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="tarjeta-cidi">
              <div className="icono-cidi">🔐</div>

              <h3>Acceso seguro</h3>

              <ul>
                <li>Ingresá con tus datos personales.</li>
                <li>No compartas tu contraseña.</li>
                <li>Cerrá la sesión al terminar.</li>
                <li>
                  Verificá que estés dentro del sitio oficial antes de ingresar
                  información.
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer-directivos">
        <h3>InfoProA | Despeñaderos</h3>

        <p>
          Información institucional, inscripciones y recursos para la comunidad
          educativa.
        </p>
      </footer>
    </div>
  );
}