<template>
	<section>
        <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
            <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
            Campaigns / View 
            </div>
            <router-link :to="{name:'campaigns-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
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
                            <option>draft</option>
                            <option>running</option>
                            <option>paused</option>
                            <option>disabled</option>
                            <option>completed</option>
                        </select>
                    </div>

                
                    <div class="fl pa2">  
                        <small class="gray">Login:</small>
                        <input class="h2 w2 pointer absolute z-2 o-0 db "  type="checkbox" disabled="disabled" v-model="record.IsAuthenticated">
                        <div class="pv1">
                            <div class="relative z-1 db w2 h1 br4 bg-white">
                                <div class="absolute w1 h1 br4 shadow-4 toggle-checkbox bg-animate" :class="{'bg-dark-green right-0':record.IsAuthenticated,'bg-dark-red left-0':!record.IsAuthenticated}"></div>
                            </div>
                        </div>
                    </div>

                    <div class="fl pa2">  
                        <small class="gray">Code Ref:</small>
                        <input class="pa1 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Code">
                    </div>
                </div>
            
                <div class="fl w-100">
                    <div class="fl pa2 w-30 w-20-m w-10-l"> 
                        <label class=" fw4 lh-copy f6 black fl"> Files:</label>
                        <span class="pv2 ph1 br1 bw0 w-100  pointer bg-dark-red light-gray dim fl f6 items-center flex-inline tc" @click="downloadZip">
                            Download ZIP
                        </span> 
                    </div>



                    <div class="fl pa2 w-70 w-40-m w-30-l">
                        <label class=" fw4 lh-copy f6 black"> Owner</label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Owner">
                    </div>
        

                    <div class="fl pa2 w-100 w-40-m w-30-l">
                        <label class="db fw4 lh-copy f6 black">Title </label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Title">
                    </div>

                    <div class="fl pa2 w-100 w-50 w-30-l">
                        <label class="db fw4 lh-copy f6 black">Link </label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Link">
                    </div>

                    <div class="fl w-100 w-50-m w-25-l pa2"> 
                        <label class="db fw4 lh-copy f6 black">Start Time</label>
                        <input class="w-50 w-60-ns pa1 ba b--silver fl br2 br--left bg-white " type="date" disabled="disabled" v-model="record.StartDay">
                        <input class="w-50 w-40-ns pa1 ba b--silver fl br2 br--right bg-white " type="time" disabled="disabled" v-model="record.StartTime">
                    </div>

                    <div class="fl w-100 w-50-m w-25-l pa2"> 
                        <label class="db fw4 lh-copy f6 black">Stop Time</label>
                        <input class="w-50 w-60-ns pa1 ba b--silver fl br2 br--left bg-white " type="date" disabled="disabled" v-model="record.StopDay">
                        <input class="w-50 w-40-ns pa1 ba b--silver fl br2 br--right bg-white " type="time" disabled="disabled" v-model="record.StopTime">
                    </div>

                    <div class="fl w-50 w-50-m w-25-l pa2"> 
                        <label class="db fw4 lh-copy f6 black">Send Email To</label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.SmtpTo">
                    </div>

                    <div class="fl w-50 w-50-m w-25-l pa2"> 
                        <label class="db fw4 lh-copy f6 black">Send SMS To</label>
                        <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.SmsTo">
                    </div>
                </div>
                
                <div class="fl w-100 mt3">
                    <span v-if="isDuplicate" class="fl ph3 pv2 br2 bg-navy grow-ns pointer f6 white tc no-underline" @click="duplicateRecord">
                        Duplicate
                    </span>

                    <router-link :to="{name:'campaigns-edit',params:{id:record.ID}}" class="fr ph3 pv2 br4 bg-green grow-ns pointer f6 white tc no-underline" >
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
  import campaignIcon from "@/assets/img/user.png"

  export default {
	data() {return{
	  url: "/api/campaigns", 
	  record: {}, 
	  notifications:[], 
	  isFound:false,
	  isDuplicate:true,
	  campaignIcon
	}},
	components: { notify },
	created () { 
	  this.getRecord(this.$route.params.id) 
	},
	methods: {
        downloadZip() {
            if (confirm("Click OK to Download Campaign ZIP file!")){ 
                window.open(this.record.Campaign, '_blank'); 
            }
        },
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
        duplicateRecord() {
            const app = this;
            app.isDuplicate = false;
            HTTP.post(app.url+"/duplicate", {ID:app.record.ID}, {withCredentials: true})
            .then((response) => {
                this.notifications.push(response.data)
                setTimeout(checkRedirect(response.data),1500)
                if(response.data.Body !== null){
                    setTimeout(function(){
                        app.$router.push({name:"campaigns-edit",params:{id:response.data.Body}})
                    },1000)
                } else {
                    app.isDuplicate = true;
                }
            }).catch((e) => {
                console.log(e)
            })

            
                    
        }
	}
  }
</script>