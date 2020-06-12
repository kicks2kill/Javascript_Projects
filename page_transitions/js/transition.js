import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
    in({from,to,done}){
        const tl = new TimelineLite();
        tl.fromTo(to, 0.5,{left: '-100%', top:'50%'}, {left: '0%'}) //set the starting position
        .fromTo(to,0.5, {height: '2vh'}, {height: '90vh', top: '10%', onComplete: function() {
            from.remove();
            done();
        }}
        )
        .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1}) //set how it transitions
    }

    out({from,done}) {
        done(); //no transition going to index.html
    }
}

export default Fade;