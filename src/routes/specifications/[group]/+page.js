/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return { group: params.group }
}