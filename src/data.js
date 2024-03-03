const questions = [
  {
    question: 'Какие типы данных поддерживает JavaScript?',
    answer: [
      'number, string, boolean, object, null, undefined',
      'integer, float, char',
      'array, hash, object',
    ],
    correct: 0,
    category: 'JavaScript',
  },
  {
    question: 'Какие методы массивов существуют в JavaScript?',
    answer: [
      'push(), pop(), shift(), unshift(), slice(), splice(), forEach(), map() и другие',
      'add(), remove(), find()',
      'insert(), delete(), modify()',
    ],
    correct: 0,
    category: 'JavaScript',
  },

  {
    question: 'Что такое компонент в React?',
    answer: [
      'Компонент - это независимая и переиспользуемая часть пользовательского интерфейса.',
      'Компонент - это объект, который хранит данные и методы для их обработки.',
      'Компонент - это функция, которая возвращает виртуальный DOM.',
    ],
    correct: 0,
    category: 'React',
  },
  {
    question: 'Что такое props в React?',
    answer: [
      'Props (свойства) - это объект, содержащий данные, которые передаются от родительского компонента к дочернему.',
      'Props (свойства) - это специальные методы жизненного цикла компонента.',
      'Props (свойства) - это методы для работы с состоянием компонента.',
    ],
    correct: 0,
    category: 'React',
  },

  {
    question: 'Что такое интерфейсы в TypeScript?',
    answer: [
      'Интерфейсы - это специальные конструкции, позволяющие описывать форматы объектов и классов.',
      'Интерфейсы - это специальные функции для создания новых типов данных.',
      'Интерфейсы - это специальные методы для работы с базами данных.',
    ],
    correct: 0,
    category: 'TypeScript',
  },
  {
    question: 'Как создать тип Union в TypeScript?',
    answer: [
      'С помощью символа | между типами',
      'С помощью символа & между типами',
      'С помощью ключевого слова union',
    ],
    correct: 0,
    category: 'TypeScript',
  },

  {
    question: 'Что такое селекторы в CSS?',
    answer: [
      'Селекторы - это паттерны, с помощью которых CSS определяет, какие HTML-элементы будут стилизованы.',
      'Селекторы - это специальные функции для работы с анимациями.',
      'Селекторы - это встроенные функции для работы с DOM.',
    ],
    correct: 0,
    category: 'HTML/CSS',
  },
  {
    question: 'Как создать псевдокласс в CSS?',
    answer: [':hover', '::before', '::after'],
    correct: 0,
    category: 'HTML/CSS',
  },
  {
    question: 'Как объявить переменную в JavaScript?',
    answer: ['var, let или const', 'Только var', 'Только let'],
    correct: 0,
    category: 'JavaScript',
  },
  {
    question: 'Какой оператор используется для сравнения значений и их типов в JavaScript?',
    answer: ['===', '==', '='],
    correct: 0,
    category: 'JavaScript',
  },
  {
    question: 'Как создать объект в JavaScript?',
    answer: [
      'С помощью литерала объекта {} или оператора new',
      'С помощью оператора typeof',
      'С помощью функции createObject().',
    ],
    correct: 0,
    category: 'JavaScript',
  },
  {
    question: 'Что такое JSX?',
    answer: [
      'JSX - это синтаксис расширения JavaScript, который позволяет писать HTML-подобный код внутри JavaScript.',
      'JSX - это JavaScript-список для манипуляций с DOM',
      'JSX - это аббревиатура от "JavaScript XML Syntax", используемая для создания баз данных в React.',
    ],
    correct: 0,
    category: 'React',
  },
  {
    question: 'Чем отличается useState от useEffect?',
    answer: [
      'useState используется для создания глобального состояния приложения.',
      'useState используется для управления состоянием компонента, а useEffect - для выполнения побочных эффектов при изменении состояния или других условий.',
      'useEffect используется для изменения стилей компонента.',
    ],
    correct: 1,
    category: 'React',
  },
  {
    question: 'Какой хук используется для подписки на изменения состояния или пропсов?',
    answer: ['useSubscription', 'useEffect', 'useRef'],
    correct: 1,
    category: 'React',
  },
  {
    question: 'Каким образом компонент React может передать данные другому компоненту?',
    answer: ['С помощью передачи пропсов (свойств)', 'Через useMemo', 'Через useSubscription'],
    correct: 0,
    category: 'React',
  },
  {
    question: 'Что такое TypeScript?',
    answer: [
      'TypeScript - это язык программирования с открытым исходным кодом, который является строгим синтаксическим надмножеством JavaScript',
      'TypeScript - это фреймворк для разработки мобильных приложений',
      'TypeScript - это язык программирования для создания и управления базами данных',
    ],
    correct: 0,
    category: 'TypeScript',
  },
  {
    question: 'Какие основные преимущества TypeScript перед JavaScript?',
    answer: [
      'Статическая типизация, улучшенная поддержка ООП, более строгая проверка типов',
      'Большее количество встроенных библиотек и фреймворков',
      'Возможность создания сложных макросов и препроцессорных директив',
    ],
    correct: 0,
    category: 'TypeScript',
  },
  {
    question: 'Как объявить переменную с использованием TypeScript?',
    answer: ['const x: number = 5;', 'let x = 5;', 'var x = 5;'],
    correct: 0,
    category: 'TypeScript',
  },
  {
    question: 'Какой оператор используется для определения типа переменной в TypeScript?',
    answer: [':=', ':', '=>'],
    correct: 1,
    category: 'TypeScript',
  },
  {
    question: 'Что означает аббревиатура HTML?',
    answer: [
      'Hyper Text Markup Language',
      'Hyperlinks and Text Markup Language',
      'Highly Textured Markup Language',
    ],
    correct: 0,
    category: 'HTML/CSS',
  },
  {
    question: 'Как создать ссылку в HTML?',
    answer: [
      '<a href="http://example.com">Ссылка</a>',
      '<link>http://example.com</link>',
      '<href>http://example.com</href>',
    ],
    correct: 0,
    category: 'HTML/CSS',
  },
  {
    question: 'Что такое CSS?',
    answer: [
      'Cascading Style Sheets - это язык разметки, который используется для стилизации содержимого веб-страницы.',
      'Cascading Style Sheets - это язык программирования, который используется для создания динамического контента.',
      'Cascading Style Sheets - это формат для хранения данных, связанных с визуальным представлением документа.',
    ],
    correct: 0,
    category: 'HTML/CSS',
  },
  {
    question: 'Как создать внешнюю таблицу стилей в HTML?',
    answer: [
      '<style src="styles.css">',
      '<link rel="stylesheet" href="styles.css">',
      '<script src="styles.css">',
    ],
    correct: 1,
    category: 'HTML/CSS',
  },
];

export default questions;
