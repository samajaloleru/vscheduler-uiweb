<template>
  <router-view></router-view>
</template>

<script type="text/javascript">

  import invoicesRoutes from "@/components/dashboard/accountings/invoices/routes.vue"
  
  
  export default {
    children: [
		{
			path: 'invoices',
			component: invoicesRoutes,
			children: invoicesRoutes.children
		},
		
    ],
  }
</script>