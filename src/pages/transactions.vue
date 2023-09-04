<template>
  <h1>Transaction Page.</h1>
  <div v-if="transactions.length">
    <div v-for="transaction in transactions" :key="transaction.id">
      <router-link :to="`/transactions/${transaction.id}`">{{
        transaction.name
      }}</router-link>
    </div>
  </div>
  <div v-else>
    <h1>Loading transaction....</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "transactions",
  components: {},
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => (this.transactions = data));
  },
};
</script>
