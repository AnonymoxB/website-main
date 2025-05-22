import Modal, { ModalComponentProps } from "@/components/modal/Modal";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import usePickImage from "@/hooks/usePickImage";
import { getToken } from "@/utils/auth";
import {
  getMyInvitationDetail,
  getSetting,
  updateSetting,
  updateSettingUrlImage,
  uploadImage,
} from "@/service/api";
import { SelectIcon, UnSelectIcon } from "../../../../../../../public/assets/iconSVG";
import { Notyf } from 'notyf';

function FormSetting(
  props: Omit<ModalComponentProps, "children"> & { params: string }
) {
  const [invitationId, setInvitationId] = useState<string>("");

  const [invitationLink, setInvitationLink] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventTime, setEventTime] = useState<string>("");
  const [addres, setAddress] = useState<string>("");
  const [timeZone, setTimeZone] = useState<string>("");
  const [lang, setLang] = useState<string>("ID");
  const [isLoading, setIsloading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState<boolean>(false);
  const [imageShareUrlFromInv, setImageShareUrlFromInv] = useState<string>('');
  const { fileImage, preview, onSelectFile } = usePickImage();
  const token = getToken();
  const { params } = props;

  const notfy=new Notyf({
    position: {
      x: 'right',
      y: 'top',
  },})

  useEffect(() => {
    async function getInvitationNSetting() {
      if (token) {
        const myInvitation = await getMyInvitationDetail(token, params);
        setInvitationId(myInvitation.data.data.detail.invitation_id);
        setImageShareUrlFromInv(myInvitation.data.data.image_share);
        if (myInvitation.data.data.detail.invitation_id) {
          const setting = await getSetting(token, myInvitation.data.data.id);
          const settingData = setting.data?.item;
          if (settingData) {
            setInvitationLink(settingData.link_slug || "");
            setTitle(settingData.title || "");
            setDescription(settingData.description || "");
            setEventDate(settingData.event_date || "");
            setEventTime(settingData.event_time || "");
            setAddress(settingData.address || "");
            setTimeZone(settingData.time_zone || "");
            setLang(settingData.lang || "");
          }
        }
      }
    }
    getInvitationNSetting();
    if (updateSuccess) {
      getInvitationNSetting();
      setTimeout(() => {
        setUpdateSuccess(false);
      }, 1000);
    }
  }, [token, params, updateSuccess]);

  async function handleSubmit() {
    setUpdateSuccess(false);
    if (!invitationLink || !title || !description || !eventDate || !eventTime || !addres || !timeZone || !lang) {
      return notfy.error('Field tidak boleh kosong')
    }

    if (invitationLink.includes(" ") || /[A-Z]/.test(invitationLink) || /[!@#$%^&*(),.?":{}|<>]/.test(invitationLink)) {
      return notfy.error('Link undangan tidak boleh mengandung spasi, huruf kapital dan karakter')
    } 

    if (token) {
      setIsloading(true);
      if (!fileImage && !imageShareUrlFromInv) {
        return notfy.error('Belum ada gambar yang dipilih')
      }

      if (!fileImage && imageShareUrlFromInv) {
        await updateSettingUrlImage({
          token: token,
          invitation_id: parseInt(invitationId),
          image_share: imageShareUrlFromInv,
        });
      }
      
      if (fileImage) {
        const uploadImageRes = await uploadImage(token, {
          invitation_id: invitationId,
          field_name: [fileImage.name.replace(/\s+/g, "-")],
          images: [fileImage],
          old_images: [imageShareUrlFromInv??null]
      });

        if (uploadImageRes.data.data.images[0]) {
           await updateSettingUrlImage({
            token: token,
            invitation_id: parseInt(invitationId),
            image_share: uploadImageRes.data.data.images[0],
          });
        }
      }

      await updateSetting({
        token: token,
        invitation_id: invitationId,
        invitation_link: invitationLink,
        title: title,
        description: description,
        event_date: eventDate,
        event_time: eventTime,
        address: addres,
        time_zone: timeZone,
        lang: lang,
      });
      notfy.success('Berhasil diupdate')
      setUpdateSuccess(true);
    }
    setIsloading(false);
  }

  return (
    <Modal
      {...props}
      contentClassName="p-4 flex flex-col gap-4"
      footer={
        <>
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            onClick={handleSubmit}
            className="w-full"
          >
            Simpan Perubahan
          </Button>
        </>
      }
    >
      <div className="self-stretch text-gray-600 text-sm leading-5">
        Tampilan share
      </div>
      <div className="flex items-start gap-6 self-stretch p-3 rounded-[0.3125rem] bg-blue-300">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col justify-center items-center w-[86px] h-[86px] rounded-xl border border-gray-200 bg-gray-50 cursor-pointer overflow-hidden"
        >
          <Image
            src={
              preview
                ? preview || "/../../../../../../assets/image/icon-upload.png"
                : imageShareUrlFromInv
                ? imageShareUrlFromInv
                : preview || "/../../../../../../assets/image/icon-upload.png"
            }
            alt=""
            width={86}
            height={86}
            className="m-auto"
          />
          <input
            id="dropzone-file"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onSelectFile}
          />
        </label>
        <div className="flex flex-col items-start gap-3 flex-1">
          <div className="text-gray-50 text-center font-semibold leading-6">
            {title}
          </div>
          <div className="self-stretch text-gray-50 text-xs">{description}</div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 self-stretch w-full">
        <div className="self-stretch text-gray-600  text-sm leading-5">
          Bahasa
        </div>
        <div className="flex justify-center items-start self-stretch gap-2">
          <Button
            iconLeft={
              lang === "ID" ? <SelectIcon/> : <UnSelectIcon/>
              
            }
            className={`${
              lang === "ID"
                ? "bg-[#0181FF] text-white"
                : "bg-white text-gray-500"
            } w-full border-2 border-blue-500 hover:bg-[#0181FF] hover:text-white duration-300`}
            onClick={() => setLang("ID")}
          >
            Indonesia
          </Button>
          <Button
            type="Tertiary"
            iconLeft={
              lang === "EN" ? <SelectIcon/> : <UnSelectIcon/>
              
            }
            className={`${
              lang === "EN"
                ? "bg-[#0181FF] text-white"
                : "bg-white text-gray-500"
            } w-full border-2 border-blue-500 hover:bg-[#0181FF] hover:text-white duration-300`}
            onClick={() => setLang("EN")}
          >
            English
          </Button>
        </div>
      </div>
      <div className="flex flex-col  gap-2 self-stretch w-full">
        <div className="self-stretch text-gray-600  text-sm leading-5">
          Link Undangan
        </div>
        <Input
          value={invitationLink}
          setValue={setInvitationLink}
          placeholder="Link Undangan"
          name="Link Undangan"
        />
      </div>
      <div className="flex flex-col  gap-2 self-stretch w-full">
        <div className="self-stretch text-gray-600  text-sm leading-5">
          Judul
        </div>
        <Input
          value={title}
          setValue={setTitle}
          placeholder="Undangan Pernikahan"
        />
      </div>
      <div className="flex flex-col  gap-2 self-stretch w-full">
        <div className="self-stretch text-gray-600  text-sm leading-5">
          Deskripsi Singkat
        </div>
        <Input
          type="text-area"
          value={description}
          setValue={setDescription}
          placeholder="Deskripsi Singkat"
        />
      </div>
      <div className="flex flex-col  gap-2 self-stretch w-full">
        <div className="self-stretch text-gray-600  text-sm leading-5">
          Tanggal Acara
        </div>
        <Input
          type="date"
          value={eventDate}
          setValue={setEventDate}
          placeholder="Deskripsi Singkat"
        />
      </div>
      <div className="flex flex-col  gap-2 self-stretch w-full">
        <div className="self-stretch text-gray-600  text-sm leading-5">
          Waktu Acara
        </div>
        <Input
          type="time"
          value={eventTime}
          setValue={setEventTime}
          placeholder="Deskripsi Singkat"
        />
      </div>
      <div className="flex flex-col  gap-2 self-stretch w-full">
        <div className="self-stretch text-gray-600  text-sm leading-5">
          Zona Waktu
        </div>
        <select
          className="bg-neutral-50 p-3 rounded-lg text-mob-extrasmall-regular focus:outline-none space-y-2"
          onChange={(e: any) => setTimeZone(e.target.value)}
          value={timeZone}
        >
          <option value="">Pilih...</option>
          <option value="WIB">WIB</option>
          <option value="WITA">WITA</option>
          <option value="WIT">WIT</option>
        </select>
      </div>
      <div className="flex flex-col  gap-2 self-stretch w-full">
        <div className="self-stretch text-gray-600  text-sm leading-5">
          Alamat Acara
        </div>
        <Input
          type="text"
          value={addres}
          setValue={setAddress}
          placeholder="Alamat Acara"
          multiple
        />
      </div>
    </Modal>
  );
}

export default FormSetting;
