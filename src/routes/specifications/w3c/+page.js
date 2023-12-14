/** @type {import('./$types').PageLoad} */
export async function load({ params, url, fetch }) {
  let groups = [];
  let completed = false;
  let page = 1;
  const apiUrl = "https://api.w3.org/groups";
  while (!completed) {
    const res = await (await fetch(`${apiUrl}?page=${page}&results=100`)).json();
    if (res._links.self.href == res._links.last.href) {
      completed = true;
    }
    groups = [...groups, ...res._links.groups];
    page += 1;
  }

	return { groups, url }
}