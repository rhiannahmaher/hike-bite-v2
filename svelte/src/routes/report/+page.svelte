<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import TrailList from "$lib/ui/TrailList.svelte";
  import { loggedInUser, subTitle } from "$lib/runes.svelte";
  import { trailService } from "$lib/services/trail-service";
  import { onMount } from "svelte";
  import type { Trail } from "$lib/types/trail-types";

  subTitle.text = "Trails to Date";

  let trails: Trail[] = [];
  onMount(async () => {
    trails = await trailService.getTrails(loggedInUser.token);
  });
</script>

<Card title="Trails">
  <TrailList {trails} />
</Card>