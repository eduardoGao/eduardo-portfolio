import styles from '../styles/Proyects.module.css'

function Project({ icon, title, description, stack, anchor }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <div className={styles.stack}>
        {
          stack.map(item => <span key={item}>{item}</span>)
        }
      </div>
      <a href={anchor} target="_blank" rel="noopener noreferrer" className={styles.button}>Ir al proyecto</a>
    </div>
  )
}

export default Project
