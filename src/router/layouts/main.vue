<script>

</script>

<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '@design';

.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
}

#card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}
#card span {
 margin-left: 5px;
}
#card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

}
</style>
