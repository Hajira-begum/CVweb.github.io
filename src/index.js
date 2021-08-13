"use strict";

import Home         from './views/pages/Home.js'
import Quali         from './CVweb.github.io/src/views/pages/Quali.js'
import Details         from './views/pages/Details.js'
import showProject        from './views/pages/projectdetails.js'
import Navbar       from './views/components/navbar.js'
import Bottombar    from './views/components/footer.js' 
import Error404     from './views/pages/Error404.js'
import Utils        from './services/Utilis.js'

const routes = {
    '/'             : Home,
    '/quali'        :Quali,
    '/details'      : Details,
    '/project/:id'  :showProject
};
const router = async () => {

    // Lazy load view element:
    
    const header = null || document.getElementById('header_container');
    const content = null || document.getElementById('page_container');
    const footer = null || document.getElementById('footer_container');
    
    // Render the Header and footer of the page
    // header.innerHTML = await Navbar.render();
    // await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();

    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    if(page===Quali){
        header.innerHTML = await Navbar.qualirender();
        await Navbar.after_render();
        footer.classList.remove("projectsfooter");
        
    }
    else if(page===Details){
        header.innerHTML = await Navbar.detailsrender();
        await Navbar.after_render();
        footer.classList.add("projectsfooter");
       
    }
    else if(page===showProject){
        header.innerHTML = await Navbar.projectrender();
        await Navbar.after_render();
        footer.classList.add("projectsfooter");
        
    }
    else{ 
        header.innerHTML = await Navbar.render();
        await Navbar.after_render();
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
