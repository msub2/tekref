<script>
  // @ts-nocheck
  import ResourceListing from "$lib/components/ResourceListing.svelte";
  import { SpecificationGroups } from "$lib/registry";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <div class="spec-group">
    <img src={SpecificationGroups[data.group].logo} alt={SpecificationGroups[data.group].name} width="100%" />
    <ResourceListing dataSource={Object.values(SpecificationGroups[data.group].specs)} />
  </div>
</main>

<style>
  main {
    margin: 0 auto;
    width: 75%;
  }
</style>