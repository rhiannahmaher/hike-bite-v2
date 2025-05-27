<script lang="ts">
  import { goto } from "$app/navigation";
  import { trailService } from "$lib/services/trail-service";
  import Message from "$lib/ui/Message.svelte";
  import UserCredentials from "$lib/ui/UserCredentials.svelte";

  let email = $state("");
  let password = $state("");
  let message = "";

  async function login() {
    console.log(`attempting to log in email: ${email} with password: ${password}`);
    let session = await trailService.login(email, password);
    if (session) {
      goto("/trail");
    } else {
      email = "";
      password = "";
      message = "Invalid Credentials";
    }
  }
</script>

<div class="box">
  {#if message}
    <Message {message} />
  {/if}
  <UserCredentials bind:email bind:password />
  <button onclick={() => login()} class="button has-background-success">Log In</button>
</div>