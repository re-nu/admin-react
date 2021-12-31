import { ColorCode } from "./ColorCode";

export function Projects() {
  return (
    <div className='left-projects'>
      <div className='projects'><ProjectsLayout/></div>
      <div className='color-code'><ColorCode/></div>
    </div>
  );
}

function ProjectsLayout() {
    return(
        <div className="project-layout">
            <div className="project-card-head" >
                <h6>projects</h6>
            </div>
            <div className="project-card-body">
                <div className="project-name">Server Migration</div>
                <div className="container">
                  <div className="range sm"></div>
                </div>
                
                <div className="project-name"></div>
                <div className="range st"></div>

                <div className="project-name"></div>
                <div className="range cd"></div>

                <div className="project-name"></div>
                <div className="range pd"></div>

                <div className="project-name"></div>
                <div className="range as"></div>
                
            </div>
        </div>
    )
}
