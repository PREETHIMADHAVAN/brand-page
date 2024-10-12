import './Navigation.css';

const Navigation = () =>{
    return (
        <nav>
        <div className='logo'>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contacts</li>
        </ul>
        <button>Login</button>
        </nav>
    )
}

export default Navigation;