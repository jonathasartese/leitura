import React, { Component }  from 'react'
import '../css/layout/blog.css';
import '../css/layout/pure-min.css';
import '../css/layout/grids-responsive-min.css';

class MenuBar extends Component {


  render(){
    return(
      <div className="sidebar pure-u-1 pure-u-md-1-4">
      <div className="header">
          <h1 className="brand-title">Leitura</h1>
          <h2 className="brand-tagline">Udacity React+Redux project</h2>

          <nav className="nav">
              <ul className="nav-list">
                  <li className="nav-item">
                      <a className="pure-button"  >Category 1</a>
                  </li>
                  <li className="nav-item">
                      <a className="pure-button"  >Category 2</a>
                  </li>
                  <li className="nav-item">
                      <a className="pure-button"  >Category 3</a>
                  </li>
              </ul>
          </nav>
        </div>
      </div>

    )
  }
}

export default MenuBar