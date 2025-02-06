<template>
  <footer class="block footer--dark footer">
    <div class="container grid grid--1x2 footer__sections">
      <!-- Brand section -->
      <div class="footer__brand">
        <img
          class="footer-logo-text logo-primary"
          src="../assets/images/pause-title-500x125.png"
          alt="PAUSE for Dramatic Effect Logo"
        />
        <p class="footer__copyright">
          Copyright &copy; {{ currentYear }}. PAUSE for Dramatic Effect and Oncetold.
        </p>
        <p class="footer__version">Website Version: {{ otVersion }}</p>
        <!-- <p class="footer__footnote">ver{{ otVersion }}</p> -->
      </div>

      <!-- Navigation section -->
      <section class="footer__section">
        <div class="footer__navigation">
          <ul class="list">
            <li>
              Listen:

              <a href="https://truefans.fm/pause-for-dramatic-effect" target="_blank"
                >TrueFans</a
              >&nbsp;
              <a
                href="https://podcasts.apple.com/us/podcast/pause-for-dramatic-effect/id1484748208"
                target="_blank"
                >Apple Podcasts</a
              >&nbsp;
              <a
                href="https://open.spotify.com/show/7HC8nqqbtf3CKzOCWR57wH"
                target="_blank"
                >Spotify</a
              >&nbsp;
              <a
                href="https://music.amazon.com/podcasts/3f005b06-2dab-41f9-b3a7-4b210d422053/pause-for-dramatic-effect"
                target="_blank"
                >Amazon Music</a
              >&nbsp;
            </li>
            <li>
              Subscribe:
              <a
                href="https://storage.googleapis.com/feeds.oncetold.net/80000060.rss"
                target="_blank"
                >RSS</a
              >&nbsp;
              <a href="https://episodes.fm/1484748208" target="_blank">Episodes.fm</a
              >&nbsp;
              <a href="https://podcastindex.org/podcast/847866" target="_blank"
                >Podcast Index</a
              >&nbsp;
              <a href="https://podverse.fm/podcast/EcA8PHohTh" target="_blank">Podverse</a
              >&nbsp;
            </li>
            <li>
              Extras:
              <a href="/about">Cast & Crew</a>&nbsp;
              <a href="/extras">Between the Pauses</a>&nbsp;
              <a href="/extras">Scripts</a>&nbsp;
            </li>
            <li>
              Hosting: <a href="https://oncetold.com" target="_blank">Oncetold</a>&nbsp;
              <a href="https://oncetold.cloud" target="_blank">Oncetold Login</a>&nbsp;
              <a href="https://podnews.net/podcast/in3p?1715200125" target="_blank"
                >Stats</a
              >&nbsp;
              <a
                href="https://www.theend.fyi/shows/pause-for-dramatic-effect"
                target="_blank"
                >Directory</a
              >
            </li>
            <li>
              Guides:
              <a href="https://noteasilysquished.com/" target="_blank"
                >Not Easily Squished</a
              >&nbsp;
              <a
                href="https://learn.fearofpublicshame.com/audio-fiction-101"
                target="_blank"
                >Audio Fiction 101</a
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import moment from "moment";
export default {
  name: "TheFooter",
  components: {},
  props: [],
  setup() {
    // const envVars = import.meta.env;
    // console.log("Environment Variables: ", envVars);

    // const envTest = import.meta.env.VITE_TEST_VAR;
    // console.log("envTest: ", envTest);

    const otVersion = import.meta.env.VITE_VERSION;
    // console.log("otVersion: ", otVersion);

    // console.log("Current Date:", moment().toString());
    // console.log("Current year is:", moment().year());

    let currentYear = moment().year();
    // console.log("currentYear: ", currentYear);

    return {
      otVersion,
      currentYear,
      // envTest,
      // envVars,
    };
  },
};
</script>

<style>
/* *********************************************** */
/* Footer */
.footer {
  background: #232323;
  padding-top: 10rem;
}

.footer--dark {
  background: var(--color-footer);
  color: var(--color-headings);
}

.footer__section {
  padding: 0 0 2rem;
  border-bottom: 1px solid #393939;
}

.footer__heading {
  text-transform: uppercase;
  font-weight: 600;
}

.footer__brand {
  margin-top: 5rem;
  text-align: center;
}

.footer-logo-text {
  width: 350px;
  padding-bottom: 0.25rem;
}

.footer__brand img {
  width: 100%;
  max-width: 350px;
}

.footer__copyright {
  font-size: 2.1rem;
  color: #fff;
  opacity: 0.3;
  margin-bottom: 0;
  padding: 0.25rem 0 0.25rem 0;
}

.footer__version {
  font-size: 2.1rem;
  color: #fff;
  opacity: 0.3;
  margin-bottom: 0;
  padding: 0;
}

.footer__footnote {
  font-size: 1.2rem;
  color: #fff;
  opacity: 0.3;
  margin: 0;
}

.footer a {
  color: var(--color-headings);
  transition: color 0.3s;
  text-decoration: underline;
}

.footer a:hover {
  color: var(--color-placeholder);
  text-decoration: none;
}

.footer__section .list {
  margin: 0;
}

/* Large screen layout */
@media screen and (min-width: 767px) {
  .footer__sections {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer .footer__navigation {
    opacity: 1;
    max-height: 100%;
  }

  .footer__brand {
    order: -1; /* Move brand section to the left */
    margin-top: 0; /* Reset top margin */
  }

  .footer .footer__copyright {
    font-size: 1.5rem;
  }

  .footer .footer__version {
    font-size: 1.5rem;
  }

  .footer__section {
    border: 0;
  }

  .footer__heading {
    font-size: 1.6rem;
  }
}

/* Small screen layout */
@media screen and (max-width: 767px) {
  .footer__sections {
    display: flex;
    flex-direction: column; /* Change flex direction to column for small screens */
  }

  .footer__brand {
    margin: 0 0 0.5rem 0; /* Add margin to top for spacing */
  }

  .footer__navigation {
    display: block; /* Show navigation on small screens */
    padding: 1rem 1.5rem 2rem 1.5rem;
  }

  .footer__navigation .list li {
    margin-bottom: 0.5rem; /* Add margin between list items */
  }
}
</style>
