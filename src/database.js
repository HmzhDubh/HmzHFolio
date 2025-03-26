import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        projects: Model,
        photos: Model
    },

    seeds(server) {
        server.create("project", {
            id: 1,
            name: "H3M Restaurant",
            description: "web application for a restaurant, menu and ordering",
            status: "complete",
            image: "https://hmzhfolio.up.railway.app/media/images/m3hRest.png",
            type: "web application",
            link: "http://hmzhdubh.me/CPIT-405/final-project/project-index.html",

        })
        server.create("project", {
            id: 2,
            name: "Portfolio",
            description: "a dark theme portfolio with main sections and images, plus downloading cv button",
            status: "complete",
            image: "https://hmzhfolio.up.railway.app/media/images/port.png",
            type: "web application",
            link: "https://hmzhdubh.w3spaces.com",

        })
        server.create("project", {
            id: 3,
            name: "Planteer",
            description: "web application aka 'Database for plants lovers' with filtering ",
            status: "complete",
            image: "https://hmzhfolio.up.railway.app/media/images/pla.png",
            type: "web application",
            link: "https://github.com/HmzhDubh/LAB-ORM-PLANTEER",

        })
        server.create("project", {
            id: 4,
            name: "H3M Restaurant",
            description: "web application for a restaurant, menu and ordering",
            status: "complete",
            image: "https://hmzhfolio.up.railway.app/media/images/m3hRest.png",
            type: "web application",
            link: "http://hmzhdubh.me/CPIT-405/final-project/project-index.html",

        })
        server.create("project", {
            id: 5,
            name: "Portfolio",
            description: "a dark theme portfolio with main sections and images, plus downloading cv button",
            status: "complete",
            image: "https://hmzhfolio.up.railway.app/media/images/port.png",
            type: "web application",
            link: "https://hmzhdubh.w3spaces.com",

        })
        server.create("photo", {
            id: 1,
            title:"",
            about:"",
            url:"https://hmzhfolio.up.railway.app/media/images/Cloud.jpg",
            location: ""
        })
        server.create("photo", {
            id: 2,
            title: "",
            about: "",
            url: "https://hmzhfolio.up.railway.app/media/images/stad_N5hkxgO.jpg",
            location: ""
        })
        server.create("photo", {
            id: 3,
            title: "",
            about: "",
            url: "https://hmzhfolio.up.railway.app/media/images/IMG_2035.jpg",
            location: ""
        })
        server.create("photo", {
            id: 4,
            title:"",
            about:"",
            url:"https://hmzhfolio.up.railway.app/media/images/Cloud.jpg",
            location: ""
        })
        server.create("photo", {
            id: 5,
            title: "",
            about: "",
            url: "https://hmzhfolio.up.railway.app/media/images/stad_N5hkxgO.jpg",
            location: ""
        })
        server.create("photo", {
            id: 6,
            title: "",
            about: "",
            url: "https://hmzhfolio.up.railway.app/media/images/IMG_2035.jpg",
            location: ""
        })
    },

    routes() {
        this.namespace = "database"
        this.logging = false


        this.get("/projects", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.projects.all()
        })

        this.get("/projects/:id", (schema, request) => {
            const id = request.params.id
            return schema.projects.find(id)
        })

        this.get("/photos", (schema, request) => {
            // Hard-code the hostId for now
            return schema.photos.all()
        })

        this.get("/photos/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.photos.find(id)
        })

    }
})