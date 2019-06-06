<template>
  <el-row>
    <el-col :span="12">
      <el-button @click="clearAll">清空</el-button>
    </el-col>
    <el-col :span="12">
      <el-button @click="addLaizi">加癞子</el-button>
      <el-button @click="delLaizi">去癞子</el-button>
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
          this.$store.dispatch("zhongzuClear", element.id);
        }
        for (let element of zhiyes) {
          this.$store.dispatch("zhiyeClear", element.id);
        }
        const refs = this.$parent.$refs.herotable.$refs;
        for (let e in refs) {
          const children = refs[e];
          for (let cc in children) {
            children[cc].clearAll();
          }
        }
      },
      addLaizi() {
        for (let element of zhiyes) {
          this.$store.dispatch("zhiyeInc", element.id);
        }
      },
      delLaizi() {
        for (let element of zhiyes) {
          this.$store.dispatch("zhiyeDec", element.id);
        }
      }
    }
  };
</script>

<style>
</style>