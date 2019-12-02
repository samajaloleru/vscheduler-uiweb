<template>
	<section>
        <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
            <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
            Domains / View 
            </div>
            <router-link :to="{name:'domains-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
            Go Back
            </router-link>
        </div>


        <notify class="mv2" :notifications="notifications"></notify>

        <div v-if="isFound" class="pa2 bg-light-gray br4 cf">
            <div class="fl w-100 ">
            
                <div class="fl w-100">
                    <div class="fl pa2">
                        <label class="db fw4 lh-copy f7 black">Select Status </label>
                        <select class="pa1 ba b--silver br2 bg-white " disabled="disabled" v-model="record.Workflow">
                        <option></option>
                        <option>enabled</option>
                        <option>disabled</option>
                        </select>
                    </div>

                
                    <div class="fl pa2">  
                        <small class="gray">SSL:</small>
                        <input class="h2 w2 pointer absolute z-2 o-0 db " type="checkbox" disabled="disabled" v-model="record.IsSSL">
                        <div class="pv1">
                            <div class="relative z-1 db w2 h1 br4 bg-white">
                                <div class="absolute w1 h1 br4 shadow-4 toggle-checkbox bg-animate" :class="{'bg-dark-green right-0':record.IsSSL,'bg-dark-red left-0':!record.IsSSL}"></div>
                            </div>
                        </div>
                    </div>

                    <div class="fl pa2">  
                        <small class="gray">WWW:</small>
                        <input class="h2 w2 pointer absolute z-2 o-0 db " type="checkbox" disabled="disabled" v-model="record.IsWWW">
                        <div class="pv1">
                            <div class="relative z-1 db w2 h1 br4 bg-white">
                                <div class="absolute w1 h1 br4 shadow-4 toggle-checkbox bg-animate" :class="{'bg-dark-green right-0':record.IsWWW,'bg-dark-red left-0':!record.IsWWW}"></div>
                            </div>
                        </div>
                    </div>

                    <div class="fl pa2">  
                        <small class="gray">Wildcard:</small>
                        <input class="h2 w2 pointer absolute z-2 o-0 db " type="checkbox" disabled="disabled" v-model="record.IsWildcard">
                        <div class="pv1">
                            <div class="relative z-1 db w2 h1 br4 bg-white">
                                <div class="absolute w1 h1 br4 shadow-4 toggle-checkbox bg-animate" :class="{'bg-dark-green right-0':record.IsWildcard,'bg-dark-red left-0':!record.IsWildcard}"></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="fl w-100">
                    <div class="fl pa2 w-50 w-25-l">
                        <label class=" fw4 lh-copy f6 black"> Owner</label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Owner">
                    </div>
                
                    <div class="fl pa2 w-50 w-25-l">
                        <label class=" fw4 lh-copy f6 black"> Campaign</label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Campaign">
                    </div>

                    <div class="fl pa2 w-50 w-25-l">
                        <label class="db fw4 lh-copy f6 black">Code </label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Code">
                    </div>


                    <div class="dn db-l fl w-100"></div>

                    <div class="fl pa2 w-50 w-25-l">
                        <label class="db fw4 lh-copy f6 black">Title </label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Title">
                    </div>

                    <div class="fl pa2 w-50 w-25-l">
                        <label class="db fw4 lh-copy f6 black">Domain </label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Domain">
                    </div>

                    <div class="fl pa2 w-50 w-25-l">
                        <label class="db fw4 lh-copy f6 black">Proxy </label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Proxy">
                    </div>
                </div>
                
                <div class="fl w-100 mt3">
                    <router-link :to="{name:'domains-edit',params:{id:record.ID}}" class="fr ph3 pv2 br4 bg-green grow-ns pointer f6 white tc no-underline" >
                    Edit
                    </router-link>
                </div>

            </div>
        </div>
        <div v-else>
            <h1 class="black f6 tc ma5">record not found</h1>
        </div>

	</section>
</template>

<script type="text/javascript">
  import {HTTP} from "@/common"
  import {checkRedirect} from "@/common"
  import notify from "@/components/notify"
  import domainIcon from "@/assets/img/user.png"

  export default {
	data() {return{
	  url: "/api/domains", 
	  record: {}, 
	  notifications:[], 
	  isFound:false,
	  domainIcon
	}},
	components: { notify },
	created () { 
	  this.getRecord(this.$route.params.id) 
	},
	methods: {
	  getRecord (id) {
		const app = this;
		HTTP.get(this.url+'?id='+id, {withCredentials: true}).then((response) => {
		  this.record = response.data.Body
		  this.notifications.push(response.data)
		  setTimeout(checkRedirect(response.data),1500)

		  if(response.data.Body.ID == id){
			app.isFound = true
		  }
		}).catch((e) => { console.log(e) })
	  },
	}
  }
</script>