<script>
  async function getGroups() {
    let groups = [];
    let completed = false;
    let page = 1;
    const apiUrl = "https://api.w3.org/groups";
    while (!completed) {
      const res = await (await fetch(`${apiUrl}?page=${page}&results=100`)).json();
      if (res._links.self.href == res._links.last.href) {
        completed = true;
      }
      groups = [...groups, ...res._links.groups];
      page += 1;
    }
    return groups;
  }

  let getGroupsPromise = getGroups();
</script>

<main data-sveltekit-preload-data="off">
  {#await getGroupsPromise}
    <p>Retrieving W3C groups...</p>
  {:then groups}
    {#each groups as group}
      <a href="/specifications/w3c/group?link={group.href.slice(26).replace('/', '_')}">{group.title}</a>
    {/each}
  {/await}
</main>

<style>
  a {
    display: block;
  }
</style>