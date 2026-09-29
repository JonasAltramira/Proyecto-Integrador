"use client";

import { useState } from "react";
import Link from "next/link";

export default function Inicio() {
  const imagenesCarrusel = [
    {
      src: "/laboratorio.jpg",
      alt: "Edificio de la institución educativa",
      categoria: "Nuestra institución",
      titulo: "Un espacio para aprender y crecer",
      descripcion:
        "Conocé los espacios que forman parte de nuestra comunidad educativa.",
    },
    {
      src: "/institucion.jpg",
      alt: "Estudiantes realizando actividades escolares",
      categoria: "Estudiantes",
      titulo: "Aprendizaje, participación y proyectos",
      descripcion:
        "Acompañamos a nuestros estudiantes durante todo su recorrido educativo.",
    },
    {
      src: "/actividadesproa.jpg",
      alt: "Actividades y novedades de la institución",
      categoria: "Novedades",
      titulo: "Todo lo que sucede en InfoProA",
      descripcion:
        "Consultá actividades, eventos y noticias importantes de la institución.",
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

       <div className="boton-iniciar-sesion">
        <Link href="/InicioSesion" >
          Iniciar sesión
        </Link>
       </div>

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
              
            
          </div>

          <div className="hero-tarjeta">
            <h2>InfoProA</h2>

            <p>
              Información, comunicación y servicios para toda la comunidad
              educativa.
            </p>

            <div className="datos-hero">
              <div>
                <strong>01</strong>
                <a
                href="#infoproa"
                className="boton-inicio boton-secundario-inicio"
              >
                Comunidad InfoProA
              </a>
              </div>

             <div>
                <strong>02</strong>
                <a
                href="#institucion"
                className="boton-inicio boton-secundario-inicio"
              >
                Nuestra Institución
              </a>
              </div>

               <div>
                <strong>03</strong>
                <a
                href="#informacion"
                className="boton-inicio boton-secundario-inicio"
              >
                Información Útil
              </a>
              </div>
            </div>
          </div>
        </section>

        {/* CARRUSEL */}
        <section className="seccion-carrusel">
          <div className="titulo-seccion" id="infoproa">
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

        {/* HISTORIA E INFORMACIÓN */}
        <section id="institucion" className="historia-institucion">
          <div className="contenido-historia">
            <div className="imagen-historia">
              <img
                src="/historiaproa.jpg"
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
                La Escuela ProA Despeñaderos es una institución pública de educación secundaria ubicada en Despeñaderos, Córdoba.
                Forma parte del programa provincial ProA, que propone integrar las tecnologías de la información y la comunicación a la enseñanza. 
                La sede de Despeñaderos tiene orientación en Desarrollo de Software, por lo que combina la formación secundaria general con aprendizajes vinculados a la programación y la creación de tecnología. 
                Su nuevo edificio fue inaugurado en junio de 2022 y cuenta con capacidad prevista para 180 estudiantes.
              </p>

              <Link
                href="https://www.cba.gov.ar/escuelas-proa/"
                className="boton-inicio boton-principal-inicio"
              >
                Conocé más del programa ProA
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

          <div className="informacion-institucional-grid" id="informacion">
            <article>
              <a href="https://maps.app.goo.gl/cHg6bTtqrPgm3hDq6">
                <div className="icono-informacion">📍</div>
                <h3>Dirección</h3>
                <p> X5121 Despeñaderos, Córdoba</p>
                <p> Argentina 734</p>
              </a>
            </article>

            <article>
              <div className="icono-informacion">🕒</div>
              <h3>Horarios</h3>
              <p>Completá aquí los días y horarios de atención.</p>
            </article>

            <article>
              <div className="icono-informacion">✉️</div>
              <h3>Correo institucional</h3>
              <p>despenaderos.ds
                @escuelasproa.edu.ar</p>
            </article>

            <article>
              <div className="icono-informacion">☎️</div>
              <h3>Teléfono</h3>
              <p>Celular: 03547 30-3425</p>
              <p>Fijo: 03547-492000</p>
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