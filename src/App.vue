<template>
  <div id="app">
    <section class="task">
      <ul class="tasks">
        <task v-for="task in tasks" :key="task.id" :task="task" @deleteTask="deleteTask($event)" @changeStatus="changeStatus($event)" />
      </ul>
    </section>
  </div>
</template>

<script>

import Task from './components/Task/Task.vue';

export default {
  name: 'app',
  components: {
    Task
  },
  data: () => ({
    tasks: [
      {
        id: 1,
        status: false,
        content: 'Kup mieszkanie i zabij michała i daj prace',
        date: '10/20/2019'
      },
      {
        id: 2,
        status: true,
        content: 'Naucz michała Vue.js!',
        date: '12/20/2019'
      }
    ]
  }),
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    changeStatus(id) {

      this.tasks.forEach(task => task.id === id ? task.status =! task.status : false);
    }
  }
};

</script>

<style scoped src="./App.scss" lang="scss" />
