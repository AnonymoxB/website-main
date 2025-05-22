import React, { useEffect, useState } from "react";
import { IconPlay } from "../../../public/assets/iconSVG";
import Button from "../button/Button";
import useToggle from "@/hooks/useToggle";
import { getToken } from "@/utils/auth";
import { getMyInvitationDetail, updateMusic } from "@/service/api";
import { Notyf } from 'notyf';
interface CardSelectMusicProps {
  musicURL: string;
  musicActive: boolean;
  invitationId: number|null;
  musicId: number;
  musicTitle: string;
  useMusic:string;
  setActiveMusicId?:any;
  musicIdUsedNow?:boolean;
}

function CardSelectMusic({
  musicURL,
  musicId,
  musicTitle,
  musicActive,
  invitationId,
  useMusic,
  setActiveMusicId,
  musicIdUsedNow
}: CardSelectMusicProps) {

  const { value, toggleChange } = useToggle();
  const [isLoading, setIsloading] = useState(false);
  const token = getToken();
  
  const notfy=new Notyf({
    position: {
      x: 'right',
      y: 'top',
  },})

  async function handleClick(musicId: number, musicActive: boolean) {
    setIsloading(true)
    if (token) {
      await updateMusic({
        token: token,
        music_id: musicId,
        invitation_id: invitationId,
        music_active: 1,
      });
      setActiveMusicId(musicId)
      notfy.success('Music diganti')
    }
    setIsloading(false)
  }

  return (
    <div className="border-b-[0.5px] py-2 ">
      <div className="flex flex-row justify-between gap-2">
        <button onClick={toggleChange}>
          <IconPlay />
        </button>
        <span className="flex flex-1">{musicTitle}</span>
        <Button
          onClick={() => handleClick(musicId, musicActive)}
          size="xsmall"
          disabled={!musicActive ||musicIdUsedNow }
          isLoading={isLoading}
          className={`${
            !musicActive ? "bg-gray-800 cursor-not-allowed" : "cursor-pointer"
          } ${musicIdUsedNow ?'bg-gray-800 cursor-not-allowed':''}`}
        >
        {useMusic}
        </Button>
      </div>
      {value && (
        <audio controls src={musicURL} autoPlay onPause={toggleChange} />
      )}
    </div>
  );
}

export default CardSelectMusic;
