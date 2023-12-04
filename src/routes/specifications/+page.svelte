<script>
  // @ts-nocheck
  import { Specifications } from "$lib/registry";
</script>

<main>
  {#each Object.keys(Specifications) as specGroup}
    <h1>{specGroup}</h1>
    {#each Object.values(Specifications[specGroup]) as spec}
    <h2>{spec.name}</h2>
    <p>{spec.description}</p>
    <a href="/viewer?pdf={spec.pdf}">PDF</a>
    {/each}
  {/each}
</main>

<style>
  main {
    margin: 0 auto;
    width: 75%;
  }
</style>