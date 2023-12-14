<script>
  // @ts-nocheck
  import ResourceListing from "$lib/components/ResourceListing.svelte";
  import { SpecificationGroups } from "$lib/registry";

  export let data;

  let group = data.url.searchParams.get('group');
</script>

{#if !group}
<p>No group provided</p>
{:else}
<main>
  <div class="spec-group">
    <img src={SpecificationGroups[group].logo} alt={SpecificationGroups[group].name} width="100%" />
    <ResourceListing dataSource={Object.values(SpecificationGroups[group].specs)} />
  </div>
</main>
{/if}

<style>
  main {
    margin: 0 auto;
    width: 75%;
  }
</style>