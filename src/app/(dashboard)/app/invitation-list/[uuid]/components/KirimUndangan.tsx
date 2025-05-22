import Button from "@/components/button/Button";
import InputSearch from "@/components/input/InputSearch";
import ModalLgSize, {
  ModalComponentProps,
} from "@/components/modal/ModalLgSize";
import React, { useCallback, useEffect, useState } from "react";
import TableKirimUndangan from "./table/TableKirimUndangan";
import { getDataMessage } from "@/service/api";
import { getToken } from "@/utils/auth";

export default function KirimUndangan(
  props: Omit<ModalComponentProps, "children"> & { params: string }
) {
  const [message, setMessage] = useState<string>(
    "Undangan Aqiqah & Tasmiyah Kepada Yth nama_tamu _Bismillahirrahmanirrahim_ Assalamu’alaikum Wr. Wb. Tanpa Mengurangi Rasa Hormat. Kami Bermaksud Mengundang Bapak/Ibu/Saudara/i, Pada Acara Tasyakkuran Aqiqah Anak Kami : (Nama Anak ) Hari/Tgl : Pukul : Alamat : Undangan lebih lengkap klik link dibawah ini link_undangan Merupakan Suatu Kebahagiaan Dan Kehormatan Bagi Kami, Apabila Bapak/Ibu/Saudara/i, Berkenan Hadir Untuk Memberikan Do'a Kepada Anak Kami. Atas Kehadiran dan Do'a Kami Ucapkan Terimakasih. _Wassalamu’alaikum Wr. Wb._"
  );
  const [allDataMessage, setAllDataMessage] = useState<[]>([]);
  const [searchValue, setSeacrhValue] = useState<string | null>("");
  const [filteredMessage, setFilteredMessage] = useState<any>([]);
  const token = getToken();

  const getAllDataMessage = useCallback(async () => {
    if (token && props.invitationId) {
      const response = await getDataMessage(token, props.invitationId);
      setAllDataMessage(response.items);
    }
  }, [token, props]);

  useEffect(() => {
    getAllDataMessage();
  }, [token, props, getAllDataMessage]);

  function handleChangeSeacrh(e: any) {
    setSeacrhValue(e.target.value);
    const filterAllMessage = allDataMessage?.filter((items: any) =>
      items.name.toLowerCase().includes(searchValue)
    );
    setFilteredMessage(filterAllMessage);
  }
  // fake data untuk table sebagai contoh
  const fakeDataTable = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Nama tamu ${index + 1}`,
    phoneNumber: `08123456789${index}`,
    status: `terkirim`,
  }));
  // fake data untuk table sebagai contoh
  return (
    <ModalLgSize
      {...props}
      contentClassName="px-5 pt-[9px] font-Plus-Jakarta-Sans space-y-[32px]"
    >
      <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium">Template Undangan</h4>
        <textarea
          name=""
          id=""
          rows={6}
          className="text-gray-800 text-base font-normal p-[12px] w-full rounded-[10px] border border-gray-300"
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        ></textarea>
        <Button size="medium" className="w-full" disabled>
          Simpan Perubahan
        </Button>
      </div>
      <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium">Daftar Tamu</h4>
        <Button size="medium" className="w-full">
          Kirim ke semua
        </Button>
        <InputSearch placholder="Cari Tamu..." onChange={handleChangeSeacrh} />
      </div>
      <TableKirimUndangan
        dataTable={!searchValue ? allDataMessage : filteredMessage}
        invitationId={props?.invitationId}
        getAllDataMessage={getAllDataMessage}
      />
    </ModalLgSize>
  );
}
