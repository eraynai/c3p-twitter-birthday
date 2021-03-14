<template>
  <Layout>
    <Header :showNav="showNav" :englishSelected="englishSelected" />
    <main>
      <HappyBirthday @passedFold="showNav=true" />
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
  metaInfo: {
    title: "Home"
  },
  components: {
    Header,
    HappyBirthday,
    CallToAction,
    CandleMap,
    CandleVideo,
    Footer
  },
  data: function () {
    return {
      showNav: false,
      englishSelected: true
    };
  },
}
</script>
