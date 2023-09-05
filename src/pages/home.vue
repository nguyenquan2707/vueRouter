<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Overview page</h1>
  <input type="text" v-model="searchName" />
  <ul>
    <li v-for="(employee, index) in employees" :key="index">
      {{ employee }}
    </li>
  </ul>
</template>

<script>
//ref() reactive reference.
//Có nhiều chức năng từ vue, khai báo như vậy là dùng chỉ thằng ref.
import { computed, ref, reactive } from "vue";
export default {
  setup() {
    const searchName = ref("");
    const employees = reactive(["quan", "duc", "kien"]);

    const searchEmployees = computed(() =>
      employees.filter((employee) => employee.includes(searchName.value))
    );

    return { searchName, searchEmployees, employees };
  },
};
</script>
