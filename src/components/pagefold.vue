<template>
    <h1>Test</h1>
</template>

<style>
    h1 {
        color: white;
    }
</style>

<script>
    export default {
        name: 'PageFold',
        data: function(){
            return {
                showNav: false,
        };
        },
        mounted(){
            this.$el;
            let observer = new IntersectionObserver((array) => {
                if (array[0].isIntersecting === false) {
                    this.$emit("passedFold");
                    observer.disconnect();
                    console.log('intersection working?');
                }
            });
            observer.observe(this.$el);
        }
    }
</script>

<style>
    h1.hidden {
        opacity: 0;
    }
</style>