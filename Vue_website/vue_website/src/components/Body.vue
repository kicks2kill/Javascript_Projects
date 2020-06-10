<template> 
    <div class="col">
        <div class="row">
              <div>
                <img src="../assets/css.svg"/>
                <p><em>CSS3</em></p>
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
            <div style="width:100%;">
                <p class="subject-paragraph"><em>Projects</em></p>
                 <p style="opacity: 70%; font-size: 18px;">(Click for more information)</p> <!-- work on this -->
                <img src="../assets/playstation.png" style="width: 10em; height: 10em; margin-right: 5em; margin-left: 2em; border: 1px solid white; border-radius: 5px;"/>
                <img src="../assets/team.svg" style="width: 10em; height: 10em; border: 1px solid white; border-radius: 5px;"/>
            </div>
        </div>
        <div class="row">
        <div style="width:100%;">
                <p class="subject-paragraph">Design Thinking & Problem Solving</p>
                <span class="sub-text">I believe in the power of research. I enjoy challenging myself by learning new material and the real world applications associated with the material. The problem solving process is something that I respect and admire as I strive to condition myself to surmise on difficult decisions.</span>
            </div>
        </div>
          <div class="row">
             <div style="width:100%;">
                <p class="subject-paragraph">About me</p>
                <span class="sub-text">Hello! I am William Spicer, a front-end engineer with a focus on desirability and usability. Currently, I have 3 years of experience designing and developing websites. I'm a strong believer of continous research and bettering myself as well as helping others do the same. When I'm not working or developing, I enjoy spending time researching into various topics such as; Chemistry, Math, and Art. I am an avid miniature painter and moderate a few painting discords in regards to that subject.</span>
                <p style="font-size: 16px;"><strong>Find me on:</strong> </p>
                <a href="https://www.linkedin.com/in/william-spicer/"><img style="width: 5em; height: 5em; border-radius: 10px; " src="../assets/linkedin.png"/></a>
                <a href="https://github.com/kicks2kill/"><img style="width: 5em; height: 5em; border-radius: 10px;" src="../assets/github.png"/></a>
                <a href="mailto:w.spicerx@gmail.com"><img style="width: 5em; height: 5em; border-radius: 10px;" src="../assets/gmail.png"/></a>
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
    margin: 2px;
}

.row div {
    background-color:rgba(0,0,0,.8);
    color: ivory;
    padding: 1em;
    border-radius: 1px;
}
img + p {
    margin-left: 0;
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
    margin: 5px;
    left: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

div a {
    color: white;
}

</style>