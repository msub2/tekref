<script>
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data);
</script>

<main>
  {#each data.groups as group}
    <a href="/specifications/w3c/{group.href.slice(26).replace('/', '_')}">{group.title}</a>
  {/each}
</main>

<style>
  a {
    display: block;
  }
</style>