<script lang="ts">
  import { currentLocations, loggedInUser } from "$lib/runes.svelte";
  import { trailService } from "$lib/services/trail-service";
  import type { Trail } from "$lib/types/trail-types";
  import Coordinates from "$lib/ui/Coordinates.svelte";

  let name = $state("Stop Name");
  let lat = $state(52.160858);
  let lng = $state(-7.15242);
  let selectedLocation = $state("Clare");
  let types = ["Cafe", "Restaurant", "Pub", "Other"];
  let selectedType = $state("Stop Type");
  let message = $state("Please add Stop");
  let { trailEvent = null } = $props();

  async function addTrail() {
    if (selectedLocation && name && selectedType) {
      const location = currentLocations.locations.find(
        (location) => location._id === selectedLocation
    );
      if (location) {
        const trail: Trail = {
          name: name,
          type: selectedType,
          location: selectedLocation,
          lat: lat,
          lng: lng,
          donor: loggedInUser._id
        };
        const success = await trailService.addTrail(trail, loggedInUser.token);
        if (!success) {
          message = "Stop add not completed - some error occurred";
          return;
        }
        if (trailEvent) trailEvent(trail);
        message = `Thanks! You added ${name} to ${location.name}`;
      }
    } else {
      message = "Please select name, type and location";
    }
  }
</script>

<div>
  <div class="field">
    <label class="label" for="amount">Enter Name:</label>
    <input bind:value={name} class="input" id="name" name="name" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <label class="label" for="amount">Select Type:</label>
      {#each types as type}
        <input bind:group={selectedType} class="radio" type="radio" value={type} /> {type}
      {/each}
    </div>
  </div>
  <div class="field">
    <label class="label" for="amount">Select Location:</label>
    <div class="select">
      <select bind:value={selectedLocation}>
        {#each currentLocations.locations as location}
          <option value={location._id}>{location.name}</option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:lat bind:lng />
<div class="box mt-4">
  <div class="content has-text-centered">
    {message}
  </div>
</div>

  <div class="field">
    <div class="control">
      <button onclick={() => addTrail()} class="button">Add Stop</button>
    </div>
  </div>
</div>