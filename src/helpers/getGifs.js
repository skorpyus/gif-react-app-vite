const API_KEY = 'K4nP60NEzPNxbVNSClF8PZSB1pz22FBa';

export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ category }&limit=20`;

    const resp = await fetch ( url );

    const { data = [] } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        })          
    )

    return gifs;

}