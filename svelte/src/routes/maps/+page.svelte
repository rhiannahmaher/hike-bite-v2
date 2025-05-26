<script lang="ts">
  import { subTitle } from "$lib/runes.svelte";
  import { refreshTrailMap } from "$lib/services/trail-utils";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";

  subTitle.text = "Donations Geo Data";
  let map: LeafletMap;

  onMount(async () => {
    await refreshTrailMap(map);
  });
</script>

<Card title="Trail Locations">
  <LeafletMap height={80} bind:this={map}/>
</Card>