<script setup lang="ts">
import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand } from 'flowbite-vue'
</script>

<template>
  <Footer footer-type="logo">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8" id="footer">
      <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand href="https://codeCastle.com" src="/codeCastleLogo.png" alt="codeCastle Logo" name="Code Castle" />
          <span class="text-white">❤️ ¡Gracias por visitarnos!</span>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <FooterCopyright href="/" by="codeCastle™" />
    </div>
  </Footer>
</template>