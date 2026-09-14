"use client";

import { useState } from "react";
import Link from "next/link";

export default function Inicio() {
  const imagenesCarrusel = [
    {
      src: "../public/laboratorio.jpg",
      alt: "Edificio de la institución educativa",
      categoria: "Nuestra institución",
      titulo: "Un espacio para aprender y crecer",
      descripcion:
        "Conocé los espacios que forman parte de nuestra comunidad educativa.",
    },
    {
      src: "/institucion/estudiantes.jpg",
      alt: "Estudiantes realizando actividades escolares",
      categoria: "Estudiantes",
      titulo: "Aprendizaje, participación y proyectos",
      descripcion:
        "Acompañamos a nuestros estudiantes durante todo su recorrido educativo.",
    },
    {
      src: "/institucion/novedades.jpg",
      alt: "Actividades y novedades de la institución",
      categoria: "Novedades",
      titulo: "Todo lo que sucede en InfoProA",
      descripcion:
        "Consultá actividades, eventos y noticias importantes de la institución.",
    },
  ];

  const tutoriales = [
    {
      numero: "01",
      icono: "🧭",
      titulo: "Cómo navegar por la aplicación",
      descripcion:
        "Aprendé a utilizar el menú y a ingresar a cada espacio del sistema.",
      enlace: "/tutoriales/navegacion",
    },
    {
      numero: "02",
      icono: "🔐",
      titulo: "Cómo iniciar sesión",
      descripcion:
        "Conocé los pasos para ingresar de manera segura con tu correo institucional.",
      enlace: "/tutoriales/iniciar-sesion",
    },
    {
      numero: "03",
      icono: "📄",
      titulo: "Cómo consultar información",
      descripcion:
        "Encontrá documentos, horarios, novedades y recursos institucionales.",
      enlace: "/tutoriales/consultas",
    },
    {
      numero: "04",
      icono: "📎",
      titulo: "Cómo enviar documentación",
      descripcion:
        "Aprendé a completar formularios y adjuntar archivos correctamente.",
      enlace: "/tutoriales/documentacion",
    },
  ];

  const [imagenActual, setImagenActual] = useState(0);

  function mostrarAnterior() {
    setImagenActual((indiceActual) =>
      indiceActual === 0
        ? imagenesCarrusel.length - 1
        : indiceActual - 1
    );
  }

  function mostrarSiguiente() {
    setImagenActual((indiceActual) =>
      indiceActual === imagenesCarrusel.length - 1
        ? 0
        : indiceActual + 1
    );
  }

  return (
    <div className="pagina-inicio">
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
          <Link href="/">Inicio</Link>
          <Link href="/alumnos">Alumnos</Link>
          <Link href="/directivos">Directivos</Link>
          <Link href="/PAICOR">PAICOR</Link>
          <Link href="/profesores">Profesores</Link>
          <Link href="/#tutoriales">Tutoriales</Link>
        </nav>

        <Link href="/iniciar-sesion" className="boton-iniciar-sesion">
          <span aria-hidden="true">🔐</span>
          Iniciar sesión
        </Link>
      </header>

      <main>
        {/* PRESENTACIÓN */}
        <section className="hero-inicio">
          <div className="hero-contenido">
            <p className="etiqueta-inicio">BIENVENIDO/A</p>

            <h1>
              Sistema escolar
              <br />
              <span>InfoProA</span>
            </h1>

            <p className="descripcion-inicio">
              Un espacio digital para acceder de manera rápida, segura y
              sencilla a la información y los servicios de nuestra institución
              educativa.
            </p>

            <div className="botones-inicio">
              <Link
                href="/iniciar-sesion"
                className="boton-inicio boton-principal-inicio"
              >
                Ingresar con correo institucional
              </Link>

              <a
                href="#accesos"
                className="boton-inicio boton-secundario-inicio"
              >
                Conocer la aplicación
              </a>
            </div>
          </div>

          <div className="hero-tarjeta">
            <div className="icono-hero">🎓</div>

            <h2>InfoProA</h2>

            <p>
              Información, comunicación y servicios para toda la comunidad
              educativa.
            </p>

            <div className="datos-hero">
              <div>
                <strong>01</strong>
                <span>Información institucional</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Recursos educativos</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Comunicación segura</span>
              </div>
            </div>
          </div>
        </section>

        {/* CARRUSEL */}
        <section className="seccion-carrusel">
          <div className="titulo-seccion">
            <span>COMUNIDAD INFOPROA</span>

            <h2>Conocé nuestra institución</h2>

            <p>
              Imágenes de la escuela, sus estudiantes, actividades y novedades.
            </p>
          </div>

          <div
            className="carrusel"
            aria-roledescription="carrusel"
            aria-label="Imágenes de la institución"
          >
            <div className="carrusel-imagen">
              <img
                src={imagenesCarrusel[imagenActual].src}
                alt={imagenesCarrusel[imagenActual].alt}
              />

              <div className="carrusel-capa">
                <span>
                  {imagenesCarrusel[imagenActual].categoria}
                </span>

                <h3>
                  {imagenesCarrusel[imagenActual].titulo}
                </h3>

                <p>
                  {imagenesCarrusel[imagenActual].descripcion}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="control-carrusel control-anterior"
              onClick={mostrarAnterior}
              aria-label="Mostrar imagen anterior"
            >
              ‹
            </button>

            <button
              type="button"
              className="control-carrusel control-siguiente"
              onClick={mostrarSiguiente}
              aria-label="Mostrar imagen siguiente"
            >
              ›
            </button>

            <div className="indicadores-carrusel">
              {imagenesCarrusel.map((imagen, indice) => (
                <button
                  key={imagen.src}
                  type="button"
                  className={
                    indice === imagenActual
                      ? "indicador-carrusel indicador-activo"
                      : "indicador-carrusel"
                  }
                  onClick={() => setImagenActual(indice)}
                  aria-label={`Mostrar imagen ${indice + 1}`}
                  aria-current={
                    indice === imagenActual ? "true" : undefined
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ACCESOS */}
        <section id="accesos" className="accesos-inicio">
          <div className="titulo-seccion">
            <span>ACCESOS RÁPIDOS</span>
            <h2>¿Qué estás buscando?</h2>

            <p>
              Elegí el espacio correspondiente para acceder a sus recursos y
              servicios.
            </p>
          </div>

          <div className="tarjetas-acceso">
            <Link href="/alumnos" className="tarjeta-acceso">
              <div className="acceso-icono">👨‍🎓</div>

              <h3>Alumnos</h3>

              <p>
                Información, documentación, horarios y herramientas para
                estudiantes.
              </p>

              <span>Ingresar →</span>
            </Link>

            <Link href="/profesores" className="tarjeta-acceso">
              <div className="acceso-icono">👨‍🏫</div>

              <h3>Profesores</h3>

              <p>
                Espacio destinado a los docentes y profesores de la
                institución.
              </p>

              <span>Ingresar →</span>
            </Link>

            <Link href="/directivos" className="tarjeta-acceso">
              <div className="acceso-icono">🏫</div>

              <h3>Directivos</h3>

              <p>
                Información, herramientas y recursos para la gestión
                institucional.
              </p>

              <span>Ingresar →</span>
            </Link>

            <Link href="/PAICOR" className="tarjeta-acceso">
              <div className="acceso-icono">🍎</div>

              <h3>PAICOR</h3>

              <p>
                Información relacionada con el servicio alimentario de la
                institución.
              </p>

              <span>Ingresar →</span>
            </Link>
          </div>
        </section>

        {/* TUTORIALES */}
        <section id="tutoriales" className="seccion-tutoriales-inicio">
          <div className="titulo-seccion">
            <span>GUÍAS DE USO</span>

            <h2>Tutoriales de la aplicación</h2>

            <p>
              Guías sencillas para aprender a utilizar las principales
              funciones de InfoProA.
            </p>
          </div>

          <div className="tutoriales-inicio-grid">
            {tutoriales.map((tutorial) => (
              <article
                className="tarjeta-tutorial-inicio"
                key={tutorial.titulo}
              >
                <span className="numero-tutorial-inicio">
                  {tutorial.numero}
                </span>

                <div className="icono-tutorial-inicio">
                  {tutorial.icono}
                </div>

                <h3>{tutorial.titulo}</h3>
                <p>{tutorial.descripcion}</p>

                <Link href={tutorial.enlace}>
                  Ver tutorial →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* HISTORIA E INFORMACIÓN */}
        <section id="institucion" className="historia-institucion">
          <div className="contenido-historia">
            <div className="imagen-historia">
              <img
                src="/institucion/historia-escuela.jpg"
                alt="Historia de la institución ProA Despeñaderos"
              />

              <div className="detalle-imagen-historia">
                <strong>ProA</strong>
                <span>Despeñaderos, Córdoba</span>
              </div>
            </div>

            <div className="texto-historia">
              <span className="etiqueta-inicio">
                NUESTRA INSTITUCIÓN
              </span>

              <h2>Historia de ProA Despeñaderos</h2>

              <p>
                En esta sección se podrá presentar la historia de la
                institución, su fecha de creación, los principales momentos de
                su desarrollo y su vínculo con la comunidad de Despeñaderos.
              </p>

              <p>
                También podrá incluirse información sobre la propuesta
                educativa, la orientación de la escuela, sus objetivos y los
                proyectos desarrollados por estudiantes y docentes.
              </p>

              <div className="datos-institucion">
                <div>
                  <strong>Misión</strong>

                  <p>
                    Acompañar la formación integral de los estudiantes mediante
                    una educación innovadora, inclusiva y comprometida.
                  </p>
                </div>

                <div>
                  <strong>Comunidad</strong>

                  <p>
                    Promover la participación y el trabajo conjunto entre
                    estudiantes, familias, docentes y directivos.
                  </p>
                </div>
              </div>

              <Link
                href="/institucion"
                className="boton-inicio boton-principal-inicio"
              >
                Conocer más sobre la institución
              </Link>
            </div>
          </div>
        </section>

        {/* INFORMACIÓN INSTITUCIONAL */}
        <section className="informacion-institucional">
          <div className="titulo-seccion titulo-seccion-oscura">
            <span>INFORMACIÓN ÚTIL</span>

            <h2>Datos de la institución</h2>

            <p>
              Información necesaria para comunicarse o acercarse a la escuela.
            </p>
          </div>

          <div className="informacion-institucional-grid">
            <article>
              <div className="icono-informacion">📍</div>
              <h3>Dirección</h3>
              <p>Completá aquí la dirección oficial de la institución.</p>
            </article>

            <article>
              <div className="icono-informacion">🕒</div>
              <h3>Horarios</h3>
              <p>Completá aquí los días y horarios de atención.</p>
            </article>

            <article>
              <div className="icono-informacion">✉️</div>
              <h3>Correo institucional</h3>
              <p>Completá aquí el correo electrónico oficial.</p>
            </article>

            <article>
              <div className="icono-informacion">☎️</div>
              <h3>Teléfono</h3>
              <p>Completá aquí el número de contacto institucional.</p>
            </article>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer-inicio">
        <div>
          <h3>InfoProA | Despeñaderos</h3>

          <p>
            Sistema de información de la comunidad educativa.
          </p>
        </div>

        <div>
          <p>© 2026 InfoProA Despeñaderos</p>
        </div>
      </footer>
    </div>
  );
}
