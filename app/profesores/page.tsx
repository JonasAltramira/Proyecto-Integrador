import Link from "next/link";


export default function Profesores() {
  return (
    <div className="pagina-profesores">

      {/* NAVBAR */}
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

      {/* BIENVENIDA */}
      <main>

        <section className="bienvenida-profesores">

          <div className="texto-profesores">

            <span className="etiqueta-profesores">
              ESPACIO DOCENTE
            </span>

            <h1>
              ¡Bienvenidos,
              <br />
              <span>profesores!</span>
            </h1>

            <p>
              Este espacio está destinado a los profesores de
              nuestra institución.
            </p>

            <p>
              Aquí podrán encontrar información de contacto,
              documentación y materiales educativos trabajados
              durante los diferentes años escolares.
            </p>

            <div className="botones-profesores">

              <a
                href="#profesores"
                className="boton-profesores boton-principal-profesores"
              >
                Conocer profesores
              </a>

              <a
                href="#documentacion"
                className="boton-profesores boton-secundario-profesores"
              >
                Ver documentación
              </a>

            </div>

          </div>

          <div className="tarjeta-profesores">

            <div className="icono-profesores">
              👨‍🏫
            </div>

            <h2>
              Espacio docente
            </h2>

            <p>
              Un lugar pensado para facilitar la comunicación
              entre profesores, alumnos y familias.
            </p>

            <div className="lista-profesores">

              <div>
                <strong>01</strong>
                <span>Datos de contacto</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Documentación y materiales</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Información de los docentes</span>
              </div>

            </div>

          </div>

        </section>


        {/* PROFESORES */}
        <section
          className="seccion-profesores"
          id="profesores"
        >

          <div className="titulo-profesores">

            <span>NUESTROS DOCENTES</span>

            <h2>
              Conocé a nuestros profesores
            </h2>

            <p>
              Conocé a los docentes de la institución, su
              nombre, cargo y datos de contacto.
            </p>

          </div>


          <div className="profesores-grid">

            {/* PROFESOR 1 */}
            <div className="perfil-profesor">

              <div className="foto-profesor">
                <img
                  src="/profesores/profesor1.jpg"
                  alt="Foto del profesor"
                />
              </div>

              <div className="informacion-profesor">

                <span className="cargo-profesor">
                  DOCENTE
                </span>

                <h3>
                  Nombre Apellido
                </h3>

                <p>
                  Profesor/a de materia
                </p>

                <div className="contacto-profesor">

                  <div>
                    <span>📧</span>
                    <p>
                      profesor@infoproa.com
                    </p>
                  </div>

                  <div>
                    <span>📱</span>
                    <p>
                      351 123 4567
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* PROFESOR 2 */}
            <div className="perfil-profesor">

              <div className="foto-profesor">
                <img
                  src="/profesores/profesor2.jpg"
                  alt="Foto de la profesora"
                />
              </div>

              <div className="informacion-profesor">

                <span className="cargo-profesor">
                  DOCENTE
                </span>

                <h3>
                  Nombre Apellido
                </h3>

                <p>
                  Profesor/a de materia
                </p>

                <div className="contacto-profesor">

                  <div>
                    <span>📧</span>
                    <p>
                      profesor2@infoproa.com
                    </p>
                  </div>

                  <div>
                    <span>📱</span>
                    <p>
                      351 765 4321
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* PROFESOR 3 */}
            <div className="perfil-profesor">

              <div className="foto-profesor">
                <img
                  src="/profesores/profesor3.jpg"
                  alt="Foto del profesor"
                />
              </div>

              <div className="informacion-profesor">

                <span className="cargo-profesor">
                  DOCENTE
                </span>

                <h3>
                  Nombre Apellido
                </h3>

                <p>
                  Profesor/a de materia
                </p>

                <div className="contacto-profesor">

                  <div>
                    <span>📧</span>
                    <p>
                      profesor3@infoproa.com
                    </p>
                  </div>

                  <div>
                    <span>📱</span>
                    <p>
                      351 987 6543
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* DOCUMENTACIÓN */}
        <section
          className="seccion-documentacion"
          id="documentacion"
        >

          <div className="titulo-profesores">

            <span>ARCHIVO DOCENTE</span>

            <h2>
              Documentación y materiales
            </h2>

            <p>
              En este espacio se podrán consultar documentos,
              trabajos y materiales utilizados durante los
              diferentes años escolares.
            </p>

          </div>


          <div className="documentacion-grid">

            {/* DOCUMENTO 1 */}
            <div className="documento">

              <div className="icono-documento">
                📄
              </div>

              <div className="datos-documento">

                <span>
                  2026
                </span>

                <h3>
                  Material de estudio
                </h3>

                <p>
                  Documentación trabajada durante el año.
                </p>

              </div>

              <a
                href="#"
                className="boton-documento"
              >
                Ver archivo →
              </a>

            </div>


            {/* DOCUMENTO 2 */}
            <div className="documento">

              <div className="icono-documento">
                📚
              </div>

              <div className="datos-documento">

                <span>
                  2025
                </span>

                <h3>
                  Trabajos anteriores
                </h3>

                <p>
                  Material de años anteriores para repasar.
                </p>

              </div>

              <a
                href="#"
                className="boton-documento"
              >
                Ver archivo →
              </a>

            </div>


            {/* DOCUMENTO 3 */}
            <div className="documento">

              <div className="icono-documento">
                📝
              </div>

              <div className="datos-documento">

                <span>
                  Material
                </span>

                <h3>
                  Apuntes y actividades
                </h3>

                <p>
                  Apuntes y actividades trabajadas en clase.
                </p>

              </div>

              <a
                href="#"
                className="boton-documento"
              >
                Ver archivo →
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer-profesores">

        <h3>
          InfoProA | Despeñaderos
        </h3>

        <p>
          Espacio destinado a los profesores de la institución.
        </p>

      </footer>

    </div>
  );
}