<template>
    <div v-if="getMessage.value">
        {{ getMessage.value }}
    </div>
</template>

<script setup lang="ts">
import { getMessage } from '../error';
</script>