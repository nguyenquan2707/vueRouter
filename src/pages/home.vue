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
import { computed, ref, reactive } from "vue";
//lifeCycle Hooks https://vuejs.org/api/composition-api-lifecycle.html
//
export default {
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
