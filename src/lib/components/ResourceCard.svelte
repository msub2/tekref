<script>
  export let name = "";
  export let description = "";
  export let pdf = "";
  export let html = "";
  export let logo = "";
  export let internalLink = "";
</script>

<div class="card">
  {#if logo != ""}
  <img src={logo} alt={name} width=90%>
  {/if}
  <h2>{name}</h2>
  <p>{description}</p>
  {#if pdf != ""}
    <a href="/viewer?pdf={pdf}">PDF</a>
  {/if}
  {#if html != ""}
    <a href="/viewer?html={html}">HTML</a>
  {/if}
  {#if internalLink != ""}
    <a href={internalLink}>View Specs</a>
  {/if}
</div>

<style>
  .card {
    margin-bottom: 20px; /* Adjust spacing between specs */
    width: 20%;
    border: 1px solid black;
    border-radius: 4%;
    margin: 1em;
    padding: 1em;
  }
</style>