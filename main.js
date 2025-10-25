
export default {
	async fetch(request, env, ctx) {
		if (request.method === 'GET') {
			return new Response('GET request received');
		} else if (request.method === 'POST') {
			const body = await request.json(); // Example for JSON body
			return new Response(JSON.stringify({ message: 'POST request received', data: body }));
		}
		return new Response('Method Not Allowed', { status: 405 });
	},
};
