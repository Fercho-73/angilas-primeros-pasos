
interface Audioplayer {
    audionVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioplayer: Audioplayer = {
    audionVolume:90,
    songDuration: 36,
    song: "mess",
    details: {
        author: 'Ed sheeran',
        year: 2015
    }
}
const song = "New song"

const { song:anotherSong, songDuration:duration, details } = audioplayer;
const { author } = details;

/*
console.log('Author:', autor)
console.log('Year:', año)
console.log('Song:', anotherSong)
console.log('Duration:', duration)
*/



export{}