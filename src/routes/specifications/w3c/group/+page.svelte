<script>
  import ResourceListing from "$lib/components/ResourceListing.svelte";

  export let data;

  async function getSpecs() {
    if (!data.group || !data.group._links.specifications) {
      return null;
    }
    const res = await fetch(data.group._links.specifications.href);
    return await res.json()
  }
  let specsPromise = getSpecs();
</script>

{#if data.group}
<main>
  <h1>{data.group.name}</h1>
  <p>{data.group.description}</p>
  <h2>Specifications</h2>
  {#await specsPromise}
    <p>Retrieving specifications...</p>
  {:then specs}
    <ResourceListing dataSource={specs._links.specifications} />
  {:catch}
    <p>This group does not have any specifications.</p>
  {/await}
</main>
{:else}
<p>No group provided.</p>
{/if}

<style>
  main {
    margin: 0 auto;
    width: 75%;
  }
</style>