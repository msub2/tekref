<script>
  // @ts-nocheck
  import ResourceListing from "$lib/components/ResourceListing.svelte";
  import { Specifications } from "$lib/registry";
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  <div class="spec-group">
    <img src={Specifications[data.group]._metadata.logo} alt={Specifications[data.group]._metadata.name} width="100%" />
    <ResourceListing dataSource={Object.values(Specifications[data.group])} />
  </div>
</main>

<style>
  main {
    margin: 0 auto;
    width: 75%;
  }
</style>