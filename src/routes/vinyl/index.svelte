<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    const res = await fetch(`/vinyl/records.json`);

    if (res.ok) {
      return {
        props: {
          records: await res.json(),
        },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load records`),
    };
  };
</script>

<script lang="ts">
  export let records: string[];
</script>

<svelte:head>
  <title>Vinyl</title>
</svelte:head>

<h1>/vinyl</h1>

<ul>
  {#each records as record}
    <li>{record}</li>
  {/each}
</ul>

<style>
  ul {
    /* Reset */
    list-style: none;
    padding-left: 0;

    /* Styles */
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
