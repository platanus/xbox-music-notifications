var currentSong;

// Subscribe
app.mainViewModel.playerVM.queue.currentQueueElement.subscribe(function(element){

    if(element){
        var song = element.track.trackItem;

        // Prepare the song
        var newSong = {
            id: song.ItemId,
            picture: element.pictureUrl(200, 200),
            title: song.Name,
            artist: song.PrimaryArtist.Name,
            album: song.ParentAlbum.Name,
            duration: song.duration
        };

        // If is the first song and is not the same than the last one
        if(!currentSong || currentSong.id !== newSong.id){
            window.postMessage({ type: "NEW_SONG", song: newSong }, "*");
            currentSong = newSong;
        }

        // Preload the next song image
        var nextSong = app.mainViewModel.queueVM.getNextQueueElement();
        if(nextSong){
            var image = new Image();
            image.src = nextSong.pictureUrl(200, 200);
        }
    }
})
