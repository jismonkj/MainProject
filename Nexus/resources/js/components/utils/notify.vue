<template>
  <div class="notify">
    <transition-group leave-active-class="animate fade">
      <notify
        v-for="notify in notifications"
        v-bind:key="notify.id"
        v-bind:notify="notify"
        @expired="expireNotification(notify)"
        @closed="sliceNotification(notify.id)"
      ></notify>
    </transition-group>
  </div>
</template>
<script>
export default {
  mounted() {},
  data: function() {
    return {
      notifications: [
        {
          id: 12323,
          message: "Welcome to NEXUS!"
        }
      ]
    };
  },
  methods: {
    sliceNotification: function(notifyId) {
      var index = this.notifications.findIndex(item => item.id == notifyId);
      this.notifications.splice(index, 1);
    },
    expireNotification: function(notify) {
      this.notifications.splice(this.notifications.indexOf(notify), 1);
    }
  },
  components: {
    notify: {
      props: ["notify"],
      mounted() {
        setTimeout(() => this.$emit("expired"), 7000);
      },
      template:
        '<div class="notify-box row">' +
        '<span class="author-thumb col-2 p-0">' +
        '<img src="theme/img/avatar15-sm.jpg" alt="author">' +
        "</span>" +
        '<span class="notify-event col-9">' +
        '<span class="chat-message-item" v-html="notify.message"></span>' +
        "</span>" +
        '<span class="notify-close col-1 p-0" @click="$emit(\'closed\')">' +
        '<i class="far fa-times-circle"></i>' +
        "</span>" +
        "</div>"
    }
  }
};
</script>
