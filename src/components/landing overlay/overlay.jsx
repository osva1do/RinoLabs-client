import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ListButton from "../Button/list_button";
import Icon from "../icon/icon";
import "./style.css";

const Overlay = (props) => {
  return (
    <>
      <header className="landing-header">
        <img src="/img/logo.png" alt="" />
        <div className="landing-header buttons">
          <ListButton href="/registrarse" text="Registrarse" />
          <ListButton href="/iniciar-sesion" text="Ingresar" />
        </div>
      </header>

      <main className="landing-container">
        <div className="slide">
          <section className="slide landing-banner">
            <div id="loop">
              <h1>
                <b>RINO</b>
                <span>LABS</span> RINO
                <span>
                  <i>LABS.</i>
                </span>
              </h1>
              <h1>
                <b>RINO</b>
                <span>LABS</span> RINO
                <span>
                  <i>LABS.</i>
                </span>
              </h1>
              <h1>
                <b>RINO</b>
                <span>LABS</span> RINO
                <span>
                  <i>LABS.</i>
                </span>
              </h1>
              <h1>
                <b>RINO</b>
                <span>LABS</span> RINO
                <span>
                  <i>LABS.</i>
                </span>
              </h1>
              <h1>
                <b>RINO</b>
                <span>LABS</span> RINO
                <span>
                  <i>LABS.</i>
                </span>
              </h1>
            </div>
            <Icon css="banner-icon" icon={faArrowDown} />
          </section>
          <section className="slide what-is">
            <h1>¿Qué es RhinoLabs?</h1>
            <p>
              Rhinolabs es una plataforma diseñada para gestionar de manera
              eficiente los laboratorios del Tecnológico. Proporciona
              herramientas avanzadas para la asignación de espacios, control de
              inventarios y préstamos de materiales, optimizando los recursos y
              asegurando que estudiantes y profesores tengan acceso a lo
              necesario para sus prácticas y experimentos.
            </p>
          </section>
          <section className="slide objetive">
            <h1>Objetivo</h1>
            <p>
              Nuestro objetivo es facilitar la administración de los
              laboratorios del Tecnológico, asegurando que cada laboratorio esté
              completamente equipado y disponible para estudiantes y docentes
              cuando lo necesiten. Rhinolabs ayuda a mejorar la organización y
              disponibilidad de recursos, creando un entorno de aprendizaje más
              dinámico y efectivo.
            </p>
          </section>

          <section className="slide mission">
            <h1>Misión</h1>
            <p>
              La misión de Rhinolabs es apoyar al Tecnológico brindándole una
              solución de gestión de laboratorios que promueva el uso eficiente
              de sus instalaciones y materiales, fomentando una experiencia de
              aprendizaje más enriquecedora y práctica para los estudiantes.
            </p>
          </section>

          <section className="slide functions">
            <h1>Funciones</h1>
            <ul>
              <li>
                Asignar laboratorios a clases, asegurando que los espacios se
                utilicen de manera eficiente y que no haya conflictos en su uso.
              </li>
              <li>
                Gestionar el inventario de equipos y materiales, como reactivos,
                cristalería y herramientas, garantizando que siempre haya
                suficientes recursos disponibles para las prácticas.
              </li>
              <li>
                Controlar el préstamo de materiales a estudiantes y docentes,
                permitiendo registrar el estado de los recursos al momento de
                préstamo y devolución, asegurando que estén en buen estado para
                su uso continuo.
              </li>
              <li>
                Optimizar la logística del laboratorio, reduciendo el tiempo de
                administración y mejorando la disponibilidad de los recursos, lo
                que permite a los profesores y estudiantes centrarse en el
                aprendizaje práctico.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};
export default Overlay;
