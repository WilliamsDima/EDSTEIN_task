Тестовое задание для компании EDSTEIN

---

## Описание задания

<div>
	<p>Необходимо реализовать Dropdown компонент:</p>
	<ul>
		<li>включать/выключать мультиселект</li>
		<li>отображать/не отображать у элемента иконку</li>
		<li>поиск по списку элементов</li>
	</ul>
</div>

<a href="https://www.figma.com/file/ps6es6K5EnwHv3qRJHaf2n/Дропдаун-для-ТЗ?node-id=0%3A1">Дизайн: Figma URL</a>

<p>Стек: React, Typescript, CSS Modules</p>

---

## Techstack

[![typescript](https://img.shields.io/static/v1?label=typescript&message=4.8.4&color=3178C6&style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![node](https://img.shields.io/static/v1?label=node&message=16.10.0&color=026E00&style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![react](https://img.shields.io/static/v1?label=react&message=18.2.0&color=61DBFB&style=for-the-badge&logo=react&logoColor=white)](https://ru.reactjs.org/)
[![sass](https://img.shields.io/static/v1?label=sass&message=7.0.3&color=BF4080&style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

---

## Структура проекта

В проекте все наследуется от стандартного `create-react-app  --template typescript`. Однако, в проекте присуствуют некоторые архитектурные паттерны:

- `context` - дирректория, которая хранит в себе контекс приложения.
- `hooks` - дирректория, которая хранит в себе кастомные хуки и хэперы.
- `screens` - дирректория, которая хранит в себе экраны приложения.

Также, в проекте структурированы компоненты по Atomic Design. Компоненты деляться на:

- `/atoms/*` – тут расположены примитивные компоненты: кнопки, заголовки, поля ввода и пр.
- `/molecules/*` – тут расположены связки/группы примитивов: группы кнопок, карточки и пр.
- `/organisms/*` – тут расположены связки/группы молекул. То есть компоненты, которая состоит из молекул, которые состоят из примитивов: шапка, списки карточек, модальные окна и пр.
- `/templates/*` – тут расположены шаблоны страницы
- `/ui/*` – тут расположены ui элементы дизайна

Подробнее можно почитать:

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
- [Atomic Design in practice](https://blog.ippon.tech/atomic-design-in-practice/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject` or `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
