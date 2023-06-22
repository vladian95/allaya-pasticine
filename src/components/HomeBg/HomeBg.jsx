import flowerImg from '../../assets/img/flower.png';
import shitImg from '../../assets/img/shit.png';
import skullImg from '../../assets/img/skull.png';
import './homeBg.scss';

const HomeBg = () => {
  return (
    <div className="homeBG">
      <ul class="circles">
        <li>
          <img src={shitImg} alt="shit" />
        </li>
        <li>
          <img src={flowerImg} alt="shit" />
        </li>
        <li>
          <img src={skullImg} alt="shit" />
        </li>
        <li>
          <img src={flowerImg} alt="shit" />
        </li>
        <li>
          <img src={shitImg} alt="shit" />
        </li>
        <li>
          <img src={flowerImg} alt="shit" />
        </li>
        <li>
          <img src={skullImg} alt="shit" />
        </li>
        <li>
          <img src={shitImg} alt="shit" />
        </li>
        <li>
          <img src={skullImg} alt="shit" />
        </li>
        <li>
          <img src={flowerImg} alt="shit" />
        </li>
      </ul>
    </div>
  );
};

export default HomeBg;
