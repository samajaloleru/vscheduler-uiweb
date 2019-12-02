<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import campaignsNew from "@/components/dashboard/marketings/campaigns/campaigns-new"
  import campaignsView from "@/components/dashboard/marketings/campaigns/campaigns-view"
  import campaignsEdit from "@/components/dashboard/marketings/campaigns/campaigns-edit"
  import campaignsSearch from "@/components/dashboard/marketings/campaigns/campaigns-search"

  export default {
    children: [
      { path: '', component: campaignsSearch, name:"campaigns-search"},
      { path: 'new', component: campaignsNew, name:"campaigns-new"},
      { path: ':id', component: campaignsView, name:"campaigns-view"},
      { path: ':id/edit', component: campaignsEdit, name:"campaigns-edit"},
    ],
  }
</script>