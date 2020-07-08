<template>
  <div>
      <span>{{ name }}</span>
      <button @click="addToCart" :data-code="itemCode">Add</button>
    </div>
</template>

<script>
export default {

  name: 'Item',

  props: {
    itemCode: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },
  },

  methods: {
    addToCart() {
      const payload = {
        itemCode: this.itemCode,
        name: this.name
      }
      this.$emit('add', payload);
    }
  }
}
</script>

<style>

</style>