<script lang="ts">
  import { currentTrails } from "$lib/runes.svelte";
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Location</th>
      <th>Added By</th>
    </tr>
  </thead>
  <tbody>
    {#each currentTrails.trails as trail}
      <tr>
        <td>
          {trail.name}
        </td>
        <td>
          {trail.type}
        </td><td>
          {trail.location.name}
        </td>
        <td>
          {trail.donor}
        </td>
      </tr>
    {/each}
  </tbody>
</table>