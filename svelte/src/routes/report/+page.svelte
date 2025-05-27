<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import TrailList from "$lib/ui/TrailList.svelte";
  import { subTitle } from "$lib/runes.svelte";
  import TrailDetails from "$lib/ui/TrailDetails.svelte";

  subTitle.text = "Stops to Date";
</script>

<Card title="Trails Report">
  <TrailList />
</Card>
<Card title="Trails">
  <TrailDetails />
</Card>