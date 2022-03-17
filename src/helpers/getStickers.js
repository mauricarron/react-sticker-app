export const getStickers = async (search) => {
  const API_KEY = "OEv5QuVDiGVqLnDTug5jejwxtApomauL";
  const LIMIT = 15;
  let url;

  if (search) {
    url = `api.giphy.com/v1/stickers/search?q=${encodeURI(
      search
    )}&limit=${LIMIT}&api_key=${API_KEY}`;
  } else {
    url = `api.giphy.com/v1/stickers/trending?limit=${LIMIT}&api_key=${API_KEY}`;
  }

  const resp = await fetch(url);
  const { data } = await resp.json();
  const stickers = data.map((sticker) => {
    return {
      id: sticker.id,
      title: sticker.title,
      url: sticker.images.original.webp,
    };
  });

  return stickers;
};
