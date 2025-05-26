<script lang="ts">
  import { currentDataSets } from "$lib/runes.svelte";
  import Card from "$lib/ui/Card.svelte";
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import type { PageProps } from "./$types";
  import { refreshTrailState } from "$lib/services/trail-utils";

  let { data }: PageProps = $props();
  refreshTrailState(data.trails, data.locations);
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