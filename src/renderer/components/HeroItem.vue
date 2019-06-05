<template>
  <div v-if="heros.length > 0">
    <div v-for="hero in heros">
      <el-checkbox v-model="hero.checked" @change="checkHero(hero)">
        <el-image
          style="width: 24px; height: 24px"
          :src="hero.imgSrc"
          :style="getHeroStyle(hero.level)"
        ></el-image>
        {{ hero.heroName }}-{{ hero.poolnum }}
      </el-checkbox>
    </div>
  </div>
  <div v-else>&nbsp;</div>
</template>

<script>
  export default {
    props: {
      heros: {
        type: Array
      }
    },
    methods: {
      getHeroStyle(level) {
        switch (level) {
          case 1:
            return "border: 2px solid gray";
          case 2:
            return "border: 2px solid green";
          case 3:
            return "border: 2px solid blue";
          case 4:
            return "border: 2px solid violet";
          case 5:
            return "border: 2px solid orange";
        }
      },
      checkHero(hero) {
        if (hero.checked) {
          this.$store.dispatch("zhongzuInc", hero.zhongzu);
          this.$store.dispatch("zhiyeInc", hero.zhiye);
        } else {
          this.$store.dispatch("zhongzuDec", hero.zhongzu);
          this.$store.dispatch("zhiyeDec", hero.zhiye);
        }
      }
    }
  };
</script>

<style scoped>
</style>
