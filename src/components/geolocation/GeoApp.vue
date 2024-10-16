<script setup>
navigator.geolocation.getCurrentPosition( (position) => {
    do_something(position.coords.latitude, position.coords.longitude)
})
</script>
<template>
    <div class="geoloc">
        
    </div>
</template>