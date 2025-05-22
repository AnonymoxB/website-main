import Modal, { ModalComponentProps } from "@/components/modal/Modal";
import { ReactNode, useEffect, useState } from "react";
import CardSelectMusic from "@/components/card/CardSelectMusic";
import InputSearch from "@/components/input/InputSearch";
import InputToogleSwitch from "@/components/input/ToogleSwitch";
import { getToken } from "@/utils/auth";
import { getAllMusic, getMyInvitationDetail, updateMusic } from "@/service/api";
import { Notyf } from 'notyf';

function FormMusic(
  props: Omit<ModalComponentProps, "children"> & { params: string }
) {

  const [musics, setMusics] = useState<[]>([]);
  const [searchValue, setSeacrhValue] = useState<string | null>("");
  const [filteredMusic, setFilteredMusic] = useState<any>([]);
  const [invitationId, setInvitationId] = useState<number | null>(null);
  const [musicActive, setMusicActive] = useState<boolean>(true);
  const [activeMusicId, setActiveMusicId] = useState<number | null>(null);
  const token = getToken();

  const { params } = props;
  
  const notfy=new Notyf({
    position: {
      x: 'right',
      y: 'top',
  },})

  useEffect(() => {
    const getMusic = async () => {
      if (token) {
        const res = await getAllMusic(token);
        setMusics(res.data.data.music);
      }
    };
    const getInvitationDetails = async () => {
      if (token) {
        const res = await getMyInvitationDetail(token, params);
        setInvitationId(res.data.data.id);
        setActiveMusicId(parseInt(res.data.data.music_id));
        if (res.data.data.music_active == 0) {
          setMusicActive(false);
        } else {
          setMusicActive(true);
        }
      }
    };
    getMusic();
    getInvitationDetails();
  }, [token, params]);

  function handleChangeSeacrh(e: any) {
    setSeacrhValue(e.target.value);
    const filterMusic = musics.filter((items: any) =>
      items.title.toLowerCase().includes(searchValue)
    );
    setFilteredMusic(filterMusic);
  }

  function handleChangeToggleNUpdate() {
    setMusicActive(!musicActive);
    async function disableMusic() {
      if (token) {
        if (musicActive) {
           await updateMusic({
            token: token,
            music_id: activeMusicId || 1,
            invitation_id: invitationId,
            music_active: 0,
          });
          notfy.success('Music di nonaktifkan')
        } else {
          await updateMusic({
            token: token,
            music_id: activeMusicId || 1,
            invitation_id: invitationId,
            music_active: 1
          })
          notfy.success('Music di aktifkan')
        }
      }
    }
    disableMusic();
  }

  return (
    <Modal {...props} contentClassName="p-4 flex flex-col gap-4">
      <div className="flex flex-row justify-between bg-neutral-100 border-neutral-200 p-5 rounded-lg">
        {musicActive ? (
          <span className="text-blue-500 font-semibold font-lg">Aktif</span>
        ) : (
          <span className="text-neutral-500 font-lg">Tidak Aktif</span>
        )}
        <InputToogleSwitch
          value={musicActive}
          onChange={handleChangeToggleNUpdate}
        />
      </div>
      <InputSearch placholder="Cari Musik..." onChange={handleChangeSeacrh} />
      <div>
        {searchValue === "" ? (
          <>
            {/* all music */}
            {musics.map((music: any, i: number) => (
              <div key={i}>
                <CardSelectMusic
                  musicURL={music.link}
                  musicId={music.id}
                  musicTitle={music.title}
                  musicActive={musicActive}
                  invitationId={invitationId}
                  useMusic={activeMusicId === music.id ? 'Digunakan' : 'Gunakan'}
                  musicIdUsedNow={activeMusicId === music.id ? true :false }
                  setActiveMusicId={setActiveMusicId}
                />
              </div>
            ))}
            {/* all music */}
          </>
        ) : (
          <>
            {/* search music  */}
            {filteredMusic.length == 0 ? (
              <div className="text-center text-sm text-red-400 ">
                Musik tidak tersedia
              </div>
            ) : (
              <>
                {filteredMusic.map((music: any, i: number) => (
                  <div key={i}>
                    <CardSelectMusic
                      musicURL={music.link}
                      musicId={music.id}
                      musicTitle={music.title}
                      musicActive={musicActive}
                      invitationId={invitationId}
                      useMusic={activeMusicId === music.id ? 'digunakan' : 'gunakan'}
                      musicIdUsedNow={activeMusicId === music.id ? true :false }
                      setActiveMusicId={setActiveMusicId}
                    />
                  </div>
                ))}
              </>
            )}
            {/* search music */}
          </>
        )}
      </div>
    </Modal>
  );
}

export default FormMusic;
