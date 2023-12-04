<script>
  import { getTauriVersion, getVersion } from '@tauri-apps/api/app'

  async function getVersions() {
    const tauriVersion = await getTauriVersion();
    const appVersion = await getVersion();
    return { tauriVersion, appVersion };
  }

  let versionsPromise = getVersions();
</script>


<main>
  <h1>About</h1>
  <p>tekRef helps provide quick local access to various technical documentation and specifications that you might want quick reference to.</p>

  {#await versionsPromise}
  <p>Loading version data...</p>
  {:then versions}
  <p>Tauri version: {versions.tauriVersion}</p>
  <p>tekRef version: {versions.appVersion}</p>
  {/await}
</main>
