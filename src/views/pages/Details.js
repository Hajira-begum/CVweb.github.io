let Details = {
    render : async () => {
        let view =  /*html*/`
        <div class="maincontainer">
        <div class="containerleft">
            <div class="resumeitem1"><h2>Strengths <i class="fas fa-dumbbell"></i></h2>
            <ul class="strenlist">
                <li>
                    <div class="strenicon"><i class="far fa-eye"></i></div>
                    <div class="strename"><h5 class="text-muted"> Keen Observer</h5></div>
                </li>
                <li>
                    <div class="strenicon"><i class="fab fa-leanpub"></i></div>
                    <div class="strename"><h5 class="text-muted"> Quick Learner</h5></div>
                </li>
                <li>
                    <div class="strenicon"><i class="fas fa-briefcase"></i></div>
                    <div class="strename"><h5 class="text-muted"> Hardworking</h5></div>
                </li>
                <li>
                    <div class="strenicon"><i class="fas fa-users"></i></div>
                    <div class="strename"><h5 class="text-muted">Team Worker</h5></div>
                </li>
                <li>
                    <div class="strenicon"><i class="fas fa-dice-d6"></i></div>
                    <div class="strename"><h5 class="text-muted">Adaptable</h5></div>
                </li>
                <li>
                    <div class="strenicon"><i class="fas fa-fist-raised"></i></div>
                    <div class="strename"><h5 class="text-muted">Self-Confident</h5></div>
                </li>
            </ul>
    </div>
        </div>
        <div class="containerright">
          <div class="resumeitem1">
            <h2>Details <i class="fas fa-info-circle"></i></h2>
            <ul class="detlist">
              <li>
              <strong style="color: darkgoldenrod;">Name:</strong><p class="text-muted" style="display: inline;padding-left:105px;">Hajira Begum</p>
            </li>
            <li>
              <strong style="color: darkgoldenrod;">DOB:</strong><p class="text-muted" style="display: inline;padding-left:117px;">16/may/1998</p>
            </li><li>
              <strong style="color: darkgoldenrod;">Gender:</strong><p class="text-muted" style="display: inline;padding-left:95px;">Female</p>
            </li><li>
              <strong style="color: darkgoldenrod;">Nationality:</strong><p class="text-muted" style="display: inline;padding-left:60px;">Indian</p>
            </li><li>
              <strong style="color: darkgoldenrod;">Mother's Name:</strong><p class="text-muted" style="display: inline;padding-left:23px;">Nazima Unnisa</p>
            </li><li>
              <strong style="color: darkgoldenrod;">Father's Name:</strong><p class="text-muted" style="display: inline;padding-left:28px;">Altaf Baig</p>
            </li><li>
              <strong style="color: darkgoldenrod;">Address:</strong><p style="display: inline;"><address  class="text-muted"  style="display: inline;padding-left:89px;">#19,3rd main,9th cross near Masjid-e-Mukarram BTM 1st stage<br><p class="text-center"> Bannerghatta road,Bangalore-560029</p></address></p>
            </li>
          </ul>
          <div class="conticon">
            <a href="mailto:hajira991658@gmail.com" title="click to send mail"><i class="fas fa-envelope"></i></a>
          </div>
             <div class="conticon">
              <a href="tel:9606575966" title="click to make a call"><i class="fas fa-phone-square"></i></a>
             </div>
            <div class="conticon">
              <a href="https://www.linkedin.com/in/hajira-begum-904144140" title="click to check profile."><i class="fab fa-linkedin"></i></a>
    
            </div>
          </p>
          
          </div>
        </div>
    </div>
    
        `
        return view
    },
    after_render: async () => {}
        
}

export default Details;