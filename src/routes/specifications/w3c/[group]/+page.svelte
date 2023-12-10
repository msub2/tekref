<script>
  import ResourceListing from "$lib/components/ResourceListing.svelte";

  export let data;

  async function getSpecs() {
    const res = await fetch(data.group._links.specifications.href);
    return await res.json()
  }
  let specsPromise = getSpecs();
</script>

<main>
  <h1>{data.group.name}</h1>
  <p>{data.group.description}</p>
  <h2>Specifications</h2>
  {#await specsPromise}
    <p>Retrieving specifications...</p>
  {:then specs}
    <ResourceListing dataSource={specs._links.specifications} />
  {/await}
</main>

<style>
  main {
    margin: 0 auto;
    width: 75%;
  }
</style>