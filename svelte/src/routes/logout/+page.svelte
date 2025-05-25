<script lang="ts">
  import { goto } from "$app/navigation";
  import { trailService } from "$lib/services/trail-service";

  trailService.clearSession();
  goto("/");
</script>