/** @type {import('./$types').PageLoad} */
export async function load({ params, url, fetch }) {
  const link = url.searchParams.get('link');
  if (link) {
    const group = await (await fetch(`https://api.w3.org/groups/${link.replace('_', '/')}`)).json();
    return { group }
  } else {
    return {}
  }
}