import { Link } from 'react-router-dom';
import AnimatePage from '../../components/AnimatePage';
import '../WebSite/webSite.scss';

const WebSite = () => {
  return (
    <AnimatePage>
      <div className="website">
        <h1 className="website__title">WEBSITE</h1>
        <div>
          <Link to="/">home</Link>
        </div>
      </div>
    </AnimatePage>
  );
};

export default WebSite;
