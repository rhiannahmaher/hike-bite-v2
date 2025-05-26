<script lang="ts">
  import { currentDataSets, currentTrails, currentLocations, loggedInUser, subTitle } from "$lib/runes.svelte";
  import type { ActionResult } from "@sveltejs/kit";
  import Card from "$lib/ui/Card.svelte";
  import type { Trail } from "$lib/types/trail-types";
  import TrailForm from "./TrailForm.svelte";
  import TrailList from "$lib/ui/TrailList.svelte";
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";
  import { refreshTrailMap, refreshTrailState } from "$lib/services/trail-utils";
  import type { PageProps } from "./$types";

  subTitle.text = "Add a Stop";
  let { data }: PageProps = $props();
  let message = $state("Please add Stop!");

  const handleTrailSuccess = () => {
    return async ({ result }: { result: ActionResult }) => {
      if (result.type === "success") {
        const trail = result.data as Trail;
        currentTrails.trails.push(trail);
        map.addMarker(trail.lat, trail.lng, "");
        map.moveTo(trail.lat, trail.lng);
        refreshTrailState(currentTrails.trails, currentLocations.locations);
        message = `Thanks! You added ${trail.name} to ${trail.location.name}`;
      }
    };
  };

  let map: LeafletMap;

  onMount(async () => {
    await refreshTrailState(data.trails, data.locations);
    await refreshTrailMap(map);
  });
  
</script>

<div class="columns">
  <div class="column">
    <Card title="Stops to Date">
      <LeafletMap height={50} bind:this={map} />
    </Card>
  </div>
  <div class="column">
    <Card title="Add Stop">
      <TrailForm locationList={currentLocations.locations} enhanceFn={handleTrailSuccess} {message} />
    </Card>
  </div>
  <div class="column">
    <Card title="Stops to Date">
      <Chart data={currentDataSets.trailsByType} type="bar" />
    </Card>
  </div>
  <div class="column">
    <Card title="Add Trail">
      <TrailList />
    </Card>
  </div>
</div>