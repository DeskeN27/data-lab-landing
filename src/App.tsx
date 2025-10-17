import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, LineChart, Settings2, ShieldAlert, BrainCircuit, Rocket, PieChart, TrendingUp, Layers, ShoppingCart, Target, Workflow, Menu, X } from "lucide-react";

export default function LandingAnalyticsMP() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-white text-sm">DL</span>
            <span>Data Lab</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-neutral-600">Функционал</a>
            <a href="#impact" className="hover:text-neutral-600">Эффект</a>
            <a href="#how" className="hover:text-neutral-600">Как это работает</a>
            <a href="#integrations" className="hover:text-neutral-600">Интеграции</a>
            <a href="#faq" className="hover:text-neutral-600">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-sm font-medium hover:text-neutral-600">Демо</a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm">Запросить доступ</a>
          </div>
          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-neutral-300">
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-neutral-200 bg-white/90 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-3 text-sm">
              <a href="#features" className="py-2">Функционал</a>
              <a href="#impact" className="py-2">Эффект</a>
              <a href="#how" className="py-2">Как это работает</a>
              <a href="#integrations" className="py-2">Интеграции</a>
              <a href="#faq" className="py-2">FAQ</a>
              <div className="flex items-center gap-3 pt-2">
                <a href="#demo" className="text-sm font-medium">Демо</a>
                <a href="#cta" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold bg-neutral-900 text-white">Запросить доступ</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-neutral-100" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Аналитическая платформа для Wildberries & Ozon
              </h1>
              <p className="mt-5 text-lg text-neutral-700 max-w-2xl">
                Оптимизация и автоматизация операционной деятельности: прогнозы продаж, план закупок,
                контроль цен и ошибок, анализ рекламы и комплексная управленческая аналитика —
                всё в одном окне для роста бизнеса без непропорционального увеличения штата.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow">
                  Получить пилот
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-white border border-neutral-200 hover:bg-neutral-50">
                  Посмотреть функционал
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-2"><ShieldAlert className="h-4 w-4"/> Контроль ошибок и цен</span>
                <span className="inline-flex items-center gap-2"><BrainCircuit className="h-4 w-4"/> ML-прогнозы и планирование</span>
                <span className="inline-flex items-center gap-2"><Workflow className="h-4 w-4"/> Автоматизация рутины</span>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6, delay:0.1}}>
              <div className="relative rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="aspect-[16/10] w-full rounded-2xl bg-neutral-100 grid place-items-center">
                  <div className="text-center">
                    <BarChart3 className="mx-auto h-10 w-10" />
                    <p className="mt-2 text-sm text-neutral-600">Скриншот дашборда (замените на изображение вашего интерфейса)</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-600">
                  <div className="rounded-xl border p-2 text-center">WB кабинет</div>
                  <div className="rounded-xl border p-2 text-center">Ozon кабинет</div>
                  <div className="rounded-xl border p-2 text-center">Бизнес-сводка</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Основной функционал сервиса</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">Собираем данные из кабинетов маркетплейсов, рекламных систем и внутренних учётных систем. Доставляем в удобные сценарии работы для каждой роли.</p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard icon={<TrendingUp className="h-5 w-5"/>} title="Кабинет менеджера МП" points={[
              "Ежедневный план-факт по продажам, выручке, марже",
              "Аналитика карточек: CTR, конверсия, позиции, остатки",
              "Задачи и алерты по аномалиям (цены, скидки, сток)"
            ]}/>
            <FeatureCard icon={<LineChart className="h-5 w-5"/>} title="Прогноз продаж и план закупок" points={[
              "ML-модели, сезонность, кластеры товара",
              "Длинное и короткое планирование производства",
              "План поставок на склады МП с учётом SLA и оборачиваемости"
            ]}/>
            <FeatureCard icon={<Target className="h-5 w-5"/>} title="Анализ эффективности рекламы" points={[
              "Площадки МП и соцсети в одной модели атрибуции",
              "ROAS/ROMI, вклад в органику, убыточные кампании",
              "Рекомендации по бюджету и ставкам"
            ]}/>
            <FeatureCard icon={<Settings2 className="h-5 w-5"/>} title="Управление ценами" points={[
              "Правила цен/скидок, SPP, мониторинг конкурентов",
              "Система контроля ошибок (блокировки, дубли, атрибуты)",
              "Журнал изменений и откат"
            ]}/>
            <FeatureCard icon={<PieChart className="h-5 w-5"/>} title="Комплексная бизнес-аналитика" points={[
              "P&L по SKU/категории/каналу, вклад рекламы",
              "COGS, логистика, фулфилмент, комиссии, возвраты",
              "Дашборды для C-level и операционной команды"
            ]}/>
            <FeatureCard icon={<Layers className="h-5 w-5"/>} title="Автоматизация процессов" points={[
              "Загрузка/обновление атрибутов, фото, цен",
              "Регулярные отчёты и оповещения в мессенджеры",
              "API/экспорт в 1С, Google Sheets, BI"
            ]}/>
          </div>
        </div>
      </section>

      <section id="impact" className="py-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Какой эффект получает бизнес</h2>
              <ul className="mt-6 space-y-3 text-neutral-700">
                <li className="flex gap-3"><Rocket className="mt-1 h-5 w-5"/> Рост выручки за счёт точного планирования наличия и ценовой эластичности.</li>
                <li className="flex gap-3"><ShoppingCart className="mt-1 h-5 w-5"/> Снижение Out-of-Stock и «заморозки» в излишних остатках.</li>
                <li className="flex gap-3"><BrainCircuit className="mt-1 h-5 w-5"/> Сокращение ручных операций менеджеров и ошибок данных.</li>
                <li className="flex gap-3"><BarChart3 className="mt-1 h-5 w-5"/> Прозрачная управленческая отчётность и быстрая проверка гипотез.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="grid grid-cols-2 gap-4">
                <KPI label="Снижение OOS" value="−30–50%"/>
                <KPI label="Скорость отчётности" value="×10"/>
                <KPI label="ROI внедрения" value="> 300%"/>
                <KPI label="Время менеджера" value="−2–4 ч/день"/>
              </div>
              <p className="mt-4 text-xs text-neutral-500">* Оценки основаны на пилотах и типовых внедрениях. Фактические результаты зависят от ассортимента и процессов.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Как это работает</h2>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <Step n={1} title="Подключение данных" desc="API WB и Ozon, рекламные кабинеты, учётные системы (1С/БД), файлы и таблицы."/>
            <Step n={2} title="Модели и правила" desc="ML-прогнозы, сезонность, атрибуция, правила цен и качества данных."/>
            <Step n={3} title="Действия" desc="Дашборды, задачи и алерты, автоматические обновления, экспорт и интеграции."/>
          </div>
        </div>
      </section>

      <section id="integrations" className="py-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Интеграции</h2>
          <p className="mt-3 text-neutral-700">Готовые коннекторы и открытое API для расширения.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Wildberries","Ozon","VK Ads","myTarget","Google Ads","1С/ERP"].map((name) => (
              <div key={name} className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 py-6 text-center text-sm text-neutral-600">{name}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border bg-white p-8 lg:p-12 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold">Готовы увеличить эффективность команды и масштабировать бизнес?</h3>
              <p className="mt-3 text-neutral-700">Оставьте заявку на пилот: подключим кабинет, покажем ваши данные в сценариях «Кабинет менеджера», «План закупок», «Реклама» и «P&L».</p>
            </div>
            <div className="flex items-center lg:justify-end">
              <a href="#demo" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow">Запросить пилот</a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FAQ q="Сколько занимает запуск пилота?" a="Обычно 7–14 дней: подключение источников, базовые модели, первичные дашборды."/>
            <FAQ q="Какие данные нужны?" a="Доступы к API кабинетов WB/Ozon, рекламных систем, а также к учётной системе или выгрузкам."/>
            <FAQ q="Можно ли выгружать отчёты в 1С/таблицы?" a="Да, доступны API/экспорты и планировщик регулярных отчётов."/>
            <FAQ q="Как обеспечивается безопасность?" a="Ролевой доступ, шифрование, аудит действий и хранение в приватном контуре по запросу."/>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Data Lab. Все права защищены.</p>
            <p className="text-xs text-neutral-500">Общество с ограниченной ответственностью "ДАТА ЛАБ"</p>
            <p className="text-xs text-neutral-500">ОГРН: 1252700013323 ИНН: 2700058793</p>
            <p className="text-xs text-neutral-500">680009, Хабаровский край, г. о. город Хабаровск, г. Хабаровск, пер. Промышленный, д. 2, помещ. 6</p>
            <p className="text-xs text-neutral-500">ОКВЭД: Вид деятельности компании - разработка компьютерного программного обеспечения (62.01)</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-800">Политика конфиденциальности</a>
            <a href="#" className="hover:text-neutral-800">Условия использования</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, points }: { icon: React.ReactNode; title: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-2 text-neutral-900 font-semibold">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">{icon}</span>
        <span>{title}</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
        {points.map((p, i) => (<li key={i}>{p}</li>))}
      </ul>
    </div>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white border border-neutral-200 p-4 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-neutral-600 mt-1">{label}</div>
    </div>
  );
}

function Step({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-neutral-900 text-white grid place-items-center font-semibold">{n}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-neutral-700 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="font-semibold">{q}</div>
      <div className="text-sm text-neutral-700 mt-2">{a}</div>
    </div>
  );
}
