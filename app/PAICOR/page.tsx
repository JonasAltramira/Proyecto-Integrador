import Link from "next/link";

export default function PAICOR() {
  return (
    <div className="pagina-paicor">
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

      <main>
        {/* BIENVENIDA */}
        <section className="bienvenida-paicor">
          <div className="texto-paicor">
            <span className="etiqueta-paicor">ESPACIO PAICOR</span>

            <h1>
              ¡Bienvenidos al
              <br />
              <span>espacio PAICOR!</span>
            </h1>

            <p>
              Este espacio permite organizar la información relacionada con
              los estudiantes, los menús y las necesidades alimentarias de
              nuestra comunidad educativa.
            </p>

            <p>
              Las familias también podrán informar alergias, intolerancias u
              otras condiciones que requieran la preparación de platos
              especiales.
            </p>

            <div className="botones-paicor">
              <Link
                href="#estudiantes-autorizados"
                className="boton-paicor boton-principal-paicor"
              >
                Estudiantes autorizados
              </Link>

              <Link
                href="#informacion-familias"
                className="boton-paicor boton-secundario-paicor"
              >
                Informar una necesidad alimentaria
              </Link>
            </div>
          </div>

          {/* TARJETA PRINCIPAL */}
          <div className="tarjeta-paicor">
            <div className="icono-paicor">🍎</div>

            <h2>PAICOR</h2>

            <p>
              Un espacio destinado a organizar el servicio alimentario y
              acompañar las necesidades de cada estudiante.
            </p>

            <div className="lista-paicor">
              <div>
                <strong>01</strong>
                <span>Estudiantes autorizados</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Menús mensuales y especiales</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Alergias e intolerancias</span>
              </div>
            </div>
          </div>
        </section>

        {/* ACCESOS PRINCIPALES */}
        <section className="informacion-paicor">
          <div className="titulo-paicor">
            <span>GESTIÓN PAICOR</span>
            <h2>Información y recursos</h2>
            <p>
              Accedé a las diferentes secciones relacionadas con el
              funcionamiento del PAICOR en nuestra institución.
            </p>
          </div>

          <div className="paicor-grid">
            <a
              href="#estudiantes-autorizados"
              className="tarjeta-informacion-paicor"
            >
              <div className="icono-informacion">📋</div>
              <h3>Estudiantes autorizados</h3>
              <p>
                Consultá y cargá la lista de estudiantes autorizados a recibir
                el servicio.
              </p>
            </a>

            <a
              href="#menus-especiales"
              className="tarjeta-informacion-paicor"
            >
              <div className="icono-informacion">🥗</div>
              <h3>Menús especiales</h3>
              <p>
                Registrá menús para estudiantes celíacos, diabéticos, veganos,
                vegetarianos o con otras necesidades.
              </p>
            </a>

            <a href="#integrantes-paicor" className="tarjeta-informacion-paicor">
              <div className="icono-informacion">👥</div>
              <h3>Integrantes</h3>
              <p>
                Conocé a las personas que forman parte del equipo PAICOR de la
                institución.
              </p>
            </a>

            <a href="#menu-mensual" className="tarjeta-informacion-paicor">
              <div className="icono-informacion">📅</div>
              <h3>Menú mensual</h3>
              <p>
                Consultá y cargá la planificación alimentaria correspondiente a
                cada mes.
              </p>
            </a>

            <a
              href="#informacion-familias"
              className="tarjeta-informacion-paicor"
            >
              <div className="icono-informacion">👨‍👩‍👧‍👦</div>
              <h3>Información de las familias</h3>
              <p>
                Informá alergias, intolerancias u otras necesidades
                alimentarias de los estudiantes.
              </p>
            </a>
          </div>
        </section>

        {/* ESTUDIANTES AUTORIZADOS */}
        <section
          id="estudiantes-autorizados"
          className="seccion-gestion-paicor"
        >
          <div className="titulo-paicor">
            <span>ESTUDIANTES</span>
            <h2>Lista de estudiantes autorizados</h2>
            <p>
              Cargá la nómina de estudiantes que pueden acceder al servicio de
              PAICOR.
            </p>
          </div>

          <form className="formulario-paicor">
            <div className="campo-paicor">
              <label htmlFor="lista-estudiantes">
                Archivo de estudiantes autorizados
              </label>

              <input
                id="lista-estudiantes"
                name="listaEstudiantes"
                type="file"
                accept=".pdf,.xlsx,.xls,.csv"
                required
              />

              <small>Formatos admitidos: PDF, Excel o CSV.</small>
            </div>

            <div className="campo-paicor">
              <label htmlFor="observaciones-estudiantes">
                Observaciones
              </label>

              <textarea
                id="observaciones-estudiantes"
                name="observacionesEstudiantes"
                placeholder="Agregá alguna aclaración sobre la lista..."
              />
            </div>

            <button type="submit" className="boton-paicor boton-principal-paicor">
              Cargar lista
            </button>
          </form>
        </section>

        {/* MENÚS ESPECIALES */}
        <section id="menus-especiales" className="seccion-gestion-paicor">
          <div className="titulo-paicor">
            <span>ALIMENTACIÓN ESPECIAL</span>
            <h2>Menús especiales</h2>
            <p>
              Registrá las propuestas de alimentación adaptadas a las
              necesidades de los estudiantes.
            </p>
          </div>

          <form className="formulario-paicor">
            <div className="campos-en-fila">
              <div className="campo-paicor">
                <label htmlFor="tipo-menu">Tipo de menú</label>

                <select id="tipo-menu" name="tipoMenu" required>
                  <option value="">Seleccionar</option>
                  <option value="celiaco">Celíaco / sin gluten</option>
                  <option value="diabetico">Diabético</option>
                  <option value="vegano">Vegano</option>
                  <option value="vegetariano">Vegetariano</option>
                  <option value="sin-lactosa">Sin lactosa</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="campo-paicor">
                <label htmlFor="nombre-menu">Nombre del menú</label>

                <input
                  id="nombre-menu"
                  name="nombreMenu"
                  type="text"
                  placeholder="Ejemplo: menú semanal sin gluten"
                  required
                />
              </div>
            </div>

            <div className="campo-paicor">
              <label htmlFor="descripcion-menu">Descripción</label>

              <textarea
                id="descripcion-menu"
                name="descripcionMenu"
                placeholder="Detallá los platos, ingredientes y cuidados necesarios..."
                required
              />
            </div>

            <div className="campo-paicor">
              <label htmlFor="archivo-menu-especial">
                Archivo del menú especial
              </label>

              <input
                id="archivo-menu-especial"
                name="archivoMenuEspecial"
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </div>

            <button type="submit" className="boton-paicor boton-principal-paicor">
              Guardar menú especial
            </button>
          </form>
        </section>

        {/* INTEGRANTES */}
        <section id="integrantes-paicor" className="seccion-gestion-paicor">
          <div className="titulo-paicor">
            <span>NUESTRO EQUIPO</span>
            <h2>Integrantes del PAICOR</h2>
            <p>
              Personas responsables del funcionamiento del servicio en la
              institución.
            </p>
          </div>

          <div className="integrantes-grid">
            <article className="tarjeta-integrante">
              <div className="foto-integrante">
                <span>Foto</span>
              </div>
              <h3>Nombre y apellido</h3>
              <p>Función o cargo</p>
            </article>

            <article className="tarjeta-integrante">
              <div className="foto-integrante">
                <span>Foto</span>
              </div>
              <h3>Nombre y apellido</h3>
              <p>Función o cargo</p>
            </article>

            <article className="tarjeta-integrante">
              <div className="foto-integrante">
                <span>Foto</span>
              </div>
              <h3>Nombre y apellido</h3>
              <p>Función o cargo</p>
            </article>
          </div>
        </section>

        {/* MENÚ MENSUAL */}
        <section id="menu-mensual" className="seccion-gestion-paicor">
          <div className="titulo-paicor">
            <span>PLANIFICACIÓN</span>
            <h2>Menú del mes</h2>
            <p>
              Cargá el cronograma mensual para que pueda ser consultado por toda
              la comunidad educativa.
            </p>
          </div>

          <form className="formulario-paicor">
            <div className="campos-en-fila">
              <div className="campo-paicor">
                <label htmlFor="mes-menu">Mes</label>

                <input id="mes-menu" name="mesMenu" type="month" required />
              </div>

              <div className="campo-paicor">
                <label htmlFor="archivo-menu-mensual">Archivo del menú</label>

                <input
                  id="archivo-menu-mensual"
                  name="archivoMenuMensual"
                  type="file"
                  accept=".pdf,.doc,.docx,.xlsx,.xls,.jpg,.jpeg,.png"
                  required
                />
              </div>
            </div>

            <button type="submit" className="boton-paicor boton-principal-paicor">
              Publicar menú mensual
            </button>
          </form>
        </section>

        {/* INFORMACIÓN DE LAS FAMILIAS */}
        <section id="informacion-familias" className="seccion-gestion-paicor">
          <div className="titulo-paicor">
            <span>FAMILIAS</span>
            <h2>Necesidades alimentarias del estudiante</h2>
            <p>
              Completá esta información si el estudiante presenta alergias,
              intolerancias u otra condición alimentaria que deba ser
              considerada.
            </p>
          </div>

          <form className="formulario-paicor">
            <div className="campos-en-fila">
              <div className="campo-paicor">
                <label htmlFor="nombre-estudiante">
                  Nombre y apellido del estudiante
                </label>

                <input
                  id="nombre-estudiante"
                  name="nombreEstudiante"
                  type="text"
                  required
                />
              </div>

              <div className="campo-paicor">
                <label htmlFor="curso-estudiante">Curso y división</label>

                <input
                  id="curso-estudiante"
                  name="cursoEstudiante"
                  type="text"
                  placeholder="Ejemplo: 2.º A"
                  required
                />
              </div>
            </div>

            <div className="campo-paicor">
              <label htmlFor="condicion-alimentaria">
                Alergia, intolerancia o necesidad alimentaria
              </label>

              <select
                id="condicion-alimentaria"
                name="condicionAlimentaria"
                required
              >
                <option value="">Seleccionar</option>
                <option value="celiaquia">Celiaquía</option>
                <option value="diabetes">Diabetes</option>
                <option value="intolerancia-lactosa">
                  Intolerancia a la lactosa
                </option>
                <option value="alergia-alimentaria">
                  Alergia alimentaria
                </option>
                <option value="vegetariano">Alimentación vegetariana</option>
                <option value="vegano">Alimentación vegana</option>
                <option value="otra">Otra</option>
              </select>
            </div>

            <div className="campo-paicor">
              <label htmlFor="detalle-alimentacion">
                Información importante
              </label>

              <textarea
                id="detalle-alimentacion"
                name="detalleAlimentacion"
                placeholder="Indicá qué alimentos debe evitar, cuáles puede consumir y qué cuidados necesita..."
                required
              />
            </div>

            <div className="campos-en-fila">
              <div className="campo-paicor">
                <label htmlFor="adulto-responsable">
                  Nombre del adulto responsable
                </label>

                <input
                  id="adulto-responsable"
                  name="adultoResponsable"
                  type="text"
                  required
                />
              </div>

              <div className="campo-paicor">
                <label htmlFor="telefono-contacto">
                  Teléfono de contacto
                </label>

                <input
                  id="telefono-contacto"
                  name="telefonoContacto"
                  type="tel"
                  required
                />
              </div>
            </div>

            <div className="campo-paicor">
              <label htmlFor="certificado-medico">
                Certificado o indicación profesional
              </label>

              <input
                id="certificado-medico"
                name="certificadoMedico"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
              />

              <small>
                Adjuntá documentación médica cuando corresponda.
              </small>
            </div>

            <label className="campo-consentimiento">
              <input
                type="checkbox"
                name="confirmacionInformacion"
                required
              />

              <span>
                Declaro que la información proporcionada es correcta y autorizo
                su utilización para organizar la alimentación del estudiante.
              </span>
            </label>

            <button type="submit" className="boton-paicor boton-principal-paicor">
              Enviar información
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer-paicor">
        <h3>InfoProA | Despeñaderos</h3>
        <p>
          Espacio destinado a la organización y comunicación del servicio
          PAICOR.
        </p>
      </footer>
    </div>
  );
}