import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {

    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };


    loadScript('/frontend/js/jquery-3.5.1.min.js');
    loadScript('/frontend/js/popper.min.js');
    loadScript('/frontend/js/bootstrap.min.js');
    loadScript('/frontend/js/jquery.animatedheadline.min.js');
    loadScript('/frontend/js/animatedModal.min.js');
    loadScript('/frontend/js/simplebar.min.js');
    loadScript('/frontend/js/jquery.barfiller.js');
    loadScript('/frontend/js/imagesloaded.pkgd.min.js');
    loadScript('/frontend/js/isotope.pkgd.min.js');
    loadScript('/frontend/js/lity.min.js');
    loadScript('/frontend/js/main.js');
    loadScript('/frontend/js/app.js');
    loadScript('/frontend/js/parsley.min.js');
    loadScript('/frontend/js/particles.min.js');

  }, []);

  return (
    <section className="home-section home-screen home-overlay" style={{ backgroundImage: "url('/frontend/images/bgakame.jpg')" }}>
      <div id="particles-js"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 col-lg-12 text-center">
            <div className="home-content">
              <div className="avatar">
                <img src="/media/bisola_odusanwo.jpg" alt="avatar" />
              </div>
              <h1>Bisola Odusanwo</h1>
              <h2 className="ah-headline clip">
                <span>I&#039;m a&nbsp;</span>
                
                <span className="ah-words-wrapper">
                  <b className="is-visible">Software Engineer</b>
                  <b>Mern Stack Developer</b>
                  <b>Freelancer</b>
                </span>
                
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
