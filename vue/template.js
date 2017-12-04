const images = [
    {url: 'https://images.pexels.com/photos/627928/pexels-photo-627928.png?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url: 'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url: 'https://images.pexels.com/photos/326235/pexels-photo-326235.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'},
    {url: 'https://images.pexels.com/photos/414075/pexels-photo-414075.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}    
]

const Slide = {
    props: ['image'],
    template: `<img v-bind:src="image.url"/>`
}

Vue.component('carousel', {
    data() {
        return {
            title: 'Vue.js Carousel',
            images: images,
            active: 0 
        }
    },
    components: {
        'slide': Slide
    },
    methods: {
        goToNextSlide() {
            this.active++;
            if (this.active > this.images.length - 1) {
                this.active = 0;
            }
        },
        goToPreviousSlide() {
            this.active--; 
            if (this.active < 0) {
                this.active = this.images.length - 1;
            }    
        }
    },
    template: `<div>
                <h1 class="app-title">{{ title }}</h1>
                <div class="carousel">
                    <div class="images">
                        <slide
                            v-for="(image, key) in images" 
                            v-bind:image="image" 
                            v-bind:class="{ active: key === active }">
                        </slide>
                    </div>
                    <button v-on:click="goToPreviousSlide" class="button-prev"> [<] </button>
                    <button v-on:click="goToNextSlide" class="button-next"> [>] </button>                    
                </div>
            </div>`,
            
    })

new Vue({
    el: '#app'
  })

