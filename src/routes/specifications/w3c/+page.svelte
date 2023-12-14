<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<main>
  {#each data.groups as group}
    <a href="/specifications/w3c/group?link={group.href.slice(26).replace('/', '_')}">{group.title}</a>
  {/each}
</main>

<style>
  a {
    display: block;
  }
</style>