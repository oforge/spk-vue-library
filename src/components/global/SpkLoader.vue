<template>
  <div class="spk-loader">
    <div class="spinner"></div>
  </div>
</template>

<style scoped lang="scss">
.spk-loader {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.spk-loader--m {
    .spinner {
      width: map-get($fontSizes, 'm');
      height: map-get($fontSizes, 'm');
      border-width: 4px;
    }
  }
  &.spk-loader--l {
    .spinner {
      width: map-get($fontSizes, 'l');
      height: map-get($fontSizes, 'l');
      border-width: 5px;
    }
  }
  &.spk-loader--xl {
    .spinner {
      width: map-get($fontSizes, 'xl');
      height: map-get($fontSizes, 'xl');
      border-width: 6px;
    }
  }
  &.spk-loader--xxl {
    .spinner {
      width: map-get($fontSizes, 'xxl');
      height: map-get($fontSizes, 'xxl');
      border-width: 7px;
    }
  }

  &.spk-loader--dark {
    .spinner {
      border-color: rgba(0, 0, 0, 0.3);
      border-top-color: rgba(0,0,0,0.7);
    }
  }

  .spinner {
    display: block;
    margin: auto;
    width: map-get($fontSizes, 's');
    height: map-get($fontSizes, 's');
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: rgba(255, 255, 255, 0.7);
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
