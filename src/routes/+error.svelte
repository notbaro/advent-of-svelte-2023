<script lang="ts">
    import { page } from '$app/stores';
    import { base } from "$app/paths";
</script>

<main>
<div class="container mx-auto">
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold text-gray-800">404</h1>
        <h2 class="text-2xl font-bold text-gray-600">Page not found</h2>
        <p class="">The page you are looking for does not exist.</p>
        <a href="{base}/" class="btn variant-filled-primary mt-3">Go back home</a>
    </div>
</main>