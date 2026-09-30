import { pathFor, isPlainClick } from '../utils/routes';

// A real link (crawlable, cmd-click opens a new tab) that navigates client-side on a plain click
const RouteLink = ({ page, id = null, onNavigate, onClick, children, ...rest }) => (
  <a
    href={pathFor(page, id)}
    onClick={(e) => {
      onClick?.(e);
      if (!isPlainClick(e)) return;
      e.preventDefault();
      onNavigate(page, id);
    }}
    {...rest}
  >
    {children}
  </a>
);

export default RouteLink;
