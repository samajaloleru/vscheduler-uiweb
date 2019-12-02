<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import tasksNew from "@/components/dashboard/tasks/tasks-new"
  import tasksView from "@/components/dashboard/tasks/tasks-view"
  import tasksEdit from "@/components/dashboard/tasks/tasks-edit"
  import tasksSearch from "@/components/dashboard/tasks/tasks-search"

  export default {
    children: [
      { path: '', component: tasksSearch, name:"tasks-search"},
      { path: 'new', component: tasksNew, name:"tasks-new"},
      { path: ':id', component: tasksView, name:"tasks-view"},
      { path: ':id/edit', component: tasksEdit, name:"tasks-edit"},
    ],
  }
</script>
