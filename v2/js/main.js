const staggerVisualizerEl = document.querySelector('.contain_section');
const fragment = document.createDocumentFragment();
const grid = [20, 20];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

for (let i = 0; i < numberOfElements; i++) {
  fragment.appendChild(document.createElement('div'));
}

staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.contain_section div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: true,
  backgroundColor: '#52796f',
  autoplay: false
  
})
.add({
    translateX:[
        {
            value: anime.stagger('-.1em', {
                grid: grid,
                from: "first",
                axis: "x",
            })
        },
        {
            value: anime.stagger('.1em', {
                grid: grid,
                from: "first",
                axis: "x",
            })
        },
        {
            value: anime.stagger(0, {
                grid: grid,
                from: "first",
                axis: "x",
            })
        }
    ],
    translateY: [
        {
            value: anime.stagger('.1em', {
                grid: grid,
                from: 'last',
                axis: 'y',
            })
        },
        {
            value: anime.stagger('-.1em', {
                grid: grid,
                from: 'last',
                axis: 'y',
            })
        },
        {
            value: anime.stagger(0, {
                grid: grid,
                from: 'last',
                axis: 'y',
            })
        }
    ],
    delay: anime.stagger(100, {
        grid: grid,
        from: 'last',
    }),
    scale: .7,
    backgroundColor: '#52796f',
    borderRadius: 0,
})
.add({
    translateX:[
        {
            value: anime.stagger('-.1em', {
                grid: grid,
                from: "first",
                axis: "x",
            })
        },
        {
            value: anime.stagger('.1em', {
                grid: grid,
                from: "first",
                axis: "x",
            })
        },
        {
            value: anime.stagger(0, {
                grid: grid,
                from: "first",
                axis: "x",
            })
        }
    ],
    translateY: [
        {
            value: anime.stagger('.1em', {
                grid: grid,
                from: 'last',
                axis: 'y',
            })
        },
        {
            value: anime.stagger('-.1em', {
                grid: grid,
                from: 'last',
                axis: 'y',
            })
        },
        {
            value: anime.stagger(0, {
                grid: grid,
                from: 'last',
                axis: 'y',
            })
        }
    ],
    delay: anime.stagger(100, {
        grid: grid,
        from: 'last',
    }),
    scale: .7,
    backgroundColor: '#52796f',
    borderRadius: 0,
})
.add({
    scaleY: 1,
    scale: 1,
    delay: anime.stagger(20, {grid: grid, from: 'center'})
})

staggersAnimation.play();