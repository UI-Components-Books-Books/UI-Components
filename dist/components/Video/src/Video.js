"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _VideoModule = _interopRequireDefault(require("./Video.module.scss"));
var _Icon = require("components/Icon");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["src", "width", "hasDescription", "description", "addClass", "poster"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Video = function Video(_ref) {
  var src = _ref.src,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '1000' : _ref$width,
    hasDescription = _ref.hasDescription,
    description = _ref.description,
    addClass = _ref.addClass,
    poster = _ref.poster,
    props = _objectWithoutProperties(_ref, _excluded);
  // Estado duracion del video
  var _useState = (0, _react.useState)({
      totalSeconds: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      string: '00:00'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    getDurationVideo = _useState2[0],
    setDurationVideo = _useState2[1];

  // Estado del play
  var _useState3 = (0, _react.useState)({
      totalSeconds: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      string: '00:00'
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    getCurrentTime = _useState4[0],
    setCurrentTime = _useState4[1];

  // Estado del tiempo de ver el video
  var _useState5 = (0, _react.useState)({
      state: false,
      label: 'Reproducir video'
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    getstateVideoPlay = _useState6[0],
    setStateVideoPlay = _useState6[1];

  // Estado del muted
  var _useState7 = (0, _react.useState)({
      state: true,
      label: 'Volumen'
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    getStateMuted = _useState8[0],
    setStateMuted = _useState8[1];
  var _useState9 = (0, _react.useState)(100),
    _useState10 = _slicedToArray(_useState9, 2),
    getValueVolumeeMuted = _useState10[0],
    setValueVolumeMuted = _useState10[1];

  // Estado de la pantalla completa
  var _useState11 = (0, _react.useState)({
      state: false,
      label: 'Ver en pantalla completa'
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    getStateScreen = _useState12[0],
    setStateScreen = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    captionsDisabled = _useState14[0],
    setCaptionsDisabled = _useState14[1];
  var _useState15 = (0, _react.useState)(100),
    _useState16 = _slicedToArray(_useState15, 2),
    getValueVolume = _useState16[0],
    setValueVolume = _useState16[1];
  var refCont = (0, _react.useRef)(null);
  var refVideo = (0, _react.useRef)(null);
  var refCaptions = (0, _react.useRef)(null);
  var refProgress = (0, _react.useRef)(null);
  var refVolume = (0, _react.useRef)(null);
  var refPlayPulse = (0, _react.useRef)(null);
  var refForwardPulse = (0, _react.useRef)(null);
  var refRewindPulse = (0, _react.useRef)(null);
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    captions = _useState18[0],
    setCaptions = _useState18[1];

  /**
    * Cambia la clase del elemento para generar la animación de pulse
    * @param {element} element - elemento del DOM a animar
    */
  var pulseAnimation = function pulseAnimation(element) {
    element.classList.add("".concat(_VideoModule.default.active));
    setTimeout(function () {
      element.classList.remove("".concat(_VideoModule.default.active));
    }, 650);
  };

  /**
    * Cambia el video entre reproduciendo y pausado
    */
  function handlePlay() {
    var video = refVideo.current;
    if (getstateVideoPlay.state) {
      video.pause();
      setStateVideoPlay({
        state: false,
        label: 'Reproducir video'
      });
    } else {
      video.play();
      setStateVideoPlay({
        state: true,
        label: 'Pausar video'
      });
    }
    pulseAnimation(refPlayPulse.current);
  }

  // function handleClickOnVideo() {
  //    if (!document.fullscreen) {
  //       handlePlay();
  //    } else {
  //       return null;
  //    }
  // }

  /**
    * Cambia el video entre modo de pantalla completa o normal
    */
  function hanldeFullScrenn() {
    var isInFullScreen = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null;

    // const video = refVideo.current
    var docElm = refCont.current;
    if (!isInFullScreen) {
      setStateScreen({
        state: true,
        label: 'Salir de pantalla completa'
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
        label: 'Ver en pantalla completa'
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
    var secondsNumber = parseInt(time, 10);

    // Calcula la cantidad de horas, minutos y segundos del video
    var hours = secondsNumber >= 3600 ? Math.floor(secondsNumber / 3600) : 0;
    var minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    var seconds = secondsNumber - hours * 3600 - minutes * 60;

    // Valida si los valores calculados son válidos
    var validateHours = validateIsNan(validateDigits(hours));
    var validateMinutes = validateIsNan(validateDigits(minutes));
    var validateSeconds = validateIsNan(validateDigits(seconds));
    return {
      hours: validateHours,
      minutes: validateMinutes,
      seconds: validateSeconds
    };
  }

  /**
    *
    * @param {element} element - Elemento del DOM a calcular
    */
  function initialValues(element) {
    var durationVideo = hourToString(element.duration);
    var travelVideo = hourToString(element.currentTime);
    setCurrentTime({
      totalSeconds: element.currentTime,
      hours: parseInt(getTime(element.currentTime).hours),
      minutes: parseInt(getTime(element.currentTime).minutes),
      seconds: parseInt(getTime(element.currentTime).seconds),
      string: travelVideo
    });
    setDurationVideo({
      totalSeconds: Math.floor(element.duration),
      hours: parseInt(getTime(element.duration).hours),
      minutes: parseInt(getTime(element.duration).minutes),
      seconds: parseInt(getTime(element.duration).seconds),
      string: durationVideo
    });
  }

  /**
    * Convierte las horas, minutos y segundos del video en un string en formato de hora
    * @param { number } timeSeconds - Segundos a calcular
    * @returns {string} - Tiempo en formato de hora
    */
  function hourToString(timeSeconds) {
    var secondsNumber = parseInt(timeSeconds, 10);
    if (secondsNumber <= 3600) {
      return "".concat(getTime(timeSeconds).minutes, ":").concat(getTime(timeSeconds).seconds);
    } else {
      return "".concat(getTime(timeSeconds).hours, ":").concat(getTime(timeSeconds).minutes, ":").concat(getTime(timeSeconds).seconds);
    }
  }

  /**
    * Validad la cantidad de dígitos y agrega un 0 si es necesario
    * @param {number} value - Cantidad a validad
    * @returns {string}
    */
  function validateDigits(value) {
    if (value < 10) {
      return value = '0' + value;
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
    return isNaN(elem) ? '00' : elem;
  }

  /**
    * Controla la barra de progreso para que al hacer clic controle la posición del video
    * @param {event} e - Evento del video
    */
  function handleProcessControl(e) {
    var progress = refProgress.current;
    var video = refVideo.current;
    var positionClick = e.nativeEvent.offsetX; // se obtiene posicion del click
    var scrubTime = positionClick / progress.offsetWidth * video.duration; // operacion
    video.currentTime = scrubTime;
  }

  /**
    * Controla el volumen
    * @param {event} e - Evento del teclado
    */
  function handleVolume(e) {
    var video = refVideo.current;
    var value = e.target.value;
    var volume = value / 100;
    setValueVolume(value);
    setValueVolumeMuted(value);
    video.volume = volume;
    if (!getStateMuted.state) {
      setStateMuted({
        state: true,
        label: 'Volumen'
      });
    }
  }

  /**
    * Cambia el volumen de 0 a la posición actual
    */
  var handleMuted = function handleMuted() {
    if (getStateMuted.state) {
      setStateMuted({
        state: false,
        label: 'Mutear video'
      });
      var video = refVideo.current;
      var value = 0;
      var volume = value;
      setValueVolume(value);
      video.volume = volume;
    } else {
      setStateMuted({
        state: true,
        label: 'Volumen'
      });
      var _video = refVideo.current;
      var _value = getValueVolumeeMuted;
      var _volume = _value / 100;
      setValueVolume(_value);
      _video.volume = _volume;
    }
  };

  /**
    * Permite pausar o reproducir el video presionando la tecla Space (solo en la barra de progreso)
    * @param {event} e - Evento del teclado
    */
  var handleProgressBar = function handleProgressBar(e) {
    if ((e.keyCode || e.which) === 32) {
      handlePlay();
    }
  };

  /**
    * Agrega funcionalidad a las flechas izquierda y derecha para adelantar o retrasar 5 segundos el video
    * @param {event} e - Evento del teclado
    * @returns
    */
  var handleArrowKeys = function handleArrowKeys(e) {
    var currentTime = Math.floor(refProgress.current.getAttribute('aria-valuenow'));
    if (document.activeElement === refVolume.current) {
      return null;
    } else {
      if ((e.keyCode || e.which) === 37) {
        var actualTime = currentTime - 5;
        if (actualTime >= 0) {
          refVideo.current.currentTime = actualTime;
        } else {
          refVideo.current.currentTime = 0;
        }
        pulseAnimation(refRewindPulse.current);
      }
      if ((e.keyCode || e.which) === 39) {
        var _actualTime = currentTime + 5;
        if (_actualTime >= refVideo.current.duration) {
          refVideo.current.currentTime = refVideo.current.duration;
        } else {
          refVideo.current.currentTime = _actualTime;
        }
        pulseAnimation(refForwardPulse.current);
      }
    }
  };

  /**
    * Convierte los valores numéricos en una frase para usar como el aria-valuetext
    * @returns
    */
  var getTextValueString = function getTextValueString() {
    return getDurationVideo >= 3600 ? "".concat(getCurrentTime.hours, " horas, ").concat(getCurrentTime.minutes, " minutos y ").concat(getCurrentTime.seconds, " segundos de ").concat(getDurationVideo.hours, " horas, ").concat(getDurationVideo.minutes, " y ").concat(getDurationVideo.seconds, " segundos") : "".concat(getCurrentTime.minutes, " minutos y ").concat(getCurrentTime.seconds, " segundos de ").concat(getDurationVideo.minutes, " minutos y ").concat(getDurationVideo.seconds, " segundos");
  };

  // Revisa en local storage los valores de volumen y estado de pressed de subtítulos y los aplica al componente
  (0, _react.useEffect)(function () {
    var storage = JSON.parse(localStorage.getItem('ui-video')) || {};
    if (Object.prototype.hasOwnProperty.call(storage, 'caption')) {
      setCaptions(JSON.parse(localStorage.getItem('ui-video')).caption);
    }
    if (Object.prototype.hasOwnProperty.call(storage, 'volume')) {
      setValueVolume(JSON.parse(localStorage.getItem('ui-video')).volume);
    }
  }, []);

  // Almacena en local storage los valores de volumen y estado de pressed de subtítulos
  (0, _react.useEffect)(function () {
    localStorage.setItem('ui-video', JSON.stringify({
      caption: captions,
      volume: getValueVolume
    }));
  }, [captions, getValueVolume]);
  (0, _react.useEffect)(function () {
    if (refCaptions.current) {
      refCaptions.current.addEventListener('error', function () {
        setCaptionsDisabled(true);
      });
    } else {
      setCaptionsDisabled(true);
    }
    if (src.caption) {
      setCaptionsDisabled(false);
    }
    return function () {
      if (refCaptions.current) {
        refCaptions.current.removeEventListener('error', function () {
          setCaptionsDisabled(true);
        });
      }
    };
  }, [src.caption]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("figure", _objectSpread(_objectSpread({
    className: "".concat(_VideoModule.default['c-vid'], " ").concat(addClass),
    style: {
      maxWidth: "".concat(width, "px")
    },
    onKeyDown: function onKeyDown(e) {
      return handleArrowKeys(e);
    }
  }, props), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(_VideoModule.default['c-vid__container'], " ").concat(addClass),
      ref: refCont,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _VideoModule.default['c-vid__wrapper'],
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("video", {
          ref: refVideo,
          onTimeUpdate: function onTimeUpdate(event) {
            return initialValues(event.target);
          },
          onLoadedData: function onLoadedData(event) {
            return initialValues(event.target);
          },
          onClick: handlePlay,
          className: "".concat(_VideoModule.default['c-vid__video'], " ").concat(captions ? '' : _VideoModule.default['no-captions']),
          poster: poster ? "assets/images/".concat(poster, ".png") : undefined,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("source", {
            src: src.video
          }), src.caption ? /*#__PURE__*/(0, _jsxRuntime.jsx)("track", {
            ref: refCaptions,
            src: src.caption,
            label: "Subt\xEDtulos en espa\xF1ol",
            kind: "subtitles",
            srcLang: "es",
            default: true
          }) : '']
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: _VideoModule.default['c-vid__icon-container'],
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            ref: refRewindPulse,
            className: _VideoModule.default['c-vid__icon'],
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
              name: "fast_rewind"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            ref: refPlayPulse,
            className: _VideoModule.default['c-vid__icon'],
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
              name: getstateVideoPlay.state ? 'play' : 'pause'
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            ref: refForwardPulse,
            className: _VideoModule.default['c-vid__icon'],
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
              name: "fast_forward"
            })
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: _VideoModule.default['progress-container'],
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          role: "slider",
          "aria-label": "Progreso del video",
          "aria-valuemin": "0",
          "aria-valuenow": getCurrentTime.totalSeconds,
          "aria-valuemax": getDurationVideo.totalSeconds,
          "aria-valuetext": getTextValueString(),
          tabIndex: "0",
          onKeyDown: handleProgressBar,
          className: _VideoModule.default['c-vid__progress-bg'],
          onClick: handleProcessControl,
          ref: refProgress,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: _VideoModule.default['c-vid__progress-bar'],
            style: {
              transform: "scaleX(calc(".concat(getCurrentTime.totalSeconds, " / ").concat(getDurationVideo.totalSeconds, "))")
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: _VideoModule.default['progress-sphere'],
            style: {
              left: "min(calc((".concat(getCurrentTime.totalSeconds, " / ").concat(getDurationVideo.totalSeconds, ") * 100 * 1%), 99%)")
            }
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: _VideoModule.default['c-vid__controls'],
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "".concat(_VideoModule.default['c-vid__button'], " tour"),
          "aria-label": getstateVideoPlay.label,
          onClick: handlePlay,
          "data-description": "Este bot\xF3n reproduce el video",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
            name: getstateVideoPlay.state ? 'pause' : 'play'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "".concat(_VideoModule.default['c-vid__button'], " tour"),
          "aria-label": getStateMuted.label,
          "data-description": "Este bot\xF3n controla el volumen",
          onClick: handleMuted,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
            name: getStateMuted.state ? 'volume_on' : 'volume_off'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
          className: _VideoModule.default['c-vid__volume'],
          htmlFor: "volumeControl",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "u-sr-only",
            children: "Controlar volumen"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            className: _VideoModule.default['c-vid__volume-item'],
            ref: refVolume,
            id: "volumeControl",
            type: "range",
            min: "0",
            max: "100",
            step: "5",
            value: getValueVolume,
            onChange: handleVolume,
            "aria-valuetext": "".concat(getValueVolume, "%")
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: _VideoModule.default['c-vid__time'],
          "aria-hidden": "true",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: getCurrentTime.string
          }), "/", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: getDurationVideo.string
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          disabled: captionsDisabled,
          "aria-pressed": captionsDisabled ? undefined : captions,
          onClick: function onClick() {
            return setCaptions(!captions);
          },
          "aria-label": "Subt\xEDtulos",
          className: "".concat(_VideoModule.default['c-vid__button'], " ").concat(_VideoModule.default['c-vid__subtitles']),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
            name: captionsDisabled ? 'closed_caption_disabled' : 'closed_caption'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: _VideoModule.default['c-vid__button'],
          "aria-label": getStateScreen.label,
          onClick: hanldeFullScrenn,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.Icon, {
            name: getStateScreen.state ? 'fullscreen_exit' : 'fullscreen'
          })
        })]
      })]
    }), hasDescription && /*#__PURE__*/(0, _jsxRuntime.jsxs)("figcaption", {
      className: _VideoModule.default['c-vid__caption'],
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("strong", {
        children: [description.title, ":"]
      }), " ", description.content]
    })]
  }));
};
exports.Video = Video;
Video.propTypes = {
  src: _propTypes.default.shape({
    video: _propTypes.default.string.isRequired,
    caption: _propTypes.default.string
  }),
  width: _propTypes.default.string,
  addClass: _propTypes.default.string,
  hasDescription: _propTypes.default.bool,
  description: _propTypes.default.shape({
    title: _propTypes.default.string,
    content: _propTypes.default.string
  }),
  poster: _propTypes.default.string
};
Video.defaultProps = {
  src: '',
  addClass: '',
  width: '1000',
  hasDescription: false,
  poster: ''
};