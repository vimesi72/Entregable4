import React from 'react'

const Message = ({info, confirm}) => {
  return (
    <div className='content-message'>
        <div className='message-content'>
        <h2 style={{ color: info.type === 'c' ? 'green' : info.type === 'u' ? 'orange' : '#db3333' }} >{ info.type === 'c' ? 'Nuevo Usuario' : info.type === 'u' ? 'Usuario Actualizado' : info.type === 'dq' ? 'Eliminar' : 'Usuario Eliminado' }</h2>
        <p>{ info.type === 'c' ? `Usuario ${info.data} Agregado!` : info.type === 'u' ? `Usuario ${info.data} Actualizado!` : info.type === 'dq' ?  `¿Estás seguro de eliminar a  ${info.data}? ` :  `Usuario ${info.data} Eliminado!` }</p>
        </div>
       {info.type === 'dq' &&  <div className='message-footer'><button className='btn' onClick={confirm}>Confirmar</button></div>}
       
    </div>
  )
}

export default Message