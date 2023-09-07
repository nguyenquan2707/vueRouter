import { ref } from "vue";

export default function () {
  const transactions = ref([]);
  const fetchAll = async () => {
    const response = await fetch("http://localhost:3000/transactions");
    //validate, check error here
    if (!response.ok) {
      throw new Error("error");
    }
    transactions.value = await response.json();
    console.log(transactions.value.length);
  };

  return { transactions, fetchAll };
}
