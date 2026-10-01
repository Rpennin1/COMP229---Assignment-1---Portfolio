import PageContainer from "../components/PageContainer";

export default function Education() {
    return (
        <PageContainer>

            <section className="education-section">

               <h1>Education</h1>

               <p className="education-intro"> 

                My education and ongoing learning have helped me develop technical, analytical, and problem-solving skills in software development.

                </p>

                  <article className="education-card">

                    <div className="education-year">

                        2024 - Present

                    </div> 

                    <div className="education-info">

                        <h2>Centennial College</h2>

                        <h3> Software Engineering Technician</h3>

                        <p>
                            Currently developing skills in programming, database, web development, and software design through hands-on coursework and projects.

                        </p>

                    </div>   

                  </article>  

                  <article className="education-card">

                    <div className="education-year">

                        <h2> Professional Development</h2>

                        <p>
                            Continuing to develop technical skills through programming projects, database development, software requirements analysis, and independent learning.
                        </p>

                    </div>

                  </article>  

            </section>    

        </PageContainer>
    );
}

