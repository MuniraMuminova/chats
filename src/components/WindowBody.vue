<template>
  <main class="main__body">
    <TransitionGroup name="list">
    <div class="main__chatitem" v-for="(mess, index) in message" :key="index">
       <div class="main__chatitem-body " :class="{
        send: mess.sendId == sendId,
        get: mess.sendId != sendId,
        
       }">
        <span class="main__chatitem-time">{{mess.time}}</span>
        <div class="main__chatitem-text">
          <img :src="mess.photo" v-if="mess.photo?.length > 0"  alt="">
          <p>{{mess.body}}</p>
        </div>
       </div>
    </div>
    </TransitionGroup>
  </main>
</template>

<script>
export default {
    name: 'WindowBody',
    props:{
      message: Array,
      sendId: Number
    }

}
</script>

<style>

</style>