"use client";

import { usePathname } from "next/navigation";
import {
  DashboardUserIcon,
  EditProfileUserIcon,
  InvoiceUserIcon,
  MyInvitationUserIcon,
  QRCodeUserIcon,
  TutorialUserIcon,
} from "../../public/assets/IconsMenu";
import ButtonNavItem from "./button/ButtonNavItem";

const NavBottom = () => {
  const currentRoute = usePathname();
  const pageActive =
    currentRoute?.split("/").length > 2 ? currentRoute.split("/")[2] : "";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-10 px-4 py-2 bg-white flex justify-between">
      <ButtonNavItem
        href="/app"
        active={pageActive === "/app"}
        label="Dashboard"
      >
        <DashboardUserIcon color={pageActive === "" ? "#0181FF" : "#6B7280"} />
      </ButtonNavItem>
      <ButtonNavItem
        href="/app/invitation-list"
        active={pageActive === "/app/invitation-list"}
        label="undangan"
      >
        <MyInvitationUserIcon
          color={pageActive === "invitation-list" ? "#0181FF" : "#6B7280"}
        />
      </ButtonNavItem>
      <ButtonNavItem
        href="/app/qrcode"
        active={pageActive === "/app/qrcode"}
        label="QR Code"
      >
        <QRCodeUserIcon
          color={pageActive === "qrcode" ? "#0181FF" : "#6B7280"}
        />
      </ButtonNavItem>
      <ButtonNavItem
        href="/app/invoice"
        active={pageActive === "/app/invoice"}
        label="Invoice"
      >
        <InvoiceUserIcon
          color={pageActive === "invoice" ? "#0181FF" : "#6B7280"}
        />
      </ButtonNavItem>
      <ButtonNavItem
        href="/tutorial"
        active={pageActive === "/tutorial"}
        label="Tutorial"
      >
        <TutorialUserIcon />
      </ButtonNavItem>

      <ButtonNavItem
        href="/app/profile"
        active={pageActive === "/app/profile"}
        label="Profile"
      >
        <EditProfileUserIcon
          color={pageActive === "profile" ? "#0181FF" : "#6B7280"}
        />
      </ButtonNavItem>
    </nav>
  );
};

export default NavBottom;
