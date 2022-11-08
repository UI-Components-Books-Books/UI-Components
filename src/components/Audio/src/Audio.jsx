import { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/Button'
import css from './Audio.module.scss'

export const Audio = ({ src, format, a11y, size, type, addClass }) => {
  /**
    * Es utilizado para conocer el estado del audio.
    */
  const [play, setPlay] = useState(false)

  /**
    * Se obtiene la referencia del HTMLAudioElement.
    */
  const refAudio = useRef()

  /**
    * Se crea un objeto que no se puede cambiar para
    * almacenar los tipos o formas que tiene el componente.
    */
  const TYPES = Object.freeze({
    BUTTON: 'Button',
    BAR: 'Bar'
  })

  /**
    * Función utilizada para alternar entre
    * activar o pausar el audio, dependiendo
    * del estado del mismo.
    *
    */
  const onToggle = (_) => {
    if (refAudio.current.paused) {
      refAudio.current.play()
    } else {
      refAudio.current.pause()
    }
    setPlay(!play)
  }

  return type === TYPES.BAR
    ? (
      <audio preload='metadata' controls className={`${css['c-audio']} ${size && css[`c-audio--${size}`]}`} data-a11y={a11y}>
        <source src={src} type={format} />
      </audio>
      )
    : (
      <>
        <audio ref={refAudio} preload='metadata' src={src} type={format} onEnded={() => setPlay(!play)} className={css['c-audio--hidden']} />
        <Button
          hasAriaLabel
          label={play ? 'Pausar' : 'Reproduccir'}
          onClick={onToggle}
          addClass={`${css['c-button']} ${play ? css['is-button-playing'] : css['is-button-paused']} ${addClass ?? ''}`}
        />
      </>
      )
}

Audio.defaultProps = {
  a11y: false,
  type: 'Bar'
}

Audio.propTypes = {
  src: PropTypes.string,
  a11y: PropTypes.bool,
  format: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small']),
  type: PropTypes.oneOf(['Bar', 'Button']),
  addClass: PropTypes.string
}
