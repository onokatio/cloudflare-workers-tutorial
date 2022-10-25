addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(event) {
    const response = new Response("Hello World !", { status: 200 });
    return response;
}
