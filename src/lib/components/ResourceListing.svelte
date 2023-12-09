<script>
  // @ts-nocheck
  import ResourceCard from "./ResourceCard.svelte";
  export let dataSource;
</script>

<div class="container">
  {#each dataSource as source, i}
    <ResourceCard
      name={source.name}
      description={source.description}
      pdf={source.pdf}
      html={source.html}
      logo={source.logo}
      internalLink={source.internalLink}
    />
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }
</style>