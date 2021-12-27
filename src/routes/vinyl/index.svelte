<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  import type { RecordSchema } from "./_db";

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
  export let records: RecordSchema[];
</script>

<svelte:head>
  <title>Vinyl</title>
</svelte:head>

<h1>/vinyl</h1>

<ul>
  {#each records as record}
    <li>
      <img
        alt={record.title}
        async
        class="cover_image"
        decoding="async"
        loading="lazy"
        src={record.cover_image}
      />
    </li>
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

  .cover_image {
    display: block;

    width: 100%;
    max-width: 16rem;

    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
  }
</style>
