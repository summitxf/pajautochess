<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <ul v-for="(zhongzu,index) in zhongzus" :key="index">
          <el-image style="width: 24px; height: 24px" :src="zhongzu.icon"></el-image>
          {{ zhongzu.name }}-{{getzhongzu_fetters[zhongzu.id]?getzhongzu_fetters[zhongzu.id].count:0}}
          <ol v-for="skill in zhongzu.skills">
            <font
              color="red"
              v-if="getzhongzu_fetters[zhongzu.id] && getzhongzu_fetters[zhongzu.id].count>=skill.count"
            >{{skill.name}}-{{skill.desc}}-{{skill.count}}}</font>
            <font color="gray" v-else>{{skill.name}}-{{skill.desc}}-{{skill.count}}}</font>
          </ol>
        </ul>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <ul v-for="(zhiye,index) in zhiyes" :key="index">
          <el-image style="width: 24px; height: 24px" :src="zhiye.icon"></el-image>
          {{ zhiye.name }}-{{getzhiye_fetters[zhiye.id]?getzhiye_fetters[zhiye.id].count:0}}
          <ol v-for="skill in zhiye.skills">
            <font
              color="red"
              v-if="getzhiye_fetters[zhiye.id] && getzhiye_fetters[zhiye.id].count>=skill.count"
            >{{skill.name}}-{{skill.desc}}-{{skill.count}}}</font>
            <font color="gray" v-else>{{skill.name}}-{{skill.desc}}-{{skill.count}}}</font>
          </ol>
        </ul>
      </div>
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
    computed: {
      ...mapGetters(["getzhongzu_fetters", "getzhiye_fetters"])
    }
  };
</script>

<style>
</style>