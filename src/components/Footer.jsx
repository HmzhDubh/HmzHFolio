import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div>
            <footer className="bg-blue-100">


                    <div className="container p-24 ps-30 pe-30">
                        <div className="flex justify-between">

                            <div className="col">
                                <h5 className="text-uppercase mb-5">HmzH Portfolio</h5>
                                <div className="col pt-5 text-decoration-none ">
                                    <a className="" href="https://github.com/HmzhDubh"><i className="bi bi-github pe-2" style={{fontSize:'30px'}}></i></a>
                                    <a className="" href="https://www.linkedin.com/in/hamzadubh"><i className="bi bi-linkedin pe-2" style={{fontSize:'30px'}}></i></a>
                                    <a className="" href="https://www.pinterest.com/hhha0d/"><i className="bi bi-pinterest pe-2" style={{fontSize:'30px'}}></i></a>
                                    <a className="" href="https://www.instagram.com/hhha.d"><i className="bi bi-instagram pe-2" style={{fontSize:'30px'}}></i></a>
                                </div>

                            </div>

                            <div className="col">
                                <div className="grid grid-cols-3 gap-10">
                                    <div className="">
                                        <h5 className="text-2xl font-bold mb-2">Pages</h5>
                                        <p><Link to="/projects">Projects</Link></p>
                                        <p><Link to="/gallery">Gallery</Link></p>

                                    </div>
                                    <div className="">
                                        <h5 className="text-2xl font-bold mb-2">Products</h5>
                                        <p><a href="{% url 'productsApp:products_view' %}">Products and Services</a></p>
                                        <p><a href="/dashboard">Dashboard</a></p>
                                    </div>
                                    <div className="">
                                        <h5 className="text-2xl font-bold mb-2">Contact Us</h5>
                                        <p><a href="{% url 'main:contact_view' %}">Send me a message</a></p>


                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="text-center text-white bg-black p-5" >
                        © 2024 Copyright:
                        <a className="text-light" href="/">HmzH</a>
                    </div>

                </footer>
        </div>
    )
}