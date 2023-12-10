/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const group = await (await fetch(`https://api.w3.org/groups/${params.group.replace('_', '/')}`)).json();
	return { group }
}