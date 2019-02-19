<template>
  <li class="task">
    <div class="task__input">
      <button class="task__checkbox" @click="changeStatus(task.id)" :class="{'task__checkbox--done' : task.status}" >     
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"/></svg>
      </button>
    </div>
    <p class="task__content" :class="{'task__content--done' : task.status}">{{task.content}}</p>
    <span class="task__date" :class="{'task__date--done' : task.status}">{{task.date}}</span>
    <button class="task__delete-btn" @click="deleteTask(task.id)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg>
    </button>
  </li>
</template>

<script>

export default {
  name: 'task',
  props: {
    task: Object
  },
  methods: {
    deleteTask(id) {
      this.$emit('deleteTask', id);
    },
    changeStatus(id) {
      this.$emit('changeStatus', id);
    }
  }
};

</script>

<style scoped src="./Task.scss" lang="scss" />