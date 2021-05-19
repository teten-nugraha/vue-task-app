<template>
  <div class="container-fluid">
    <div class="list">
      <div class="col-md-12">

          <div class="col-md-10">
              <input type="text" class="form-control" placeholder="Search by Nama"
            v-model="nama"/>
          </div>
          <div class="col-md-2">
              <button class="btn btn-primary" type="button"
                @click="searchTask"
              >
                Search
              </button>
          </div>
      </div>
      <div class="col-md-6">
        <h4>tasks List</h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(task, index) in tasks"
            :key="index"
            @click="setActiveTask(task, index)"
          >
            {{ task.nama }}
            <span class="badge badge-primary">{{ task.kategori }}</span>
          </li>
        </ul>

        <button class="m-3 btn btn-sm btn-danger" @click="removeAlltasks">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentTask">
          <h4>Task</h4>
          <div>
            <label><strong>Nama:</strong></label> {{ currentTask.nama }}
          </div>
          <div>
            <label><strong>Kategori:</strong></label> {{ currentTask.kategori }}
          </div>
          <div>
            <label><strong>Status:</strong></label> On Progress
          </div>

          <a class="badge badge-warning"
            :href="'/tasks/' + currentTask.id"
          >
            Edit
          </a>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskDataService from "../services/TaskDataService";

export default {
  name: "tasks-list",
  data() {
    return {
      tasks: [],
      currentTask: null,
      currentIndex: -1,
      nama: ""
    };
  },
  methods: {
    retrievetasks() {
      TaskDataService.getAll()
        .then(response => {
          this.tasks = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievetasks();
      this.currentTask = null;
      this.currentIndex = -1;
    },

    setActiveTask(tutorial, index) {
      this.currentTask = tutorial;
      this.currentIndex = index;
    },

    removeAlltasks() {
      TaskDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTask() {
      console.log(this.nama)
      TaskDataService.findByName(this.nama)
        .then(response => {
          this.tasks = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievetasks();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>