<script lang="ts">
  import { currentLocations, subTitle } from "$lib/runes.svelte";
  import { onMount } from "svelte";
  import { currentTrails } from "$lib/runes.svelte";
  import { currentDataSets } from "$lib/runes.svelte";
  import Card from "$lib/ui/Card.svelte";
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
</script>

<div class="columns">
  <div class="column">
    <Card title="Trails By Type">
      <Chart data={currentDataSets.trailsByType} type="bar" />
    </Card>
  </div>
  <div id="location" class="column has-text-centered">
    <Card title="Trails By Location">
      <Chart data={currentDataSets.trailsByLocation} type="pie" truncateLegends={0} />
    </Card>
  </div>
</div>