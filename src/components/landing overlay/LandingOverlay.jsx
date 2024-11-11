import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export const LandingOverlay = () => {
  return (
    <main className="landing-container">
      <div className="banner-container">
        <section className="landing-banner">
          <div id="loop">
            <h1>
              <b>TECNOLÓGICO</b>
              <span> DE ESTUDIOS SUPERIORES</span> DE CUAUTITLÁN
              <span>
                <i>IZCALLI.</i>
              </span>
            </h1>

            <h1>
              <b>TECNOLÓGICO</b>
              <span> DE ESTUDIOS SUPERIORES</span> DE CUAUTITLÁN
              <span>
                <i>IZCALLI. </i>
              </span>
            </h1>

            <h1>
              <b>TECNOLÓGICO</b>
              <span> DE ESTUDIOS SUPERIORES</span> DE CUAUTITLÁN
              <span>
                <i>IZCALLI. </i>
              </span>
            </h1>

            <h1>
              <b>TECNOLÓGICO</b>
              <span> DE ESTUDIOS SUPERIORES</span> DE CUAUTITLÁN
              <span>
                <i>IZCALLI. </i>
              </span>
            </h1>

            <h1>
              <b>TECNOLÓGICO</b>
              <span> DE ESTUDIOS SUPERIORES</span> DE CUAUTITLÁN
              <span>
                <i>IZCALLI. </i>
              </span>
            </h1>

            <h1>
              <b>TECNOLÓGICO</b>
              <span> DE ESTUDIOS SUPERIORES</span> DE CUAUTITLÁN
              <span>
                <i>IZCALLI. </i>
              </span>
            </h1>

            <h1>
              <b>TECNOLÓGICO</b>
              <span> DE ESTUDIOS SUPERIORES</span> DE CUAUTITLÁN
              <span>
                <i>IZCALLI. </i>
              </span>
            </h1>
          </div>
        </section>
      </div>
      <div className="action-buttons">
        <Link to="/registrarse" className="links">
          Registrarse
        </Link>
        <a href="#landing-info" className="cta">
          <span>CONOCE MÁS</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
        <Link to="/iniciar-sesion" className="links">
          Ingresar
        </Link>
      </div>

      <div id="landing-info">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="info-card">
              <div className="title">¿Qué es RhinoLabs?</div>
              <p>
                Rhinolabs es una plataforma diseñada para gestionar de manera
                eficiente los laboratorios del Tecnológico. Proporciona
                herramientas avanzadas para la asignación de espacios, control
                de inventarios y préstamos de materiales, optimizando los
                recursos y asegurando que estudiantes y profesores tengan acceso
                a lo necesario para sus prácticas y experimentos.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info-card">
              <div className="title">Objetivo</div>
              <p>
                Nuestro objetivo es facilitar la administración de los
                laboratorios del Tecnológico, asegurando que cada laboratorio
                esté completamente equipado y disponible para estudiantes y
                docentes cuando lo necesiten. Rhinolabs ayuda a mejorar la
                organización y disponibilidad de recursos, creando un entorno de
                aprendizaje más dinámico y efectivo.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info-card">
              <div className="title">Misión</div>
              <p>
                La misión de Rhinolabs es apoyar al Tecnológico brindándole una
                solución de gestión de laboratorios que promueva el uso
                eficiente de sus instalaciones y materiales, fomentando una
                experiencia de aprendizaje más enriquecedora y práctica para los
                estudiantes.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="info-card">
              <div className="title">Funciones</div>
              <ul>
                <li>
                  Asignar laboratorios a clases, asegurando que los espacios se
                  utilicen de manera eficiente y que no haya conflictos en su
                  uso.
                </li>
                <li>
                  Gestionar el inventario de equipos y materiales, como
                  reactivos, cristalería y herramientas, garantizando que
                  siempre haya suficientes recursos disponibles para las
                  prácticas.
                </li>
                <li>
                  Controlar el préstamo de materiales a estudiantes y docentes,
                  permitiendo registrar el estado de los recursos al momento de
                  préstamo y devolución, asegurando que estén en buen estado
                  para su uso continuo.
                </li>
                <li>
                  Optimizar la logística del laboratorio, reduciendo el tiempo
                  de administración y mejorando la disponibilidad de los
                  recursos, lo que permite a los profesores y estudiantes
                  centrarse en el aprendizaje práctico.
                </li>
              </ul>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </main>
  );
};
