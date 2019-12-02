<template>
    <section>
      <div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
        <div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
          Inventory / Asset Inventory / View
        </div>
        <router-link :to="{name:'assets-search'}" class="fl right-1 absolute ph2 pv1 br4 bg-dark-red grow-ns pointer f6 white tc no-underline">
          Go Back
        </router-link>
      </div>


      <notify class="mv2" :notifications="notifications"></notify>

      <div v-if="isFound" class="bg-light-gray br4 cf pa2">
            <small class="w-100 fl tc f7 i black">
                Created By: <b>{{record.Createdbyuser}}</b> on {{dateTimeConvert(record.Createdate)}}
            </small>

		 	<div class="mt0 pa2 dib">
				<label class="db fw4 lh-copy f7 black">Status </label>
				<input class="pa1 ba b--silver br2 bg-white w3 " type="text" disabled="disabled" v-model="record.Workflow">
			</div>

			<div class="w-100">
				<div class="fl pa2 mt3 mt0-ns w-100 w-50-m w-third-l">
					<label class="db fw4 lh-copy f6 black"> Doc No</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Docno">
				</div>

				<div class="fl pa2 mt3 mt0-ns w-100 w-50-m w-third-l">
					<label class="db fw4 lh-copy f6 black"> Doc Date</label>
					<input class="pa1-l pa2 ba b--silver br2 bg-white w-100 " type="date" disabled="disabled" v-model="record.Docdate">
				</div>

                <div class="fl pa2 mt3 mt0-ns w-100 w-third-l">
					<label class="db fw4 lh-copy f6 black"> Location</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Title">
				</div>
			</div>

			<div class="fl w-100 tc pv1">
				<label class="center fw4 lh-copy f7 pointer" :class="otherfields.color" @click="toggleOtherfields">--click to <span class="fw6 ttu">{{otherfields.text}}</span> other fields--</label>
			</div>

			<assetlines :refid="$route.params.id" />
			
			<div class="w-100" :class="otherfields.show">
				<div class="fl pa2 mt3 mt0-ns w-100">
					<label class="db fw4 lh-copy f6 black"> Notes</label>
					<textarea class="pa2 ba b--silver br2 bg-white w-100 " disabled="disabled" v-model="record.Description"></textarea>
				</div>
			</div>


			<div class="w-100">
				<div class="fl pa2 mt3 mt0-ns w-100 w-50-m w-25-l">
					<label class="db fw4 lh-copy f6 black"> Discount Amount</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Discountamount">
				</div>

				<div class="fl pa2 mt3 mt0-ns w-100 w-50-m w-25-l">
					<label class="db fw4 lh-copy f6 black"> Total Excl Tax</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Totalexcltax">
				</div>
				
				<div class="fl pa2 mt3 mt0-ns w-100 w-50-m w-25-l">
					<label class="db fw4 lh-copy f6 black"> Tax Amount</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Taxamount">
				</div>

				<div class="fl pa2 mt3 mt0-ns w-100 w-50-m w-25-l">
					<label class="db fw4 lh-copy f6 black"> Total Incl Tax</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" disabled="disabled" v-model="record.Totalincltax">
				</div>
			</div>
            
            <div class="w-100 mt3">
				<router-link :to="{name:'assets-edit',params:{id:record.ID}}" class="fr ph3 pv2 br4 bg-green grow-ns pointer f6 white tc no-underline" >
				Edit
				</router-link>
			</div>

            <small class="w-100 fl tc f7 i black">
                Updated By: <b>{{record.Updatedbyuser}}</b> on {{dateTimeConvert(record.Updatedate)}} 
            </small>

      </div>
      <div v-else>
        <h1 class="black f6 tc ma5">record not found</h1>
      </div>

    </section>
</template>

<script type="text/javascript">
import {HTTP} from "@/common"
import {checkRedirect} from "@/common"
import {dateTimeConvert} from "@/common"
import notify from "@/components/notify"
import assetlines from "@/components/dashboard/inventory/assets/assets-view-lines"


export default {
    data() {return{
      url: "/api/stocks",
      record: {},
      notifications:[],
	  isFound:false,
	  otherfields:{show:"dn",text:"SHOW",color:"dark-green"},
    }},
    components: { notify, assetlines },
    created () {
      this.getRecord(this.$route.params.id)
    },
    methods: {
        dateTimeConvert,
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
		toggleOtherfields(){
			const app = this;
			if (app.otherfields.show == "") {
				app.otherfields = {show:"dn",text:"SHOW",color:"dark-green"}
			} else {
				app.otherfields = {show:"",text:"HIDE",color:"dark-red"}
			}
		},
	}
}
</script>
