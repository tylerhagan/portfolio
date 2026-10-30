import { useState } from 'react';
import { projectsData } from '../utils/projectsData';
import Lightbox from '../components/Lightbox';
import { responsive, SIZES } from '../utils/images';
import RouteLink from '../components/RouteLink';
import './ProjectPage.css';

// Shared case-study header: outcome-led title, a ruled spec panel, headline
// results and a hero image. Fields are optional; cells without data are skipped.
const CaseHeader = ({ project, projectId, onImageClick }) => {
  const kpis = project.kpis ?? project.results?.kpis;
  const spec = [
    ['Company', project.company],
    ['Role', project.role],
    ['Timeline', project.timeline],
    ['Status', project.status],
    ['Platform', project.platform],
    ['Scope', project.scope],
    ['Stack', project.tools?.join(', '), 'wide'],
  ].filter(([, value]) => value);

  return (
    <section className="case-hero">
      <div className="container">
        <div className="label case-path">/work/{projectId}</div>
        <h1 className="case-title">{project.outcomeTitle ?? project.title}</h1>
        <p className="case-subtitle">
          {project.outcomeTitle ? `${project.title}: ${project.subtitle}` : project.subtitle}
        </p>

        <dl className="case-spec">
          {spec.map(([label, value, size]) => (
            <div key={label} className={`case-spec-cell${size ? ` case-spec-${size}` : ''}`}>
              <dt className="label">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        {kpis && (
          <div className="case-results" style={{ '--cols': kpis.length }}>
            {kpis.map((kpi) => (
              <div key={kpi.label} className="case-result">
                <span className="label">{kpi.label}</span>
                <span className="case-result-value">{kpi.value}</span>
                <span className="case-result-note">{kpi.suffix}</span>
              </div>
            ))}
          </div>
        )}

        {project.heroImage && (
          <img
            {...responsive(project.heroImage.src, SIZES.caseHero)}
            alt={project.heroImage.alt}
            className="case-hero-image clickable"
            onClick={() => onImageClick(project.heroImage.src, project.heroImage.alt)}
          />
        )}
      </div>
    </section>
  );
};

// Paragraphs, captioned images and bullets of a case-study section or subsection
const SectionBody = ({ block, onImageClick }) => (
  <>
    {block.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
    {block.images && (
      <div className={block.images.length > 1 ? 'project-images' : undefined}>
        {block.images.map((img, i) => (
          <div key={i} className="captioned-image">
            <img
              {...responsive(img.src, block.images.length > 1 ? SIZES.projectGrid : SIZES.projectFull)}
              alt={img.caption}
              className={`${block.images.length > 1 ? 'project-image' : 'project-image-full'} clickable`}
              onClick={() => onImageClick(img.src, img.caption)}
              loading="lazy"
            />
            <p className="image-caption">{img.caption}</p>
          </div>
        ))}
      </div>
    )}
    {block.bullets && (
      <ul className="feature-list">
        {block.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    )}
  </>
);

const ProjectPage = ({ projectId, onNavigate }) => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const project = projectsData[projectId];
  
  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '10rem' }}>
        <h1>Project not found</h1>
        <RouteLink page="home" onNavigate={onNavigate} className="btn btn-secondary">
          ← back to /work
        </RouteLink>
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
      <CaseHeader project={project} projectId={projectId} onImageClick={openLightbox} />

      <div className="container case-body">
        {/* Offer Tool Content */}
        {projectId === 'offer-tool' && (
          <>
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
              <h3>What we did</h3>
              <ul className="feature-list">
                {project.discovery.research.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3>Key insights</h3>
              <ul className="feature-list">
                {project.discovery.insights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-section">
              <h2>Key decisions</h2>
              <ol className="decision-list">
                {project.decisions.map((decision) => (
                  <li key={decision.title} className="decision">
                    <h3>{decision.title}</h3>
                    <p>{decision.why}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="project-section">
              <h2>{project.solution.title}</h2>
              <p>{project.solution.intro}</p>
              
              {project.solution.features.map((feature, idx) => (
                <div key={idx} className="feature-block">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  {feature.title === 'Pitch Section' && (
                    <video
                      src="/img/offer-tool/pitch-recording.mp4"
                      controls
                      preload="metadata"
                      style={{ width: '100%', borderRadius: 'var(--radius)', marginTop: '1.5rem', marginBottom: '1rem' }}
                    />
                  )}
                  {feature.title === 'Pitch Section' && (
                    <p><strong>Video:</strong> Version 1 of the Pitch Section for Sweden</p>
                  ) }
                  {feature.images && (
                    <div className="project-images">
                      {feature.images.map((img, i) => (
                        <img 
                          key={i} 
                          {...responsive(img, SIZES.projectGrid)} 
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

            {project.aiUsage && (
              <div className="project-section">
                <h2>Where AI helped</h2>
                <ul className="feature-list">
                  {project.aiUsage.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-section">
              <h2>Beyond the numbers</h2>
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
                  {...responsive(project.definitionImage, SIZES.projectFull)} 
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
                      {...responsive(img.src, SIZES.projectGrid)} 
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

        {/* Sectioned case studies: Enpal product surfaces, EIGENAPP v2, Solar Design Studio v2 */}
        {(projectId === 'enpal-product-work' || projectId === 'monitoring-app' || projectId === 'solar-designer') && (
          <>
            <div className="project-section">
              <h2>Overview</h2>
              <p>{project.brief}</p>
              {project.demo && (
                <a href={project.demo.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  {project.demo.label} ↗
                </a>
              )}
            </div>
            {project.sections.map((section, i) => (
              <div key={i} className="project-section">
                <h2>{section.title}</h2>
                <SectionBody block={section} onImageClick={openLightbox} />
                {section.subsections?.map((sub, j) => (
                  <div key={j}>
                    <h3>{sub.title}</h3>
                    <SectionBody block={sub} onImageClick={openLightbox} />
                  </div>
                ))}
              </div>
            ))}
          </>
        )}

        <div className="project-section">
          <RouteLink page="home" onNavigate={onNavigate} className="btn btn-secondary">
            ← back to /work
          </RouteLink>
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

  return projectContent;
};

export default ProjectPage;
