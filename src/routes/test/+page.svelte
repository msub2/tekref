<script>
  import { BaseDirectory } from '@tauri-apps/api/path';
  import { writeTextFile } from '@tauri-apps/plugin-fs';

  function createTestFile() {
    writeTextFile(`test.txt`, "Test file", { dir: BaseDirectory.AppLocalData });
  }
</script>

<main>
  <h1>Test Page</h1>
  <p>This page is a testbed for me to try out tauri functions</p>

  <h2>Saving Files Locally</h2>
  <p>This is the big one, need to be able to write a file to disk to load later.</p>
  <button on:click={createTestFile}>Create test file</button>

  <h2>Bare Route Testers</h2>
  <p>Since Tauri relies on static site generation I can't feasibly use dynamic routes. A workaround for this is to use URL params instead, but I need a fallback for them.</p>
  <a href="/specifications/group">Specifications Group URL</a>
  <a href="/specifications/w3c/group">W3C Group URL</a>
</main>