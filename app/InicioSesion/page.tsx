"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  // Datos ingresados en el formulario.
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  // Comprueba las credenciales de prueba.
  function iniciarSesion(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setError("");

    const correoCorrecto =
      correo.trim().toLowerCase() === "jaltamira@escuelasproa.edu.ar";

    const contrasenaCorrecta = contrasena === "123";

    if (correoCorrecto && contrasenaCorrecta) {
      router.replace("/homepage");
    } else {
      setError("El correo o la contraseña son incorrectos.");
    }
  }

  return (
    <main className="pagina-login">
      <section className="tarjeta-login" aria-labelledby="titulo-login">
        <div className="identidad-login">
          <span className="nombre-login">InfoProA</span>
          <p>Despeñaderos</p>
        </div>

        <h1 id="titulo-login">Iniciar sesión</h1>
        <p className="descripcion-login">
          Ingresá con tu correo institucional.
        </p>

        <form onSubmit={iniciarSesion} className="formulario-login">
          <div className="campo-login">
            <label htmlFor="correo">Correo institucional</label>
            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="usuario@escuelasproa.edu.ar"
              autoComplete="username"
              value={correo}
              onChange={(evento) => setCorreo(evento.target.value)}
              required
            />
          </div>

          <div className="campo-login">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              id="contrasena"
              name="contrasena"
              type="password"
              placeholder="Ingresá tu contraseña"
              autoComplete="current-password"
              value={contrasena}
              onChange={(evento) => setContrasena(evento.target.value)}
              required
            />
          </div>

          {error && (
            <p className="error-login" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="boton-login">
            Ingresar
          </button>
        </form>

        <p className="pie-login">Sistema escolar InfoProA</p>
      </section>

      {/* Estilos exclusivos de esta página. */}
      <style jsx>{`
        .pagina-login {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          box-sizing: border-box;
          background: #eef3f8;
          font-family: Arial, sans-serif;
          color: #243247;
        }

        .tarjeta-login {
          width: 100%;
          max-width: 420px;
          padding: 36px;
          box-sizing: border-box;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 12px 36px rgba(25, 48, 78, 0.12);
        }

        .identidad-login {
          text-align: center;
          margin-bottom: 28px;
        }

        .nombre-login {
          font-size: 32px;
          font-weight: 700;
          color: #174c7c;
        }

        .identidad-login p {
          margin: 6px 0 0;
          color: #64748b;
          font-size: 14px;
        }

        h1 {
          margin: 0 0 10px;
          text-align: center;
          font-size: 26px;
        }

        .descripcion-login {
          margin: 0 0 26px;
          text-align: center;
          color: #64748b;
          line-height: 1.5;
        }

        .formulario-login {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .campo-login {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        label {
          font-size: 14px;
          font-weight: 600;
        }

        input {
          width: 100%;
          padding: 13px 14px;
          box-sizing: border-box;
          border: 1px solid #cbd5e1;
          border-radius: 9px;
          background: #ffffff;
          color: #243247;
          font: inherit;
          font-size: 16px;
        }

        input:focus-visible {
          outline: 3px solid #c7def5;
          outline-offset: 2px;
          border-color: #174c7c;
        }

        .boton-login {
          padding: 14px;
          border: none;
          border-radius: 9px;
          background: #174c7c;
          color: #ffffff;
          font: inherit;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }

        .boton-login:hover {
          background: #103858;
        }

        .boton-login:focus-visible {
          outline: 3px solid #174c7c;
          outline-offset: 3px;
        }

        .error-login {
          margin: 0;
          padding: 12px;
          border-radius: 8px;
          background: #fff0f0;
          color: #a32020;
          font-size: 14px;
          line-height: 1.5;
        }

        .pie-login {
          margin: 26px 0 0;
          text-align: center;
          color: #64748b;
          font-size: 13px;
        }

        @media (max-width: 480px) {
          .tarjeta-login {
            padding: 28px 22px;
          }
        }
      `}</style>
    </main>
  );
}