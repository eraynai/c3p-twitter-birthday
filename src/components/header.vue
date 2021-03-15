<template>
    <header>
        <div class="nav wrapper" :class="{ hideNavBar: true, showNavBar: showNav }">
            <div id="logo" >
                <span id="twitterhastag" :class="{ hidden: hideNav && !showNav }">#TwitterBirthdayBash</span>
                <s-twitter :class="{ hideTwitterButton: true, showTwitterButton: showNav }"
                    :window-features="windowFeatures"
                    :share-options="shareOptions"
                    :use-native-behavior="useNativeBehavior"
                    @popup-close="onClose"
                    @popup-open="onOpen"
                    @popup-block="onBlock"
                    @popup-focus="onFocus">
                    <g-image class="cta" id="header--tweet-cta" src='~/assets/images/tweet_button.png' alt='twitter button'/>
                </s-twitter>
                <span :class="{ hideTranslation: showNav }">
                     <a href="#" class="lang-link" v-for="locale in availableLocales" :key="locale" @click="switchLocale(locale)"> {{locale}} </a>
                </span>
            </div>
        </div>
    </header>
</template>

<script>

    import { STwitter } from 'vue-socials'

    export default {
    name: 'STwitterSharing',

    components: { STwitter },
        props: {
            showNav: Boolean,
            englishSelected: Boolean
        },
        data() {
            return {
                hideNav: false,
                playerReady: false,
                windowFeatures: {},
                shareOptions: {
                url: 'https://www.youtube.com/watch?v=ppp5Q70PYPU&t=1s',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                hashtags: ['test', 'me'],
                via: 'twitterdev',
                currentLocale: this.$i18n.locale.toString()
            },
            useNativeBehavior: true,
            };
        },
        computed: {
            availableLocales() {
                return this.$i18n.availableLocales;
            }
        },
        mounted() {
            /*this.showHideNav();*/
            window.addEventListener("scroll", this.showHideNav);
            //this.englishSelected = true;
        },
        methods: {
            showHideNav() {
                this.hideNav = true;
                console.log('are you running');
            },
            onClose(){},
            onOpen(){},
            onBlock(){},
            onFocus(){},
            switchLocale(locale) {
                this.currentLocale = locale;
                this.$router.push({
                    path: this.$tp(this.$route.path, this.currentLocale, true)
                })
            }
        }
    }

</script>