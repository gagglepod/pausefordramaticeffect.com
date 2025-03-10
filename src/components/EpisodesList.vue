<template>
  <section class="episodes-items-block">
    <div class="container">
      <div v-if="error">
        <div class="episodes-error">
          <div class="episodes-error-message">{{ error }}</div>
        </div>
      </div>

      <div class="episodes-grid" v-if="episodes">
        <article class="episodes-item" v-for="(episode, index) in episodes" :key="index">
          <div class="episodes-item__content">
            <div class="episodes-item__content-left">
              <div class="articles-item__thumb">
                <img :src="`/images/${episode.thumb}`" :alt="episode.title" />
              </div>
            </div>

            <div class="episodes-item__content-right">
              <div class="episodes-item-heading">
                <router-link
                  :to="{
                    name: 'EpisodesDetail',
                    params: { slug: episode.slug },
                  }"
                >
                  <h2 class="episodes-item__heading">{{ episode.title }}</h2>
                </router-link>
                <p class="episodes-item__excerpt">{{ episode.excerpt }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div v-else>
        <TheSpinner />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, watchEffect } from "vue";
import { db } from "../firebase/config";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import TheSpinner from "./TheSpinner.vue";

export default {
  name: "EpisodesList",
  components: { TheSpinner },
  setup() {
    const error = ref(null);
    const episodes = ref([]);

    const otSiteID = import.meta.env.VITE_SITE_ID;
    console.log("otSiteID: ", otSiteID);

    try {
      // Reference the episodes collection under the specific site document
      const q = query(
        collection(db, `sites/${otSiteID}/episodes`),
        orderBy("index", "asc")
      );

      const unsub = onSnapshot(q, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          const post = doc.data();
          results.push({ ...post, slug: post.slug });
        });

        // Assign the sorted results to episodes
        episodes.value = results;
      });

      watchEffect((onInvalidate) => {
        onInvalidate(() => unsub());
      });
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }

    return {
      otSiteID,
      episodes,
      error,
    };
  },
};
</script>

<style>
/* *********************************************** */

.episodes-item-block {
  border-top: 2px solid var(--color-light);
  background: var(--color-primary);
  padding: 4rem 0 4rem;
}

.episodes-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5rem 0 0 0;
}

.episodes-item {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5rem;
}

.episodes-item img {
  margin: 0;
  width: 100%; /* Set image width to 100% of its container */
  max-width: 100%; /* Ensure image doesn't exceed container width */
  height: auto;
}

.episodes-item__thumb {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.episodes-item__thumb img {
  max-width: 100%;
  height: auto;
}

.episodes-item__content {
  display: flex;
  flex-direction: row; /* Stack items horizontally */
  max-width: 100%;
}

.episodes-item__content-left {
  flex: 1;
}

.episodes-item__content-right {
  flex: 2.5;
  padding: 0 1rem; /* Add space between image and text */
  align-items: flex-start; /* Align items at the start of the container */
}

.episodes-item-heading {
  font-weight: 600;
}

.episodes-item__heading {
  margin: 0 0 1.5rem 1rem;
  font-weight: 600;
}

.episodes-item__excerpt {
  margin: 0 0 0 1rem;
  font-size: 2.1rem;
  line-height: 3.2rem;
}

/* Adjust the layout for smaller screens */
@media screen and (max-width: 767px) {
  .episodes-item__content {
    flex-direction: column; /* Stack items vertically */
  }

  .episodes-item__content-left {
    margin-bottom: 1rem; /* Add space between image and text */
    padding: 1rem;
  }

  .episodes-item__content-right {
    padding: 0; /* Remove padding for better alignment */
  }

  .episodes-item__thumb img {
    width: 100%; /* Set image width to 100% on small screens */
    max-width: none; /* Remove max-width constraint */
  }
}
</style>
