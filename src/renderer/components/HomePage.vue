<template>
  <div>
    <hero-table ref="herotable"></hero-table>
    <spec-table></spec-table>
    <!-- <fetter-table></fetter-table> -->
  </div>
</template>

<script>
  import HeroTable from "./HeroTable";
  import FetterTable from "./FetterTable";
  import SpecTable from "./SpecTable";

  export default {
    components: { HeroTable, FetterTable, SpecTable }
  };
</script>

<style>
</style>