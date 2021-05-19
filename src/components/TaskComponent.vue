<template>
  <div v-if="currentTask" class="edit-form">
    <h4>Task</h4>
    <form>
      <div class="form-group">
        <label for="nama">Nama</label>
        <input type="text" class="form-control" id="nama"
          v-model="currentTask.nama"
        />
      </div>
      <div class="form-group">
        <label for="kategori">Kategori</label>
        <input type="text" class="form-control" id="kategori"
          v-model="currentTask.kategori" disabled
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTask.finished ? "finished" : "On Progress" }}
      </div>
    </form>

    <button class="badge badge-primary mr-2"
      v-if="currentTask.finished"
      @click="updateFinished(false)"
    >
      Finished
    </button>
    <button v-else class="badge badge-primary mr-2"
      @click="updateFinished(true)"
    >
      Finish
    </button>

    <button class="badge badge-danger mr-2"
      @click="deleteTask"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateTutorial"
    >
      Update
    </button>

    <a href="/">Cancel</a>

    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import TaskDataService from "../services/TaskDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentTask: null,
      message: ''
    };
  },
  methods: {
    getTask(id) {
      TaskDataService.get(id)
        .then(response => {
          this.currentTask = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateFinished(status) {
      var data = {
        id: this.currentTask.id,
        nama: this.currentTask.nama,
        kategori: this.currentTask.kategori,
        finished: status
      };

      TaskDataService.update(this.currentTask.id, data)
        .then(response => {
          this.currentTask.finished = status;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateTutorial() {
      TaskDataService.update(this.currentTask.id, this.currentTask)
        .then(response => {
          console.log(response.data);
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteTask() {
      TaskDataService.delete(this.currentTask.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "TaskList" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTask(this.$route.params.id);
    console.log('di dalam task component')
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>