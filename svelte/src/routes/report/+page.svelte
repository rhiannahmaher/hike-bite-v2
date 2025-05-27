<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import TrailList from "$lib/ui/TrailList.svelte";
  import { subTitle } from "$lib/runes.svelte";
  import TrailDetails from "$lib/ui/TrailDetails.svelte";

  subTitle.text = "Stops Report";
</script>

<Card title="Stops List">
  <TrailList />
</Card>
<Card title="Stops">
  <TrailDetails />
</Card>