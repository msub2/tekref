<script>
  import { BaseDirectory, exists, writeTextFile } from "@tauri-apps/plugin-fs";

  if (!exists('userData.json')) {
    writeTextFile('userData.json', JSON.stringify({
      specifications: [],
      documentation: []
    }), { dir: BaseDirectory.AppLocalData });
  }
</script>

<p>This page will show all of your saved specifications and documentation.</p>