<template>
<div style="position: relative;">
   <g-image v-if="!isPlaying" src='~/assets/images/button-play.svg' alt='play button' class="ui" @click="play"/>
    <vue-intersect @enter="play" >
        <video ref="video" autoplay>
            <source src="/cake_video.mp4" type="video/mp4">
        </video>
     </vue-intersect>
     </div>
</template>

<script>
import VueIntersect from 'vue-intersect'
export default {
    components: {
        VueIntersect
    },
    data() {
        return {
            isPlaying: false
        }
    },
    mounted () {
        this.$refs.video.addEventListener('play', () => {
            this.isPlaying = true;
            console.log('video is playing')
        })
    },
    methods: {
        play() {
            this.$refs.video.play();
        }
    }
}
</script>