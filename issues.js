// Выпуски «Сдвига». Новый выпуск добавляется В НАЧАЛО массива.
// verdict: "try" — пробовать сейчас, "watch" — следить, "skip" — пропустить.
window.SDVIG_ISSUES = [
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
