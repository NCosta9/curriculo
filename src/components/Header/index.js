

import './header.css'

function Header() {
  return (
    <nav className="navbar navbar-custom">
      <div className="container-fluid">
        <span className="navbar-text">
        <img className='logo' src="https://dlzumwzvsvpdqblhfoof.supabase.co/storage/v1/object/public/imagens/logo02" />\
        <text href='/'className='text-light fw-bold mx-1 text-geral'>Natanael A Costa</text>
        </span>
        
      </div>
    </nav>
  );
}

export default Header;