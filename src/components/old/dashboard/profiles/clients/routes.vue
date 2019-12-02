<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import clientsNew from "@/components/dashboard/profiles/clients/clients-new"
  import clientsView from "@/components/dashboard/profiles/clients/clients-view"
  import clientsEdit from "@/components/dashboard/profiles/clients/clients-edit"
  import clientsSearch from "@/components/dashboard/profiles/clients/clients-search"

  export default {
    children: [
      { path: '', component: clientsSearch, name:"clients-search"},
      { path: 'new', component: clientsNew, name:"clients-new"},
      { path: ':id', component: clientsView, name:"clients-view"},
      { path: ':id/edit', component: clientsEdit, name:"clients-edit"},
    ],
  }
</script>
