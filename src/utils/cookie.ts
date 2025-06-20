export const setCookie = (name: string, value: string, days: number) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)} expires=${expirationDate.toUTCString()} path=/`;

    document.cookie = cookieValue;
};

export const getCookie = (name: string): string | undefined => {
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
