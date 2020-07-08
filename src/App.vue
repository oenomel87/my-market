<template>
  <div>
    <Item v-for="sample in samples"
      :key="sample.itemCode"
      :item-code="sample.itemCode"
      :name="sample.name"
      @add="addToCart" />
  </div>
</template>

<script>
import Item from './components/Item.vue';

export default {

  components: { Item },

  data() {
    return {
      samples: [
        {
          itemCode: '1',
          name: 'Apple'
        },
        {
          itemCode: '2',
          name: 'Melon'
        },
        {
          itemCode: '3',
          name: 'Orange'
        }
      ]
    }
  },

  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item);
    }
  }
}
</script>

<style>

</style>