<script>



export default {
    name: 'MovieCard',
    props:{
        card: Object
    }
}
</script>

<template>
  <div>--{{ card.title || card.name }}, {{ card.original_title || card.original_name}}, {{card.original_language}}, {{card.vote_average}}--</div>
</template>



<style lang="scss" scoped>

</style>