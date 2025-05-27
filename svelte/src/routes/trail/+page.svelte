<script lang="ts">
  import { currentDataSets, loggedInUser, subTitle } from "$lib/runes.svelte";
  import Card from "$lib/ui/Card.svelte";
  import type { Trail } from "$lib/types/trail-types";
  import { trailService } from "$lib/services/trail-service";
  import TrailForm from "./TrailForm.svelte";
  import TrailList from "$lib/ui/TrailList.svelte";
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";
  import { refreshTrailMap } from "$lib/services/trail-utils";

  subTitle.text = "Add a Stop";
  let map: LeafletMap;

  onMount(async () => {
    await refreshTrailMap(map);
  });

  function trailAdded(trail: Trail) {
    map.addMarker(trail.lat, trail.lng, "");
    map.moveTo(trail.lat, trail.lng);
  }


    function refreshDonationMap(map: { $on?(type: string, callback: (e: any) => void): () => void; $set?(props: Partial<{ height?: number; }>): void; } & { addMarker: (lat: number, lng: number, popupText: string) => Promise<void>; moveTo: (lat: number, lng: number) => Promise<void>; }) {
        throw new Error("Function not implemented.");
    }
</script>

<div class="columns">
  <div class="column">
    <Card title="Trails to Date">
      <LeafletMap height={50} bind:this={map} />
    </Card>
  </div>
  <div class="column">
    <Card title="Add Stop">
      <TrailForm trailEvent={trailAdded} />
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