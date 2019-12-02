<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import sshsRoutes from "@/components/dashboard/communications/sshs/routes.vue"
  import domainsRoutes from "@/components/dashboard/communications/domains/routes.vue"
  

  export default {
    children: [
        {
          path: 'sshs',
          component: sshsRoutes,
          children: sshsRoutes.children
        },
        {
          path: 'domains',
          component: domainsRoutes,
          children: domainsRoutes.children
        },
    ],
  }
</script>