<template>
  <div id="app">
    <section class="todo">
      <header class="todo__header">
        <h1 class="todo__header--title">Thursday, 10th</h1>
        <h2 class="todo__header--counter">{{counter}}</h2>
      </header>
      <add-task @addTask="addTask($event)" />
      <ul class="todo__list">
        <task v-for="task in tasks" :key="task.id" :task="task" @deleteTask="deleteTask($event)" @changeStatus="changeStatus($event)" />
      </ul>
    </section>
  </div>
</template>

<script>

import Task from './components/Task/Task.vue';
import AddTask from './components/AddTask/AddTask.vue';

export default {
  name: 'app',
  components: {
    Task,
    AddTask
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
  computed: {
    counter() {
      return this.tasks.length > 0 ? `${this.tasks.length} Tasks` : ``;
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
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
