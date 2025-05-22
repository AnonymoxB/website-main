import fecthAPI from "@/config/axios";
import { Blog } from "@/type/blog";
import { FAQType } from "@/type/faq";
import { PriceType } from "@/type/price";
import clearCookie from "@/utils/auth";
import { BASE_URL } from "@/utils/baseurl";
import axios from "axios";
import { Notyf } from "notyf";

type GetBlogAllParams = {
  limit?: number;
  sort_column?: string;
  sort_order?: string;
  offset?: number;
};

export async function GetBlogAll(props?: GetBlogAllParams): Promise<Blog[]> {
  let params = "?";
  if (props?.limit) params += `&limit=${props.limit}`;
  if (props?.sort_column) params += `&sort_column=${props.sort_column}`;
  if (props?.sort_order) params += `&sort_order=${props.sort_order}`;
  if (props?.offset) params += `&offset=${props.offset}`;

  try {
    const response = await fecthAPI("GET", `blog${params}`);
    if (response.status === 200) {
      return response.data.data.items;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function getFAQ(): Promise<FAQType[]> {
  try {
    const response = await fecthAPI("GET", "faq");
    if (response.status === 200) {
      return response.data.data.items;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function getTutorials() {
  try {
    const response = await fecthAPI("GET", "tutorial");
    if (response.status === 200) {
      return response.data.data.items;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function getTutorialsDetail(slug: string) {
  try {
    const response = await fecthAPI("GET", `tutorial/show/${slug}`);
    if (response.status === 200) {
      return response.data.data.item;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export async function getTutorialsByCategory(category: string) {
  try {
    const response = await fecthAPI("GET", `tutorial/category/${category}`);
    if (response.status === 200) {
      return response.data.data.item.tutorials;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function getCategoryTutorials() {
  try {
    const response = await fecthAPI("GET", "tutorial/category");
    if (response.status === 200) {
      return response.data.data.items;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function getBlog(slug: string) {
  try {
    const response = await fecthAPI("GET", `blog/show/${slug}`);
    if (response.status === 200) {
      return response.data.data.item;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export async function loginAPI({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response = await fecthAPI("POST", "auth/login", {
      email,
      password,
    });

    if (response.status === 200) {
      return response.data.data;
    }
    return response;
  } catch (error) {
    return error;
  }
}
export async function registerAPI({
  email,
  name,
  telphone_number,
  password,
  password_confirmation,
}: {
  email: string;
  name: string;
  telphone_number: string;
  password: string;
  password_confirmation: string;
}) {
  try {
    const response = await fecthAPI("POST", "auth/register", {
      email,
      name,
      telphone_number,
      password,
      password_confirmation,
    });

    if (response.status === 200) {
      return response.data.data;
    }

    return response;
  } catch (error) {
    return error;
  }
}

export async function getProfileAPI(token: string) {
  try {
    const response = await fecthAPI("GET", "user/profile", null, {
      Authorization: `Bearer ${token}`,
    });
    if (response.status === 200) {
      return response.data.data.user;
    }

    if (response.status === 401) {
      clearCookie();
      return null;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export async function getThemeAll(category?: string) {
  let url = "template";
  if (!!category) {
    url += `/category/${category}`;
  }

  try {
    const response = await fecthAPI("GET", url);
    if (response.status === 200) {
      if (!!category) {
        return response.data.data.item.template;
      }
      return response.data.data.items;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function getCategoryTheme() {
  try {
    const response = await fecthAPI("GET", "template/category");
    if (response.status === 200) {
      return response.data.data.items;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function getPricePackage(): Promise<PriceType[]> {
  try {
    const response = await fecthAPI("GET", "package");
    if (response.status === 200) {
      return response.data.data.items;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function payPackage(
  token: string,
  email: string,
  name: string,
  phone_number: string,
  package_id: number
) {
  // for notif
  const notyf = new Notyf({
    position: { x: "right", y: "top" },
    duration: 5000,
  });

  try {
    const response = await fecthAPI(
      "POST",
      "pay",
      {
        token,
        email,
        name,
        phone_number: "085955126468",
        package_id,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    if (response.status === 200) {
      notyf.success("Your transaction with Voow has been created");
      return response.data.data;
    } else {
      notyf.error(response.message);
    }
    return false;
  } catch (error) {
    notyf.error("Terjadi kesalahan, silahkan coba lagi");
    return false;
  }
}

export async function getInvoice(token: string) {
  try {
    const response = await fecthAPI("GET", "transaction", null, {
      Authorization: `Bearer ${token}`,
    });
    if (response.status === 200) {
      return response.data.data.items;
    }
    return [];
  } catch (error) {
    return [];
  }
}

export async function updateProfile(token: string, data: any) {
  try {
    const response = await fecthAPI("POST", "user/profile/update", data, {
      Authorization: `Bearer ${token}`,
    });

    if (response.status === 200) {
      alert("sukses");
      return response.data.data;
    }
    alert("gagal" + JSON.stringify(response.data));
    return [];
  } catch (error) {
    alert("gagal" + JSON.stringify(error));
    return [];
  }
}

export async function createInvitation(token: string, id: string | number) {
  try {
    const response = await fecthAPI(
      "POST",
      `invitation/create`,
      {
        template_id: id,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

// get  my invitation
export async function getMyInvitation(token: string) {
  try {
    const response = await fecthAPI("GET", `invitation/my`, null, {
      Authorization: `Bearer ${token}`,
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getMyInvitationDetail(token: string, uuid: string) {
  try {
    const response = await fecthAPI("GET", `invitation/my/show/${uuid}`, null, {
      Authorization: `Bearer ${token}`,
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateMyInvitation(
  token: string,
  data: any,
  invitation_id: number
) {
  try {
    const response = await fecthAPI(
      "POST",
      `invitation/update-invitation`,
      {
        invitation_id,
        ...data
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function getAllMusic(token: string) {
  try {
    const response = await fecthAPI("GET", `music`, null, {
      Authorization: `Bearer ${token}`,
    });
    return response;
  } catch (err) {
    return err;
  }
}

export async function updateMusic({
  token,
  invitation_id,
  music_id,
  music_active,
}: {
  token: string;
  invitation_id: number | null;
  music_id: number | null;
  music_active: number;
}) {
  try {
    const response = await fecthAPI(
      "POST",
      "invitation/update-music",
      {
        invitation_id,
        music_id,
        music_active,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
}

// setting

export async function getSetting(token: string, id: number) {
  try {
    const response = await fecthAPI("GET", `invitation/setting/${id}`, null, {
      Authorization: `Bearer ${token}`,
    });
    return response.data;
  } catch (err) {
    return err;
  }
}

// setting
export async function updateSetting({
  token,
  invitation_id,
  invitation_link,
  title,
  description,
  event_date,
  event_time,
  address,
  time_zone,
  lang,
}: {
  token: string;
  invitation_id: string;
  invitation_link: string;
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  address: string;
  time_zone: string;
  lang: string;
}) {
  try {
    const response = await fecthAPI(
      "POST",
      "invitation/update-setting",
      {
        invitation_id,
        invitation_link,
        title,
        description,
        event_date,
        event_time,
        address,
        time_zone,
        lang,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );
    return response;
  } catch (err) {
    return err;
  }
}


export async function uploadImage(
  token: string,
  {
    images,
    invitation_id,
    field_name,
    old_images,
  }: { images: any[]; invitation_id: string; field_name: string[], old_images: string[] }
) {

  const formData = new FormData();
  formData.append("invitation_id", invitation_id);
  images.map((item) => formData.append("images[]", item));
  old_images.filter(item => item !== null).map((item) => formData.append("old_images[]", item));
  field_name.map((item) => formData.append("field_name[]", item));


  console.log({
    images,
    invitation_id,
    field_name,
    old_images,
  });


  try {
    const response = await fecthAPI(
      "POST",
      `invitation/upload-image`,
      formData,
      {
        Authorization: `Bearer ${token}`,
        headers: { 'Content-Type': 'multipart/form-data' }
      }
    );

    return response;
  } catch (error) {

    return null;
  }
}

export async function updateSettingUrlImage({
  token,
  invitation_id,
  image_share,
}: {
  token: string;
  invitation_id: number;
  image_share: string;
}) {
  try {
    const response = await fecthAPI(
      "POST",
      "invitation/update-setting-image",
      { invitation_id, image_share },
      { Authorization: `Bearer ${token}` }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export async function getAllRsvp(token: string, invitation_id: string) {
  try {
    const response = await fecthAPI("GET", `invitation/${invitation_id}/rsvp`, null, {
      Authorization: `Bearer ${token}`
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function storeRsvp(token: string, invitation_id: string, { name, address, phone_number }: { name: string; address: string; phone_number: string }) {
  try {
    const response = await fecthAPI("POST", `invitation/${invitation_id}/rsvp/store`, {
      name, address, phone_number
    },
      {
        Authorization: `Bearer ${token}`
      });
    return response;
  } catch (error) {
    return error;
  }
}

export async function updateRsvp(token: string, { invitation_id, userId, name, address, phone_number }: { invitation_id: string; userId: number; name: string; address: string; phone_number: string }) {
  try {
    const response = await fecthAPI("POST", `invitation/${invitation_id}/rsvp/update/${userId}`, {
      name, address, phone_number
    },
      {
        Authorization: `Bearer ${token}`
      });
    return response;
  } catch (error) {
    return error
  }
}

export async function deleteRsvp(token: string, invitationId: string, userId: number) {
  try {
    const response = await fecthAPI("GET", `invitation/${invitationId}/rsvp/delete/${userId}`, null,
      {
        Authorization: `Bearer ${token}`
      })
    return response;

  } catch (error) {
    return error;
  }
}

export async function uploadExcel(token:string,{invitationId,file}:{invitationId:string;file:File}){
  const formData=new FormData()
  formData.append('file',file)

  try{
    const response=await fecthAPI('POST',`invitation/${invitationId}/rsvp/import-excel`,formData,{
      Authorization: `Bearer ${token}` 
    })
    return response;
  }catch(error){
    return error;
  }
}

export async function exportExcel(token:string,invitationId:string){
  try {
    const response = await axios.get(`${BASE_URL()}invitation/${invitationId}/rsvp/export-excel`, {
      headers: {
        Authorization: `Bearer ${token}` 
      },
      responseType: "arraybuffer"
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function getGuestBook(token:string,invitationId:number){
  try{
    const response = await fecthAPI('GET',`invitation/${invitationId}/guest-book`,null,
    {
      Authorization: `Bearer ${token}` 
    });
    return response.data.data;
  }catch(error){
    return error;
  }
}

export async function getDataMessage(token:string,invitationId:number) {
  try{
    const response = await fecthAPI('GET',`invitation/${invitationId}/send-message`,null,
    {
      Authorization: `Bearer ${token}` 
    })
    return response.data.data;
  }catch(error){
    return error;
  }
}

export async function sendMessage(token:string,{invitationId,guestId}:{invitationId:number;guestId:number}){
  try{
    const response = await fecthAPI('POST',`invitation/${invitationId}/send-message/${guestId}`,null,
    {
      Authorization: `Bearer ${token}` 
    })
    return response;
  }catch(error){
    return error;
  }
}

export async function scanQrCode(token:string,{invitationId,qrCode}:{invitationId:number;qrCode:string} ) {
  try{
    const response = await fecthAPI('GET',`invitation/${invitationId}/scan/${qrCode}`,null,
    {
      Authorization: `Bearer ${token}` 
    })    
    return response;
  }catch(error){
    return error;
  }
}

export async function getDataScan(token:string,invitationId:number){
  try{
    const response = await fecthAPI('GET',`invitation/${invitationId}/scan`,null,
    {
      Authorization: `Bearer ${token}` 
    })
    return response;
  }catch(error){
    return error;
  }
}