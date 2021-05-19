import http from '../http-common';

class AnalyticReportService {

    getAllReport() {
        return http.get("/analyticsrv/analytic/getList")
    }
    
    getCountReport() {
        return http.get("/analyticsrv/analytic/countReport")
    }
}

export default new AnalyticReportService();