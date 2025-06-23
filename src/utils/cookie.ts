export const setCookie = (name: string, value: string, days: number): boolean => {
    if(typeof document === "undefined") return false;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)} expires=${expirationDate.toUTCString()} path=/`;

    document.cookie = cookieValue;
    return true;
};

export const getCookie = (name: string): string | undefined => {
    if(typeof document === "undefined") return undefined;

    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        const cookieName = decodeURIComponent(cookie[0]);
        const cookieValue = decodeURIComponent(cookie[1]);  

        if (cookieName === name) {
            return cookieValue;
        }
    }

    return undefined;
};
