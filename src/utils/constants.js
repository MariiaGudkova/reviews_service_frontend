import chainsawmanImg from "../images/chainsawman.jpg";
import cyberpunk2077Img from "../images/cyberpunk2077.jpg";
import separationImg from "../images/separation.jpg";
import separationSecImg from '../images/separation_second_poster.jpg'
import dragonhouseImg from "../images/dragonhouse.jpg";
import avatarImg from "../images/avatar2.jpg";
import warGodsImg from "../images/god-of-war-ragnarok.jpg";
import womansImg from '../images/womansbook.jpg';
import murakamiImg from '../images/murakamibook.jpg';


export const tags = ['#2023', '#2022', '#драма', '#супергерои', '#киберпанк', '#будущее', '#боевик', '#Netflix', '#приключения', '#фантастика', '#Marvel', '#манга', '#меха', '#сёнэн', '#мелодрама', '#русскиесериалы', '#криминал', '#комедиизарубежные', '#лучшиекниги', '#топлучшихкниг', '#психология', '#личностныйрост', '#мотивация', '#психологияотношений', '#топаниме', '#анимефэнтези', '#зарубежныебоевики', '#триллеры2022', '#любовь'];

export const popularReviews = [{id: 1, title: 'Человек-бензопила', averageValue: 4.6, author: 'vasya edadil',  likes: 5, dislikes: 1, views: 24, cover: chainsawmanImg, category: "Аниме" }, {id: 2, title: 'Cyberpunk 2077', averageValue: 4.5, author: 'Кот Матроскин', likes: 6, dislikes: 2, views: 15, cover: cyberpunk2077Img, category: "Игры" }, {id: 3, title: 'Разделение', averageValue: 4.8, author: 'проходимец', likes: 4, dislikes: 0, views: 30, cover: separationImg, category: "Сериалы" }, {id: 4, title: 'Дом Дракона', averageValue: 5, author: 'соленый огурец', likes: 10, dislikes: 1, views: 50, cover: dragonhouseImg, category: "Сериалы" }, {id: 6, title: 'Аватар 2', averageValue: 4.3, author: 'аватарец', likes: 2, dislikes: 0, views: 10, cover: avatarImg, category: "Фильмы" }, {id: 7, title: 'God of War: Ragnarök', averageValue: 4.5, author: 'пельмень', likes: 8, dislikes: 1, views: 30, cover: warGodsImg, category: "Игры" }, {id: 8, title: '52 упрямые женщины', averageValue: 4.1, author: 'женьщина', likes: 4, dislikes: 0, views: 8, cover: womansImg, category: "Книги" }, {id: 9, title: 'От первого лица', averageValue: 4.7, author: 'люська', likes: 10, dislikes: 1, views: 22, cover: murakamiImg, category: "Книги" } ];

export const newReviews=[{id: 1, title: 'Человек-бензопила', averageValue: 4.6, author: 'vasya edadil',  likes: 5, dislikes: 1, views: 24, cover: chainsawmanImg }, {id: 2, title: 'Cyberpunk 2077', averageValue: 4.5, author: 'Кот Матроскин', likes: 6, dislikes: 2, views: 15, cover: cyberpunk2077Img }, {id: 3, title: 'Разделение', averageValue: 4.8, author: 'проходимец', likes: 4, dislikes: 0, views: 30, cover: separationImg }]

export const userReviews = [{id: 3, title: 'Разделение', averageValue: 4.8, author: 'Клавдия', likes: 4, dislikes: 0, views: 30, cover: separationImg, secondCover: separationSecImg,  date:'16/01/2023 21:45', stars: 5, tags: ['#2022', '#драма','#триллеры2022'], category: 'Сериалы', comments: [{author:'Василий', date:'17/01/2023 17:05', text:'Сериал понравился. Суп под него заходил на "ура". Всем советую к просмотру.'}, {author:'Петр', date:'17/01/2023 21:00', text:'Слышал о нем. Теперь точно посмотрю.'}] }, {id: 4, title: 'Дом Дракона', averageValue: 5, author: 'Клавдия', likes: 10, dislikes: 1, views: 50, cover: dragonhouseImg }, {id: 7, title: 'God of War: Ragnarök', averageValue: 4.5, author: 'Клавдия', likes: 8, dislikes: 1, views: 30, cover: warGodsImg }];

export const usersList = [{id: 1, name: 'Клавдия', avatar: "https://images.unsplash.com/photo-1558499932-9609acb6f443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}, {id: 2, name: 'Василий', avatar: 'https://i.imgur.com/qdiP4DB.jpg'}, {id: 3, name: 'kitty343', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}, {id: 4, name: 'Ларочка96', avatar: 'https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}, {id: 5, name: 'Макс', avatar: 'https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}, {id: 6, name: 'hipster', avatar: 'https://images.unsplash.com/photo-1500629723675-4d6b0685936a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'} ]

export const socialLinks = {
  twitter: 'https://twitter.com/',
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
}