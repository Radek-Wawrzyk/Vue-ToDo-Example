<template>
  <div class="add-task">
    <div class="add-task__action">
      <button class="add-task__btn" @click="toggleEdit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"/></svg>
      </button>
    </div>
    <div class="add-task__input" v-if="edit">
      <input :class="{'has-error' : error}" type="text" v-model="task.content" @keyup.enter="addTask" placeholder="Type your task" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'addTask',
  data: () => ({
    task: {
      content: '',
      date: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      status: false,
    },
    edit: false,
    autoID: 3,
    error: false
  }),
  methods: {
    toggleEdit() {
      this.edit =! this.edit;
      this.error = false;
    },
    addTask() {
      if (this.task.content.length > 0) {
        this.$emit('addTask', { ...this.task, id: this.autoID });
        this.task.content = '';
        this.autoID++;
        this.error = false;
      } else {
        this.error = true;
      }
    }
  },
};

</script>

<style scoped src="./AddTask.scss" lang="scss" />