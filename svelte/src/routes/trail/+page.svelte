<script lang="ts">
  import { currentDataSets, subTitle } from "$lib/runes.svelte";
  import Card from "$lib/ui/Card.svelte";
  import TrailForm from "./TrailForm.svelte";
  import TrailList from "$lib/ui/TrailList.svelte";
  // @ts-ignore
  import Chart from "svelte-frappe-charts";

  subTitle.text = "Add a Stop";
</script>

<div class="columns">
  <div class="column">
    <Card title="Stops to Date">
      <Chart data={currentDataSets.trailsByType} type="bar" />
      <TrailList />
    </Card>
  </div>
  <div class="column">
    <Card title="Add Stop">
      <TrailForm />
    </Card>
  </div>
</div>