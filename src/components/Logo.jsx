import logo from '../assets/edufio.jpg'

function Logo() {
  return (
    <div className="logo-container">
      <img
        src={logo}
        alt="Edufio"
        className="logo"
      />
    </div>
  )
}

export default Logo