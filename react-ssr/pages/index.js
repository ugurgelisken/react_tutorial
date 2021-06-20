import styles from '../styles/Index.module.css'

export default function Index() {
  return (
    <>
    <div className={styles.Index} >
      <p>Merhaba Next.js!</p>
    </div>
    <style jsx>{`
        p {
          color: black;
        }
        div {
          background: white;
        }
        @media (max-width: 600px) {
          p{
            color: white;
          }
          div {
            background: black;
          }
        }
      `}</style>
    </>
  )
}