<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import messagesNew from "@/components/dashboard/messages/messages-new"
  import messagesView from "@/components/dashboard/messages/messages-view"
  import messagesEdit from "@/components/dashboard/messages/messages-edit"
  import messagesSearch from "@/components/dashboard/messages/messages-search"

  export default {
    children: [
      { path: '', component: messagesSearch, name:"messages-search"},
      { path: 'new', component: messagesNew, name:"messages-new"},
      { path: ':id', component: messagesView, name:"messages-view"},
      { path: ':id/edit', component: messagesEdit, name:"messages-edit"},
    ],
  }
</script>
