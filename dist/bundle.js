/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let Home = {
    render : async () => {
        let view =  /*html*/`
        <section id="background" class="d-flex justify-content-center align-items-center">
        <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div class="row justify-content-center align-items-center text-center" style="margin-left: 5px;">
              <div class="col-md-2 col-sm-6 colimg">
                <img  class="image" src="images/me2.jpg" alt="...." >
              </div>
              <div class="col-md-4 col-sm-6" style="background-color: #fff;height: 250px;">
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
                      <button class="btn text-light" ><a href="/#/project/1" style="text-decoration:none;color:white">More..</a></button>                  </div>
              </article>
              <article>
                  <img src="images/insurance.png" alt="....." >
                  <div class="cardtext text-muted">
                      <h5>Insurance Management System</h5>
                      <p><strong>Domain:</strong><small>HTML,CSS and js</small></p>
                      
                      
                      <button class="btn text-light" ><a href="/#/project/2" style="text-decoration:none;color:white">More..</a></button>                  </div>
              </article>
              <article>
                  <img src="images/swmt.png" alt="....." >
                  <div class="cardtext text-muted">
                      <h5>Smart Waste Management System</h5>
                      <p><strong>Domain:</strong><small>IOT</small></p>
                      <button class="btn text-light" ><a href="/#/project/3" style="text-decoration:none;color:white">More..</a></button>
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quali);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_Utilis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

let project = [
    {
        "id":"1",
        "name":"Bus Ticket Management System",
        "image":"images/busticket.png",
        "description":"Bus Ticket Management System deals with the management of the customer data which is used to store and retrieve information.",
        "teamsize":"Coding and debugging.",
        "role":"Two"
    },
    {
        "id":"2",
        "name":"Insurance Management System",
        "image":"images/insurance.png",
        "description":"Insurance Management System deals with the registration of agent and client and also maintain agent and client data.Resulting in safe ad easy insurance process.",
        "teamsize":"Coding and debugging.",
        "role":"Four"
    },
    {
        "id":"3",
        "name":"Smart Waste Management System",
        "image":"images/swmt.png",
        "description":"Smart Waste Management System deals with segregation of waste into 3 categories and also signals when the dustin is full.",
        "teamsize":"Testing.",
        "role":"Four"
    }
]
let showProject ={
render : async () => {
    let request = _services_Utilis_js__WEBPACK_IMPORTED_MODULE_0__.default.parseRequestURL()
    
    
    return /*html*/`<div class="projectsmain" style="background-image: url('images/project.png');">
    <div class="projects">
    <div class="projectsdetails">
    <h2> Project ${project[request.id-1].id}:${project[request.id-1].name} </h2>
    <img src="${project[request.id-1].image}" width="250" height="200" style ="padding-left:30px;">
    
    <p class ="text-muted" style ="padding-left:15px"><b>Project Description:</b>${project[request.id-1].description}</p>
    <p class ="text-muted" style ="padding-left:15px"><b>Team size:</b>${project[request.id-1].teamsize}</p>
    <p class ="text-muted" style ="padding-left:15px"><b>Role:</b>${project[request.id-1].role}</p>
    
    </div>



    </div>
    </div> 
    `
},
after_render: async () => {
}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showProject);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Utils = { 
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL : () => {

        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null,
            id          : null,
            verb        : null
        }
        request.resource    = r[1]
        request.id          = r[2]
        request.verb        = r[3]

        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
      return view
    },
    after_render: async () => { }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <div class="footer">
    <h5>Developed by Hajira Begum.</h5>
  </div>
  `
        return view
    },
   

    after_render: async () => { }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bottombar);

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let Error404 = {

    render : async () => {
        let view =  /*html*/`
            <section class="section">
                <h1> 404 Error </h1>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_pages_Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _views_pages_Quali_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _views_pages_Details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _views_pages_projectdetails_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _views_components_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _views_pages_Error404_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _services_Utilis_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);







 



const routes = {
    '/'             : _views_pages_Home_js__WEBPACK_IMPORTED_MODULE_0__.default,
    '/quali'        :_views_pages_Quali_js__WEBPACK_IMPORTED_MODULE_1__.default,
    '/details'      : _views_pages_Details_js__WEBPACK_IMPORTED_MODULE_2__.default,
    '/project/:id'  :_views_pages_projectdetails_js__WEBPACK_IMPORTED_MODULE_3__.default
};
const router = async () => {

    // Lazy load view element:
    
    const header =  false || document.getElementById('header_container');
    const content =  false || document.getElementById('page_container');
    const footer =  false || document.getElementById('footer_container');
    
    // Render the Header and footer of the page
    // header.innerHTML = await Navbar.render();
    // await Navbar.after_render();
    footer.innerHTML = await _views_components_footer_js__WEBPACK_IMPORTED_MODULE_5__.default.render();
    await _views_components_footer_js__WEBPACK_IMPORTED_MODULE_5__.default.after_render();

    let request = _services_Utilis_js__WEBPACK_IMPORTED_MODULE_7__.default.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : _views_pages_Error404_js__WEBPACK_IMPORTED_MODULE_6__.default
    if(page===_views_pages_Quali_js__WEBPACK_IMPORTED_MODULE_1__.default){
        header.innerHTML = await _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__.default.qualirender();
        await _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__.default.after_render();
        footer.classList.remove("projectsfooter");
        
    }
    else if(page===_views_pages_Details_js__WEBPACK_IMPORTED_MODULE_2__.default){
        header.innerHTML = await _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__.default.detailsrender();
        await _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__.default.after_render();
        footer.classList.add("projectsfooter");
       
    }
    else if(page===_views_pages_projectdetails_js__WEBPACK_IMPORTED_MODULE_3__.default){
        header.innerHTML = await _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__.default.projectrender();
        await _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__.default.after_render();
        footer.classList.add("projectsfooter");
        
    }
    else{ 
        header.innerHTML = await _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__.default.render();
        await _views_components_navbar_js__WEBPACK_IMPORTED_MODULE_4__.default.after_render();
    //     footer.innerHTML = await Bottombar.render();
    //   await Bottombar.after_render();

        footer.classList.remove("projectsfooter");
        
    }
    content.innerHTML = await page.render();
    await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
})();

/******/ })()
;