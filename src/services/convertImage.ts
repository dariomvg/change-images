import { URL_API } from "@/utils/config";

export const convertFormatImage = async (formData: FormData) => {
    const response = await fetch(`${URL_API}/format-image`, {
        method: "POST",
        body: formData
    })
    const res = await response.blob(); 
    return res; 
}