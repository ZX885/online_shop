import projects01 from './../img/projects/01.jpg';
import projects01Big from './../img/projects/01-big.jpg';

import projects02 from './../img/projects/02.jpg';
import projects02Big from './../img/projects/02-big.jpg';

import projects03 from './../img/projects/03.jpg';
import projects03Big from './../img/projects/03-big.jpg';

import projects04 from './../img/projects/04.jpg';
import projects04Big from './../img/projects/04-big.jpg';

import projects05 from './../img/projects/05.jpg';
import projects05Big from './../img/projects/05-big.jpg';

import projects06 from './../img/projects/06.jpg';
import projects06Big from './../img/projects/06-big.jpg';

import projects07 from './../img/projects/07.png';

const projects = [
    {
        id: 'startup-marketplace',
        title: 'Startup Marketplace',
        category: 'Fullstack',
        skills: 'React, Django, Django REST Framework, PostgreSQL',
        img: projects01,
        imgbig: projects01Big,
        githubLink: 'https://github.com/ZX885',
        demoLink: 'https://example.com',
        description: 'Полноценная маркетплейс-платформа с системой авторизации, фильтрации товаров и интеграцией платежей.',
    },
    {
        id: 'video-service',
        title: 'Video service',
        category: 'Fullstack',
        skills: 'React, PHP, MySQL',
        img: projects02,
        imgbig: projects02Big,
        githubLink: 'https://github.com/ZX885',
        demoLink: 'https://example.com',
        description: 'Стриминговый видеосервис с каталогом контента, личным кабинетом пользователя и админ-панелью для управления медиатекой.',
    },
    {
        id: 'video-portal',
        title: 'Video portal',
        category: 'Fullstack',
        skills: 'React, Node.js, MongoDB',
        img: projects03,
        imgbig: projects03Big,
        githubLink: 'https://github.com/ZX885',
        demoLink: 'https://example.com',
        description: 'Видеопортал с загрузкой роликов, системой комментариев, рекомендациями и REST API на Node.js для мобильных клиентов.',
    },
    {
        id: 'dating-app',
        title: 'Dating app',
        category: 'Fullstack',
        skills: 'React, Python, Java',
        img: projects04,
        imgbig: projects04Big,
        githubLink: 'https://github.com/ZX885',
        demoLink: 'https://example.com',
        description: 'Приложение для знакомств с профилями пользователей, матчингом по интересам, чатом в реальном времени и push-уведомлениями.',
    },
    {
        id: 'landing-page',
        title: 'Landing',
        category: 'Frontend',
        skills: 'HTML, CSS, JavaScript',
        img: projects05,
        imgbig: projects05Big,
        githubLink: 'https://github.com/ZX885',
        demoLink: 'https://example.com',
        description: 'Адаптивный промо-лендинг с анимациями, формой обратной связи и оптимизацией под Core Web Vitals для быстрой загрузки.',
    },
    {
        id: 'gaming-community',
        title: 'Gaming community',
        category: 'Fullstack',
        skills: 'React, Node.js, MongoDB',
        img: projects06,
        imgbig: projects06Big,
        githubLink: 'https://github.com/ZX885',
        demoLink: 'https://example.com',
        description: 'Сообщество геймеров с форумами, рейтингами игроков, турнирными таблицами и интеграцией Discord/Telegram для уведомлений.',
    },
    {
        id: 'telegram-bots',
        title: 'Telegram bots',
        category: 'Backend',
        skills: 'Python, Aiogram',
        img: projects07,
        imgbig: projects07,
        githubLink: 'https://github.com/ZX885',
        demoLink: 'https://example.com',
        description: 'Набор Telegram-ботов на Aiogram: автоматизация рассылок, обработка заявок, интеграция с CRM и webhook-уведомления.',
    },
];

export default projects;
