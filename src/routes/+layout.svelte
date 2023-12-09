<script>
  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<slot></slot>

<style>
  :global(html, body) {
    margin: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: sans-serif;
  }
</style>