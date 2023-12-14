<script>
  import { BaseDirectory, exists, writeTextFile } from "@tauri-apps/plugin-fs";

  if (!exists('userData.json', { dir: BaseDirectory.AppLocalData })) {
    writeTextFile('userData.json', JSON.stringify({
      specifications: [],
      documentation: []
    }), { dir: BaseDirectory.AppLocalData });
  }
</script>

<p>This page will show all of your saved specifications and documentation.</p>