<template>
  <div>
    <div class="my-4 prose">
      <p>
        As a manufacturer's rep, your commitment is a flat
        <span class="text-brand-darkest font-bold">{{ vend.due }}</span
        >.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RepNumbers',
  props: {
    vend: {
      type: Object,
      required: true,
    },
  },
}
</script>
