<template>
  <table>
    <tr>
      <th>&nbsp;</th>

      <th v-for="(zhongzu,index) in zhongzus" :key="index">
        <el-image style="width: 24px; height: 24px" :src="zhongzu.fetter_icon"></el-image>
        {{ zhongzu.fetter_name }}
      </th>
    </tr>

    <tr v-for="(zhiye,index) in zhiyes" :key="index">
      <th>
        <el-image style="width: 24px; height: 24px" :src="zhiye.fetter_icon"></el-image>
        {{ zhiye.fetter_name }}
      </th>

      <td v-for="(n,k) in 11" :key="k">
        <hero-item :heros="getHero(zhiye.fetter_id, zhongzus[k].fetter_id)"></hero-item>
      </td>
    </tr>
  </table>
</template>

<script>
  import HeroItem from "./HeroItem";

  import heros from "@/assets/pamj_heros.json";
  import zhongzus from "@/assets/pamj_zhongzus_fetter.json";
  import zhiyes from "@/assets/pamj_zhiyes_fetter.json";
  
  export default {
    components: { HeroItem },
    data() {
      return {
        heros: heros,
        zhongzus: zhongzus,
        zhiyes: zhiyes
      };
    },
    methods: {
      getHero(zhiyeid, zhongzuid) {
        let rsHeros = [];
        for (let element of heros) {
          if (element.zhongzu == zhongzuid && element.zhiye == zhiyeid) {
            let _url =
              "https://nie.res.netease.com/moba/m/qt/20190420165155/static/gui2/res/head_fang/" +
              element.heroID +
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