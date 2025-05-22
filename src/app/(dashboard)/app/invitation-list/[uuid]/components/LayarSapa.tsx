import Button from "@/components/button/Button";
import ModalLgSize, {
  ModalComponentProps,
} from "@/components/modal/ModalLgSize";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Notyf } from "notyf";
import { getToken } from "@/utils/auth";
import { getDataScan, scanQrCode } from "@/service/api";
export default function LayarSapa(
  props: Omit<ModalComponentProps, "children">
) {
  const [isLoading, setIsloading] = useState<{ open: boolean; stop: boolean }>({
    open: false,
    stop: false,
  });
  const [allDataScan, setAllDataScan] = useState<[]>([]);
  const readerRef = useRef<Html5Qrcode | null>(null);
  const token = getToken();
  const notfy = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  const getAllDataScan = useCallback(async () => {
    if (token && props.invitationId) {
      const response = await getDataScan(token, props.invitationId);
      setAllDataScan(response.data.data.items);
    }
  }, [token, props]);

  async function scanQr(qrCode: string) {
    if (token && props.invitationId && qrCode) {
      const response = await scanQrCode(token, {
        invitationId: props.invitationId,
        qrCode: qrCode,
      });
      if (response.data.code === 200) {
        getAllDataScan();
        return notfy.success(
          `Scan QR Code ${response.data.data.value} Berhasil`
        );
      }
      return notfy.error("Scan Gagal");
    }
  }

  useEffect(() => {
    getAllDataScan();
  }, [token, props, getAllDataScan]);

  const handleOpenCamera = async () => {
    setIsloading((prev) => ({ ...prev, open: true }));
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    const qrCodeSuccessCallback = (decodedText: any, decodedResult: any) => {
      if (decodedText) {
        scanQr(decodedText);
      }
    };
    const qrCodeErrorCallBack = (error: any) => {
      console.log(error);
    };

    try {
      const devices = await Html5Qrcode.getCameras();
      if (devices && devices.length) {
        const cameraId = devices[0].id;
        if (!readerRef.current) {
          readerRef.current = new Html5Qrcode("reader");
          notfy.success("Kamera Digunakan");
        }
        readerRef.current.start(
          cameraId,
          config,
          qrCodeSuccessCallback,
          qrCodeErrorCallBack
        );
      }
      setIsloading((prev) => ({ ...prev, open: false }));
    } catch (error) {
      notfy.error("Gagal Menggunakan Kamera");
    }
  };

  const handleStopScan = async () => {
    if (readerRef.current) {
      setIsloading((prev) => ({ ...prev, stop: true }));
      try {
        await readerRef.current.stop();
        readerRef.current = null;
        notfy.success("Kamera Dimatikan");
      } catch (err) {
        notfy.error("Gagal Mematikan Kamera, Silahkan Coba Lagi");
      }
      setIsloading((prev) => ({ ...prev, stop: false }));
    }
  };

  return (
    <ModalLgSize
      {...props}
      contentClassName="px-5 pt-[9px] space-y-[16px] font-Plus-Jakarta-Sans"
    >
      <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium ">QR Code Scanner</h4>
        <p>
          Check-in lokasi dengan QR code, Cukup scan menggunakan handphone untuk
          memastikan kamu terdaftar menjadi tamu yang hadir
        </p>
        {!readerRef.current && (
          <Button
            size="medium"
            className="lg:hidden w-full"
            onClick={handleOpenCamera}
            isLoading={isLoading.open}
          >
            Buka Scanner
          </Button>
        )}
        {readerRef.current && (
          <Button
            size="medium"
            className="lg:hidden w-full"
            onClick={handleStopScan}
            isLoading={isLoading.stop}
          >
            Stop
          </Button>
        )}
        <div id="reader" className="lg:hidden w-full"></div>
      </div>
      <div className="space-y-[16px]">
        <h4 className="text-black text-xl font-medium">Layar Sapa</h4>
        <div className="rounded-[10px] border border-gray-300 p-[16px] inline-flex flex-wrap gap-3 w-full">
          {!allDataScan.length && (
            <div className="text-center w-full">Data not found</div>
          )}
          {allDataScan?.map((scan: any, i: number) => (
            <span
              className="w-fit px-[20px] py-[10px] rounded-[60px] bg-gray-100"
              key={i}
            >
              {scan.name}
            </span>
          ))}
        </div>
      </div>
    </ModalLgSize>
  );
}
