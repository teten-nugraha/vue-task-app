import http from "../http-common";

class MasterDataService {

    getAll() {
        return http.get("/mastersrv/master/");
    }

}

export default new MasterDataService();