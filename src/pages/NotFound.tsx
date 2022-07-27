import { Link } from 'react-router-dom';
import { AppRoute } from '../const';


const NotFound = () => (
  <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
    <h1 style={{ whiteSpace: 'pre-wrap' }}>Resource with path:&nbsp;
      <span style={{ color: 'green' }}>{window.location.href}</span>
      &nbsp;not found
    </h1>
    <Link style={{fontSize: '2rem', textDecoration: 'underline'}} to={AppRoute.Home} >Go to Home page</Link>
  </div>
);

export default NotFound;
