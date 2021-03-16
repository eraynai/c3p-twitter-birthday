<template>
</template>

<script>
    export default {
        name: 'PageFold',
        data: function(){
            return {
                showNav: false,
        };
        },
        mounted(){
            const _self = this;
            this.$el;
            let observer = new IntersectionObserver((array) => {
                if (array[0].isIntersecting === false) {
                    console.log(_self);
                    _self.$emit("passedFold");
                    observer.disconnect();
                    console.log('intersection working?');
                }
            });
            observer.observe(this.$el);

            //observer.observe(this.refs.myVideo.$el)
        }
    }
</script>

<style>
    h1.hidden {
        opacity: 0;
    }
</style>