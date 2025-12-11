import FileUpload from "./components/FileUpload";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-neutral-900">
      <main className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
        <section className="mb-12">
          <header className="mb-8 border-b border-stone-200 pb-6 dark:border-stone-700">
            <h1 className="text-4xl font-bold text-stone-900 dark:text-stone-100 md:text-5xl">
              О Меня
            </h1>
          </header>
          <div className="space-y-4 text-stone-700 dark:text-stone-300 text-lg leading-relaxed">
            <p>Привет! Меня зовут Нурдаулет...</p>
            <p>Я увлечён созданием современных веб-приложений...</p>
           
            <p>В свободное время интересуюсь дизайном...</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Загрузить файл</h2>
          <FileUpload />
        </section>
      </main>
    </div>
  );
}
