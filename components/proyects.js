import styles from '../styles/Proyects.module.css'
import Proyect from './Project'

import React from 'react'

function Proyects() {
  return (
    <section className={styles.container}>
      <Proyect
        icon='🔍'
        title='Analytics'
        description='Analitycs es una web app para buscar y visualizar de una manera sencilla, contratos públicos de dependencias del gobierno mexicano. De gran ayuda para periodistas e investigadores que realizan seguimiento del gasto público por parte del estado.'
        stack={['React.js', 'Styled Components', 'Router', 'Recharts', 'Figma', 'EsLint']}
        anchor="https://neo-analytics-frontend.herokuapp.com/"
      />
      <Proyect
        icon='💎'
        title='Minimal Cripto'
        description='Minimal Cripto, la web minimalista para visualizar tus criptomonedas favoritas. Información actualizada al momento gracias a la API de Coin Gecko.'
        stack={['React.js', 'CoinGecko API', 'Styled Components', 'Webpack', 'Babel']}
        anchor="https://minimalcripto.netlify.app"
      />
      <Proyect
        icon='📙'
        title='Task App'
        description='Task App es una aplicación para escribir tareas personales. Las tareas se quedarán guardadas en la memoria de tu navegador para cuando las necesites. Haz check en las tareas completadas.'
        stack={['React.js', 'CSS', 'Webpack']}
        anchor="https://task-app1.netlify.app"
      />
      <Proyect
        icon='🦠'
        title='Covid Mx'
        description='Covid Mx muestra el estado actual del Covid 19 en México, estadísticas por edad, género y estados de la república.'
        stack={['React.js', 'Sass', 'Recharts', 'Webpack', 'Babel']}
        anchor="http://covitmx.info/"
      />
    </section>
  )
}

export default Proyects
