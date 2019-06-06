<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content bg-purple">
        <ul v-for="(zhongzu,index) in zhongzus" :key="index">
          <el-image style="width: 24px; height: 24px" :src="zhongzu.fetter_icon"></el-image>
          {{ zhongzu.fetter_name }}-{{getzhongzu_fetters[zhongzu.fetter_id]?getzhongzu_fetters[zhongzu.fetter_id].count:0}}
          <ol v-for="fetter_skill in zhongzu.fetter_skills">
            <font
              color="red"
              v-if="getzhongzu_fetters[zhongzu.fetter_id] && getzhongzu_fetters[zhongzu.fetter_id].count>=fetter_skill.skill_count"
            >{{fetter_skill.skill_name}}-{{fetter_skill.skill_desc}}-{{fetter_skill.skill_count}}}</font>
            <font
              color="gray"
              v-else
            >{{fetter_skill.skill_name}}-{{fetter_skill.skill_desc}}-{{fetter_skill.skill_count}}}</font>
          </ol>
        </ul>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light">
        <ul v-for="(zhiye,index) in zhiyes" :key="index">
          <el-image style="width: 24px; height: 24px" :src="zhiye.fetter_icon"></el-image>
          {{ zhiye.fetter_name }}-{{getzhiye_fetters[zhiye.fetter_id]?getzhiye_fetters[zhiye.fetter_id].count:0}}
          <ol v-for="fetter_skill in zhiye.fetter_skills">
            <font
              color="red"
              v-if="getzhiye_fetters[zhiye.fetter_id] && getzhiye_fetters[zhiye.fetter_id].count>=fetter_skill.skill_count"
            >{{fetter_skill.skill_name}}-{{fetter_skill.skill_desc}}-{{fetter_skill.skill_count}}}</font>
            <font
              color="gray"
              v-else
            >{{fetter_skill.skill_name}}-{{fetter_skill.skill_desc}}-{{fetter_skill.skill_count}}}</font>
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