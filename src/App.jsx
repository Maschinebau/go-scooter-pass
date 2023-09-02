import styles from './App.module.scss'
import { Join } from 'components/join/join'
import { Profit } from 'components/profit/profit'
import { Exclusive } from 'components/exclusive/exclusive'
import { Cash } from 'components/cash/cash'
import { Ticket } from './components/Ticket/Ticket'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <Join />
        <Profit />
        <Exclusive />
        <Cash />
        <Ticket/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
