<script>
  import { page } from '$app/stores'

  let pdfData = $page.url.searchParams.get('pdf');
  let htmlData = $page.url.searchParams.get('html');
</script>

{#if pdfData != null}
  <object title="pdf" data={pdfData} type="application/pdf">
    <p>Could not load PDF.</p>
  </object>
{/if}
{#if htmlData != null}
  <iframe src={htmlData} title="Website"></iframe>
{/if}

<style>
  iframe, object {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: calc(100vh - 68px);
  }
</style>