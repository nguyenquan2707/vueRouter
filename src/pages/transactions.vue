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
import { ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "transactions",
  components: {},
  setup() {
    //Tại sao sử dụng ref()? Bởi vì mình sẽ thay thế cái data cũ, thí dụ dữ liệu cũ là array rổng, lúc sau có
    //dữ liệu, mình gán nó bằng array mới.
    const transactions = ref([]); // lúc ban đầu
    const error = ref(null);
    console.log(transactions, error);

    const fetchAll = async () => {
      const response = await fetch("http://localhost:3000/transactions");
      //validate, check error here
      if (!response.ok) {
        throw new Error("error");
      }
      transactions.value = await response.json();
      console.log(transactions.value.length);
    };

    fetchAll();

    return { transactions };
  },
};
</script>
