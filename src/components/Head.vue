<script setup lang="ts" type="component">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, Avatar } from 'flowbite-vue'
import { AuthenticationStore } from '@/stores/AuthentiacationStore'
const authenticationStore = AuthenticationStore()
</script>

<template>

    <Navbar style="position: fixed; top: 0; left: 0; right: 0; z-index: 2;">
    <template #logo>
      <NavbarLogo  alt="codeCastle logo"  image-url="/codeCastleLogo.png ">
          Code Castle
      </NavbarLogo>
    </template>
    <template #default="{isShowMenu}">
      <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink link="/home">Aplicaciones</NavbarLink>
          <NavbarLink link="/videogames">Juegos</NavbarLink>
          <NavbarLink link="/top">Top</NavbarLink>
          <NavbarLink link="#footer">Contact</NavbarLink>
        </NavbarCollapse>
    </template>
    <template #right-side>
      <RouterLink to="user">
        <vs-avatar size="30px" href="users" :src="authenticationStore.user.image"/>
      </RouterLink>
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
