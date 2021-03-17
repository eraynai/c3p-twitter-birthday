<template>
    <section class="secondVideo wrapper">
    <div style="position: relative;">
        <g-image v-if="!isPlaying" src='~/assets/images/button-play.svg' alt='play button' class="ui" @click="play"/>
        <vue-intersect @enter="play" >
            <video :title="$t('birthday_cake')" id="b-video" class="birthday-video" ref="video" autoplay muted loop>
                <source src="/cake_video.mp4" type="video/mp4">
            </video>
        </vue-intersect>
    </div>
    </section>
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
            console.log('video is playing');
        })
    },
    methods: {
        async play() {
            await this.$refs.video.play();
            console.log('playing video here', this.$refs.video);
        }
    }
}
</script>