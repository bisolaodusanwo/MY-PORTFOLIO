
import '../public/styles.css';
import 'font-awesome/css/font-awesome.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMVs3sWezLk5lr5P/lVZj9QBS3pC7LJ2yOUdqK"
  crossorigin="anonymous"
/>
        <script src="/frontend/js/jquery-3.5.1.min.js" defer></script>
<script src="/frontend/js/popper.min.js" defer></script>
<script src="/frontend/js/bootstrap.min.js" defer></script>
<script src="/frontend/js/jquery.animatedheadline.min.js" defer></script>
<script src="/frontend/js/animatedModal.min.js" defer></script>
<script src="/frontend/js/simplebar.min.js" defer></script>
<script src="/frontend/js/jquery.barfiller.js" defer></script>
<script src="/frontend/js/imagesloaded.pkgd.min.js" defer></script>
<script src="/frontend/js/isotope.pkgd.min.js" defer></script>
<script src="/frontend/js/lity.min.js" defer></script>
<script src="/frontend/js/main.js" defer></script>
<script src="/frontend/js/app.js" defer></script>
<script src="/frontend/js/parsley.min.js" defer></script>
        <script src="/frontend/js/particles.min.js" defer></script>
       
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
