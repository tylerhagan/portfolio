import { useState } from 'react';
import { projectsData } from '../utils/projectsData';
import Lightbox from '../components/Lightbox';
import ProtectedProject from '../components/ProtectedProject';
import './ProjectPage.css';

const ProjectPage = ({ projectId, onNavigate }) => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const project = projectsData[projectId];
  
  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '10rem' }}>
        <h1>Project not found</h1>
        <button className="btn btn-secondary" onClick={() => onNavigate('home')}>
          ← Back to Work
        </button>
      </div>
    );
  }

  const openLightbox = (imageSrc, imageAlt) => {
    setLightboxImage({ src: imageSrc, alt: imageAlt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const projectContent = (
    <>
      <section className="project-hero">
        <div className="container">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="project-meta-bar">
            <div className="meta-item">
              <div className="meta-label">Year</div>
              <div className="meta-value">{project.year}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Role</div>
              <div className="meta-value">{project.role}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Timeline</div>
              <div className="meta-value">{project.timeline}</div>
            </div>
            <div className="meta-item">
              <div className="meta-label">Status</div>
              <div className="meta-value">{project.status}</div>
            </div>
          </div>
          <div className="project-tools">
            {project.tools.map((tool, i) => (
              <span key={i} className="tool-badge">{tool}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        {/* Offer Tool Content */}
        {projectId === 'offer-tool' && (
          <>
            {project.aiUsage && (
              <div className="project-section highlight-section">
                <h2>How was AI used in this project?</h2>
                <ul className="feature-list">
                  {project.aiUsage.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-section">
              <h2>Design Brief</h2>
              <p>{project.brief}</p>
              <h3>Key Goals</h3>
              <ul className="feature-list">
                {project.keyGoals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h2>{project.discovery.title}</h2>
              <p>{project.discovery.content}</p>
              <h3>We conducted:</h3>
              <ul className="feature-list">
                {project.discovery.research.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3>Key Insights:</h3>
              <ul className="feature-list">
                {project.discovery.insights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h2>{project.solution.title}</h2>
              <p>{project.solution.intro}</p>
              
              {project.solution.features.map((feature, idx) => (
                <div key={idx} className="feature-block">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  {feature.images && (
                    <div className="project-images">
                      {feature.images.map((img, i) => (
                        <img 
                          key={i} 
                          src={img} 
                          alt={feature.title} 
                          className="project-image clickable" 
                          onClick={() => openLightbox(img, feature.title)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="project-section">
              <h2>Development</h2>
              <p>{project.development}</p>
            </div>

            <div className="project-section">
              <h2>Results</h2>
              <div className="kpi-grid">
                {project.results.kpis.map((kpi, i) => (
                  <div key={i} className="kpi-card">
                    <div className="kpi-value">{kpi.value}</div>
                    <div className="kpi-suffix">{kpi.suffix}</div>
                    <div className="kpi-label">{kpi.label}</div>
                  </div>
                ))}
              </div>
              <h3>Additional Wins:</h3>
              <ul className="feature-list">
                {project.results.additionalWins.map((win, i) => (
                  <li key={i}>{win}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Field Service Content */}
        {projectId === 'field-service' && (
          <>
            <div className="project-section">
              <h2>Overview</h2>
              <h3>Problem</h3>
              <p>{project.overview.problem}</p>
              <h3>Outcome</h3>
              <p>{project.overview.outcome}</p>
            </div>

            <div className="project-section">
              <h2>Project Breakdown</h2>
              <div className="process-list">
                {project.process.map((item, i) => (
                  <div key={i} className="process-step">
                    <div className="step-number">{item.step}</div>
                    <div className="step-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h2>Definition</h2>
              <p>{project.definition}</p>
              {project.definitionImage && (
                <img 
                  src={project.definitionImage} 
                  alt="Journey Map" 
                  className="project-image-full clickable" 
                  onClick={() => openLightbox(project.definitionImage, 'Journey Map')}
                />
              )}
            </div>

            <div className="project-section">
              <h2>Solution</h2>
              <ul className="feature-list">
                {project.solution.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
              <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                Note: I am only able to show a few concepts and prototype screens as this application is in active internal usage.
              </p>
              <div className="project-images">
                {project.solution.images.map((img, i) => (
                  <div key={i} className="captioned-image">
                    <img 
                      src={img.src} 
                      alt={img.caption} 
                      className="project-image clickable" 
                      onClick={() => openLightbox(img.src, img.caption)}
                    />
                    <p className="image-caption">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-section">
              <h2>Results</h2>
              <p>{project.results}</p>
            </div>
          </>
        )}

        {/* Monitoring App Content */}
        {projectId === 'monitoring-app' && (
          <>
            <div className="project-section">
              <h2>Overview</h2>
              <h3>Problem</h3>
              <p>{project.overview.problem}</p>
              <h3>Outcome</h3>
              <p>{project.overview.outcome}</p>
            </div>

            <div className="project-section">
              <h2>UX Research</h2>
              <p>{project.research.understanding}</p>
              <p>{project.research.differentiation}</p>
              <p>{project.research.trust}</p>
              {project.research.wireframeImage && (
                <div className="captioned-image">
                  <img 
                    src={project.research.wireframeImage} 
                    alt="Wireframes" 
                    className="project-image-full clickable" 
                    onClick={() => openLightbox(project.research.wireframeImage, 'Wireframes')}
                  />
                  <p className="image-caption">Top level wireframe pages</p>
                </div>
              )}
              {project.research.flowImage && (
                <div className="captioned-image">
                  <img 
                    src={project.research.flowImage} 
                    alt="User Flow" 
                    className="project-image-full clickable" 
                    onClick={() => openLightbox(project.research.flowImage, 'User Flow')}
                  />
                  <p className="image-caption">Application Map / User Flow</p>
                </div>
              )}
            </div>

            <div className="project-section">
              <h2>Design</h2>
              <h3>Approach</h3>
              <p>{project.design.approach}</p>
              <p>{project.design.feedback}</p>
              <h3>Energy Flow</h3>
              <p>{project.design.energyFlow}</p>
              {project.design.energyFlowImage && (
                <div className="captioned-image">
                  <img 
                    src={project.design.energyFlowImage} 
                    alt="Energy Flow" 
                    className="project-image-full clickable" 
                    onClick={() => openLightbox(project.design.energyFlowImage, 'Energy Flow')}
                  />
                  <p className="image-caption">Early mockups to final energy flow diagram</p>
                </div>
              )}
              {project.design.prototypeImages && (
                <div className="project-images">
                  {project.design.prototypeImages.map((img, i) => (
                    <div key={i} className="captioned-image">
                      <img 
                        src={img.src} 
                        alt={img.caption} 
                        className="project-image clickable" 
                        onClick={() => openLightbox(img.srcFull, img.caption)}
                      />
                      <p className="image-caption">{img.caption}</p>
                    </div>
                  ))}
                </div>
              )}
              <h3>Colours</h3>
              <p>{project.design.colours}</p>
            </div>

            <div className="project-section">
              <h2>Results</h2>
              <p>{project.results}</p>
            </div>
          </>
        )}

        {/* Solar Designer Content */}
        {projectId === 'solar-designer' && (
          <>
            <div className="project-section">
              <p>{project.overview.description}</p>
              
              <h3>Challenge</h3>
              <p>{project.overview.challenge}</p>
              
              {/* Challenge Images - 2 images in grid */}
              <h4>Screens</h4>
              <p>Loading directly from the customer/order in the CRM &#40;Salesforce&#41;.</p>
              {project.overview.challengeImages && (
                <div className="project-images">
                  {project.overview.challengeImages.map((img, i) => (
                    <div key={i} className="captioned-image">
                      <img 
                        src={img.src} 
                        alt={img.caption} 
                        className="project-image clickable" 
                        onClick={() => openLightbox(img.src, img.caption)}
                      />
                      <p className="image-caption">{img.caption}</p>
                    </div>
                  ))}
                </div>
              )}
              
              <h3>Solution</h3>
              <p>{project.overview.solution}</p>
              
              {/* Solution Image - Full width */}
              {project.overview.solutionImage && (
                <img 
                  src={project.overview.solutionImage} 
                  alt="Solar Designer Solution" 
                  className="project-image-full clickable" 
                  onClick={() => openLightbox(project.overview.solutionImage, 'Solar Designer Solution')}
                />
              )}
            </div>

            <div className="project-section">
              <h2>Impact</h2>
              <p>{project.impact}</p>
            </div>
          </>
        )}

        <div className="project-section" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button className="btn btn-secondary" onClick={() => onNavigate('home')}>
            ← Back to Work
          </button>
        </div>
      </div>

      {lightboxImage && (
        <Lightbox 
          imageSrc={lightboxImage.src} 
          imageAlt={lightboxImage.alt} 
          onClose={closeLightbox} 
        />
      )}
    </>
  );

  // Wrap offer-tool project with password protection
  if (projectId === 'offer-tool') {
    return (
      <ProtectedProject projectId={projectId} onNavigate={onNavigate}>
        {projectContent}
      </ProtectedProject>
    );
  }

  // Return unprotected content for other projects
  return projectContent;
};

export default ProjectPage;
