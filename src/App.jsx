import { Menu } from './components/Menu'
import { Platos } from './components/Platos'
import { Contacto } from './components/Contacto'

function App () {
  return (
    <section className='section-app'>
      <Menu />
      <Platos />
      <Contacto />
    </section>
  )
}

export default App
