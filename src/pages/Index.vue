<template>
  <Layout>
    <Header />
    <main>
      <HappyBirthday />
      <CallToAction />
      <ProudTwitter />
      <CandleMap />
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
import ProudTwitter           from "~/components/proudtwitter.vue";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Header,
    HappyBirthday,
    CallToAction,
    ProudTwitter,
    CandleMap,
    Footer
  }
}
</script>
