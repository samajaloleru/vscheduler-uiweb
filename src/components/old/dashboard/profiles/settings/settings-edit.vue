<template>
	<section>
		<div class="w-100 pa2 bg-light-gray br4 cf inline-flex items-center relative">
			<div class="fl bg-light-gray pa2 pb fw5 tracked ttu f7 black ">
				Settings / Edit
			</div>
			<router-link :to="{name:'settings-view',params:{id:record.ID}}" class="fl right-1 absolute ph2 pv1 br4 bg-red hover-bg-dark-red grow-ns pointer f6 white tc no-underline">
				Go Back
			</router-link>
		</div> 

		<notify class="mv2" :notifications="notifications"></notify>

		<div v-if="isFound" class="pa2 bg-light-gray br4 cf">
		  
			<div class="mt3 pa2 w-100">
				<label class="db fw4 lh-copy f7 black">Select Status </label>
				<select class="pa1 ba b--silver br2 bg-white  " v-model="record.Workflow">
					<option></option>
					<option>enabled</option>
					<option>disabled</option>
				</select>
			</div>
	
			<div class="w-100">
				<div class="fl pa2 mt3 mt0-ns w-100 w-50-ns">
					<label class="db fw4 lh-copy f6 black"> Code</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Code">
				</div>
				<div class="fl pa2 mt3 mt0-ns w-100 w-50-ns">
					<label class="db fw4 lh-copy f6 black"> Title</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " type="text" v-model="record.Title">
				</div>
			</div>


			<div class="w-100">
				<div class="fl pa2 mt3 mt0-ns w-100 w-50-ns">
					<label class=" fw4 lh-copy f6 black"> Owner</label>
					<label class=" fw4 lh-copy f7 red fr" @click="profileList=[],record.Owner='',record.OwnerID=0">- clear</label>
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

				<div class="fl pa2 mt3 mt0-ns w-100 w-50-ns">
					<label class=" fw4 lh-copy f6 black"> Partner</label>
					<label class=" fw4 lh-copy f7 red fr" @click="profileList=[],record.Partner='',record.PartnerID=0">- clear</label>
					<input class="pa2 ba b--silver br2 bg-white w-100 " @keyup="searchPartner" type="text" v-model="record.Partner">
					<div class="relative w-100">
						<small>
							<ul class="bg-white absolute w-100 pa0 br2 br--bottom mt0 list overflow-scroll" style="max-height:6em">
								<li class="pa2 black bt b--near-white" @click="record.PartnerID = partner.ID, record.Partner=partner.Fullname, partnerList = []" v-for="(partner, index) in partnerList" :key="index">
									<span class="f7">#{{index+1}}</span> {{partner.Fullname}}
								</li>
							</ul>
						</small>
					</div>
				</div>
			</div>
		
			<div class="fl pa2 mt3 mt0-ns w-100">
				<label class="db fw4 lh-copy f6 black"> Description</label>
				<textarea class="pa2 ba b--silver br2 bg-white w-100" v-model="record.Description"></textarea>
			</div>


			<div class="fl w-100 mt3">
			<div v-if="isSave" class="fr ph3 pv2 br4 bg-green grow-ns pointer f6 white tc no-underline"  @click="save" >
				Submit
			</div>
			</div>  
		</div>
		<div v-else>
			<p class="black f6 tc ma5">record not found</p>
		</div>
	</section>
</template>

<script type="text/javascript">
  import {HTTP} from "@/common"
  import {checkRedirect} from "@/common"
  import notify from "@/components/notify"
  
  export default {
	data() {return{
		url: "/api/settings", 
		record: {}, 
		notifications:[], 
		ownerList:[],
		partnerList:[],
		isFound:false,
		isSave:true,
	}},
	components: { notify },
	created () { 
		this.getRecord(this.$route.params.id) 
	},
	methods: {
		searchOwner(){
			this.searchProfile("ownerList");
		},
		searchPartner(){
			this.searchProfile("partnerList");
		},
		searchProfile(fieldName) {
			const app = this;
			const url = "/api/profiles/search";
			const search = {text: app.record.Setting, field: "Fullname", limit: 20, skip: 0};
			HTTP.post(url, search,{withCredentials: true}).then((response) => {
				app[fieldName] = response.data.Body
			}).catch((e) => { console.log(e) })
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
		save () {
			const app = this;
			app.isSave = false;
			HTTP.post(app.url, app.record, {withCredentials: true})
			.then((response) => {
				this.notifications.push(response.data)
				setTimeout(checkRedirect(response.data),1500)

				if(response.data.Body !== null){
					setTimeout(function(){
						app.$router.push({name:"settings-view",params:{id:response.data.Body}})
					},1000)
				} else {
					app.isSave = true;
				}
			}).catch((e) => {
				console.log(e)
			})
		},
	}
}
</script>