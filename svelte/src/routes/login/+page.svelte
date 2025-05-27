<script lang="ts">
  import LoginForm from "./LoginForm.svelte";
</script>

<section class="hero is-fullheight is-default is-bold">
  <div class="hero-head"></div>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <h1 class="title has-text-centered">Login to Hike & Bite</h1>
          <LoginForm />
        </div>
        <div class="column is-6 is-offset-1">
          <figure class="image is-4by3">
            <img class="object-fit" src="/mountain.jpg" alt="mountain" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>