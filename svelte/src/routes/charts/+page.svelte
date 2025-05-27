<script lang="ts">
  import { currentDataSets } from "$lib/runes.svelte";
  import Card from "$lib/ui/Card.svelte";
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
</script>

<div class="columns">
  <div class="column">
    <Card title="Stops By Type">
      <Chart data={currentDataSets.trailsByType} type="bar" />
    </Card>
  </div>

  <div id="location" class="column has-text-centered">
    <Card title="Stops By Location">
      <Chart data={currentDataSets.trailsByLocation} type="pie" truncateLegends={0} />
    </Card>
  </div>
</div>