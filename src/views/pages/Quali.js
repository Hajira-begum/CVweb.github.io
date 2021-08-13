let Quali = {

    render : async () => {
        let view =  /*html*/`
        <div class="wrapper">
        <div class="candi">
            <div class="resumeitem">
                <h2>Certification <i class="fas fa-certificate"></i></h2>
                <ul class="certi" style="text-align: center;">
                    <li>
                        <h4 style="color: darkgoldenrod;">Certificate</h4>
                      <figure >
                      
                          <img src="images/certificate.png" alt="certificate" style="width:70%;box-shadow: 2px 2px 5px darkgoldenrod;">
                          <figcaption class="text-muted">Fig.1 -Microsoft Certified</figcaption>
                        </figure>
                    </li>
                    <br>
                    <li>
                      <h4 style="color: darkgoldenrod;">Badge</h4>
                    <figure >
                    
                        <img src="images/badge1.png" alt="Badge" style="width:70%;box-shadow: 2px 2px 5px darkgoldenrod;height:550px;">
                        <figcaption class="text-muted">Fig.2 -Badge from Microsoft</figcaption>
                      </figure>
                  </li>
                </ul>
                

            </div>
            <div class="resumeitem1">
                <h2>Internship <i class="fas fa-chalkboard-teacher"></i></h2>
                <ul style="padding-top:25px;padding-left:25px;padding-bottom:25px;">
                    <li>
                  <p class="text-muted"><b style="color: darkgoldenrod;"><q>Techciti Technology Private Limited</q></b><br>
                      One month summer intership<br><strong style="color: darkgoldenrod;">Domain:</strong>PHP</p>

                </li></ul>
                
               
                
            </div>

        </div>
    </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Quali;