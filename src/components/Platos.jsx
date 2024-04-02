import Hamburguer from '../assets/hamburguesaCarbon.jpg'
import Parrilla from '../assets/parrillada.jpg'

export const Platos = () => {
  return (
    <section className='container-platos'>
      <div className='platos-dere'>
        <div id='info-plato'>
          <h2>Hamburguesas</h2>
          <p>Hamburguesas de pollo y carne al carbón.</p>
        </div>
        <img src={Hamburguer} alt='hamburguesa' />
      </div>
      <div className='platos-iz'>
        <img src={Parrilla} alt='parrillada' />
        <div id='info-plato'>
          <h2>Parrillas</h2>
          <p>Parrilladas de todo tipo.</p>
        </div>
      </div>
    </section>
  )
}
