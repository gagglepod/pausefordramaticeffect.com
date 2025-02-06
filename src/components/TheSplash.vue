<template>
  <section class="splash-block splash-block--dark">
    <div class="container">
      <header class="splash-summary__header">
        <a href="https://podcastindex.org/podcast/847866" target="_blank">
          <picture class="splash-summary__image">
            <img
              src="../assets/images/pause-v4-1400x1400.jpg"
              alt="PAUSE for Dramatic Effect Showart"
            />
          </picture>
        </a>
        <h2>PAUSE for Dramatic Effect</h2>
        <h3 class="splash-summary__subhead">Not all nightmares happen when you sleep!</h3>
        <p class="splash-summary__text">
          Douglas Dire's world is one of isolation. Once a decorated Iraq War veteran, he
          now roams the streets haunted by the memory of friends lost in combat. With a
          fleeting grip on reality, a dark past full of unresolved pain, and a hopeless
          future, Douglas stumbles upon a ring in an empty parking lot that forces him to
          confront a secret he didn't know he was keeping.
        </p>
      </header>
      <article class="splash-summary__article">
        <h3 class="splash-summary__subhead">Season One Trailer</h3>
        <audio
          class="splash-player"
          id="player"
          controls
          type="audio/mpeg"
          src="https://op3.dev/e/storage.googleapis.com/storage.oncetold.net/80000001/20800050/introducing-pause-for-dramatic-effect.mp3"
        >
          Your browser does not support the audio element.
        </audio>
        <p class="splash-summary__text">
          Introducing Pause for Dramatic Effect, an audio drama podcast about a US Marine
          Corps veteran challenged by survivor's guilt, dark forces, and ancient magic.
        </p>
      </article>
      <article class="splash-summary__article">
        <a href="https://podcastindex.org/podcast/847866" target="_blank"
          ><button class="btn btn--dino-skin btn--stretched">
            Listen to the Show
          </button></a
        >
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheSplash",
  components: {},
  props: [],
  setup() {
    // const otVersion = import.meta.env.VITE_VERSION;

    // console.log("Current Date:", moment().toString());
    // console.log("Current year is:", moment().year());

    // let currentYear = moment().year();

    return {
      // otVersion,
      // currentYear,
    };
  },
};
</script>

<style>
.splash-block {
  padding: 2rem 0 1rem;
  /* border: 2px solid red; */
}

.splash-block--dark {
  background: var(--color-dino-ride);
  color: var(--color-headings);
}

.splash-block--dark h1,
.splash-block--dark h2,
.splash-block--dark h3 {
  color: var(--color-headings);
}

.splash-summary__image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.splash-summary__image > img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 2rem;
}

.splash-summary__header {
  text-align: center;
  margin-bottom: 5rem;
}

.splash-summary__article {
  text-align: center;
  margin-bottom: 5rem;
}

.splash-player {
  max-width: 30rem;
  /* margin: 1rem 4rem; */
}

#player {
  width: 100%;
}

.dashboard__brand {
  transform: translateY(5px);
}

.splash-logo-text {
  width: 600px;
  padding-bottom: 0.25rem;
}

.splash-logo--primary {
  fill: var(--color-headings);
}

.splash-summary__subhead {
  font-size: 3.5rem;
  font-weight: 400;
  text-align: center;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 0;
  padding: 0 1rem 0 1rem;
}

.splash-summary__text {
  text-align: center;
  color: var(--color-headings);
  letter-spacing: 0.1rem;
  margin-top: 1rem 0 1rem;
  padding: 0 1rem 0 1rem;
}

@media screen and (min-width: 768px) {
  .splash-summary__image > img {
    width: 600px;
    height: 600px;
    padding: 0;
    margin-top: 2rem;
    border-radius: 2rem;
  }

  .splash-summary__text {
    font-size: 2.1rem;
    line-height: 3.2rem;
    margin-top: 1rem 0 1rem;
    padding: 0 8rem 0 8rem;
  }

  .splash-player {
    max-width: 60rem;
    margin: 1rem 4rem;
  }
}
</style>
