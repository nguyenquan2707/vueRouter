<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Overview page</h1>
  <h1>{{ firstName }}</h1>
  <button v-on:click="onChangeSomething()">Click here to show log</button>
</template>

<script>
export default {
  setup() {
    let firstName = "q";

    function onChangeSomething() {
      // Sẽ không thay đổi firstName, vì ko có reactive như bên hàm data() cũ, vậy phải làm sao.?
      firstName = "new Name";
      console.log("hee...");
    }
    return {
      firstName,
      onChangeSomething,
    };
  },
};
</script>
