import React from 'react';
import './UserWindow.css';
import cn from 'classnames';

/**
 * Rectángulo
 * Si está hablando sale un borde verde
 * Puede tener como contenido principal: video, imagen o nada
 * Nombre de la persona (si tiene imagen o video se muestra en una esquina, si no, se muestra más grande en el centro)
 * Si está muteado muestra un iconillo
 * Menú (mutear, renombrar, chatear)
 */

/**
 * UserWindow
 * @param boolean talking: is the user talking or not
 * @param string name: the user's name
 */
export const UserWindow = ({ talking, id, name, img, video, onDelete }) => {

  const handleDelete = (event) => {
    onDelete(id);
  }

  return <div className={cn('UserWindow', talking && 'UserWindow--talking')}>
    <div className="UserWindow__children">
      {img && <img src={img} alt="" />}
      {video && <video src={video} autoPlay />}
    </div>
    <p className={cn('UserWindow__name', !img && !video && 'UserWindow__name--center')}>{name}</p>
    <button className="UserWindow__delete" onClick={handleDelete}>
      borrar
    </button>
  </div>;
}
