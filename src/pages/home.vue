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
  //Nếu không dùng props thì khai báo là setup(_, context) nghĩa là ko tính thằng props
  //props là gì? props là thuộc tính của component này.
  //context là gì? context là thằng đại diện cho component này.
  props: {
    theme: {
      type: String,
      default: "light",
      required: false,
    },
  },
  setup(props, context) {
    console.log(props);
    console.log(context);
    const searchName = ref("");
    const employees = reactive(["quan", "duc", "kien"]);

    const searchEmployees = computed(() =>
      employees.filter((employee) => employee.includes(searchName.value))
    );

    return { searchName, searchEmployees, employees };
  },
};
</script>
