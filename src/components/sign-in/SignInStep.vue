<template>
  <section>
    <b-steps
      v-model="activeStep"
      :animated="true"
      :rounded="true"
      :label-position="'bottom'"
    >
      <b-step-item step="1" label="Username" :clickable="false">
        <div class="input-info">
          <span>Enter your Username:</span>
          <b-input placeholder="lan ID" required></b-input>
        </div>
      </b-step-item>
      <b-step-item step="2" label="Password" :clickable="false">
        <div class="input-info">
          <span>Enter your LDAP password:</span>
          <b-input placeholder="password" required></b-input>
        </div>
      </b-step-item>
      <b-step-item step="3" label="Access" :clickable="false"></b-step-item>

      <template #navigation="{ next }">
        <b-button
          label="Submit"
          type="is-success"
          :disabled="next.disabled"
          @click.prevent="next.action"
        >
          Next
        </b-button>
      </template>
    </b-steps>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 0,
    };
  },
};
</script>
<style scoped>
.input-info {
  /* margin-top: 50px; */
  align-content: left;
  font-weight: bold;
  margin: 3em 3em 1em 3em;
  width: -webkit-fill-available;
}
.button {
  margin-left: 4em;
  margin-right: 4em;
  width: -webkit-fill-available;
}
</style>