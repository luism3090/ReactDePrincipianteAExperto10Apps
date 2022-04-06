export const validateSearch = (artist, song) => {

    let state;
    if(artist.trim()===""){

        state = {
                errorValidateSearch: true,
                msjerrorValidateSearch:'The artist name is required'
            }
    }
    else if(song.trim()===""){

        state = {
                errorValidateSearch: true,
                msjerrorValidateSearch:'The song name is required'
            }
    }
    else{
        state = {
            errorValidateSearch: false,
            msjerrorValidateSearch:'Ok'
        }
    }

    return state;

}