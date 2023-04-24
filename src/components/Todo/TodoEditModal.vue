<template>
  <Transition name="modal">
    <div
      class="fixed z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        class="modal-container bg-white px-8 py-12 flex flex-col items-center gap-4 rounded-md"
      >
        <div>
          <slot name="header"></slot>
        </div>
        <div>
          <slot name="input"></slot>
        </div>
        <div>
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup></script>

<style scoped>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
