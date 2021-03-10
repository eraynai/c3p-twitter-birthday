<template>
  <section>
    <!-- Note that we use a `ref` attribute, not an `id`, to reference the iframe . The iframe src needs the enablejsapi flag as well, so that we can actually use the iFrame API.
      It's also important that the iframe allows autoplay, or else the video will not play in some browsers -->
    <div id="video-section">
      <div class="video-size">
        <div class="video-wrapper">
          <button @click="play" :disabled="!playerReady">
            <g-image
            src='~/assets/images/video_thumbnail.png' alt='thumb'
            :class="{ hidden: videoPlaying }"
            class="play-image"
          />
          </button>
          <iframe
            ref="ytplayer"
            width="560"
            height="315"
            allow="autoplay"
            src="https://www.youtube-nocookie.com/embed/ppp5Q70PYPU?enablejsapi=1"
          ></iframe>
        </div>
      </div>
    </div>
    
    <!--<g-image src="~/assets/images/play_button.png" alt="play button" />-->
    
    
      
    <!--We disable the play button until the player is ready.
    <button @click="play" :disabled="!playerReady" class="watchnow-button">
      <g-image src="~/assets/images/play_button.png" alt="play button" />
    </button>-->
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      playerReady: false,
      videoPlaying: false,
    };
  },
  mounted: function() {
    const _self = this;

    console.log("YTVideo component mounted.");
    /*
      Here we load the YouTube iFrame API. This creates the `window.YT` global that gives us access to
      the API. This script will only be loaded once.
    */

    /* This is a commment that I will remove after */

    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    console.log("Youtube iFrame API script inserted.");
    /*
      We need to use Vue's `mounted` lifecycle hook to wait for the component to be mounted
      so that we can access the `ytplayer` ref.
    */

    /*
      We create a ytAPIReady function that will be called later, when we've determined that
      the Youtube iFrame API is actually available.
      Note that it's important that we use arrow-style functions here, since we need access
      to the vue component instance via the `this` keyword inside the functions.
    */
    const ytAPIReady = () => {
      console.log("Youtube iFrame API ready");
      /*
    Now that the YouTube iFrame API is ready, we can use it to create an instance of the Player
    object using our `ytplayer` reference.
    */
      console.log("Creating player instance.");
      const _player = new window.YT.Player(this.$refs.ytplayer, {
        events: {
          onReady: (event) => {
            console.log("Player ready");
            /*
              The `playVideo` method on the Player object is not available until the player has entered
              the `ready` state, so we need to wait for the `onReady` event to occur.
              We can then store the player instance on the component for use in the `play` method below.
            */

            this._player = _player;
            /*
              Now that the player instance is available and ready, we can flip our `playerReady` flag, which
              will enable the play button.
            */
            this.playerReady = true;
          },
          onStateChange: (event) => {
            if (event.data === 0) {
              this.videoPlaying = false;
            }
          },
        },
      });
    };

    /*
      We determine if the YouTube iFrame API is ready by checking for the existance of the `YT` global.
      If the API is not available, we need to wait for it before calling ytAPIReady.
      Since we add the YTVideo to the page after a button click, the API should typically be available
      already. If you set `showVideo` to `true` by default in `App.vue`, you'll see that we need to wait
      for the API to be available.
*/
    if (window.YT) {
      console.log("The YouTube iFrame API is already available.");
      ytAPIReady();
    } else {
      console.log(
        "The YouTube iFrame API is not available yet. Using onYoutubeIframeAPIReady to wait for it."
      );

      window.onYouTubeIframeAPIReady = function() {
        console.log("The YouTube iFrame API is now available.");
        ytAPIReady();
      };
    }
  },
  methods: {
    play: function() {
      console.log("Playing video.");
      /*  
        Finally, we can use the `_player` reference to play the video.
      */
      this._player.playVideo();
      this.videoPlaying = true;
    },
  },
};
</script>

