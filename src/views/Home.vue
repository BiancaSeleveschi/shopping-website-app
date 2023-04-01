<template>
  <div>
    <video autoplay loop muted>
      <source
        src="https://player.vimeo.com/external/396570197.hd.mp4?s=b31763e4f3b76f8c4fa6bd1d2be237ec6dc30442&profile_id=174&oauth2_token_id=57447761"
        type="video/mp4"
      />
    </video>
    <div class="overlay"></div>
    <div class="content">
      <div class="buttons">
        <router-link class="nav-button" to="/wo23/collection">
          <button class="home-button">WO23 Collection</button>
        </router-link>
        <router-link class="nav-button" to="/me23/collection">
          <button class="home-button">ME23 Collection</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>
<style>
video {
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  position: absolute;
  display: grid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.home-button {
  background: #252525;
  color: white;
  margin: 10px;
  border: none;
  border-radius: 20px;
  width: 200px;
  padding: 7px;
}

.home-button:hover {
  background: #525252;
  opacity: 0.8;
}
</style>
