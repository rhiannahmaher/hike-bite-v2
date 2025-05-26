<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import TrailList from "$lib/ui/TrailList.svelte";
  import { subTitle } from "$lib/runes.svelte";
  import { refreshTrailState } from "$lib/services/trail-utils";
  import type { PageProps } from "./$types";

  subTitle.text = "Stops to Date";
  let { data }: PageProps = $props();
  refreshTrailState(data.trails, data.locations);
</script>

<Card title="Donations">
  <TrailList />
</Card>
<Card title="Trails">
  <TrailList />
</Card>