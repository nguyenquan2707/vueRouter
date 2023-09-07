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
import useTransaction from "../use/fetchTransaction";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "transactions",
  components: {},
  setup() {
    //Tại sao sử dụng ref()? Bởi vì mình sẽ thay thế cái data cũ, thí dụ dữ liệu cũ là array rổng, lúc sau có
    //dữ liệu, mình gán nó bằng array mới.

    const { transactions, fetchAll } = useTransaction();

    fetchAll();

    return { transactions };
  },
};
</script>
