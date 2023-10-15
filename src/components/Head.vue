<script setup lang="ts" type="component">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'

const email = ref();
const password = ref();
</script>

<template>
    <Navbar class="head">
      <template #logo>
        <NavbarLogo  alt="codeCastle logo"  image-url="../codeCastleLogo.png ">
          Code Castle
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink  isActive link="#">Aplicaciones</NavbarLink>
          <NavbarLink link="#">Juegos</NavbarLink>
          <NavbarLink link="#">Top</NavbarLink>
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
    z-index: 10;
}
</style>
