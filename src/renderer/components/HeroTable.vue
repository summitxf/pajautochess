<template>
  <table>
    <tr>
      <th>&nbsp;</th>

      <th v-for="(zhongzu,index) in zhongzus" :key="index">
        <el-image style="width: 24px; height: 24px" :src="zhongzu.icon"></el-image>
        {{ zhongzu.name }}-{{getzhongzu_fetters[zhongzu.id]?getzhongzu_fetters[zhongzu.id].count:0}}
        <ol v-for="skill in zhongzu.skills">
          <font
            color="red"
            v-if="getzhongzu_fetters[zhongzu.id] && getzhongzu_fetters[zhongzu.id].count>=skill.count"
          >{{skill.name}}-{{skill.desc}}-{{skill.count}}}</font>
          <font color="gray" v-else>{{skill.name}}-{{skill.desc}}-{{skill.count}}}</font>
        </ol>
      </th>
    </tr>

    <tr v-for="(zhiye,index) in zhiyes" :key="index">
      <th>
        <el-image style="width: 24px; height: 24px" :src="zhiye.icon"></el-image>
        {{ zhiye.name }}-{{getzhiye_fetters[zhiye.id]?getzhiye_fetters[zhiye.id].count:0}}
        <ol v-for="skill in zhiye.skills">
          <font
            color="red"
            v-if="getzhiye_fetters[zhiye.id] && getzhiye_fetters[zhiye.id].count>=skill.count"
          >{{skill.name}}-{{skill.desc}}-{{skill.count}}}</font>
          <font color="gray" v-else>{{skill.name}}-{{skill.desc}}-{{skill.count}}}</font>
        </ol>
      </th>

      <td v-for="(n,k) in 11" :key="k">
        <hero-item :heros="getHero(zhiye.id, zhongzus[k].id)" :ref="'item' + k"></hero-item>
      </td>
    </tr>
  </table>
</template>

<script>
  import HeroItem from "./HeroItem";

  import heros from "@/assets/pamj_heros.json";
  import zhongzus from "@/assets/pamj_zhongzus_fetter.json";
  import zhiyes from "@/assets/pamj_zhiyes_fetter.json";

  import { mapGetters } from "vuex";

  export default {
    components: { HeroItem },
    data() {
      return {
        heros: heros
          .sort(function(a, b) {
            return a.id - b.id;
          })
          .sort(function(a, b) {
            return a.level - b.level;
          }),
        zhongzus: zhongzus.sort(function(a, b) {
          return a.id - b.id;
        }),
        zhiyes: zhiyes.sort(function(a, b) {
          return a.id - b.id;
        })
      };
    },
    computed: {
      ...mapGetters(["getzhongzu_fetters", "getzhiye_fetters"])
    },
    methods: {
      getHero(zhiyeid, zhongzuid) {
        let rsHeros = [];
        for (let element of heros) {
          if (element.zhongzu == zhongzuid && element.zhiye == zhiyeid) {
            let _url =
              "https://nie.res.netease.com/moba/m/qt/20190420165155/static/gui2/res/head_fang/" +
              element.id +
              ".png";
            let _u = _url.substring(8);
            element.imgSrc = "https://images.weserv.nl/?url=" + _u;
            rsHeros.push(element);
          }
        }
        return rsHeros;
      }
    }
  };
</script>

<style>
  table {
    border-collapse: collapse;
    border: none;
  }

  table,
  th,
  td {
    border: solid 1px gray;
  }
</style>