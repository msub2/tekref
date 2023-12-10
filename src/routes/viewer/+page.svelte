<script>
  import { page } from '$app/stores'

  let pdfData = $page.url.searchParams.get('pdf');
  let htmlData = $page.url.searchParams.get('html');
  let w3 = htmlData?.includes('w3.org');
  if (htmlData && w3) {
    // W3 has a CSP preventing regular embedding outside the cms.w3.org domain, so I just hackily fetch the page as text
    // and inject it into an empty iframe. I also need to rewrite relative paths as absolute ones for the images to load.
    fetch(htmlData).then(res => {
      res.text().then(text => {
        const fixedText = text.replaceAll(`src="images`, `src="${htmlData}images`).replaceAll('url(images', `url(${htmlData}images`);
        // @ts-ignore We know our element exists and is an iframe so ignore warnings here.
        document.getElementById('fallback').contentWindow.document.write(fixedText);
      })
    })
  }
</script>

{#if pdfData != null}
  <object title="pdf" data={pdfData} type="application/pdf">
    <p>Could not load PDF.</p>
  </object>
{/if}
{#if htmlData != null && !w3}
  <iframe src={htmlData} title="Website"></iframe>
{:else}
  <iframe id="fallback" title="Website"></iframe>
{/if}

<style>
  iframe, object {
    margin: 0 auto;
    padding: 0;
  }
  object {
    width: 100%;
    height: calc(100vh - 68px);
  }
  iframe {
    width: calc(100vw - 4px);
    height: calc(100vh - 72px);
  }
</style>