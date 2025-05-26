<script lang="ts">
  import { subTitle } from "$lib/runes.svelte";
  import { refreshTrailMap, refreshTrailState  } from "$lib/services/trail-utils";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  subTitle.text = "Stops Geo Data";
  let map: LeafletMap;
  let { data }: PageProps = $props();

  onMount(async () => {
    await refreshTrailState(data.trails, data.locations);
    await refreshTrailMap(map);
  });
</script>

<Card title="Trail Locations">
  <LeafletMap height={80} bind:this={map}/>
</Card>