export const GifService = async (category) => {
    
    let url = `https://api.giphy.com/v1/gifs/search?api_key=OERU45FgMf9nkuq1pc5vqfVJzGbCYDvy&q=${encodeURI(category)}&limit=9`
    let result = await fetch(url);
    const { data } = await result.json();

    result = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.original.url
        }
    });
    return result;

}   