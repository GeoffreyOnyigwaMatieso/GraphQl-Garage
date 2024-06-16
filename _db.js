let games = [
    {id: 1, title: "Super Mario Bros", platform: ["NES"]},
    {id: 2, title: "Super Mario Bros 2", platform: ["NES", "XBOX"]},
    {id: 3, title: "Super Mario Bros 3", platform: ["NES","PS5", "PC"]},
    {id: 4, title: "Super Mario World", platform: ["SNES"]},
    {id: 5, title: "Super Mario 64", platform: ["N64","DS","Wii","WiiU","Switch"]},
]

let authors = [ 
    {id: 1, name: "Mario", verified: true},
    {id: 2, name: "Yoshi", verified: false},
    {id: 3, name: "Peach", verified: true},

]

let reviews = [
    {id: 1, rating: 5, content: "Great game", author_id: 1, game_id: 2},
    {id: 2, rating: 4, content: "Good game", author_id: 2, game_id: 3},
    {id: 3, rating: 3, content: "Ok game", author_id: 3, game_id: 1},
    {id: 4, rating: 2, content: "Bad game", author_id: 1, game_id: 4},
    {id: 5, rating: 1, content: "Terrible game", author_id: 2, game_id: 5},
    {id: 6, rating: 5, content: "Great game", author_id: 3, game_id: 1},
    {id: 7, rating: 4, content: "Good game", author_id: 1, game_id: 2},
]

export default {games, authors, reviews }
