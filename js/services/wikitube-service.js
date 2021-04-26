const youtubeKey = 'AIzaSyDKnlCSl3KiML7hT4Xqs9PLCMLCPM6cDss';


function getVideos(valueSearch) {
    const prm = axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${youtubeKey}&q=${valueSearch}`)
        .then(res => {
            console.log('called')
            return res.data
        })
        .catch(err => {
            Swal.fire(
                'We sorry but we could not get it for you right now',
                'please try again later',
                'error'
            )
            return err
        })
    return prm
}

function getWiki(searchVal) {
    const prm = axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${searchVal}&format=json`)
    .then(res => {
        console.log('called')
        return res.data
    })
    .catch(err => {
        Swal.fire(
            'We sorry but we could not get it for you right now',
            'please try again later',
            'error'
        )
        return err
    })
return prm

}