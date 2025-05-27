<script lang="ts">
  import { loggedInUser } from "$lib/runes.svelte";
</script>

<nav class="navbar is-full-width">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/trail">
        <span class="icon"> <i class="fas fa-map-marker-alt" style="color: Forestgreen"></i></span>
        <span class="icon mr-1"><i class="fab fa-pagelines" style="color: Forestgreen"></i></span>
        <span style="color: Forestgreen"><strong>Hike & Bite</strong> </span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="/trail"> Dashboard </a>
        <a class="navbar-item" href="/report"> Stops </a>
        <a class="navbar-item" href="/charts"> Charts </a>
        <a class="navbar-item" href="/maps"> Maps </a>
        <a data-sveltekit-preload-data="tap" class="navbar-item" href="/logout"> Logout [{loggedInUser.name}]</a>
      </div>
      <div></div>
    </div>
  </div>
</nav>