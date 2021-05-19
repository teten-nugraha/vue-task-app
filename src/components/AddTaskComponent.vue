<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nama">Nama</label>
        <input
          type="text"
          class="form-control"
          id="nama"
          required
          v-model="task.nama"
          name="nama"
        />
      </div>

      <div class="form-group">
        <label for="kategori">kategori</label>
        <select class="form-control" id="kategori" name="kategori" @change="onChange($event)">
            <option>Choose Kategori</option>
            <option
                v-for="(master, index) in masters"
                :key="index"
                :value="master.name" 
                >{{ master.name}}</option>
        </select>
      </div>

      <button @click="savetask" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newtask">Add</button>
    </div>
  </div>
</template>

<script>
import TaskDataService from "../services/TaskDataService";
import MasterDataService from "../services/MasterDataService";

export default {
  name: "add-task",
  data() {
    return {
      masters:[],
      task: {
        id: null,
        nama: null,
        kategori: null,
        is_finished: false
      },
      submitted: false
    };
  },
  methods: {
    onChange(event) {
            console.log(event.target.value)
            this.task.kategori = event.target.value
    },
    retrieveMasters() {
      MasterDataService.getAll()
        .then(response => {
          this.masters = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },  
    savetask() {
      var data = {
        nama: this.task.nama,
        kategori: this.task.kategori,
        is_finished: false
      };

      TaskDataService.create(data)
        .then(response => {
          this.task.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.$router.push('/')
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newtask() {
      this.submitted = false;
      this.task = {};
    }
  },
  mounted() {
      this.retrieveMasters();
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>