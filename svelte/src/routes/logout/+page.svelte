<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { clearTrailState } from "$lib/services/trail-utils";

  clearTrailState();
  if (browser) goto("/");
</script>