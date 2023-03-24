import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main className={styles.main}>
      Filtro Avançado
      <form action="#">
        <input
          width="50%"
          type="text"
          placeholder='Insira um nome:  '
        />

        <input
          type="date"
          placeholder='Data Inicial'
        />

        <input
          type="date"
          placeholder='Data Final'
        />

        <div>
          <ul>
            <li>
              <p>Green Bay Packers</p>
              <p>Green Bay</p>
            </li>
          </ul>
        </div>


      </form>
    </main>
  )
}
