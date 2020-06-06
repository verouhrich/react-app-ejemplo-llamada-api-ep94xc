import React from 'react'
import styles from './styles.css'

/**
 * Este archivo se llama index.js como identificador del componente.
 * 
 * Para ser llamado puede hacerse un import del tipo:
 * ```
 * import Auto from './components/Autos'
 * ```
 * 
 * O en su defecto de esta manera:
 * ```
 * import Auto from './components/Autos/index'
 * ```
 * 
 * Este comportamiento es porque para ES6, los archivos llamados 
 * index.js dentro de una carpeta es el archivo principal del 
 * modulo. En nuestro ejemplo estamos modularizando nuestro 
 * componente dentro de la carpeta ./components/Autos
 * 
 * 
 */

export default ({ auto }) => {
  // De esta forma se puede imprimir el prop (auto) que llega al componente hijo
  console.log(auto)
  return (
    // Hago uso de estilos importados solo para este componente
    <li style={styles}>
      <span class="marca">{auto.marca}</span>
      <span class="modelo">{auto.modelo}</span>
    </li>
  )
}