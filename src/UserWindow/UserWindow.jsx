import React from 'react';
import './UserWindow.css';
/**
 * Rectángulo
 * Si está hablando sale un borde verde
 * Puede tener como contenido principal: video, imagen o nada
 * Nombre de la persona (si tiene imagen o video se muestra en una esquina, si no, se muestra más grande en el centro)
 * Si está muteado muestra un iconillo
 * Menú (mutear, renombrar, chatear)
 */

export const UserWindow = (props) => {

  console.log(props)

  var className = 'UserWindow';

  if(props.talking) {
    className += ' UserWindow--talking';
  }

  return <div className={className}>
    <p className="UserWindow__name">{props.name}</p>
  </div>;
}
