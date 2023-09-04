<template>
  <h1>Transaction Page.</h1>
  <div v-for="transaction in transactions" :key="transaction.id">
    <router-link :to="`/transactions/${transaction.id}`">{{
      transaction.name
    }}</router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "transactions",
  components: {},
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "payment internet",
        },
        {
          id: 2,
          name: "momo payment",
        },
        {
          id: 3,
          name: "market payment",
        },
      ],
    };
  },
};
</script>
