import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "components/Icon";

import css from "./Video.module.scss";

/**
 * Usuario: bb-frontend-7
 * Descripción: Crea un reproductor de video
 * param { url, width, addClass }
 * - url: ruta del video que será reproducido.
 * - width: ancho máximo del video.
 * - title: título del caption del video.
 * - content: descripción del caption del video.
 * - addClass: clase adicional que se le agregue al reproductor.
 **/
export const Video = ({ url, width = "1000", hasDescription, description, addClass, src, poster, ...props }) => {
   // Estado duracion del video
   const [getDurationVideo, setDurationVideo] = useState({
      totalSeconds: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      string: "00:00",
   });

   // Estado del play
   const [getCurrentTime, setCurrentTime] = useState({
      totalSeconds: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      string: "00:00",
   });

   // Estado del tiempo de ver el video
   const [getstateVideoPlay, setStateVideoPlay] = useState({
      state: false,
      label: "Reproducir video",
   });

   // Estado del muted
   const [getStateMuted, setStateMuted] = useState({
      state: true,
      label: "Volumen",
   });
   const [getValueVolumeeMuted, setValueVolumeMuted] = useState(100);

   // Estado de la pantalla completa
   const [getStateScreen, setStateScreen] = useState({
      state: false,
      label: "Ver en pantalla completa",
   });

   const [getValueVolume, setValueVolume] = useState(100);
   const refCont = useRef(null);
   const refVideo = useRef(null);
   const refProgress = useRef(null);
   const refVolume = useRef(null);
   const refPlayPulse = useRef(null);
   const refForwardPulse = useRef(null);
   const refRewindPulse = useRef(null);
   const [captions, setCaptions] = useState(false);

   /**
    * Cambia la clase del elemento para generar la animación de pulse
    * @param {element} element - elemento del DOM a animar
    */
   const pulseAnimation = (element) => {
      element.classList.add(`${css.active}`);
      setTimeout(() => {
         element.classList.remove(`${css.active}`);
      }, 650);
   };

   /**
    * Cambia el video entre reproduciendo y pausado
    */
   function handlePlay() {
      const $video = refVideo.current;
      // $video.
      if (getstateVideoPlay.state) {
         $video.pause();
         setStateVideoPlay({
            state: false,
            label: "Reproducir video",
         });
      } else {
         $video.play();
         setStateVideoPlay({
            state: true,
            label: "Pausar video",
         });
      }
      pulseAnimation(refPlayPulse.current);
   }

   /**
    * Cambia el video entre modo de pantalla completa o normal
    */
   function hanldeFullScrenn() {
      const isInFullScreen =
         (document.fullscreenElement && document.fullscreenElement !== null) ||
         (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
         (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
         (document.msFullscreenElement && document.msFullscreenElement !== null);

      // const video = refVideo.current
      const docElm = refCont.current;

      if (!isInFullScreen) {
         setStateScreen({
            state: true,
            label: "Salir de pantalla completa",
         });

         if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
         } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
         } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
         } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
         }
      } else {
         setStateScreen({
            state: false,
            label: "Ver en pantalla completa",
         });

         if (document.exitFullscreen) {
            document.exitFullscreen();
         } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
         } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
         } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
         }
      }
   }

   /**
    * Calcula la cantidad de horas, minutos y segundos
    * @param {number} time - Valor en segundos del que se necesita hacer el cálculo
    * @returns {object} - { hours: number, minutes: number, seconds: number }
    */
   function getTime(time) {
      const secondsNumber = parseInt(time, 10);

      // Calcula la cantidad de horas, minutos y segundos del video
      const hours = secondsNumber >= 3600 ? Math.floor(secondsNumber / 3600) : 0;
      const minutes = Math.floor((secondsNumber - hours * 3600) / 60);
      const seconds = secondsNumber - hours * 3600 - minutes * 60;

      // Valida si los valores calculados son válidos
      const validateHours = validateIsNan(validateDigits(hours));
      const validateMinutes = validateIsNan(validateDigits(minutes));
      const validateSeconds = validateIsNan(validateDigits(seconds));

      return {
         hours: validateHours,
         minutes: validateMinutes,
         seconds: validateSeconds,
      };
   }

   /**
    *
    * @param {element} element - Elemento del DOM a calcular
    */
   function initialValues(element) {
      const durationVideo = hourToString(element.duration);
      const travelVideo = hourToString(element.currentTime);
      setCurrentTime({
         totalSeconds: element.currentTime,
         hours: parseInt(getTime(element.currentTime).hours),
         minutes: parseInt(getTime(element.currentTime).minutes),
         seconds: parseInt(getTime(element.currentTime).seconds),
         string: travelVideo,
      });
      setDurationVideo({
         totalSeconds: Math.floor(element.duration),
         hours: parseInt(getTime(element.duration).hours),
         minutes: parseInt(getTime(element.duration).minutes),
         seconds: parseInt(getTime(element.duration).seconds),
         string: durationVideo,
      });
   }

   /**
    * Convierte las horas, minutos y segundos del video en un string en formato de hora
    * @param { number } timeSeconds - Segundos a calcular
    * @returns {string} - Tiempo en formato de hora
    */
   function hourToString(timeSeconds) {
      const secondsNumber = parseInt(timeSeconds, 10);

      if (secondsNumber <= 3600) {
         return `${getTime(timeSeconds).minutes}:${getTime(timeSeconds).seconds}`;
      } else {
         return `${getTime(timeSeconds).hours}:${getTime(timeSeconds).minutes}:${getTime(timeSeconds).seconds}`;
      }
   }

   /**
    * Validad la cantidad de dígitos y agrega un 0 si es necesario
    * @param {number} value - Cantidad a validad
    * @returns {string}
    */
   function validateDigits(value) {
      if (value < 10) {
         return (value = "0" + value);
      } else {
         return value;
      }
   }

   /**
    * Revisa si el número es válido, si no, retorna "00"
    * @param {number} elem - Valor a validad
    * @returns {string}
    */
   function validateIsNan(elem) {
      return isNaN(elem) ? "00" : elem;
   }

   /**
    * Controla la barra de progreso para que al hacer clic controle la posición del video
    * @param {event} e - Evento del video
    */
   function handleProcessControl(e) {
      const progress = refProgress.current;
      const video = refVideo.current;
      const positionClick = e.nativeEvent.offsetX; // se obtiene posicion del click
      const scrubTime = (positionClick / progress.offsetWidth) * video.duration; // operacion
      video.currentTime = scrubTime;
   }

   /**
    * Controla el volumen
    * @param {event} e - Evento del teclado
    */
   function handleVolume(e) {
      const video = refVideo.current;
      const value = e.target.value;
      const volume = value / 100;
      setValueVolume(value);
      setValueVolumeMuted(value);
      video.volume = volume;

      if (!getStateMuted.state) {
         setStateMuted({
            state: true,
            label: "Volumen",
         });
      }
   }

   /**
    * Cambia el volumen de 0 a la posición actual
    */
   const handleMuted = () => {
      if (getStateMuted.state) {
         setStateMuted({
            state: false,
            label: "Mutear video",
         });
         const video = refVideo.current;
         const value = 0;
         const volume = value;
         setValueVolume(value);
         video.volume = volume;
      } else {
         setStateMuted({
            state: true,
            label: "Volumen",
         });
         const video = refVideo.current;
         const value = getValueVolumeeMuted;
         const volume = value / 100;
         setValueVolume(value);
         video.volume = volume;
      }
   };

   /**
    * Permite pausar o reproducir el video presionando la tecla Space (solo en la barra de progreso)
    * @param {event} e - Evento del teclado
    */
   const handleProgressBar = function (e) {
      if ((e.keyCode || e.which) === 32) {
         handlePlay();
      }
   };

   /**
    * Agrega funcionalidad a las flechas izquierda y derecha para adelantar o retrasar 5 segundos el video
    * @param {event} e - Evento del teclado
    * @returns
    */
   const handleArrowKeys = function (e) {
      const currentTime = Math.floor(refProgress.current.getAttribute("aria-valuenow"));

      if (document.activeElement === refVolume.current) {
         return null;
      } else {
         if ((e.keyCode || e.which) === 37) {
            const actualTime = currentTime - 5;
            if (actualTime >= 0) {
               refVideo.current.currentTime = actualTime;
            } else {
               refVideo.current.currentTime = 0;
            }
            pulseAnimation(refRewindPulse.current);
         }

         if ((e.keyCode || e.which) === 39) {
            const actualTime = currentTime + 5;
            if (actualTime >= refVideo.current.duration) {
               refVideo.current.currentTime = refVideo.current.duration;
            } else {
               refVideo.current.currentTime = actualTime;
            }
            pulseAnimation(refForwardPulse.current);
         }
      }
   };

   /**
    * Convierte los valores numéricos en una frase para usar como el aria-valuetext
    * @returns
    */
   const getTextValueString = () => {
      return getDurationVideo >= 3600
         ? `${getCurrentTime.hours} horas, ${getCurrentTime.minutes} minutos y ${getCurrentTime.seconds} segundos de ${getDurationVideo.hours} horas, ${getDurationVideo.minutes} y ${getDurationVideo.seconds} segundos`
         : `${getCurrentTime.minutes} minutos y ${getCurrentTime.seconds} segundos de ${getDurationVideo.minutes} minutos y ${getDurationVideo.seconds} segundos`;
   };

   // Revisa en local storage los valores de volumen y estado de pressed de subtítulos y los aplica al componente
   useEffect(() => {
      const storage = JSON.parse(localStorage.getItem("ui-video")) || {};
      if (Object.prototype.hasOwnProperty.call(storage, "caption")) {
         setCaptions(JSON.parse(localStorage.getItem("ui-video")).caption);
      }
      if (Object.prototype.hasOwnProperty.call(storage, "volume")) {
         setValueVolume(JSON.parse(localStorage.getItem("ui-video")).volume);
      }
   }, []);

   // Almacena en local storage los valores de volumen y estado de pressed de subtítulos
   useEffect(() => {
      localStorage.setItem("ui-video", JSON.stringify({ caption: captions, volume: getValueVolume }));
   }, [captions, getValueVolume]);

   return (
      <figure className={`${css["c-vid-container"]} ${addClass ?? ""}`} onKeyDown={handleArrowKeys} {...props}>
         <div ref={refCont} className={`${css["c-vid"]} ${addClass ?? ""}`} style={{ maxWidth: `${width}px` }}>
            <div className={css["video-wrapper"]}>
               <video
                  ref={refVideo}
                  className={`${captions ? "" : css["no-captions"]}`}
                  onTimeUpdate={(event) => initialValues(event.target)}
                  onLoadedData={(event) => initialValues(event.target)}
                  onClick={handlePlay}
                  {...(poster && { poster })}
               >
                  <source src={url} />
                  {src && <track src={src} label="Subtítulos en español" kind="subtitles" srcLang="es" default />}
               </video>

               <div className={css["icon-container"]}>
                  <div ref={refRewindPulse} className={css["video-icon"]}>
                     <Icon name="fast_rewind" />
                  </div>

                  <div ref={refPlayPulse} className={css["video-icon"]}>
                     <Icon name={getstateVideoPlay.state ? "play" : "pause"} />
                  </div>

                  <div ref={refForwardPulse} className={css["video-icon"]}>
                     <Icon name="fast_forward" />
                  </div>
               </div>
            </div>

            <div className={css["progress-container"]}>
               <div
                  ref={refProgress}
                  role="slider"
                  tabIndex={0}
                  aria-label="Progreso del video"
                  aria-valuemin="0"
                  aria-valuenow={getCurrentTime.totalSeconds}
                  aria-valuemax={getDurationVideo.totalSeconds}
                  aria-valuetext={getTextValueString()}
                  className={css.progress}
                  onKeyDown={handleProgressBar}
                  onClick={handleProcessControl}
               >
                  <div
                     className={css["progress-bar"]}
                     style={{
                        transform: `scaleX(calc(${getCurrentTime.totalSeconds} / ${getDurationVideo.totalSeconds}))`,
                     }}
                  ></div>

                  <div
                     className={css["progress-sphere"]}
                     style={{
                        left: `min(calc((${getCurrentTime.totalSeconds} / ${getDurationVideo.totalSeconds}) * 100 * 1%), 99%)`,
                     }}
                  ></div>
               </div>
            </div>

            <div className={css["c-vid-controls"]}>
               <button aria-label={getstateVideoPlay.label} onClick={handlePlay} className={"tour"} data-description="Este botón reproduce el video">
                  <Icon name={getstateVideoPlay.state ? "pause" : "play"} />
               </button>

               <div className={css.flex}>
                  <button aria-label={getStateMuted.label} className={"tour"} data-description="Este botón controla el volumen" onClick={handleMuted}>
                     <Icon name={getStateMuted.state ? "volume_on" : "volume_off"} />
                  </button>
                  <label className={css["c-vid-controls-volume"]} htmlFor="volumeControl">
                     <span className="u-sr-only">Controlar volumen</span>
                     <input
                        className={css["c-vid-controls-volume-item"]}
                        ref={refVolume}
                        id="volumeControl"
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={getValueVolume}
                        onChange={handleVolume}
                        aria-valuetext={`${getValueVolume}%`}
                     />
                  </label>
               </div>

               <p className={css["c-vid-controls-text"]} aria-hidden="true">
                  <span>{getCurrentTime.string}</span>/<span>{getDurationVideo.string}</span>
               </p>

               <button
                  disabled={!src}
                  className={css.subtitles}
                  onClick={() => setCaptions(!captions)}
                  aria-label="Subtítulos"
                  {...(!!src && { "aria-pressed": captions })}
               >
                  <Icon name={!src ? "closed_caption_disabled" : "closed_caption"} />
               </button>

               <button aria-label={getStateScreen.label} onClick={hanldeFullScrenn}>
                  <Icon name={getStateScreen.state ? "fullscreen_exit" : "fullscreen"} />
               </button>
            </div>
         </div>
         {hasDescription && (
            <figcaption>
               <strong>{description.title}:</strong> {description.content}
            </figcaption>
         )}
      </figure>
   );
};

Video.propTypes = {
   url: PropTypes.string.isRequired,
   width: PropTypes.string,
   addClass: PropTypes.string,
   hasDescription: PropTypes.bool,
   description: PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
   }),
   src: PropTypes.string,
   poster: PropTypes.string,
};