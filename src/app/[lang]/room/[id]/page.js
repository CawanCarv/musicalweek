import { getDictionary } from "@/utils/dictionaries";
import { getMusic } from "@/utils/spotify";

import InputRange from 'react-input-range';

export default async function Page({ params: { lang, id } }) {
  const dict = await getDictionary(lang);

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const res = await fetch(
    `https://musicalweek-api.azurewebsites.net/endpoints/procura_sala.php?id_musica_sala=${id}`,
    {
      method: "GET",
      headers: headers,
      credentials: "include",
    }
  );
  if (res.ok && res.status == 200) {
    const rooms = await res.json();
    // console.log(rooms);
    const music = await getMusic(rooms.musicas[rooms.musicas.length - 1].musica);
    console.log(music.album.images)
    return (
        <>
            {rooms.sala}
            <img src={music.album.images[1].url} alt="" />
            <InputRange
                maxValue={20}
                minValue={0}
                value={this.state.value}
                onChange={value => this.setState({ value })} 
            />
        </>
    );
  } else {
    console.log(res);
  }

  return <></>;
}
