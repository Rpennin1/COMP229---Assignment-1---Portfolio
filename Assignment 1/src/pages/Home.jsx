import { Link } from "react-router-dom";

function Home() {
    return (
        <main>
            <section className="home-section">
                <h1> Welcome to My Portfolio.</h1>

                <h2>Hello, I am learning to become a software developer!</h2>

                <p>
                    Welcome to my portfolio. This website showcases my education, projects, technical interests, and the skills I am developing throughout my studies.
                </p>   

                <h2> My Mission </h2>

                <p> 
                    My goal is to continue developing my technical and creative skills while creating useful, accessible, and visually appealing digital experiences.
                </p>

                <Link to="/about" className="button">
                  Learn More About Me.
                </Link>     
            </section>
        </main>        
     );
}

export default Home;