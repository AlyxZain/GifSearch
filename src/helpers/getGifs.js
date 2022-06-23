
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XWhfF8aZEHaKYhzJK8YOu2Uw8n72Zd8g&q=${category}&limit=10`;
    const respuesta = await fetch(url)
    const { data } = await respuesta.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}