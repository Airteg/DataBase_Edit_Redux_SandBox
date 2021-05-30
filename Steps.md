# 1. 31:22. Создаём store в файле index.js (почему "в" - подорзреваю, но не знаю точно).

    import { createStore } from 'redux';
    const store=createStore();

# 2. Параметром createStore должен быть редьюсер.

По этому был создан файл reduser.js и из него экспортировали чистую функцию editDataBase:
export function editDataBase(state = initDB, action) {
return state;
}
, которая принимает (state = initDB, action). Первый параметр - начальное состояние. Второй - функция...
Теперь наша строка по созданию store выглядит так
const rootElement = document.getElementById("root");

# 3. Связываем АБСОЛЮТНО изолированный redux с React:

import { Provider } from "react-redux";
Провайдер — React-компонент, который делает Redux-контейнер доступным для всего приложения. Он находится на верхнем уровне JSX и "оборачивает" в себя все остальные компоненты.
Я поступлю иначе:
const app = (
<Provider store={store}>
<App />
</Provider>
);
ReactDOM.render(<StrictMode>{app}</StrictMode>, rootElement);
Как видно, провайдер получил обязательный параметр - store, который называется как store (и возможно будет мною переименован).
Цитата с сайта https://monsterlessons.com/project/lessons/redux-js-connect-v-react-redux :
`Теперь все наше дерево компонентов в react должно иметь доступ к redux store и мочь подписываться на него. Для того, чтобы не прокидывать store в каждый компонент руками. Рекомендуемым способом пробрасывания store является использование компонента Provider, который выступает в роли рутового компонента.` 


# 4. 37:00. Подключаем Dev Tools.

В документации https://github.com/zalmoxisus/redux-devtools-extension сказали нужную строчко вставить после функции редюсера (editDataBase) и после инициализации, но мы инициализируемся в файле редюсера. Нам предложили обернуть в функцию compose из Redux, чтобы еще наблюдать мидлВевр. Получилось так:
const store = createStore(
editDataBase,
compose(
window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
)
);
И не забываем поправить импорт 
import { createStore, compose } from "redux";
