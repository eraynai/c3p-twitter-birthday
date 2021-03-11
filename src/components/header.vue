<template>
    <header id="main-header" :class="{ show: showNav }">
    <div class="background">
        <div class="inner">
            <div id="logo">
                <div>
                    <span>#GrowUpTwitter</span>
                </div>
            </div>
            <s-twitter
            :window-features="windowFeatures"
            :share-options="shareOptions"
            :use-native-behavior="useNativeBehavior"
            @popup-close="onClose"
            @popup-open="onOpen"
            @popup-block="onBlock"
            @popup-focus="onFocus">
            <g-image class="cta" id="header--tweet-cta" src='~/assets/images/tweet_button.png' alt='twitter button'/>
            </s-twitter>
        </div>
    </div>
    </header>
</template>

<script>

    import { STwitter } from 'vue-socials'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    export default {
    name: 'STwitterSharing',

    components: { STwitter },
        data: function () {
            return {
                showNav: false,
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
        mounted() {
            /*this.showHideNav();
            window.addEventListener("scroll", this.showHideNav);*/
        },
        methods: {
            /*showHideNav() {
                this.showNav = window.pageYOffset > window.innerHeight ? true : false;
            },*/
            onClose(){},
            onOpen(){},
            onBlock(){},
            onFocus(){},
        }
    }
</script>