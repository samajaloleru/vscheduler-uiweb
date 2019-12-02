<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import domainsNew from "@/components/dashboard/communications/domains/domains-new"
  import domainsView from "@/components/dashboard/communications/domains/domains-view"
  import domainsEdit from "@/components/dashboard/communications/domains/domains-edit"
  import domainsSearch from "@/components/dashboard/communications/domains/domains-search"

  export default {
    children: [
      { path: '', component: domainsSearch, name:"domains-search"},
      { path: 'new', component: domainsNew, name:"domains-new"},
      { path: ':id', component: domainsView, name:"domains-view"},
      { path: ':id/edit', component: domainsEdit, name:"domains-edit"},
    ],
  }
</script>