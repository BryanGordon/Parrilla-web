import logo from '../assets/hamburger-logo.png'

export const Menu = () => {
  return (
    <section className='container-menu'>
      <div id='imagen'>
        <img src={logo} alt='logo-restaurante' />
      </div>
      <div id='titulos'>
        <h1>Comida a la parrilla</h1>
        <h3>Ofrecemos gran variedad de platos.</h3>
      </div>
    </section>
  )
}
