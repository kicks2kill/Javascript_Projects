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
        <div class="row">
            <img src="../assets/myself.jpg" style="width:18em; height: 18em; border-radius: 10px;" alt="William Spicer"/>
        </div>
        <div class="row">
            <div style="width:100%;">
                <p class="subject-paragraph"><em>Projects</em></p>
                <img src="../assets/playstation.png" style="width: 10em; height: 10em; margin-right: 5em; margin-left: 2em; border: 1px solid white; border-radius: 5px;"/>
                <img src="../assets/team.svg" style="width: 10em; height: 10em; border: 1px solid white; border-radius: 5px;"/>
                <p style="opacity: 70%; font-size: 18px;">Click for more information</p> <!-- work on this -->
            </div>
        </div>
        <div class="row">
        <div style="width:100%;">
                <p class="subject-paragraph">Design Thinking & Problem Solving</p>
                <span class="sub-text">I believe in the power of research. I enjoy challenging myself by learning new material and the real world applications associated with the material. The problem solving process is something that I respect and admire as I strive to condition myself to surmise on difficult decisions.</span>
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

.subject-paragraph {
    font-size: 26px; text-decoration: underline; 
    text-decoration-color:#90ddf0;
    text-underline-position: under right;
    text-align: center;
}

.sub-text {
    font-size: 15px;
    color: ivory;
    margin: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

</style>