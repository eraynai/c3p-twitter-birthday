<template>
    <div>
        {{ translatedText }}
    </div>
</template>

<script>
    export default {
        props: {
            translationKey: String,
            translationLanguage: String
        },
        data: function () {
            let dictionary = {
                "change": {
                    "en":"This needs to change.", 
                    "fr":"Cela doit changer."
                },
                "provide": {
                    "en": "They do not provide users with the ability to directly report tweets or DM as containing child sexual abuse material, which we believe increases the time it stays on the site and allows it to spread.", 
                    "fr":"Quelque chose."
                },
            };
            return {
              translatedText: dictionary[this.translationKey][this.translationLanguage]
            };
        }
        
    }
</script>