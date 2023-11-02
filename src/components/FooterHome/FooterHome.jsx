import '../FooterHome/footerHome.scss';

const FooterHome = () => {
  return (
    <section className="footerHome">
      <div className="footerHome__container">
        <p className="footerHome__text">
          developed by{' '}
          <a
            href="https://vladian95.github.io/port3d/"
            className="footerHome__link"
          >
            vladian95
          </a>
        </p>
      </div>
    </section>
  );
};

export default FooterHome;
