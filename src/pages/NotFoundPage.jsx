import RouteLink from '../components/RouteLink';

const NotFoundPage = ({ onNavigate }) => (
  <div className="container" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
    <span className="label">error 404</span>
    <h1>Nothing at this path.</h1>
    <p>The page may have moved. Everything current is on the index.</p>
    <RouteLink page="home" onNavigate={onNavigate} className="btn btn-secondary">
      ← back to /work
    </RouteLink>
  </div>
);

export default NotFoundPage;
