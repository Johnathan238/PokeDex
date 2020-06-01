# PokéDex

**PokéDex Description** All the Pokemon lovers can browse and check out their favorite Pokemon abilities, stats, type, and much more.

### Wireframe
https://1drv.ms/w/s!ArvFj8V7oC9agZBnzzaVvtRZUAxBpw

### MVP
- Render corrent info & img on the Dom
- Have Route work with Pokémon Name 
- Build a componet with storyBooks
### Post MVP 
- Render correct Pokémon font 

#### Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | Each Pokemon Name will have a Route so you can the the Pokémon sprite, abilities, more info|
|   StoryBook      | I would like to use storyBook beacuse the Pokémon names will be in a component|

#### Data
|    API     | Quality Docs? |        Sample Query                            |
| :--------: | :-----------: |    :--------------------------------------:    |
| PokéApi    |      yes      | https://pokeapi.co/api/v2/pokemon?offset=20&limit=10|

```
{
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=10",
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10",
    "results": [
        {
            "name": "metapod",
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
        },
        {
            "name": "butterfree",
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
        },
        {
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
        },
        {
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
        },
        {
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
        },
        {
            "name": "pidgey",
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
        },
        {
            "name": "pidgeotto",
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
        },
        {
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
        },
        {
            "name": "rattata",
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
        },
        {
            "name": "raticate",
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
        }
    ]
}
 ```
 
 #### Component Hierarchy
 ```
src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Header.jsx
      |__ Pokemon.jsx
      |__ PokeAPI.jsx
      |__ Footer.jsx
```

#### Component Breakdown
|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of Pokémon official pages._|
| Pokémon Names| functional |   y   |   n   | _The pokemon name will route you to a page for more info on the specific      pokémon._|
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates
| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add title & nav     |    L     |     2 hrs      |     0 hrs     |    0 hrs    |
| Call th API for data |    H    |     3 hrs     |     0 hrs    |     0 hrs  |
| Making a Route with Pokemon names |     H     |     6 hrs      |     0 hrs     |     0 hrs    |
| Build a component using StoryBook  |    H   |     5 hrs      |     0 hrs     |    0 hrs    |
| Footer  |    L     |     1 hrs      |     0 hrs     |    0 hrs    |

## Project Delivery

### Code Showcase

```
code snippet here
```

### Code Issues & Resolutions


