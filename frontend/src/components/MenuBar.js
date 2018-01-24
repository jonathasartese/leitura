import React, { Component }  from 'react'
import '../css/layout/blog.css';
import '../css/layout/pure-min.css';
import '../css/layout/grids-responsive-min.css';

class MenuBar extends Component {


  render(){
    return(
      <div class="sidebar pure-u-1 pure-u-md-1-4">
      <div class="header">
          <h1 class="brand-title">Leitura</h1>
          <h2 class="brand-tagline">Udacity React+Redux project</h2>

          <nav class="nav">
              <ul class="nav-list">
                  <li class="nav-item">
                      <a class="pure-button" href="#">Category 1</a>
                  </li>
                  <li class="nav-item">
                      <a class="pure-button" href="#">Category 2</a>
                  </li>
                  <li class="nav-item">
                      <a class="pure-button" href="#">Category 3</a>
                  </li>
              </ul>
          </nav>
        </div>
      </div>

    )
  }
}

export default MenuBar