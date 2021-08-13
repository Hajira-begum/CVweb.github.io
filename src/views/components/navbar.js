let Navbar = {
  qualirender : async () =>{
    let nav =  /*html*/`
    <nav class="navbar navbar-expand-lg  navbar-expand-md navbar-dark" >
    <div class="container-fluid" style="padding-left:50px;">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navbar-dark"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-center" href="/#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center active" href="/#/quali">Qualification</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center " aria-current="page" href="/#/details">Details</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    `
    return nav;
  },
  detailsrender : async () =>{
    let nav =  /*html*/`
    <nav class="navbar navbar-expand-lg  navbar-expand-md navbar-dark" >
    <div class="container-fluid" style="padding-left:50px;">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navbar-dark"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-center" href="/#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" href="/#/quali">Qualification</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center active" aria-current="page" href="/#/details">Details</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    `
    return nav;
  },
  projectrender : async () =>{
    let nav =  /*html*/`
    <nav class="navbar navbar-expand-lg  navbar-expand-md navbar-dark" >
    <div class="container-fluid" style="padding-left:50px;">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navbar-dark"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-center" aria-current="page" href="/#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" href="/#/quali">Qualification</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center" href="/#/details">Details</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    `
    return nav;
  },
    render: async () => {
        let view =  /*html*/`
         <nav class="navbar navbar-expand-lg  navbar-expand-md navbar-dark" >
        <div class="container-fluid" style="padding-left:50px;">
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon navbar-dark"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-center active" aria-current="page" href="/#/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center" href="/CVweb.github.io/#/quali">Qualification</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-center" href="/#/details">Details</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      `
      return view
    },
    after_render: async () => { }

}

export default Navbar;
