import Button from "@/components/button/Button";
import CardKonfirmasiKehadiran from "@/components/card/CardKonfirmasiKehadiran";
import ModalLgSize, {
  ModalComponentProps,
} from "@/components/modal/ModalLgSize";
import React, { useCallback, useEffect, useState } from "react";
import { IconExportBukuTamu } from "../../../../../../../public/assets/iconSVG";
import InputSearch from "@/components/input/InputSearch";
import TableBukuTamu from "./table/TableBukuTamu";
import { getGuestBook } from "@/service/api";
import { getToken } from "@/utils/auth";

export default function BukuTamu(props: Omit<ModalComponentProps, "children">) {
  const [allGuestBook, setAllGuestBook] = useState<any>(null);
  const [searchValue, setSeacrhValue] = useState<string | null>("");
  const [filteredGuestBook, setFilteredGuestBook] = useState<any>([]);
  const token = getToken();

  const getAllGuestBook=useCallback(async()=>{
    if (token && props.invitationId) {
      const res = await getGuestBook(token, props.invitationId);
      setAllGuestBook(res);
    }
  },[token,props])

  useEffect(() => {
    getAllGuestBook();
  }, [props.invitationId, token,getAllGuestBook]);

  function handleChangeSeacrh(e: any) {
    setSeacrhValue(e.target.value);
    const filterGuestBook = allGuestBook?.guest_book.filter((items: any) =>
      items.name.toLowerCase().includes(searchValue)
    );
    setFilteredGuestBook(filterGuestBook);
  }
  
  return (
    <ModalLgSize
      {...props}
      contentClassName="px-5 pt-[16px] space-y-[16px] font-Plus-Jakarta-Sans"
    >
      <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium ">
          Konfirmasi Kehadiran
        </h4>
        <div className="grid lg:grid-cols-2 gap-[16px]">
          <CardKonfirmasiKehadiran
            backgroundColor="bg-emerald-500"
            title="Hadir"
            value={allGuestBook?.present}
          />
          <CardKonfirmasiKehadiran
            backgroundColor="bg-red-500"
            title="Tidak Hadir"
            value={allGuestBook?.not_present}
          />
          <CardKonfirmasiKehadiran
            backgroundColor="bg-orange-500"
            title="Ingin Hadir"
            value={allGuestBook?.want_to_attend}
          />
          <CardKonfirmasiKehadiran
            backgroundColor="bg-yellow-500"
            title="Belum Konfirmasi"
            value={allGuestBook?.not_confirm}
          />
        </div>
        <Button
          size="medium"
          iconLeft={<IconExportBukuTamu />}
          className="bg-red-500 w-full hover:bg-red-700"
        >
          Export ke excel
        </Button>
      </div>
      <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium ">Daftar Kehadiran</h4>
        <InputSearch placholder="Cari Tamu..." onChange={handleChangeSeacrh} />
      </div>
      <TableBukuTamu
        dataTable={!searchValue ? allGuestBook?.guest_book : filteredGuestBook}
      />
    </ModalLgSize>
  );
}
