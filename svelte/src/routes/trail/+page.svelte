<script lang="ts">
  import { loggedInUser, subTitle } from "$lib/runes.svelte";
  import { trailService } from "$lib/services/trail-service";
  import Card from "$lib/ui/Card.svelte";
  import { onMount } from "svelte";
  import TrailForm from "./TrailForm.svelte";
  import type { Location } from "$lib/types/trail-types";

  subTitle.text = "Add a Stop";
  let locationList: Location[] = [];

  onMount(async () => {
    locationList = await trailService.getLocations(loggedInUser.token);
  });
</script>

<Card title="Please add Stop">
  <TrailForm {locationList} />
</Card>