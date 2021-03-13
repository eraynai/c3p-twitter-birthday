<template>
    <h1 :class="{ hidden: shouldShow }" >Test</h1>
</template>

<style>
    h1 {
        color: white;
    }
</style>

<script>
    export default {
        data: function(){
            return {
                shouldShow: false,
        };
        },
        mounted(){
            this.$el;
            let observer = new IntersectionObserver((array) => {
                console.log(array[0].isIntersecting);
                if(array[0].isIntersecting === true){
                    this.shouldShow = false;
                }
                else {
                    this.shouldShow = true;
                    observer.disconnect();
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