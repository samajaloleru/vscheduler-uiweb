<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import sshsNew from "@/components/dashboard/communications/sshs/sshs-new"
  import sshsView from "@/components/dashboard/communications/sshs/sshs-view"
  import sshsEdit from "@/components/dashboard/communications/sshs/sshs-edit"
  import sshsSearch from "@/components/dashboard/communications/sshs/sshs-search"

  export default {
    children: [
      { path: '', component: sshsSearch, name:"sshs-search"},
      { path: 'new', component: sshsNew, name:"sshs-new"},
      { path: ':id', component: sshsView, name:"sshs-view"},
      { path: ':id/edit', component: sshsEdit, name:"sshs-edit"},
    ],
  }
</script>