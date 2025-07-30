<template>
    <nav>
        <RouterLink :to="{name: 'books.overview'}">Boeken Overzicht</RouterLink> |
        <RouterLink :to="{name: 'books.create'}">Nieuw boek toevoegen</RouterLink> |
        <RouterLink :to="{name: 'authors.overview'}">Authors Overzicht</RouterLink> |
        <RouterLink :to="{name: 'authors.create'}">Nieuw author toevoegen</RouterLink>
    </nav>
    <router-view></router-view>
</template>

<script setup></script>