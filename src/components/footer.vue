<template>
    <footer class="footerContent">
        <div class="container wrapper"> 
            <div class="social-logos">
                <a href="https://www.protectchildren.ca/en/" target="_blank"><g-image class="cp3-logo" src="~/assets/images/c-3-p-logo.svg" :alt="$t('c3p_logo')" /></a>
                <div class="social">
                    <a href="https://www.facebook.com/CanadianCentreForChildProtection/" target="_blank"><g-image src="~/assets/images/facebook-white.svg" :alt="$t('facebook')" /></a>
                    <a href="https://www.instagram.com/cdnchildprotect" target="_blank"><g-image src="~/assets/images/instagram-white.svg" :alt="$t('instagram')" /></a>
                    <a href="https://twitter.com/cdnchildprotect" target="_blank"><g-image src="~/assets/images/twitter-white_v2.svg" :alt="$t('twitter_icon')" /></a>
                    <a href="https://www.youtube.com/user/ProtectChildrenCA" target="_blank"><g-image class="youIcon" src="~/assets/images/youtube-white_v2.svg" :alt="$t('youtube')" /></a>
                </div>
            </div>
            <div class="terms">
                 <ul>
                    <li><a href="https://www.protectchildren.ca/en/privacy-policy/" target="_blank">{{$t('privacy')}}</a></li>
                    <li><a href="https://www.protectchildren.ca/en/terms-of-use/" target="_blank">{{$t('terms')}}</a></li>
                    <li><a href="https://www.protectchildren.ca/en/contact/" target="_blank">{{$t('contact')}}</a> </li>
                </ul>
            </div>
        </div>
    </footer>
</template>