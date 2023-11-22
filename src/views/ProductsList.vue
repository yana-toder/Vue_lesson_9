<template>
  <div
    v-for="category in getCategoriesList"
    :key="category.id"
    @click="onSelectedCategory(category.id)"
    class="category"
  >
    {{ category.title }}
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'ProductsList',

  computed: {
    ...mapGetters(['getCategoriesList']),
  },

  methods: {
    ...mapActions(['setCategoriesList']),

    onSelectedCategory(id) {
      this.$router.push({
        name: 'category',
        params: {
          categoryId: id,
        },
      })
    },
  },

  created() {
    this.setCategoriesList()
  },
}
</script>
<style lang="scss" scoped>
.category {
  cursor: pointer;
}
</style>
