const defaultSerch = 'The Beatles';

function onInit() {
    search(defaultSerch)
}


function onSearch(ev) {
    ev.preventDefault();
    const searchVal = document.querySelector('input[name="search"]').value;
    search(searchVal)
}


function search(searchVal) {
    getVideos(searchVal)
        .then((res) => {
            getWiki(searchVal)
                .then((value) => {
                    renderVideoWithWiki(value, res.items[0]);
                    renderCards(res.items);
                })
        })
}

function renderVideoWithWiki(wikiData, youtubeData) {
    const videoYoutubeContainer = document.querySelector('.youtube-video-container');
    videoYoutubeContainer.innerHTML = `<div class="video-container"><iframe class="youtube-frame" max-width="420" height="345" src="https://www.youtube.com/embed/${youtubeData.id.videoId}">
    </iframe></div> <div class="wiki-container"> <h2>${wikiData.query.search[0].title}</h2> <p>${wikiData.query.search[0].snippet}<a href="https://en.wikipedia.org/wiki/${wikiData.query.search[0].title}" target="_blank"> more...</a>  </p> </div>`
}
function renderCards(videos) {
    console.dir(videos);
    const elResultContainer = document.querySelector('.youtube-results-container');
    let strHtml = videos.map((video) => {
        return ` <div class="card">
        <div class="card-img"> <img src="${video.snippet.thumbnails.default.url}"></div>
        <div class="card-info"> <h5>${video.snippet.title}</h5> </div>
        </div>`
    })
    elResultContainer.innerHTML = strHtml;



}