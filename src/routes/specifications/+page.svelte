<script>
  // @ts-nocheck
  import ResourceListing from "$lib/components/ResourceListing.svelte";
  import { Specifications } from "$lib/registry";
</script>

<main>
  <!-- {#each Object.keys(Specifications) as specGroup}
    <div class="spec-group">
      <img src={Specifications[specGroup]._metadata.logo} alt={Specifications[specGroup]._metadata.name} width="100%" />
      <div class="specs-container">
        <a href="/specifications/{specGroup}">Link</a>
      </div>
    </div>
  {/each} -->
  <ResourceListing dataSource={Object.keys(Specifications).map(group => Specifications[group]._metadata)} />
</main>

<style>
  main {
    margin: 0 auto;
    width: 75%;
  }

  .spec-group {
    box-sizing: border-box;
    padding: 0 15px; /* Adjust spacing between columns */
  }

  .specs-container {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px; /* Compensate for spec-group padding */
    margin-right: -15px; /* Compensate for spec-group padding */
  }

  .spec-group {
    flex: 0 0 50%; /* Two columns, adjust as needed */
    box-sizing: border-box;
    padding: 0 15px; /* Adjust spacing between columns */
  }
</style>