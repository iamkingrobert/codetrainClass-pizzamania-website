import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light nav-bgColor">
          <div className="container-fluid">
           <a className="navbar-brand text" href="/">
            <img src="images/Pizza Hut.png" alt="" width="180px"/>
           </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 nav-position mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">About Pizza</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">Pizza Types</a>
              </li>
            </ul>
           </div>
          </div>
        </nav>
    </div>
  )
}
