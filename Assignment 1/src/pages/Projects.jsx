import PageContainer from "../components/PageContainer";

export default function Projects() {
    return (
        <PageContainer>

            <div className="projects-container">

            <article className="project-card">
                <div className="project-image">
                    <img src="/namehere.png" alt="name of project" />
                </div>

                <div className="project-info"> 
                    <h2> Name here </h2> 
                   <p>BLURB ABOUT THE PROJECT HERE.</p> 
                   <p> <strong>Role:</strong> info here</p> 
                   <p><strong>Outcome</strong>: info here </p>
                   </div>
            </article>    

              <article className="project-card">
    <div className="project-image">
      <img src="/java-project.jpg" alt="Java project" />
    </div>

    <div className="project-info">
      <h2>Java Programming</h2>
      <p>Short description of the project.</p>
      <p><strong>Role:</strong> Your role.</p>
      <p><strong>Outcome:</strong> What you accomplished.</p>
    </div>
  </article>


  <article className="project-card">
    <div className="project-image">
      <img src="/database-project.jpg" alt="Database project" />
    </div>

    <div className="project-info">
      <h2>Database Design</h2>
      <p>Short description of the project.</p>
      <p><strong>Role:</strong> Your role.</p>
      <p><strong>Outcome:</strong> What you accomplished.</p>
    </div>
  </article>    
  
</div>
        </PageContainer>
    );
}
