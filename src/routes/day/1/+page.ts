import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch }) => {
    const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json')
    const children = await res.json();
    return { children };
}