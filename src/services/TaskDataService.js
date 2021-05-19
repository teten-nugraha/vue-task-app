import http from "../http-common";

class TaskDataService {
  getAll() {
    return http.get("/coresrv/tasks");
  }

  get(id) {
    return http.get(`/coresrv/tasks/${id}`);
  }

  create(data) {
    return http.post("/coresrv/tasks/", data);
  }

  update(id, data) {
    return http.put(`/coresrv/tasks/${id}`, data);
  }

  delete(id) {
    return http.delete(`/coresrv/tasks/${id}`);
  }

  deleteAll() {
    return http.delete(`/coresrv/tasks`);
  }

  findByName(nama) {
    return http.get(`/coresrv/tasks?nama=${nama}`);
  }
}

export default new TaskDataService();