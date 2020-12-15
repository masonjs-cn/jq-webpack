<template>
  <div class="error">404</div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.error{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 100px;
  color: red;
}
</style>
