<template> 
    <div class="col">
        <div class="row">
              <div>
                <img src="../assets/css.svg"/>
                <p><em>CSS3</em></p>
            </div>
            <div>
                <img src="../assets/javascript.png"/>
                <p><em>Javascript</em></p>
            </div>
            <div>
                <img src="../assets/vue.png"/>
                 <p><em>VueJS</em></p>
            </div>
              <div>
                <img src="../assets/cpp.png"/>
                 <p><em>C++</em></p>
            </div>
             <div>
                <img src="../assets/figma.png"/>
                 <p><em>Figma</em></p>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    
}
</script>

<style scoped>

.col {
    display: flex;
    flex-direction: column;
}

.row {
    display:inline-flex;
    flex-direction: row;
    justify-content: center;
    
}

.row div {
    background-color:rgba(0,0,0,.8);
    color: ivory;
    padding: 1em;
}

div p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    margin-left: 1em;
}

div img {
    width: 5em;
    height: 5em;
    padding: 5px;

}



</style>