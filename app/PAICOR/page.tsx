import Link from "next/link";

// =================================
// CONTENIDO EDITABLE DESDE EL CÓDIGO
// =================================

// Ejemplo de ruta si el archivo está en public:
// "/estudiantes-paicor.jpg"
const fotoEstudiantes = "/Institucion.jpg";

// Ejemplo de ruta si el archivo está en public:
// "/menu-mensual-paicor.jpg"
const fotoMenuMensual = "";

// Agregá los nombres de los platos entre comillas.
// Cada elemento aparecerá como un ítem de la lista.
const platosEspeciales: string[] = [
  // "Nombre del primer plato",
  // "Nombre del segundo plato",
  // "Nombre del tercer plato",
];

// =================================
// ESPACIO PARA MOSTRAR UNA FOTO
// =================================

function EspacioFoto({
  src,
  descripcion,
}: {
  src: string;
  descripcion: string;
}) {
  return (
    <div className="contenedor-foto-paicor">
      {src ? (
        <div className="foto-publicada-paicor">
          <img src={src} alt={descripcion} />
        </div>
      ) : (
        <div className="foto-pendiente-paicor">
          <span>{descripcion}</span>
          <small>Imagen pendiente de publicación</small>
        </div>
      )}
    </div>
  );
}

export default function PAICOR() {
  return (
    <div className="pagina-paicor">
      {/* BARRA DE NAVEGACIÓN */}
      <header className="navbar">
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
          <Link href="/profesores">Profesores</Link>
          <Link href="/alumnos">Alumnos</Link>
        </nav>
      </header>

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

          </div>

          {/* TARJETA PRINCIPAL */}
          <div className="tarjeta-paicor">
            <h1>PAICOR</h1>

            <p>
              Un espacio destinado a organizar el servicio alimentario y
              acompañar las necesidades de cada estudiante.
            </p>

            <div className="lista-paicor">
              <div>
                <strong>01</strong>
                 <Link
                href="#estudiantes-autorizados"
                className="boton-paicor boton-secundario-paicor"
              >
                Estudiantes Autorizados
              </Link>
              </div>

              <div>
                <strong>02</strong>
                 <Link
                href="#menus-especiales"
                className="boton-paicor boton-secundario-paicor"
              >
                Menus especiales
              </Link>
              </div>

              <div>
                <strong>03</strong>
                 <Link
                href="#integrantes-paicor"
                className="boton-paicor boton-secundario-paicor"
              >
                Integrantes del PAICOR
              </Link>
              </div>

              <div>
                <strong>04</strong>
                 <Link
                href="#menu-mensual"
                className="boton-paicor boton-secundario-paicor"
              >
                Menú mensual
              </Link>
              </div>
            </div>
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
              Consultá la nómina de estudiantes que pueden acceder al
              servicio de PAICOR.
            </p>
          </div>

          <EspacioFoto
            src={fotoEstudiantes}
            descripcion="Lista de estudiantes autorizados para PAICOR"
          />
        </section>

        {/* MENÚS ESPECIALES */}
        <section
          id="menus-especiales"
          className="seccion-gestion-paicor"
        >
          <div className="titulo-paicor">
            <span>ALIMENTACIÓN ESPECIAL</span>
            <h2>Menús especiales</h2>
            <p>
              Consultá los diferentes platos disponibles.
            </p>
          </div>

          <div className="platos-publicados-paicor">
            {platosEspeciales.length > 0 ? (
              <ul className="platos-publicados-lista-paicor">
                {platosEspeciales.map((plato, indice) => (
                  <li key={`${indice}-${plato}`}>
                    <span>{plato}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="platos-pendientes-paicor">
                Los platos especiales se publicarán próximamente.
              </p>
            )}
          </div>
        </section>

        {/* INTEGRANTES */}
        <section
          id="integrantes-paicor"
          className="seccion-gestion-paicor"
        >
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
        <section
          id="menu-mensual"
          className="seccion-gestion-paicor"
        >
          <div className="titulo-paicor">
            <span>PLANIFICACIÓN</span>
            <h2>Menú del mes</h2>
            <p>
              Consultá el cronograma mensual de comidas de nuestra
              institución.
            </p>
          </div>

          <EspacioFoto
            src={fotoMenuMensual}
            descripcion="Menú mensual de PAICOR"
          />
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