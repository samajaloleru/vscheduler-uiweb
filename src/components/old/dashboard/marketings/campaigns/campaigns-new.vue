<template>
    <section>
      <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
        <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
          Campaigns / New
        </div>
        <router-link :to="{name:'campaigns-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
          Go Back
        </router-link>
      </div>  

      <notify class="mv2" :notifications="notifications"></notify>

      <div class="pa2 bg-light-gray br4 cf">
        
        <div class="fl w-100 ">
                
            <div class="fl w-100">
                <div class="fl pa2">
                    <label class="db fw4 lh-copy f7 black">Select Status </label>
                    <select class="pa1 ba b--silver br2 bg-white  " v-model="record.Workflow">
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
                    <input class="h2 w2 pointer absolute z-2 o-0 db "  type="checkbox" v-model="record.IsAuthenticated">
                    <div class="pv1">
                        <div class="relative z-1 db w2 h1 br4 bg-white">
                            <div class="absolute w1 h1 br4 shadow-4 toggle-checkbox bg-animate" :class="{'bg-dark-green right-0':record.IsAuthenticated,'bg-dark-red left-0':!record.IsAuthenticated}"></div>
                        </div>
                    </div>
                </div>

                <div class="fl pa2">  
                    <small class="gray">Code Ref:</small>
                    <input class="pa1 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Code">
                </div>
            </div>
        
            <div class="fl w-100">
                <div class="fl pa2 w-30 w-20-m w-10-l"> 
                    <label class=" fw4 lh-copy f6 black fl"> Files:</label>
                    <label class=" fw4 lh-copy f7 red fr" @click="record.File=''">- clear</label>
                    <input ref="zipFile"  @change="uploadZip('Campaign')" class="dn navy-blue pv1" type="file" >
                    <span class="pv2 ph1 br1 bw0 w-100  pointer bg-dark-green light-gray dim fl f6 items-center flex-inline tc" @click="triggerClick('zipFile')">
                        Upload ZIP
                    </span> 
                </div>



                <div class="fl pa2 w-70 w-40-m w-30-l">
                    <label class=" fw4 lh-copy f6 black"> Owner</label>
                    <label class=" fw4 lh-copy f7 red fr" @click="ownerList=[],record.Owner='',record.OwnerID=0">- clear</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " @keyup="searchOwner" type="text" v-model="record.Owner">
                    <div class="relative w-100">
                        <small>
                        <ul class="bg-white absolute w-100 pa0 br2 br--bottom mt0 list overflow-scroll" style="max-height:6em">
                            <li class="pa2 black bt b--near-white" @click="record.OwnerID = owner.ID, record.Owner=owner.Fullname, ownerList = []" v-for="(owner, index) in ownerList" :key="index">
                            <span class="f7">#{{index+1}}</span> {{owner.Fullname}}
                            </li>
                        </ul>
                        </small>
                    </div>
                </div>
    

                <div class="fl pa2 w-100 w-40-m w-30-l">
                    <label class="db fw4 lh-copy f6 black">Title </label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Title">
                </div>

                <div class="fl pa2 w-100 w-50 w-30-l">
                    <label class="db fw4 lh-copy f6 black">Link </label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Link">
                </div>

                <div class="fl w-100 w-50-m w-25-l pa2"> 
                    <label class="db fw4 lh-copy f6 black">Start Time</label>
                    <input class="w-50 w-60-ns pa1 ba b--silver fl br2 br--left bg-white " type="date" v-model="record.StartDay">
                    <input class="w-50 w-40-ns pa1 ba b--silver fl br2 br--right bg-white " type="time" v-model="record.StartTime">
                </div>

                <div class="fl w-100 w-50-m w-25-l pa2"> 
                    <label class="db fw4 lh-copy f6 black">Stop Time</label>
                    <input class="w-50 w-60-ns pa1 ba b--silver fl br2 br--left bg-white " type="date" v-model="record.StopDay">
                    <input class="w-50 w-40-ns pa1 ba b--silver fl br2 br--right bg-white " type="time" v-model="record.StopTime">
                </div>

                <div class="fl w-50 w-50-m w-25-l pa2"> 
                    <label class="db fw4 lh-copy f6 black">Send Email To</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.SmtpTo">
                </div>

                <div class="fl w-50 w-50-m w-25-l pa2"> 
                    <label class="db fw4 lh-copy f6 black">Send SMS To</label>
                    <input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.SmsTo">
                </div>
            </div>

           
            <div class="fl w-100 mt3">
                <div v-if="isSave" class="fr ph3 pv2 br4 bg-green grow-ns pointer f6 white tc no-underline"  @click="save" >
                Submit
                </div>
            </div>

        </div>
      </div>

      

    </section>
</template>

<script type="text/javascript">
  import {HTTP} from "@/common"
  import {checkRedirect} from "@/common"
  import {uploadZip} from "@/common"
  import notify from "@/components/notify"

  export default {
    data() {return{
        url: "/api/campaigns", 
        record: {Campaign:"",StartDay: new Date().toISOString().substr(0,10), StartTime:new Date().toTimeString().substr(0,5)}, 
        notifications:[], 
        campaignList:[],
        ownerList:[],
        isSave:true,
    }},
    components: { notify },
    methods: {
        triggerClick(zipRef) {
            this.$refs[zipRef].click()
        },
        uploadZip(field) {
            const app = this
			uploadZip(event, app, field)
		},
        searchOwner() {
            const app = this;
            const url = "/api/profiles/search";
            const search = {text: app.record.Owner, field: "Title", limit: 20, skip: 0};
            HTTP.post(url, search,{withCredentials: true}).then((response) => {
            app.ownerList = response.data.Body
            }).catch((e) => { console.log(e) })
        },
        save () {
            const app = this;
            app.isSave = false;
            HTTP.post(app.url, app.record, {withCredentials: true})
            .then((response) => {
            this.notifications.push(response.data)
            setTimeout(checkRedirect(response.data),1500)

            app.isSave = true;
            if(response.data.Body !== null){
                app.record = {Campaign:"",StartDay: new Date().toISOString().substr(0,10), StartTime:new Date().toTimeString().substr(0,5)}
            }
            }).catch((e) => {
                console.log(e)
            })
        },
    }
  }
</script>