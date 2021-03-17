<template>
  <Layout>
    <Header :showNav="showNav" />
    <main>
      <HappyBirthday @passedFold="showNav=true" v-bind:showNav1="showNav" />
      <CallToAction />
      <CandleMap />
      <CandleVideo />
    </main>
    <Footer />
  </Layout>
</template>

<script>

import Header                 from "~/components/header.vue";
import HappyBirthday          from "~/components/happybirthdayvideo.vue";
import CandleMap              from "~/components/candlemap.vue";
import Footer                 from "~/components/footer.vue";
import CallToAction           from "~/components/calltoaction.vue";
import CandleVideo            from "~/components/videocandlemap.vue";


export default {
  title: "Home",
  metaInfo() {
    return {
      meta: [
        { name: 'description', content: this.$i18n.t("meta.description") }
      ]
    };
  },
  components: {
    Header,
    HappyBirthday,
    CallToAction,
    CandleMap,
    CandleVideo,
    Footer
  },
  data() {
    return {
      showNav: false,
    };
  },
}
</script>
