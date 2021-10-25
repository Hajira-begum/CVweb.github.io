let Home = {
    render : async () => {
        let view =  /*html*/`
        <section id="background" class="d-flex justify-content-center align-items-center">
        <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div class="row justify-content-center align-items-center text-center" style="margin-left: 5px;">
              <div class="g-col-2 col-sm-6 colimg">
                <img  class="image" src="images/me2.jpg" alt="...." >
              </div>
              <div class="g-col-4 col-sm-6" style="background-color: #fff;height: 250px;">
                  <h2>Hello.</h2>
                  <p><strong style="text-decoration:underline;">Objective:</strong>To work in an environment that encourages me to succeed and grow professionally where i can utilize my skills
                    and knowledge approriately</p>
                   <a href="#skill" class="btn-get-started btn-danger" style="margin-bottom:19px;">Click <i class="fas fa-hand-point-down"></i></a>
              </div>
             </div>
             <div class="row justify-content-center align-items-center text-center" style="margin-left: 5px;">
               <div class="col-md-6 col-sm-6" style="background-color: rgb(207, 209, 226);height:40px;padding-top:7px;color:#fff;">
                   <h5>Hajira Begum</h5>
               </div>
               </div>
               </div>
    </section>
    <div class="maincontainer">
      <div class="containerleft">
       <div class="resumeitem">
        <h2>Education <i class="fas fa-user-graduate"></i></h2>
        <ul>
          <li>
            <h5>2016-2020</h5>
            <p class="text-muted"><b>T.John Institute Of Technology</b><br>
              Completed B.E specialised in Computer Science with an aggregate 65%.</p>
            </li>
            <li>
              <h5>2015-2016</h5>
              <p class="text-muted"><b>Jyoti Nivas Pre-University College</b><br>
                Completed 2nd PU specialised in Biology with an aggregate 74%.</p>
              </li>
              <li>
                <h5>2013-2014</h5>
                <p class="text-muted"><b>Lilly Rose High School</b><br>
                  Completed SSLC with an aggregate of 87%.</p>
                </li>
          </ul>
         
       </div>
      <div class="resumeitem1" id="skill">
        <h2>Skills <i class="fas fa-fill-drip"></i></h2>
       <ul class="skillist">
        <li style="padding-bottom:15px;">
          <div class="skillicon"><a href="#" style="padding-right:5px;"><i class="fab fa-html5"></i></a></div>
          <div class="skillname"><h5 class="text-muted">HTML</h5></div>

         </li>
         <li style="padding-bottom:15px;">
          <div class="skillicon"><a href="#" style="padding-right:5px;"><i class="fab fa-css3"></i></a></div>
          <div class="skillname"><h5 class="text-muted">CSS</h5></div>

         </li>
         <li style="padding-bottom:15px;">
          <div class="skillicon"><a href="#" style="padding-right:5px;"><i class="fab fa-js"></i></a></div>
          <div class="skillname"><h5 class="text-muted">Javascript</h5></div>
         </li>
         <li style="padding-bottom:15px;">
          <div class="skillicon"><a href="#" style="padding-right:5px;"><i class="fas fa-file-powerpoint"></i></a></div>
          <div class="skillname"><h5 class="text-muted">Visual Studio Code</h5></div>

         </li>
         <hr style="color:darkgoldenrod;">
         <li style="padding-bottom:15px;">
          <div class="skillicon"><a href="#" data-bs-toggle="modal"><i class="far fa-keyboard"></i></a></div>
            <div class="skillname"><h5 class="text-muted">C programming</h5></div>
         </li>
        </li>
         <li style="padding-bottom:15px;">
          <div class="skillicon"><a href="#" style="padding-right:5px;"><i class="fas fa-file-word" ></i></a></div>
          <div class="skillname"><h5 class="text-muted">Microsoft Word</h5></div>

         </li>
         <li style="padding-bottom:15px;">
          <div class="skillicon"><a href="#" style="padding-right:5px;"><i class="far fa-file-excel"></i></a></div>           
           <div class="skillname"><h5 class="text-muted">Microsoft Excel</h5></div>

         </li>
         <li style="padding-bottom:15px;">
          <div class="skillicon"><a href="#" style="padding-right:5px;"><i class="fas fa-file-powerpoint" ></i></a></div>
          <div class="skillname"><h5 class="text-muted">Microsoft Powerpoint</h5></div>

         </li>
        
        </ul>

      </div>
    </div>
    <div class="containerright">
      <div class="resumeitem">
        <h2>Projects <i class="fas fa-project-diagram"></i></h2>
         <main class="grid">
              <article>
                  <img src="images/busticket.png" alt="....." >
                  <div class="cardtext text-muted">
                      <h5>Bus Ticket Management System</h5>
                      <p><strong>Domain:</strong><small>PHP and HTML</small></p>
                      <button class="btn text-light" ><a href="/CVweb.github.io/#/project/1" style="text-decoration:none;color:white">More..</a></button>                  </div>
              </article>
              <article>
                  <img src="images/insurance.png" alt="....." >
                  <div class="cardtext text-muted">
                      <h5>Insurance Management System</h5>
                      <p><strong>Domain:</strong><small>HTML,CSS and js</small></p>
                      
                      
                      <button class="btn text-light" ><a href="/CVweb.github.io/#/project/2" style="text-decoration:none;color:white">More..</a></button>                  </div>
              </article>
              <article>
                  <img src="images/swmt.png" alt="....." >
                  <div class="cardtext text-muted">
                      <h5>Smart Waste Management System</h5>
                      <p><strong>Domain:</strong><small>IOT</small></p>
                      <button class="btn text-light" ><a href="/CVweb.github.io/#/project/3" style="text-decoration:none;color:white">More..</a></button>
                  </div>
              </article>
              
          </main>
       </div>
       <div class="resumeitem">
        <h2>Languages <i class="fas fa-language"></i></h2>
  <ul class="langlist">
    <li>
      <div class="langicon"><i class="fab fa-teamspeak"></i></div>
      <div class="langname"><h5 class="text-muted">English</h5></div>
    </li>
    <li>
      <div class="langicon"><i class="fab fa-teamspeak"></i></div>
      <div class="langname"><h5 class="text-muted">Hindi</h5></div>
    </li>
    <li>
      <div class="langicon"><i class="fab fa-teamspeak"></i></div>
      <div class="langname"><h5 class="text-muted">Kannada</h5></div>
    </li>
    <li>
      <div class="langicon"><i class="fab fa-teamspeak"></i></div>
      <div class="langname"><h5 class="text-muted">Urdu</h5></div>
    </li>
  </ul>
      </div>
      <div class="resumeitem1">
        <h2>Hobbies <i class="far fa-smile-beam"></i></h2>
  <ul class="hoblist">
    <li>
      <i class="fas fa-quran"></i>
      
      
    </li>
    <li>
      <i class="fas fa-music"></i>
      
    </li>
    <li>
      <i class="fas fa-laptop-code"></i>
      
    <li>
      <i class="fas fa-utensils"></i>
      
    </li>
  </ul>
      </div>
      </div>
    

  </div>
`
        return view
    }
    , after_render: async () => {
    }

}

export default Home;
