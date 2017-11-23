var baseURL;

if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3030";
} else {
    baseURL = "http://tournament-king.win";
}

export {baseURL};
