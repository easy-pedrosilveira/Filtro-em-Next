import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { UserObject, Users } from './data/index'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [search, setSearch] = useState("")

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
            {Users.map((dados) =>(
            <li key={dados.email}>
              <p>{dados.id}</p>
              <p>{dados.first_name}</p>
              <p>{dados.last_name}</p>
              <p>{dados.email}</p>
              <p>{dados.gender}</p>
            </li>
            ))}
          </ul>
        </div>
      </form>
    </main>
  )
}
