<template>
  <div class="w-10 fl-l">
    <nav class="vh-100 overflow-y-scroll fixed bg-near-white">
      <ul class="list pt0 ph0 mt0">
        <slot ></slot>

        <li class="ph2 bg-black dim" >
        <router-link to="/admin" class="no-underline ">
          <p class="h3 f7 inline-flex items-center mv0 white ">
            <span class="oi mr2" data-glyph="dashboard"></span>
            Dashboard
          </p>
        </router-link>
         </li>
        
        <menulistgroup title="Profiles" :submenu="submenu.profiles"/>        
        <menulistgroup title="Marketing" :submenu="submenu.marketing"/>
        <!-- <menulistgroup title="Orders" :submenu="submenu.orders"/>
        <menulistgroup title="Inventory" :submenu="submenu.inventory"/>
        <menulistgroup title="Accounting" :submenu="submenu.accounting"/> -->
        <menulistgroup title="Analytics" :submenu="submenu.analytics"/>
        <menulistgroup title="Communications" :submenu="submenu.communications"/>
        <menulistgroup title="System Security" :submenu="submenu.security"/>

          <li class="ph2 bg-black-80 dim" >
            <router-link  class="no-underline" to="/">
              <p class="h3 f7 inline-flex items-center mv0 white ">
                <span class="oi mr2" data-glyph="account-logout"></span>
                Logout
              </p>
            </router-link>
          </li>
      </ul>
    </nav>
    
    <div class="menulist"></div>
  </div>
</template>
<script type="text/javascript">
  import menulistgroupComponent from "@/components/dashboard/menulistgroup"
  const submenu = {
   
    profiles: [
        {to:"/admin/profiles/clients",icon:"people",title:"Clients"},
        // {to:"/admin/profiles/suppliers",icon:"people",title:"Suppliers"},
        // {to:"/admin/profiles/staffs",icon:"people",title:"Staffs"},
        // {to:"/admin/profiles/documents",icon:"box",title:"Documents"},
        // {to:"/admin/profiles/settings",icon:"cog",title:"Settings"},
    ],

    marketing: [
        // {to:"/admin/marketing/seocontents",icon:"graph",title:"SEO"},
        // {to:"/admin/marketing/blogs",icon:"bullhorn",title:"Blogs"},
        {to:"/admin/marketings/campaigns",icon:"browser",title:"Campaigns"},
        // {to:"/admin/marketing/newsletters",icon:"envelope-open",title:"Newsletters"},
        // {to:"/admin/marketing/medias",icon:"image",title:"Media Gallery"},
    ],

    orders: [
        {to:"/admin/orders/pricelists",icon:"list-rich",title:"Pricelists"},
        {to:"/admin/orders/sales",icon:"list-rich",title:"Sales Order"},
        {to:"/admin/orders/purchases",icon:"list-rich",title:"Purchase Orders"},
        {to:"/admin/orders/receivings",icon:"list-rich",title:"Order Receivings"},
    ],

    inventory: [
      {to:"/admin/inventory/items",icon:"list-rich",title:"Items"},
      {to:"/admin/inventory/stocks",icon:"list-rich",title:"Stock Inventory"},
      {to:"/admin/inventory/materials",icon:"list-rich",title:"Material Inventory"},
      {to:"/admin/inventory/assets",icon:"list-rich",title:"Asset Inventory"},
      {to:"/admin/inventory/others",icon:"list-rich",title:"Others Inventory"},
      {to:"/admin/inventory/categorys",icon:"list-rich",title:"Categories"},
    ],  

    accounting: [
        {to:"/admin/accountings/invoices",icon:"list-rich",title:"Invoices"},
        {to:"/admin/accountings/accounts",icon:"list-rich",title:"Accounts"},
        {to:"/admin/accountings/journals",icon:"list-rich",title:"Journals"},
        {to:"/admin/accountings/ledgers",icon:"loop-circular",title:"Ledgers"},
    ],

    analytics: [
        {to:"/admin/analytics/hits",icon:"target",title:"Hits"},
        {to:"/admin/analytics/blacklists",icon:"ban",title:"Blacklists"},
        {to:"/admin/analytics/activations",icon:"task",title:"Activations"},
    ],

    communications: [
        // {to:"/admin/communications/sms",icon:"phone",title:"SMS"},
        {to:"/admin/communications/sshs",icon:"terminal",title:"SSHs"},
        // {to:"/admin/communications/smtp",icon:"envelope-closed",title:"SMTP"},
        {to:"/admin/communications/domains",icon:"globe",title:"Domains"},
        // {to:"/admin/communications/documentations",icon:"document",title:"Documentations"},
    ],

    security: [
        {to:"/admin/security/users",icon:"people",title:"Users"},
        {to:"/admin/security/roles",icon:"cog",title:"Roles"},
        {to:"/admin/security/permissions",icon:"lock-locked",title:"Permissions"},
        // {to:"/admin/security/sshserver",icon:"terminal",title:"SSH Server"},
        // {to:"/admin/security/caddyserver",icon:"globe",title:"Caddy Server"},
        {to:"/admin/security/database",icon:"cloudy",title:"Database Admin"},
    ],

    //REMOVE BELOW MENUS
    
  }
  export default {
    data() {return{
      submenu
    }},
    components: {
      "menulistgroup": menulistgroupComponent,
    },
    methods:{
        toggleMenu() {
            this.$parent.toggleMenu();
        }
    }
  }
</script>