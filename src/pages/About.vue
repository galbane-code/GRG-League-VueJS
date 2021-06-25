<template>
<div class= "container">
    <h1 class="test2">About Us</h1>
    <div class="row">
        <div class="column">
            <img src="..\assets\galBaneim.png" >
            <b-button pill href= 'https://web-development-environments-2021.github.io/312198310/' style="width:50%;margin-left:25%;margin-right:25%"> Elderly Project</b-button>
        </div>
        <div class="column">
            <img src="..\assets\GuyKlinger.png" >
            <b-button pill href= 'https://web-development-environments-2021.github.io/205413149/' style="width:50%;margin-left:25%;margin-right:25%"> Elderly Project</b-button>
        </div>
        <div class="column">
            <img src="..\assets\RonitTsysar.png" >
            <b-button pill href= 'https://web-development-environments-2021.github.io/316612803/' style="width:50%;margin-left:25%;margin-right:25%"> Elderly Project</b-button>
        </div>
    </div>
    <br>
    <br>
    <h1 class="test2">Shared Project</h1>
    <br>
    <div class="row">
        <b-button pill href= 'https://web-development-environments-2021.github.io/assignment2-205413149_316612803_312198310/' style="width:50%;margin-left:25%;margin-right:25%">PacMan Project</b-button>
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