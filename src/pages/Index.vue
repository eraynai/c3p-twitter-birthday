<template>
  <Layout>
    <Header />
    <main>
      <HappyBirthday />
      <TwitterLink />
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
import TwitterLink            from "~/components/twitterlink.vue";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Header,
    HappyBirthday,
    TwitterLink,
    CandleMap,
    Footer
  }
}
</script>
