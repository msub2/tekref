<script>
  import { page } from '$app/stores'

  let pdfData = $page.url.searchParams.get('pdf')
</script>

<object title="pdf" data={pdfData} type="application/pdf">
  <p>Could not load PDF.</p>
</object>

<style>
  object {
    margin: 0 auto;
    width: 100%;
    height: calc(100vh - 68px);
  }
</style>