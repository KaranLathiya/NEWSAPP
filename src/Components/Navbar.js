import React from 'react'
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types'
function Navbar(props) {
  return (
    
         <nav className={`navbar  navbar-expand-lg  navbar-dark bg-dark`}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link linkactive' : 'nav-link active')} aria-current="page" to="/">Home</NavLink>
        </li><li className="">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link linkactive' : 'nav-link active')} aria-current="page" to="/business">Business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link linkactive' : 'nav-link active')} aria-current="page" to="/entertainment">Entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link linkactive' : 'nav-link active')} aria-current="page" to="/health">Health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link linkactive' : 'nav-link active')} aria-current="page" to="/science">Science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link linkactive' : 'nav-link active')} aria-current="page" to="/sports">Sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => (isActive ? ' nav-link linkactive' : 'nav-link active')} aria-current="page" to="/technology">Technology</NavLink>
        </li>

        <li className="nav-item dropdown cou">
        
  <select className="form-select bg-dark selectbox"  aria-label="Default select example">
      <option  className='optioncountry' defaultValue={"selected"} disabled>Country</option>
      <option className='optioncountry' value="in">India</option>
      <option  className='optioncountry'value="au">Australia</option>
      <option className='optioncountry' value="ca">Canada</option>
      <option className='optioncountry' value="eg">England</option>
      <option className='optioncountry' value="fr">France</option>
    </select>
        </li>
      </ul>
      {/* <div className="form-check form-switch">
  <input className="form-check-input my-3 mx-2" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label my-2 mx-2" htmlFor="flexSwitchCheckDefault">{props.mode==="light"?"Enable DarkMode":"Enable LightMode"}</label>
</div> */}
    </div>
  </div>
</nav>
    
  )
}

Navbar.propTypes = {

}

export default Navbar

