<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'

const email = ref();
const password = ref();
</script>

<template>
    <Navbar class="head">
      <template #logo>
        <NavbarLogo  alt="Flowbite logo" image-url="https://flowbite.com/docs/images/logo.svg">
          Flowbite
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink isActive link="#">Home</NavbarLink>
          <NavbarLink link="#">Services</NavbarLink>
          <NavbarLink link="#">Pricing</NavbarLink>
          <NavbarLink link="#">Contact</NavbarLink>
        </NavbarCollapse>
      </template>
    </Navbar>
</template>

<style scoped>
 .head{
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;   
}
</style>
