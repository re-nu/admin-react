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
                
                <div className="project-name">Sales Tracking</div>
                <div className="container">
                  <div className="range st"></div>
                </div>
                

                <div className="project-name">Customer Database</div>
                <div className="container">
                  <div className="range cd"></div>
                </div>
                
                <div className="project-name">Payout Details</div>
                <div className="container">
                  <div className="range pd"></div>
                </div>
                
                <div className="project-name">Account Setup</div>
                <div className="container">
                  <div className="range as"></div>
                </div>
                
            </div>
        </div>
    )
}
