<template>
    <div id="event-form" :class="{ active: active }" :style="{ top : top, left: left }">
        <h4>Add an event</h4>
        <button @click="close" id="close-button">&#10005;</button>
    </div>
</template>

<script>
    export default {
        computed: {
            top() {
                return `${this.$store.state.eventFormPosY}px`
            },
            left() {
                return `${this.$store.state.eventFormPosX}px`
            },
            active() {
                return this.$store.state.eventFormActive;
            }
        },
        methods: {
            close() {
                this.$store.commit('eventFormActive', false);
            }
        }
    }
</script>
