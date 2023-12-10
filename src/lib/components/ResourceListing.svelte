<script>
  import ResourceCard from "./ResourceCard.svelte";
  export let dataSource;
</script>

<div class="container">
  {#each dataSource as source, i}
    <ResourceCard
      name={source.name ? source.name : source.title}
      description={source.description}
      pdf={source.pdf}
      html={source.html ? source.html : source.href ? `https://www.w3.org/TR/${source.href.substring(34)}/` : undefined}
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