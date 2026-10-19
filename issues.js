// Выпуски «Сдвига». Новый выпуск добавляется В НАЧАЛО массива.
// verdict: "try" — пробовать сейчас, "watch" — следить, "skip" — пропустить.
window.SDVIG_ISSUES = [
  {
    id: "2026-10-19",
    number: 3,
    date: "19 октября 2026",
    period: "12–18 октября",
    shift: "Агенты сами ищут выбросы на дашбордах, но точность по-прежнему держится на твоих эталонах.",
    lead: "Databricks научил Genie находить тренды и выбросы на опубликованном дашборде, BigQuery дал агенту доступ к нескольким проектам и экспорт ответов с цитатами. А Tableau показал на себе: без семантического слоя агент угадывал 30–45% ответов, с ним и бенчмарком из 200+ вопросов — больше 85%.",
    items: [
      {
        verdict: "try",
        area: "Практика",
        title: "Tableau: без семантики агент точен на 30–45%, с ней больше чем на 85%",
        what: "12 октября Tableau описала, как внедряла агентную аналитику внутри Salesforce. Четыре опоры: описанные метрики и глоссарий терминов, проверенные ответы и путь «песочница → прод» для каждого навыка, агрегация до LLM ради стоимости, и SQL с фильтрами под каждым ответом. Точность до запуска мерили на 200+ реальных вопросах в несколько раундов. Цифры от вендора, без методики.",
        use: "Возьми из статьи одну вещь — глоссарий. Выпиши термины, которые у вас значат не то, что в учебнике (у Salesforce AOV — это не средний чек), и положи в контекст агента.",
        source: { label: "Tableau Blog", url: "https://www.tableau.com/blog/tableau-agentic-analytics-at-salesforce-customer-zero" }
      },
      {
        verdict: "try",
        area: "Databricks",
        title: "Genie сам находит тренды и выбросы на опубликованном дашборде",
        what: "15 октября в бете вышли Dashboard Insights: Genie разбирает графики опубликованного AI/BI-дашборда и показывает заметные тренды и выбросы карточками. В том же релизе Genie One научился переиспользовать контекст прошлых разборов для похожих вопросов, а Genie Agents получили быстрый режим Flash (бета).",
        use: "Включи Insights на дашборде, где ты знаешь все аномалии за прошлый месяц. Посчитай, сколько из них Genie нашёл сам и сколько ложных карточек показал: это и есть его полезность для разбора аномалий.",
        source: { label: "Databricks AI/BI release notes", url: "https://docs.databricks.com/aws/en/ai-bi/release-notes/2026" }
      },
      {
        verdict: "try",
        area: "BigQuery",
        title: "Агент BigQuery работает по нескольким проектам и выгружает ответ в PDF/CSV",
        what: "14 октября в GA вышли разговоры по источникам из разных проектов и датасетов, а также публикация агента в Gemini Enterprise. 15 октября в GA появился экспорт ответа агента в PDF или CSV вместе с графиками, таблицами и цитатами. 13 октября в GA вышла функция AI.AGG для смысловой агрегации неструктурированных данных.",
        use: "Задай агенту вопрос, для которого раньше нужен был JOIN между проектами (например, события и биллинг), и выгрузи ответ в CSV. Сверь итог со своим запросом, прежде чем отдавать такие выгрузки бизнесу.",
        source: { label: "BigQuery release notes", url: "https://docs.cloud.google.com/bigquery/docs/release-notes" }
      },
      {
        verdict: "watch",
        area: "Snowflake",
        title: "Horizon Context собирает описания и lineage из Power BI, Tableau и dbt",
        what: "12 октября в превью вышел Horizon Context: каталог Snowflake подтягивает метаданные из 18 внешних систем, включая Power BI, Tableau, dbt, Databricks и BigQuery. Можно строить lineage по колонкам между платформами, ставить теги и описания на дашборды, а описания колонок сами протягиваются вниз по lineage. Доступно в коммерческих регионах AWS и Azure.",
        use: "Пока превью, просто проверь: у скольких колонок твоей главной витрины есть описание. Именно эти описания каталог раздаст дальше, в том числе агентам.",
        source: { label: "Snowflake release notes", url: "https://docs.snowflake.com/release-notes/2026/other/2026-10-12-horizon-context-preview" }
      },
      {
        verdict: "try",
        area: "PostHog",
        title: "PostHog ищет фичи, до которых пользователи доходят, но не пользуются",
        what: "15 октября PostHog добавил self-driving скаут: по телеметрии он находит доступные, но редко используемые фичи и предлагает причины. Если подключён репозиторий, учитывает и код. В тот же день в MCP-сервер добавили 5 инструментов, включая список последних изменений в проде.",
        use: "Запусти скаут и сравни его список с твоим последним разбором adoption фич. Гипотезы о причинах проверь на воронке, прежде чем нести продакту.",
        source: { label: "PostHog changelog", url: "https://posthog.com/changelog" }
      }
    ],
    brief: [
      { text: "Databricks: в AI/BI можно загрузить .tmdl из Power BI и навыком /importBI в Genie Code превратить его в metric views (15 октября).", url: "https://docs.databricks.com/aws/en/ai-bi/release-notes/2026" },
      { text: "Conversational Analytics API: агенты на источниках Looker без явного thinkingMode с 13 октября работают в режиме FAST. Перепроверь эталонные вопросы или задай THINKING явно.", url: "https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/release-notes" },
      { text: "Snowflake выпустил Cortex Agent SDK для Python и TypeScript (Public Preview, 13 октября): агентов Cortex можно встраивать в свои приложения.", url: "https://docs.snowflake.com/en/release-notes/2026/other/2026-10-13-cortex-agent-sdk-preview" },
      { text: "ChatGPT получил Slides (16 октября): презентации из разговора и файлов с экспортом в PowerPoint, PDF и Google Slides. Числа на графиках проверяй по источнику.", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }
    ],
    practice: {
      title: "Проверь агента на ваших терминах",
      time: "45 минут",
      steps: [
        "Выпиши 10 терминов, которые в компании значат что-то своё (активный пользователь, AOV, отток), и для каждого — определение, поле и фильтр в витрине.",
        "Задай агенту 10 вопросов с этими терминами без подсказок и запиши, где он понял термин не так, как принято у вас.",
        "Добавь глоссарий в контекст агента (инструкции, семантический слой или файл), повтори вопросы и сравни число верных ответов."
      ],
      result: "Получишь глоссарий, который можно отдать любому агенту, и цифру «до/после», которая показывает, сколько точности он даёт."
    }
  },
  {
    id: "2026-10-12",
    number: 2,
    date: "12 октября 2026",
    period: "5–11 октября",
    shift: "Агенты показывают SQL под каждым числом и считают эффект. Проверять их стало частью твоей работы.",
    lead: "За неделю Claude, BigQuery, Looker и Databricks выпустили фичи, где агент не только отвечает, но и показывает запрос, считает эффект события и сам рассылает выводы по расписанию. Чем больше агент делает сам, тем важнее твой набор эталонных ответов.",
    items: [
      {
        verdict: "try",
        area: "Claude",
        title: "Claude Dashboards: дашборд по вопросу, SQL виден под каждым графиком",
        what: "8 октября Anthropic запустила Dashboards в бете на платных планах. Claude подключается к Snowflake, BigQuery, Databricks, ClickHouse, Redshift и другим коннекторам, пишет SQL для каждого графика и показывает, когда данные обновились. Дашборд можно передать в Hex, Omni, Sigma, Amplitude, Mixpanel или PostHog. В Enterprise фичу включает админ.",
        use: "Собери дашборд по витрине, где ты знаешь цифры, и открой запрос под каждым графиком. Отметь, где агент взял не тот фильтр или период: это готовые кандидаты в эталонные запросы.",
        source: { label: "Claude Help Center", url: "https://support.claude.com/en/articles/17454700-get-started-with-claude-dashboards" }
      },
      {
        verdict: "try",
        area: "BigQuery",
        title: "Агент BigQuery сам считает эффект релиза через AI.CAUSAL_EFFECT",
        what: "6 октября разговорная аналитика в BigQuery получила функцию AI.CAUSAL_EFFECT (Preview). Она строит прогноз ARIMA_PLUS «как было бы без события» и сравнивает с фактом. Рядом уже работают AI.KEY_DRIVERS и ML.DETECT_CHANGE_POINTS, и агент может связать их в один разбор.",
        use: "Возьми прошлый релиз или акцию с известной датой и спроси агента, какой был эффект на ключевую метрику. Сравни с тем, что ты считал руками, и запиши расхождение.",
        source: { label: "BigQuery release notes", url: "https://docs.cloud.google.com/bigquery/docs/release-notes" }
      },
      {
        verdict: "watch",
        area: "Looker",
        title: "Looker рассылает AI-выводы по расписанию в почту и Slack",
        what: "9 октября в превью вышли запланированные сценарии Conversational Analytics: регулярные AI-сводки, таблицы, графики и PDF-отчёты уходят в почту или Slack. Там же в превью Looker Data Apps: дашборды на свободном холсте, которые собирают AI-агенты для кода, с привязкой к семантическому слою LookML.",
        use: "Выбери один еженедельный отчёт, который ты пересказываешь руками, и сформулируй его как вопрос к агенту. Когда превью откроется, у тебя будет готовый кандидат на автоматизацию.",
        source: { label: "Looker release notes", url: "https://docs.cloud.google.com/looker/docs/release-notes" }
      },
      {
        verdict: "try",
        area: "Databricks",
        title: "Genie One запускает Python в песочнице, а не только SQL",
        what: "9 октября Databricks открыла Public Preview выполнения кода в Genie One. Код работает в изолированной среде с твоими правами, Unity Catalog по-прежнему ограничивает доступ. 5 октября в бете появилась возможность публиковать навыки Genie One и делиться ими с командой.",
        use: "Дай Genie задачу, которую SQL решает плохо: когорты удержания или сезонность. Проверь, что он посчитал её на тех же таблицах, что и твой ноутбук.",
        source: { label: "Databricks AI/BI release notes", url: "https://docs.databricks.com/aws/en/ai-bi/release-notes/2026" }
      },
      {
        verdict: "skip",
        area: "ChatGPT",
        title: "GPT-6 и Intelligent UI в ChatGPT: для работы с данными ничего не меняется",
        what: "7 октября ChatGPT получил GPT-6 и интерфейс, который смешивает текст, схемы и интерактивные элементы вроде калькуляторов. OpenAI прямо пишет, что модели в Work и Codex не менялись, а именно там работает Data-плагин с подключением к хранилищам.",
        use: "Не перестраивай процессы под эту новость. Если используешь Data-плагин, твои проверки из прошлого выпуска остаются в силе.",
        source: { label: "ChatGPT release notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }
      }
    ],
    brief: [
      { text: "Looker добавил CI-валидатор стиля LookML с правилами в lkmlstyle.yaml и инструмент Diagnose & Repair для репозиториев.", url: "https://docs.cloud.google.com/looker/docs/release-notes" },
      { text: "Genie Agents в Databricks ищут и действуют в Google Drive и Microsoft 365 через MCP-коннекторы (бета, 8 октября).", url: "https://docs.databricks.com/aws/en/ai-bi/release-notes/2026" },
      { text: "PostHog добавил 19 инструментов в MCP-сервер и вкладку Lineage для эндпоинтов с материализованными моделями.", url: "https://posthog.com/changelog" },
      { text: "Conversational Analytics API от Google теперь в GA работает с BigQuery Graph: агент отвечает и по таблицам, и по графам.", url: "https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/release-notes" }
    ],
    practice: {
      title: "Проверь агента на известном эффекте",
      time: "45 минут",
      steps: [
        "Выбери прошлое событие с точной датой (релиз, акция, сбой) и посчитай руками изменение одной метрики до и после.",
        "Задай агенту тот же вопрос (BigQuery, Claude, Genie, любой) и попроси показать SQL и метод расчёта.",
        "Сравни цифры и период. Если ответ расходится больше чем на 5%, добавь этот вопрос и свой SQL в набор эталонных запросов."
      ],
      result: "Получишь проверенный кейс разбора эффекта и поймёшь, можно ли доверять агенту первичный разбор аномалий."
    }
  },
  {
    id: "2026-10-06",
    number: 1,
    date: "6 октября 2026",
    period: "сентябрь — начало октября",
    shift: "Агенты научились ходить в хранилище. Теперь важнее описанные метрики, а не дашборды.",
    lead: "За месяц OpenAI, Google, Snowflake и Databricks выпустили агентов, которые сами пишут запросы и собирают отчёты. Точность у всех упирается в одно и то же: насколько хорошо описаны твои метрики.",
    items: [
      {
        verdict: "try",
        area: "ChatGPT",
        title: "Data-агент в ChatGPT подключается к ClickHouse и строит дашборд по вопросу",
        what: "Плагин Data в ChatGPT Work и Codex работает с ClickHouse, BigQuery, Snowflake, Databricks, Redshift и MongoDB. Он отвечает на вопросы, собирает интерактивный дашборд и публикует его в Sites. Доступы берёт из подключённого аккаунта.",
        use: "Подключи одну витрину под read-only пользователем и задай пять вопросов, на которые ты уже знаешь ответы. Так за час станет понятно, можно ли отдавать ему разовые запросы от бизнеса.",
        source: { label: "OpenAI Help", url: "https://help.openai.com/en/articles/20001518-using-the-data-plugin-in-chatgpt-work-and-codex" }
      },
      {
        verdict: "try",
        area: "Практика",
        title: "Эталонные запросы становятся юнит-тестами для агентов",
        what: "В Looker функция Verified Queries вышла в GA: агенту на дашборде задают пары «вопрос — проверенный SQL», и он опирается на них. Похожий подход есть в Databricks Genie и Snowflake.",
        use: "Набор эталонных вопросов к твоим витринам пригодится в любом инструменте. Он сразу покажет, ошибается ли новый агент, и подскажет ему правильный ответ.",
        source: { label: "Looker release notes", url: "https://docs.cloud.google.com/looker/docs/release-notes" }
      },
      {
        verdict: "try",
        area: "Семантический слой",
        title: "Описанные метрики дают агенту 86% точности, без них 24%",
        what: "Snowflake приводит такие цифры для Cortex Sense: с бизнес-контекстом агент правильно отвечает на 86% вопросов, без него на 24%. У Databricks под это есть Unity Catalog Metrics, а 54 вендора договорились об открытом формате OSI.",
        use: "Опиши 10 ключевых метрик в одном YAML-файле: формула, фильтры, гранулярность, владелец. Его можно отдать любому агенту как контекст, и на этом файле держится вся остальная автоматизация.",
        source: { label: "Atlan: Snowflake Summit 2026", url: "https://atlan.com/know/snowflake/summit-2026-announcements/" }
      },
      {
        verdict: "watch",
        area: "ChatGPT",
        title: "Агенты, которые работают между разговорами и запускаются по событиям",
        what: "29 сентября OpenAI показала постоянных агентов (dots) и автоматизации, которые срабатывают по событиям в подключённых приложениях. Пока они доступны только части Pro и Business Premium.",
        use: "Это шаг к алертам, которые сами разбирают причину: метрика упала, агент сделал срезы и прислал гипотезы. Стоит заранее продумать, какие разборы ты повторяешь каждую неделю.",
        source: { label: "ChatGPT release notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" }
      },
      {
        verdict: "watch",
        area: "Yandex DataLens",
        title: "DataLens Platform объединяет хранилище, BI и ИИ-ассистента",
        what: "Yandex анонсировала платформу полного цикла: загрузка, хранение, отчёты и вопросы к данным на естественном языке. Для бизнеса открыт ранний доступ, публичный запуск запланирован на начало 2027 года. Нейроаналитик уже работает с сырыми данными и учитывает права доступа.",
        use: "Самая реалистичная альтернатива западным агентам для российского контура. Подай заявку на ранний доступ, если команда сидит в Yandex Cloud.",
        source: { label: "TelecomDaily", url: "https://telecomdaily.ru/news/2026/09/24/yandex-b2b-tech-predstavila-datalens-platform" }
      }
    ],
    brief: [
      { text: "OpenAI закрывает Custom GPTs и переводит их на плагины. Если у тебя есть свой GPT для отчётов, пора переносить.", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
      { text: "Claude Marketplace собрал в одном каталоге плагины, агентов и сервисы партнёров.", url: "https://claude.com/blog-category/announcements" },
      { text: "Looker показывает, сколько токенов тратит разговорная аналитика. Пригодится, когда спросят про стоимость агентов.", url: "https://docs.cloud.google.com/looker/docs/release-notes" },
      { text: "Databricks Genie One вышел в GA: агент для бизнес-команд работает и со структурированными данными, и с документами.", url: "https://atlan.com/know/ai-agent/databricks/databricks-data-ai-summit-2026-announcements/" }
    ],
    practice: {
      title: "Собери 10 эталонных вопросов",
      time: "40 минут",
      steps: [
        "Выпиши 10 вопросов, которые бизнес чаще всего задаёт к одной витрине.",
        "Для каждого запиши эталонный SQL и правильный ответ.",
        "Прогони вопросы через любой агент и посчитай, сколько ответов совпало."
      ],
      result: "Получишь процент точности: свой бенчмарк, на котором можно проверить любой новый инструмент за 15 минут."
    }
  }
];
