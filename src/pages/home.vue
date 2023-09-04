<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Overview page</h1>
  <h1>{{ firstName }}</h1>
  <button v-on:click="onChangeSomething()">Click here to show log</button>
</template>

<script>
//ref() reactive reference.
//Có nhiều chức năng từ vue, khai báo như vậy là dùng chỉ thằng ref.
import { ref } from "vue";
export default {
  setup() {
    //Ref<String> firstName;
    let firstName = ref("q");

    function onChangeSomething() {
      // Sẽ không thay đổi firstName, vì ko có reactive như bên hàm data() cũ, vậy phải làm sao.?
      console.log(firstName); //https://ibb.co/VTcfpq4
      firstName.value = "new Name";
    }
    return {
      firstName,
      onChangeSomething,
    };
  },
};
</script>
