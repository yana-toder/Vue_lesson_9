<template>
  <div class="product__container">
    <div
      v-for="product in currentCategory.products"
      :key="product.id"
      class="product__cart"
    >
      <div class="product__image">
        <img :src="product.image" alt="image" />
      </div>
      <div class="product__body">
        <h2 class="product__title">{{ product.title }}</h2>
        <div class="product__price">{{ product.price }}</div>
      </div>
    </div>
  </div>
  <router-link to="/" class="back">На головну</router-link>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'ProductsCategory',
  data() {
    return {
      currentCategory: {},
    }
  },

  computed: {
    ...mapGetters(['getCategoryById']),

    currentCategoryId() {
      return this.$route.params.categoryId
    },
  },
  created() {
    this.currentCategory = this.getCategoryById(this.currentCategoryId)
  },
}
</script>

<style lang="scss" scoped>
.product {
  // .product__container
  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 15px;
  }
  // .product__cart
  &__cart {
    border: 1px solid gray;
    flex-basis: 40%;
    display: flex;
    gap: 15px;
    padding: 15px;
    margin-bottom: 30px;
  }
  // .product__image
  &__image {
    width: 200px;
    height: 150px;
    object-fit: cover;
    margin-right: 10px;
    img {
      width: 100%;
      height: 150px;
    }
  }
  // .product__body
  &__body {
    display: flex;
    flex-direction: column;
  }
  // .product__title
  &__title {
  }
  // .product__price
  &__price {
    color: red;
    font-size: 22px;
  }
}

.back {
  margin-bottom: 50px;
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
}
</style>
