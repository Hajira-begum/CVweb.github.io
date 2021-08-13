import Utils        from './../../services/Utilis.js'
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
    let request = Utils.parseRequestURL()
    
    
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

export default showProject;