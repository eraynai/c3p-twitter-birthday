<template>
    <footer class="footerContent">
        <div class="container wrapper"> 
            <div class="social-logos">
                <!-- <a href="https://www.protectchildren.ca/en/" target="_blank">
                    <g-image class="cp3-logo" :src="'~/assets/images/' + $t('logo') + '.png'" :alt="$t('c3p_logo')" />
                    </a>                 -->
                <a href="https://www.protectchildren.ca/en/" target="_blank"><g-image class="cp3-logo" :src="require(`!!assets-loader?width=407!@images/` + $t('logo') + '.png')" :alt="$t('c3p_logo')" /></a>
                
                <div class="social">
                    <a :href="$t('facebook_link')" target="_blank"><g-image src="~/assets/images/facebook-white.svg" :alt="$t('facebook')" /></a>
                    <a href="https://www.instagram.com/cdnchildprotect" target="_blank"><g-image src="~/assets/images/instagram-white.svg" :alt="$t('instagram')" /></a>
                    <a :href="$t('twitter_link')" target="_blank"><g-image src="~/assets/images/twitter-white_v2.svg" :alt="$t('twitter_icon')" /></a>
                    <a href="https://www.youtube.com/user/ProtectChildrenCA" target="_blank"><g-image class="youIcon" src="~/assets/images/youtube-white_v2.svg" :alt="$t('youtube')" /></a>
                </div>
            </div>
            <div class="terms">
                 <ul>
                    <li><a :href="$t('privacy_policy')" target="_blank">{{$t('privacy')}}</a></li>
                    <li><a :href="$t('terms_use')" target="_blank">{{$t('terms')}}</a></li>
                    <li><a :href="$t('contact_us')" target="_blank">{{$t('contact')}}</a> </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>

</script>
