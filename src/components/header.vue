<template>
    <header class="header-wrapper" :class="{ hideNavBar: true, showNavBar: showNav }">
            <div class="nav wrapper">
            <div id="logo" >
                <span id="twitterhastag" :class="{ hidden: hideNav && !showNav }">#TwitterBirthdayPlea</span>
                <s-twitter class="logo-container" :class="{ hideTwitterButton: true, showTwitterButton: showNav }"
                    :window-features="windowFeatures"
                    :share-options="shareOptions"
                    :use-native-behavior="useNativeBehavior"
                    @popup-close="onClose"
                    @popup-open="onOpen"
                    @popup-block="onBlock"
                    @popup-focus="onFocus">
                    <!--<g-image class="cta" id="header--tweet-cta" src='~/assets/images/tweet-nav-bar.png' alt='tweet for change'/>-->
                    <g-image class="cta" :src="require(`!!assets-loader?width=952!@images/` + $t('nav_bar') + '.png')"/>
                </s-twitter>
                <div class="language-switcher" :class="{ hideTranslation: showNav }">
                    <span
                        v-for="(locale, index) in availableLocales"
                        :key="locale"
                    >
                        <a
                            
                            class="languageOption"
                            @click="switchLocale(locale)"
                            :class="[currentLocale === locale && 'active']"
                        >
                            {{locale}}
                        </a>
                        <span v-if="index < availableLocales.length - 1">/</span>
                    </span>
                </div>
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
            englishSelected: Boolean,
        },
        data() {
            return {
                hideNav: false,
                playerReady: false,
                windowFeatures: {},
                currentLocale: this.$i18n.locale.toString(),
                useNativeBehavior: true,
            };
        },
        computed: {
            availableLocales() {
                return this.$i18n.availableLocales;
            },
            shareOptions() {
                return {
                    url: 'https://www.youtube.com/watch?v=N_n4gIxv0YI',
                    hashtags: ['TwitterBirthdayPlea'],
                    text: this.$t('tweet')
                }
            }
        },
        mounted() {
            /*this.showHideNav();*/
            window.addEventListener("scroll", this.showHideNav);
            console.log(">>>>>", this.currentLocale);
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
                console.log("clicked", this.currentLocale, this.$route.path)             
                this.$router.push({
                    path: this.$tp(this.$route.path, this.currentLocale, true)
                }) 
            }
        }
    }

</script>
<style lang="css">
.languageOption {
    text-transform: uppercase;
}

.active {
    border-bottom: 1px solid white;
}
</style>