import { Link } from 'react-router-dom';
import AnimatePage from '../../components/AnimatePage';
import '../HomePage/homePage.scss';

const HomePage = () => {
  return (
    <AnimatePage>
      <div className="home">
        <h1 className="home__title">ALLAYA</h1>
        <div>
          <Link to="/website">website</Link>
        </div>
      </div>
    </AnimatePage>
  );
};

export default HomePage;
