<template>
<div class= "container">
    <h1 class="test2">About Us</h1>
    <div class="row">
        <div class="column">
            <img src="..\assets\galBaneim.png" >
        </div>
        <div class="column">
            <img src="..\assets\GuyKlinger.png" >
        </div>
        <div class="column">
            <img src="..\assets\RonitTsysar.png" >
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  height: inherit; /* Should be removed. Only for demonstration */
}

img
{
    width: 100%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>