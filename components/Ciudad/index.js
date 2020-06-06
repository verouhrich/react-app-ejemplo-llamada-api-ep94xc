import React from 'react'
import styles from './styles.css'

export default ({ ciudad }) => {
  // De esta forma se puede imprimir el prop (auto) que llega al componente hijo
  console.log(ciudad)
  return (
    // Hago uso de estilos importados solo para este componente
    <li style={styles}>
      <span class="Ciudad">{ciudad}</span>
    </li>
  )
}