import { Link } from 'react-router-dom';
import AnimatePage from '../../components/AnimatePage';
import FooterHome from '../../components/FooterHome/FooterHome';
import HomeBg from '../../components/HomeBg/HomeBg';
import mainImg from '../../assets/img/allaya-main.png';
import '../HomePage/homePage.scss';

const HomePage = () => {
  return (
    <AnimatePage>
      <section className="home">
        <HomeBg />
        <h1 className="home__title">
          <img src={mainImg} alt="logo" className="home__img" />
        </h1>
        <div className="home__links">
          <Link to="/website">website</Link>
        </div>
        <FooterHome />
      </section>
    </AnimatePage>
  );
};

export default HomePage;
