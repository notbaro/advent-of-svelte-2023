import type { Gift } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad  = async ({ fetch }) => {
    const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json')
    const gifts: Gift[] = await res.json()

    return { gifts }
}