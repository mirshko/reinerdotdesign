<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";

  $: isActive = (href: string) => $page.path === href;
</script>

<nav>
  <ul>
    <li><a href="/">{isActive("/") ? "[x]" : "[ ]"} Home</a></li>
    <li><a href="/vinyl">{isActive("/vinyl") ? "[x]" : "[ ]"} Vinyl</a></li>
  </ul>
</nav>

<slot />
