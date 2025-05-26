<script lang="ts">
  import { enhance } from "$app/forms";
  import Coordinates from "$lib/ui/Coordinates.svelte";

  let { locationList = [], enhanceFn, message = $bindable("") } = $props();

  let lat = 52.160858;
  let lng = -7.15242;
  let types = ["Cafe", "Restaurant", "Pub", "Other"];
</script>

<form method="POST" action="?/trail" use:enhance={enhanceFn}>
  <div class="field">
    <label class="label" for="amount">Enter Name:</label>
    <input class="input" id="name" name="name" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <label class="label" for="amount">Select Type:</label>
      {#each types as type}
        <input class="radio" type="radio" value={type} name="type" /> {type}
      {/each}
    </div>
  </div>
  <div class="field">
    <label class="label" for="amount">Select Location:</label>
    <div class="select">
      <select name="location">
        {#each locationList as location}
          <option value={location._id}>{location.name} </option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:lat bind:lng />
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth">Add</button>
    </div>
  </div>
</form>
<div class="box mt-4">
  <div class="content has-text-centered">
    {message}
  </div>
</div>