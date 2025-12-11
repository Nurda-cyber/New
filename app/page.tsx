export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-neutral-900">
      <main className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
        {/* About Me Section */}
        <section className="mb-12">
          <header className="mb-8 border-b border-stone-200 pb-6 dark:border-stone-700">
            <h1 className="text-4xl font-bold text-stone-900 dark:text-stone-100 md:text-5xl">
              О Меня
            </h1>
          </header>
          <div className="space-y-4 text-stone-700 dark:text-stone-300 text-lg leading-relaxed">
            <p>
              Привет! Меня зовут Нурдаулет, я Full-Stack разработчик с опытом работы более года.
              Основной мой фокус — фронтенд, но я уверенно работаю с бэкендом, базами данных
              и облачными технологиями.
            </p>
            <p>
              Я увлечён созданием современных веб-приложений с удобным интерфейсом, 
              высокой производительностью и масштабируемой архитектурой.
            </p>
            <p>
              Люблю изучать новые технологии, экспериментировать с AI и интеграциями,
              а также автоматизировать процессы разработки и деплоя.
            </p>
            <p>
              В свободное время интересуюсь дизайном интерфейсов, open-source проектами
              и участвую в хакатонах.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
