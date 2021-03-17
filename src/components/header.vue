<template>
    <header class="header-wrapper" :class="{ hideNavBar: true, showNavBar: showNav }">
            <div class="nav wrapper">
            <div id="logo" >
                <span id="twitterhastag" :class="{ hidden: hideNav && !showNav }">#TwitterBirthdayBash</span>
                <s-twitter class="logo-container" :class="{ hideTwitterButton: true, showTwitterButton: showNav }"
                    :window-features="windowFeatures"
                    :share-options="shareOptions"
                    :use-native-behavior="useNativeBehavior"
                    @popup-close="onClose"
                    @popup-open="onOpen"
                    @popup-block="onBlock"
                    @popup-focus="onFocus">
                    <g-image class="cta" id="header--tweet-cta" src='~/assets/images/tweet-nav-bar.png' alt='tweet for change'/>
                </s-twitter>
                <div class="language-switcher" :class="{ hideTranslation: showNav }">
                    <span
                        v-for="(locale, index) in availableLocales"
                        :key="locale"
                    >
                        <a
                            href="#"
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
                shareOptions: {
                    url: 'https://www.youtube.com/watch?v=N_n4gIxv0YI',
                    text: '@Twitter, it’s time to grow up and take the lead in social platforms protecting victims of child sexual abuse. @Jack',
                    hashtags: ['TwitterBirthdayBash'],
                    //via: 'twitterdev',
                },
                currentLocale: this.$i18n.locale.toString(),
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
                this.$router.push({
                    path: this.$tp(this.$route.path, this.currentLocale, true)
                })
            }
        }
        // I am on a call - o- ok, will be with you shortly
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