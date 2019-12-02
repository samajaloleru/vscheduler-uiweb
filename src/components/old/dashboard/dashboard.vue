<template>
  <section class="black">
      
    <div class="dark-gray pv0 cf w-100">
        <div class="near-white pa0">
            <div class="cf">
                <div class="fl w-100 w-50-m w-25-l pt2">
                    <div class="bg-black br1 pa2" style="min-height:172px">
                        <p class="mv1 pv1 f4">User</p>
                        <span class="dt pa1"> {{record.Title}} </span>
                        <small class="dt pa1"><span class="gray">Username: </span> {{record.Username}} - <small><router-link to="password" class="link yellow">change password</router-link></small></small>
                        <small class="dt pa1"><span class="gray">Status: </span> {{record.Workflow}} </small>
                    </div>
                </div>
                <div class="fl w-100 w-50-m w-25-l ph2-ns pt2">
                    <div class="bg-black br1 pa2" style="min-height:172px">
                        <a class="fr" oncreate="{m.route.link}" href="/admin/profile">
                            <span class="oi h1 gray" data-glyph="pencil"></span>
                        </a>

                        <p class="mv1 pv1 f4">Contact</p>
                        <small class="dt pa1"> <span class="gray">Mobile:</span> {{record.Mobile}} </small>
                        <small class="dt pa1"> <span class="gray">E-Mail:</span> {{record.Email}} </small>
                        <small class="dt pa1"> <span class="gray">Description:</span> {{record.Description}} </small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="pv0 cf w-100">
        <section>
            <div class="flex mh0 h-100 f6 i">
                <span class="v-mid pointer link h-100 flex pa3 items-center " :class="tabProps.messageClass" @click="toggleTab('messages')">Internal Messages</span>
                <span class="v-mid pointer link h-100 flex pa3 items-center " :class="tabProps.taskClass" @click="toggleTab('tasks')">Task Manager</span>
                <a class="v-mid pointer link h-100 flex pa3 items-center dark-gray" href="" target="_blank">User Guide</a>
            </div>
        </section>

        <router-view class="pv2 pv3-l"></router-view>
    </div>

    
    
  </section>
</template>

<script type="text/javascript">
    import {HTTP} from '@/common';
    import {checkRedirect} from "@/common"
    import notify from "@/components/notify"

    import tasksRoutes from "@/components/dashboard/tasks/routes.vue"
    import messagesRoutes from "@/components/dashboard/messages/routes.vue"

    export default {
        data() {return{
            url: "/api/dashboard",
            notifications: [],
            record: {},
            tabProps:{},
        }},
        components: { notify },
        created () { this.toggleTab("messages"), this.getDashboard() },
        methods: {
            getDashboard () {
                const app = this;
                HTTP.get(this.url, {withCredentials: true}).then((response) => {
                    this.record = response.data.Body
                    this.notifications.push(response.data)
                    setTimeout(checkRedirect(response.data),1500)
                }).catch((e) => { console.log(e) })
            },
            toggleTab(tabname) {
                switch(tabname) {
                default: //tasks
                    this.tabProps = {taskClass:"bg-gray white"}
                    this.$router.push({name:"tasks-search"})
                    break;
                case "messages":
                    this.tabProps = {messageClass:"bg-gray white"}
                    this.$router.push({name:"messages-search"})
                    break;
                }
            }
        },
        children: [
            {
                path: 'tasks',
                component: tasksRoutes,
                children: tasksRoutes.children
            },
            {
                path: 'messages',
                component: messagesRoutes,
                children: messagesRoutes.children
            },
        ]
    }
</script>
