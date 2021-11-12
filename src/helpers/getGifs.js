export const getGifs = async (category) => {
    try {
        const apiUrl = 'https://api.giphy.com/v1/gifs/search';
        const apiKey = 'vV7JjQhMXQHb5KWNF0epDMYqfG7nDc0a';
        const limit = 10;
        const response = await fetch(`${apiUrl}?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`);
        const { data } = await response.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            }
        });
        return gifs;
    } catch (error) {
        console.error(error);
    }
}