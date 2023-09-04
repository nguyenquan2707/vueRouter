<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-if="transaction">
    <h1>Transaction detail page</h1>
    <h1>Transaction Id: {{ $route.params.id }}</h1>
    <h1>Transaction Name:{{ transaction.name }}</h1>
    <h1>Price: {{ transaction.price }}</h1>
  </div>
  <div v-else>
    <h1>Loading....</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data));
  },
};
</script>
