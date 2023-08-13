<template>
  <div class="messagers__window-header">
    <img :src="avatars[src]" alt="" class="messagers__window-avatar">
    <div class="messagers__window-info">
        <h2 class="messagers__window-name">{{name}}</h2>
        <p class="messagers__window-status">{{status}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'WindowHeader',
    props:['src', 'name', 'status'],
    data(){
        return{
            avatars: {
                alex: require('@/assets/img/user1.png'),
                jane: require('@/assets/img/user2.png')
            }
        }
    }

}
</script>

<style>

</style>