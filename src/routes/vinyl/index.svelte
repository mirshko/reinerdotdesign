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

<ul class="flex flex-wrap gap-4">
  {#each records as record}
    <li>
      <img
        alt={record.title}
        async
        class="block aspect-square w-full h-full object-cover object-center h-64 w-64"
        decoding="async"
        loading="lazy"
        src={record.cover_image}
      />
    </li>
  {/each}
</ul>
