export const getStickers = async (search) => {
  let url;
  const LIMIT = 15;
  const API_KEY = "OEv5QuVDiGVqLnDTug5jejwxtApomauL";

  if (search === "trending") {
    url = `https://api.giphy.com/v1/stickers/trending?limit=${LIMIT}&api_key=${API_KEY}`;
  } else {
    url = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(
      search
    )}&limit=${LIMIT}&api_key=${API_KEY}`;
  }

  const resp = await fetch(url);
  const { data } = await resp.json();

  const stickerResults = data.map((sticker) => {
    return {
      id: sticker.id,
      title: sticker.title,
      url: sticker.images.original.webp,
    };
  });

  return stickerResults;
};
