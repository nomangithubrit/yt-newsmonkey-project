import React, { Component } from 'react'
export class NavBar extends Component {
  render() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NewsDolPhins</a>
          <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
            <span className="navbar-hrefggler-icon"></span>
          </buthrefn>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
               <li><a className="nav-link" aria-current="page" href="/business">Business</a></li>
               <li><a className="nav-link" aria-current="page" href="/entertainment">Entertainment</a></li>
               <li><a className="nav-link" aria-current="page" href="/general">General</a></li>
               <li><a className="nav-link" aria-current="page" href="/health">Health</a></li>
               <li><a className="nav-link" aria-current="page" href="/science">Science</a></li>
               <li><a className="nav-link" aria-current="page" href="/sports">Sports</a></li>
               <li><a className="nav-link" aria-current="page" href="/technology">Technology</a></li>
           </ul>
          </div>
        </div>
    
      </nav>
      
    )
  }
}

export default NavBar
