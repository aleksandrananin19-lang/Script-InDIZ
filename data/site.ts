import { Camera, Truck, PenTool, Printer, Sparkles, MessageCircle } from 'lucide-react';

export const nav = [
  { label: 'Альбомы', href: '#albums' }, { label: 'Процесс', href: '#process' }, { label: 'Работы', href: '#works' }, { label: 'Отзывы', href: '#reviews' }, { label: 'Контакты', href: '#contacts' },
];
export const grades = [
  { title: '4 класс', image: '/photos/grade4.svg', text: 'Тёплые альбомы о первом большом школьном этапе.' },
  { title: '9 класс', image: '/photos/grade9.svg', text: 'Стильная съёмка для ребят, которые выбирают новый маршрут.' },
  { title: '11 класс', image: '/photos/grade11.svg', text: 'Премиальный выпускной альбом с характером вашего класса.' },
];
export const designs = [
  { title: 'CLASSIC', image: '/photos/classic.svg', text: 'Чистая типографика и вечная чёрно-белая эстетика.' },
  { title: 'URBAN', image: '/photos/urban.svg', text: 'Динамичный ритм города, контраст и смелая сетка.' },
  { title: 'RED LINE', image: '/photos/redline.svg', text: 'Минимализм с точным красным акцентом.' },
  { title: 'PREMIUM', image: '/photos/premium.svg', text: 'Плотная бумага, спокойная роскошь и внимание к деталям.' },
  { title: 'SCHOOL STORY', image: '/photos/story.svg', text: 'Живая история класса от портретов до репортажных кадров.' },
];
export const stats = [
  { value: '38', label: 'классов в 2025 году' }, { value: '1270', label: 'выпускников доверили нам свои воспоминания' }, { value: '7', label: 'лет опыта' }, { value: '100%', label: 'довольных клиентов' },
];
export const services = [
  { title:'Съёмка', text:'Планируем день, локации и тайминг без хаоса.', icon: Camera }, { title:'Ретушь', text:'Аккуратная обработка без пластиковой кожи.', icon: Sparkles }, { title:'Макет', text:'Верстаем развороты под историю вашего класса.', icon: PenTool }, { title:'Печать', text:'Контролируем цвет, бумагу и переплёт.', icon: Printer }, { title:'Доставка', text:'Привозим готовые альбомы в школу или по адресу.', icon: Truck }, { title:'Поддержка', text:'Всегда на связи с родительским комитетом.', icon: MessageCircle },
];
export const works = ['work1','work2','work3','work4','work5','work6'].map((n,i)=>({src:`/photos/${n}.svg`, category:['Альбомы','Портреты','Групповые фотографии','Развороты','Альбомы','Портреты'][i]}));
export const reviews = [
  { name:'Анна', role:'мама выпускника', avatar:'/photos/avatar1.svg', text:'Спасибо AVBOOK за спокойную организацию. Дети чувствовали себя свободно, а альбом получился очень современным.', time:'10:24' },
  { name:'Мария', role:'родительский комитет', avatar:'/photos/avatar2.svg', text:'Понравилось, что команда взяла на себя все вопросы: от графика съёмки до доставки коробок в школу.', time:'13:05' },
  { name:'Елена', role:'мама выпускника', avatar:'/photos/avatar3.svg', text:'Без шаблонных поз и перегруза. У каждого ребёнка получился свой характер в кадре.', time:'18:42' },
  { name:'Ирина', role:'родительский комитет', avatar:'/photos/avatar4.svg', text:'Каталог помог быстро выбрать дизайн, а расчёт был понятным. Рекомендуем для 11 классов.', time:'09:17' },
];
