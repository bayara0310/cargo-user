const mainUrl = "http://localhost:8000";

export const cargoall = mainUrl + "/api/cargo/all";
export const cargostatus = mainUrl + "/api/cargo/status";
export const cargoone = mainUrl + "/api/cargo/";
export const cargoadd = mainUrl + "/api/cargo/add";

export const orderadduri = mainUrl + "/api/order/add";
export const userorderall = mainUrl + "/api/order/user/";

export const userorderfilteruri = mainUrl + "/api/order/filter";

export const commentadduri = mainUrl + "/api/comment/add";
export const commentCargoUri = mainUrl + "/api/comment/cargo/";
export const commentUserUri = mainUrl + "/api/comment/user/";
export const commentUserFindUri = mainUrl + "/api/comment/user/find/";
export const filtersAllCargo = mainUrl + "/api/cargo/filter/typen"
export const ratinguri = mainUrl + "/api/rating/add"
export const ratinguriget = mainUrl + "/api/rating/"


export const TYPES = {
    AGAAR: "AIR",
    GAZAR: "LAND",
    TOMOR: "RAILROAD",
    USAN: "WATER"
}

export const NATION = {
    GER: "GER",
    KOR: "KOR",
    CHINA: "CHINA",
    USA: "USA"
}

export const BARAA = {
    ALL: "ALL", //bvgd
    REGISTERED: "REGISTERED",  //ilgeesen
    APPROVED: "APPROVED",   //batalgaajsan
    RECEIVED: "RECEIVED",   //huleen awsan
    CAME: "CAME",  //irsen
    CONFIRM: "CONFIRM",  //huleej awsan
}
