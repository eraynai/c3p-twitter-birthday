<template>
    <div class="twitter">
        <p>Lorem ipsum onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
    <s-twitter
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  >
  <g-image class="twitter-share" src='~/assets/images/twitterlink.png' alt='twitter button'/>
  </s-twitter>
  </div>
</template>

<script>
import { STwitter } from 'vue-socials'
export default{

name: 'STwitterSharing',

components: { STwitter },

    data: function () {
        return {
            playerReady: false,
            windowFeatures: {},
            shareOptions: {
              url: 'https://www.youtube.com/watch?v=ppp5Q70PYPU&t=1s',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              hashtags: ['test', 'me'],
              via: 'twitterdev',
            },
            useNativeBehavior: true,
        };
    },
 methods: {
    onClose(){},
    onOpen(){},
    onBlock(){},
    onFocus(){},
  },
};
</script>