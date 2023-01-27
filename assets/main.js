const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCaq9q1REW3zYv2Jn1OQzThg&part=snippet%2Cid&order=date&maxResults=50';
const content = null || document.getElementById('content');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2365460906msh0670be783987d87p1d85d0jsnb17f151ea077',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
async function fetchData(urlApi) { const response = await fetch(urlApi, options); const data = await response.json(); return data; }
(async () => {
    try {
        const videos = await fetchData(API); 
        let view = ` ${videos.items.map(video => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}"target="_blank">
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
      </a>
    `).slice(0, 50).join('')}
    `; content.innerHTML = view;
    } catch (error) { console.log(error); }
})();


