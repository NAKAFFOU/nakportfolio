class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <h1><a class="navbar-brand" href="pages/index.html">Nelson AKAFFOU</a></h1>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-2">
              <a class="nav-link" href="/">Home</a>
             </li>
                      
            
            <li class="nav-item mr-2">
              <a class="nav-link" href="pages/modules.html">MSC Enterprise IT Management</a>
            </li>
            
            <li class="nav-item mr-2">
              <a class="nav-link" href="pages/experience.html">Experience</a>
            </li>
          

          </ul>
        </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);