<script lang="ts">
  import { currentTrails } from "$lib/runes.svelte";
</script>

<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
  {#each currentTrails.trails as trail}
    <div class="box" style="display: flex; flex-direction: column; width: 300px;">
      <h5 style="color: Forestgreen; text-align: center; font-weight: bold; margin-bottom: 0.75rem;">{trail.name}</h5>
      <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 6px; margin-top: 0.5rem;">
        <p><strong>Type:</strong> {trail.type}</p>
        <p><strong>Location:</strong> {trail.location.name}</p>
        <p><strong>Added By:</strong> {trail.donor}</p>
      </div>
    </div>
  {/each}
</div>