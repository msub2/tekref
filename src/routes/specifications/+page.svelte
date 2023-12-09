<script>
  // @ts-nocheck
  import ResourceListing from "$lib/components/ResourceListing.svelte";
  import { SpecificationGroups } from "$lib/registry";
</script>

<main>
  <ResourceListing dataSource={Object.values(SpecificationGroups)} />
</main>

<style>
  main {
    margin: 0 auto;
    width: 75%;
  }
</style>