<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import campaignsRoutes from "@/components/dashboard/marketings/campaigns/routes.vue"
  
  export default {
    children: [
        {
          path: 'campaigns',
          component: campaignsRoutes,
          children: campaignsRoutes.children
        },
    ],
  }
</script>