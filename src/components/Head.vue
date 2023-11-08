<script setup lang="ts" type="component">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, Avatar } from 'flowbite-vue'

</script>

<template>

    <Navbar>
    <template #logo>
      <NavbarLogo  alt="codeCastle logo"  image-url="/codeCastleLogo.png ">
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
    <template #right-side>
      <Avatar img="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" rounded />
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
