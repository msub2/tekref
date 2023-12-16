<nav>
  <div id="header">
    <a href="/">Library</a>
    <a href="/specifications">Specifications</a>
    <a href="/documentation">Documentation</a>
    <a href="/about">About</a>
    <a href="/test">Test</a>
  </div>
  <details id="hamburger">
    <summary>≡</summary>
    <a href="/">Library</a>
    <a href="/specifications">Specifications</a>
    <a href="/documentation">Documentation</a>
    <a href="/about">About</a>
    <a href="/test">Test</a>
  </details>
</nav>

<style>
  nav {
    position: sticky;
    background-color: rgb(127, 127, 127);
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-align: center;
    user-select: none;
  }
  nav > div > a {
    padding: 0 1rem;
  }

  #hamburger {
    display: none;
  }

  @media (max-width: 640px) {
    #header {
      display: none;
    }
    #hamburger {
      display: block;
      text-align: left;
      padding-left: 1em;
      list-style: none;
    }
    #hamburger > summary {
      display: block;
      font-size: 2em;
    }
    #hamburger[open] {
      background: rgb(127, 127, 127);
    }
    #hamburger > a {
      display: block;
    }
  }

</style>