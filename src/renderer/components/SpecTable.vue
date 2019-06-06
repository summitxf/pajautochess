<template>
  <el-row>
    <el-col :span="12">
      <el-button @click="clearAll">清空</el-button>
    </el-col>
    <el-col :span="12">
      <el-button @click="clearAll">清空</el-button>
    </el-col>
  </el-row>
</template>

<script>
  import zhongzus from "@/assets/pamj_zhongzus_fetter.json";
  import zhiyes from "@/assets/pamj_zhiyes_fetter.json";

  import { mapGetters } from "vuex";

  export default {
    data() {
      return {
        zhongzus: zhongzus,
        zhiyes: zhiyes
      };
    },
    methods: {
      clearAll() {
        for (let element of zhongzus) {
          this.$store.dispatch("zhongzuClear", element.fetter_id);
        }
        for (let element of zhiyes) {
          this.$store.dispatch("zhiyeClear", element.fetter_id);
        }
      }
    }
  };
</script>

<style>
</style>