<script lang="ts">
  import { loggedInUser } from "$lib/runes.svelte";
  import { trailService } from "$lib/services/trail-service";
  import Heading from "$lib/ui/Heading.svelte";
  import Menu from "$lib/ui/Menu.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    await trailService.restoreSession();
  });
</script>

<div class="container">
  {#if loggedInUser.email}
    <Menu />
    <Heading />
  {/if}
  <slot />
</div>