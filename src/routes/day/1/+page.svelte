<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    interface child {
        name: string;
        tally: number;
    }
    //@ts-ignore
    let source = data.children;
</script>
