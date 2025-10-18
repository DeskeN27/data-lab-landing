import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  Settings2,
  ShieldAlert,
  BrainCircuit,
  Rocket,
  PieChart,
  TrendingUp,
  Layers,
  ShoppingCart,
  Target,
  Workflow,
  Menu,
  X,
  Code2,
  Phone,
  Mail,
  Building2,
} from "lucide-react";

/** Типы пропсов для внутрених компонентов */
type FeatureCardProps = { icon: React.ReactNode; title: string; points: string[] };
type KPIProps = { label: string; value: string };
type StepProps = { n: number; title: string; desc: string };
type FAQProps = { q: string; a: string };
type TechCardProps = { icon: React.ReactNode; title: string; desc: string };
type BarsProps = { data: number[] };
type LineProps = { data: number[] };

// Строго русская версия лендинга Data Lab (UTF-8).

export default function LandingAnalyticsMP() {
  const [open, setOpen] = useState(false);

  // Закрытие меню по Esc и запрет скролла фона при открытом меню
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    if (open) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open]);

  // Простые smoke-тесты наличия ключевых блоков
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = ["features", "impact", "how", "integrations", "faq", "about"];
    // eslint-disable-next-line no-console
    console.table(
      ids.map((id) => ({
        test: `#${id} exists`,
        result: !!document.getElementById(id) ? "OK" : "FAIL",
      }))
    );
  }, []);

  const demoBars = [62, 85, 40, 96, 72, 54, 88];
  const demoLine = [20, 28, 35, 34, 48, 60, 58, 72, 69, 80, 92, 90];

  const closeOnNav = () => setOpen(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border rounded px-3 py-2"
      >
        Перейти к содержимому
      </a>

      {/* Навигация */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-white text-sm">
              DL
            </span>
            <span>Data Lab</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-neutral-600">
              Функционал
            </a>
            <a href="#impact" className="hover:text-neutral-600">
              Эффект
            </a>
            <a href="#how" className="hover:text-neutral-600">
              Как это работает
            </a>
            <a href="#integrations" className="hover:text-neutral-600">
              Интеграции
            </a>
            <a href="#about" className="hover:text-neutral-600">
              О компании
            </a>
            <a href="#faq" className="hover:text-neutral-600">
              FAQ
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <span className="text-neutral-600">Стоимость услуг — по запросу</span>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center rounded-2xl px-4 py-2 font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm"
            >
              Связаться
            </a>
          </div>
          {/* Mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Открыть меню"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-neutral-300"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-3 text-sm">
              <a onClick={closeOnNav} href="#features" className="py-2">
                Функционал
              </a>
              <a onClick={closeOnNav} href="#impact" className="py-2">
                Эффект
              </a>
              <a onClick={closeOnNav} href="#how" className="py-2">
                Как это работает
              </a>
              <a onClick={closeOnNav} href="#integrations" className="py-2">
                Интеграции
              </a>
              <a onClick={closeOnNav} href="#about" className="py-2">
                О компании
              </a>
              <a onClick={closeOnNav} href="#faq" className="py-2">
                FAQ
              </a>
              <div className="flex items-center gap-3 pt-2">
                <span className="text-neutral-600">Стоимость — по запросу</span>
                <a
                  onClick={closeOnNav}
                  href="#contacts"
                  className="inline-flex items-center justify-center rounded-2xl px-4 py-2 font-semibold bg-neutral-900 text-white"
                >
                  Связаться
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-neutral-100" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Аналитическая платформа для Wildberries и Ozon
              </h1>
              <p className="mt-5 text-lg text-neutral-700 max-w-2xl">
                Data Lab помогает командам продавцов на маркетплейсах оптимизировать
                операции: прогнозирование продаж и планирование закупок, анализ рекламы,
                управление ценами и контроль ошибок, P&amp;L-аналитика. Помогаем обеспечить
                рост бизнеса без пропорционального роста штата.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow"
                >
                  Посмотреть функционал
                </a>
                <a
                  href="#contacts"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-white border border-neutral-200 hover:bg-neutral-50"
                >
                  Обсудить детали
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4" /> Контроль цен и ошибок
                </span>
                <span className="inline-flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" /> ML-прогнозы и планирование
                </span>
                <span className="inline-flex items-center gap-2">
                  <Workflow className="h-4 w-4" /> Автоматизация рутины
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
                {/* Мини-дашборды (отрисованы кодом) */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border p-4">
                    <div className="text-sm font-semibold mb-2">Продажи (планы/факт)</div>
                    <Bars data={demoBars} />
                  </div>
                  <div className="rounded-2xl border p-4">
                    <div className="text-sm font-semibold mb-2">Динамика выручки</div>
                    <Line data={demoLine} />
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-600">
                  <div className="rounded-xl border p-2 text-center">Кабинет WB</div>
                  <div className="rounded-xl border p-2 text-center">Кабинет Ozon</div>
                  <div className="rounded-xl border p-2 text-center">Бизнес-сводка</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Функционал */}
      <section id="features" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Основной функционал</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">
            Единое окно для менеджера МП, маркетолога и финансов: данные из кабинетов,
            рекламных систем и внутренних учётных систем превращаем в сценарии действий.
          </p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              icon={<TrendingUp className="h-5 w-5" />}
              title="Кабинет менеджера МП"
              points={[
                "План-факт по продажам/марже, остатки и оборачив.",
                "Аналитика карточек: CTR, конверсия, позиции.",
                "Задачи и алерты по аномалиям цен/скидок/стоков.",
              ]}
            />
            <FeatureCard
              icon={<LineChart className="h-5 w-5" />}
              title="Прогноз продаж и план закупок"
              points={[
                "ML-модели, сезонность, кластеры ассортимента.",
                "Длинное и короткое планирование производства.",
                "План поставок на склады МП с учётом SLA.",
              ]}
            />
            <FeatureCard
              icon={<Target className="h-5 w-5" />}
              title="Эффективность рекламы"
              points={[
                "МП и соцсети в одной модели атрибуции.",
                "ROAS/ROMI, вклад в органику, стоп-кампании.",
                "Рекомендации по бюджетам и ставкам.",
              ]}
            />
            <FeatureCard
              icon={<Settings2 className="h-5 w-5" />}
              title="Управление ценами"
              points={[
                "SPP, правила скидок, мониторинг конкурентов.",
                "Контроль ошибок (блокировки, дубли, атрибуты).",
                "Журнал изменений и откат.",
              ]}
            />
            <FeatureCard
              icon={<PieChart className="h-5 w-5" />}
              title="Комплексная аналитика"
              points={[
                "P&L по SKU/категории/каналу.",
                "COGS, логистика, фулфилмент, возвраты.",
                "Дашборды для C-level и операционной команды.",
              ]}
            />
            <FeatureCard
              icon={<Layers className="h-5 w-5" />}
              title="Автоматизация процессов"
              points={[
                "Массовые обновления атрибутов, фото, цен.",
                "Регулярные отчёты и оповещения в мессенджеры.",
                "API/экспорты в 1С, Google Sheets, BI.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Эффект */}
      <section id="impact" className="py-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Какой эффект получает бизнес
              </h2>
              <ul className="mt-6 space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <Rocket className="mt-1 h-5 w-5" /> Рост выручки за счёт наличия и ценовой
                  эластичности.
                </li>
                <li className="flex gap-3">
                  <ShoppingCart className="mt-1 h-5 w-5" /> Меньше Out-of-Stock и «заморозки» в
                  излишних остатках.
                </li>
                <li className="flex gap-3">
                  <BrainCircuit className="mt-1 h-5 w-5" /> Сокращение ручных операций и рисков
                  ошибок данных.
                </li>
                <li className="flex gap-3">
                  <BarChart3 className="mt-1 h-5 w-5" /> Прозрачная управленческая отчётность,
                  быстрее гипотезы.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="grid grid-cols-2 gap-4">
                <KPI label="Снижение OOS" value="−30–50%" />
                <KPI label="Скорость отчётности" value="×10" />
                <KPI label="ROI внедрения" value="≥300%" />
                <KPI label="Экономия времени менеджера" value="−2–4 ч/день" />
              </div>
              <p className="mt-4 text-xs text-neutral-500">
                Оценки типовые и зависят от ассортимента и процессов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section id="how" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Как это работает</h2>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <Step
              n={1}
              title="Подключение данных"
              desc="API WB и Ozon, рекламные кабинеты, учётные системы (1С/БД), файлы."
            />
            <Step
              n={2}
              title="Модели и правила"
              desc="ML-прогнозы, сезонность, атрибуция, правила цен и качества данных."
            />
            <Step
              n={3}
              title="Действия"
              desc="Дашборды, задачи и алерты, авто-обновления, экспорт и интеграции."
            />
          </div>
        </div>
      </section>

      {/* Интеграции */}
      <section id="integrations" className="py-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Интеграции</h2>
          <p className="mt-3 text-neutral-700">Готовые коннекторы и открытое API.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Wildberries", "Ozon", "VK Ads", "myTarget", "Google Ads", "1С/ERP"].map((name) => (
              <div
                key={name}
                className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 py-6 text-center text-sm text-neutral-600"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Технологии */}
      <section id="stack" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Технологии и языки</h2>
          <p className="mt-3 text-neutral-700">
            Мы работаем с современным стеком для высоконагруженной аналитики и интеграций.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <TechCard icon={<Code2 className="h-5 w-5" />} title="Python" desc="ETL, ML-модели, сервисы интеграций." />
            <TechCard icon={<Code2 className="h-5 w-5" />} title="1С:Предприятие (язык 1С)" desc="Интеграции с учётными системами." />
            <TechCard icon={<Code2 className="h-5 w-5" />} title="HTML/CSS" desc="Клиентские интерфейсы и виджеты." />
            <TechCard icon={<Code2 className="h-5 w-5" />} title="JS/TS (фронтенд)" desc="Интерактивные панели и отчёты." />
          </div>
        </div>
      </section>

      {/* Контакты и стоимость */}
      <section id="contacts" className="py-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border bg-white p-8 lg:p-12 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold">Связаться и обсудить детали</h3>
              <p className="mt-3 text-neutral-700">
                Стоимость услуг рассчитывается индивидуально — по запросу.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-neutral-800">
                <div className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />{" "}
                  <a href="tel:+79249316471" className="hover:underline">
                    +7 924 931 64 71
                  </a>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />{" "}
                  <a href="mailto:dir@tmp-group.ru" className="hover:underline">
                    dir@tmp-group.ru
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center lg:justify-end">
              <div className="rounded-2xl border p-4 text-sm text-neutral-700 bg-neutral-50">
                <div className="font-semibold mb-1">Почему сейчас:</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Быстрый пилот на ваших данных.</li>
                  <li>Минимум ручных операций у команды.</li>
                  <li>Фокус на ROI и управленческие метрики.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section id="about" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">О компании</h2>
              <p className="mt-4 text-neutral-700">
                Data Lab — ИТ-компания, разрабатывающая специализированное программное обеспечение в
                области аналитики и автоматизации для продавцов на маркетплейсах. Мы создаём продукт,
                которым сами пользуемся как разработчики и интеграторы: от сбора и нормализации данных
                до ML-прогнозов, дашбордов и интеграций с 1С.
              </p>
              <ul className="mt-4 space-y-2 text-neutral-700">
                <li>• Веб-решения для аналитики и визуализации данных.</li>
                <li>• Разработка индивидуального ПО (React/TS, Python, 1С).</li>
                <li>• Консультационные услуги в сфере ИТ и данных.</li>
              </ul>
              <div className="mt-4 text-neutral-700 text-sm">
                <p>
                  <strong>Соответствует видам деятельности Минцифры:</strong>
                </p>
                <p className="mt-2">
                  А) Услуги по разработке, адаптации и модификации программ для ЭВМ и баз данных.
                </p>
                <p className="mt-1">
                  Б) Реализация программ для ЭВМ и баз данных (включая обновления и изменения),
                  средств защиты информации, в т.ч. путём лицензирования, удалённого доступа через
                  Интернет, предоставления удалённых вычислительных мощностей, копирования и
                  распространения экземпляров.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border p-6 bg-white">
              <div className="flex items-center gap-2 text-neutral-900 font-semibold mb-3">
                <Building2 className="h-5 w-5" /> Юридическая информация
              </div>
              <ul className="text-sm text-neutral-700 space-y-2">
                <li>Общество с ограниченной ответственностью «ДАТА ЛАБ»</li>
                <li>ОГРН: 1252700013323</li>
                <li>ИНН: 2700058793</li>
                <li>
                  680009, Хабаровский край, г. о. город Хабаровск, г. Хабаровск, пер. Промышленный,
                  д. 2, помещ. 6
                </li>
                <li>ОКВЭД: разработка компьютерного программного обеспечения (62.01)</li>
              </ul>
              <div className="mt-4 text-sm text-neutral-700">
                <div className="font-semibold mb-1">Контакты</div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />{" "}
                  <a href="tel:+79249316471" className="hover:underline">
                    +7 924 931 64 71
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />{" "}
                  <a href="mailto:dir@tmp-group.ru" className="hover:underline">
                    dir@tmp-group.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <FAQ q="Сколько занимает пилот?" a="Обычно 7–14 дней: подключение источников, базовые модели, первичные дашборды." />
            <FAQ q="Какие данные нужны?" a="Доступы к API WB/Ozon, рекламным системам и при необходимости — к 1С/выгрузкам." />
            <FAQ q="Можно ли выгружать в 1С/таблицы?" a="Да, доступны API/экспорты и планировщик регулярных отчётов." />
            <FAQ q="Как обеспечивается безопасность?" a="Ролевой доступ, шифрование, аудит действий, вариант приватного развёртывания." />
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="py-10 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Data Lab. Все права защищены.</p>
            <p className="text-xs text-neutral-500">
              Общество с ограниченной ответственностью «ДАТА ЛАБ». ОГРН 1252700013323 · ИНН 2700058793
            </p>
            <p className="text-xs text-neutral-500">
              680009, Хабаровский край, г. Хабаровск, пер. Промышленный, д. 2, помещ. 6
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="privacy.html" className="hover:text-neutral-800">Политика конфиденциальности</a>
            <a href="terms.html" className="hover:text-neutral-800">Пользовательское соглашение</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** Компоненты */
function FeatureCard({ icon, title, points }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-2 text-neutral-900 font-semibold">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc list-inside">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function KPI({ label, value }: KPIProps) {
  return (
    <div className="rounded-2xl bg-white border border-neutral-200 p-4 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-neutral-600 mt-1">{label}</div>
    </div>
  );
}

function Step({ n, title, desc }: StepProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-neutral-900 text-white grid place-items-center font-semibold">
          {n}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-neutral-700 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function FAQ({ q, a }: FAQProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="font-semibold">{q}</div>
      <div className="text-sm text-neutral-700 mt-2">{a}</div>
    </div>
  );
}

function TechCard({ icon, title, desc }: TechCardProps) {
  return (
    <div className="rounded-2xl border p-5 bg-white">
      <div className="flex items-center gap-2 font-semibold text-neutral-900">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <div className="mt-2 text-sm text-neutral-700">{desc}</div>
    </div>
  );
}

/** Примитивные графики без внешних библиотек */
function Bars({ data }: BarsProps) {
  const max = Math.max(...data, 1);
  return (
    <div className="flex items-end gap-1 h-28 w-full">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 bg-neutral-200 rounded-t"
          style={{ height: `${(v / max) * 100}%` }}
        />
      ))}
    </div>
  );
}

function Line({ data }: LineProps) {
  const w = 260,
    h = 120,
    pad = 6;
  const max = Math.max(...data, 1);
  const step = (w - pad * 2) / (data.length - 1);
  const points = data
    .map((v, i) => `${pad + i * step},${h - pad - (v / max) * (h - pad * 2)}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-28" role="img" aria-label="График выручки">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        points={points}
        className="text-neutral-700"
      />
    </svg>
  );
}
