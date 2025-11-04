// src/ProductSocialAnalytics.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, TrendingUp, Share2, BarChart3, PieChart, Link2, Target, Calculator, ShieldAlert, Code2, Phone, Mail, FileText, Cloud } from "lucide-react";

export default function ProductSocialAnalytics() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    if (open) document.documentElement.classList.add('overflow-hidden');
    else document.documentElement.classList.remove('overflow-hidden');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [open]);

  useEffect(() => {
    const ids = ['overview','features','funnel','roi','setup','integrations','pricing','support','docs'];
    // eslint-disable-next-line no-console
    console.table(ids.map(id => ({ test: `#${id} exists`, result: !!document.getElementById(id) ? 'OK' : 'FAIL' })));
  }, []);

  const bars = [45, 72, 55, 92, 68, 80, 61];
  const line = [10,18,26,25,33,44,40,55,62,70,78,74];

  const closeOnNav = () => setOpen(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <style>{`html{scroll-behavior:smooth}`}</style>
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-white text-sm">DL</span>
            <span>Data Lab</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-neutral-600">Возможности</a>
            <a href="#funnel" className="hover:text-neutral-600">Воронка</a>
            <a href="#roi" className="hover:text-neutral-600">ROMI/ROI</a>
            <a href="#setup" className="hover:text-neutral-600">Внедрение (SaaS)</a>
            <a href="#integrations" className="hover:text-neutral-600">Интеграции</a>
            <a href="#pricing" className="hover:text-neutral-600">Стоимость</a>
            <a href="#support" className="hover:text-neutral-600">Техподдержка</a>
            <a href="#docs" className="hover:text-neutral-600">Документы</a>
          </nav>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <span className="text-neutral-600">Стоимость — по запросу</span>
            <a href="#support" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm">Связаться</a>
          </div>
          <button onClick={() => setOpen(v=>!v)} aria-label="Открыть меню" className="md:hidden inline-flex items-center justify-center p-2 rounded-xl border border-neutral-300">
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-3 text-sm">
              {[
                ['#features','Возможности'],['#funnel','Воронка'],['#roi','ROMI/ROI'],['#setup','Внедрение (SaaS)'],['#integrations','Интеграции'],['#pricing','Стоимость'],['#support','Техподдержка'],['#docs','Документы']
              ].map(([href,label]) => (
                <a key={href} onClick={closeOnNav} href={href as string} className="py-2">{label}</a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-neutral-600">Стоимость — по запросу</span>
                <a onClick={closeOnNav} href="#support" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 font-semibold bg-neutral-900 text-white">Связаться</a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="scroll-mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-white to-neutral-100" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Аналитика эффективности продвижения в соцсетях для продавцов на Wildberries
              </h1>
              <p className="mt-5 text-lg text-neutral-700 max-w-2xl">
                Программное обеспечение Дата Лаб (Data Lab) - это интернет сервис
              </p>
              <p className="mt-5 text-lg text-neutral-700 max-w-2xl">
                Интернет-сервис (SaaS), который связывает охваты и действия аудитории в соцсетях с реальными результатами на маркетплейсе: переходы на карточки, добавления в корзину, заказы, выкупы, выручка, расходы маркетплейса и себестоимость — вплоть до расчёта почти чистой прибыли.
              </p>
              <p className="mt-3 text-neutral-700 max-w-2xl">
                Сервис требует предварительной настройки и интеграций при внедрении в процессы вашей компании. Помогаем обеспечить рост бизнеса без пропорционального роста штата.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#features" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow">Посмотреть возможности</a>
                <a href="#support" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-base font-semibold bg-white border border-neutral-200 hover:bg-neutral-50">Обсудить внедрение</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-xs text-neutral-600">
                <span className="inline-flex items-center gap-2"><Cloud className="h-4 w-4"/> SaaS, без установки у клиента</span>
                <span className="inline-flex items-center gap-2"><ShieldAlert className="h-4 w-4"/> Контроль атрибуции и ошибок</span>
                <span className="inline-flex items-center gap-2"><Link2 className="h-4 w-4"/> Сквозные интеграции</span>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6, delay:.1}}>
              <div className="relative rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border p-4">
                    <div className="text-sm font-semibold mb-2">ROMI по блоггерам</div>
                    <Bars data={bars} />
                  </div>
                  <div className="rounded-2xl border p-4">
                    <div className="text-sm font-semibold mb-2">Переходы → Выкупы</div>
                    <Line data={line} />
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-neutral-600">
                  <div className="rounded-xl border p-2 text-center">Instagram*/Reels</div>
                  <div className="rounded-xl border p-2 text-center">VK/Клипы</div>
                  <div className="rounded-xl border p-2 text-center">YouTube/Shorts</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ключевые возможности</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">Система анализирует путь от охватов до выкупов, учитывая перекрёстные покупки (перешёл на один товар — купил другой), а также все расходы на стороне маркетплейса (комиссия, логистика), себестоимость и выручку.</p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card icon={<Share2 className="h-5 w-5"/>} title="Инфлюенс-аналитика">
              Отслеживание охватов, кликов, переходов на карточки и вкладов отдельных блоггеров/каналов.
            </Card>
            <Card icon={<BarChart3 className="h-5 w-5"/>} title="E2E-воронка">
              Переходы → добавления в корзину → заказы → выкупы с учётом перекрёстных покупок.
            </Card>
            <Card icon={<Target className="h-5 w-5"/>} title="Атрибуция и вклад органики">
              Модели атрибуции и оценка влияния внешнего трафика на органические продажи.
            </Card>
            <Card icon={<Calculator className="h-5 w-5"/>} title="ROMI/ROI и P&L">
              Затраты на интеграции/рекламу + комиссии/логистика/С/С → выручка → почти чистая прибыль*.
            </Card>
            <Card icon={<Link2 className="h-5 w-5"/>} title="Интеграции">
              Подключение соцсетей, маркетплейса и учётных систем (API/выгрузки).
            </Card>
            <Card icon={<ShieldAlert className="h-5 w-5"/>} title="Контроль качества данных">
              Алерты по разрывам атрибуции, дублям, ошибкам меток и задержкам синхронизации.
            </Card>
          </div>
          <p className="mt-3 text-xs text-neutral-500">*Не учитывает ФОТ и вне-маркетплейсные постоянные/переменные расходы.</p>
        </div>
      </section>

      <section id="funnel" className="scroll-mt-24 py-16 border-т border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Воронка: от охватов к выкупам</h2>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <Step n={1} title="Охваты и взаимодействия" desc="Импрессии, просмотры, лайки/комменты, переходы по ссылке/UTM."/>
            <Step n={2} title="Карточка товара" desc="Переходы на карточку (в т.ч. по одному товару — покупка другого)."/>
            <Step n={3} title="Корзина → Заказ → Выкуп" desc="Добавления в корзину, подтверждённые заказы, процент выкупа."/>
          </div>
        </div>
      </section>

      <section id="roi" className="scroll-mt-24 py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">ROMI/ROI: реальная окупаемость продвижения</h2>
              <ul className="mt-6 space-y-3 text-neutral-700">
                <li className="flex gap-3"><PieChart className="mt-1 h-5 w-5"/> Учитываем расходы маркетплейса: комиссии, логистика, хранение/штрафы.</li>
                <li className="flex gap-3"><Calculator className="mt-1 h-5 w-5"/> Удерживаем себестоимость: расчёт с детализацией до SKU/кампании.</li>
                <li className="flex gap-3"><TrendingUp className="mt-1 h-5 w-5"/> Показываем ROMI/ROI и вклад каждой интеграции/канала в P&L.</li>
                <li className="flex gap-3"><BarChart3 className="mt-1 h-5 w-5"/> Оцениваем влияние на органические продажи (uplift/halo-эффект).</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="grid grid-cols-2 gap-4">
                <KPI label="ROMI по каналам" value=">150%"/>
                <KPI label="Выкуп (ср.)" value="60–75%"/>
                <KPI label="Время отчёта" value="минуты"/>
              </div>
              <p className="mt-4 text-xs text-neutral-500">Показатели — ориентиры, зависят от ассортимента и качества интеграций.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="setup" className="scroll-mt-24 py-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Внедрение и формат сервиса (SaaS)</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <Card icon={<Cloud className="h-5 w-5"/>} title="Интернет-сервис (SaaS)">
              Работает из браузера, отдельная установка на стороне клиента не требуется; доступ по аккаунту.
            </Card>
            <Card icon={<Code2 className="h-5 w-5"/>} title="Предварительная настройка">
              Подключим соцсети, маркетплейс Wildberries и учётные системы, настроим атрибуцию и метки.
            </Card>
          </div>
          <p className="mt-3 text-xs text-neutral-500">Информация о формате распространения, стоимости по запросу и документах приведена на странице согласно рекомендациям по сайту для включения ПО в реестр. </p>
        </div>
      </section>

      <section id="integrations" className="scroll-mt-24 py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Интеграции</h2>
          <p className="mt-3 text-neutral-700">Готовые коннекторы и открытое API для соцсетей и Wildberries.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Instagram*','VK','YouTube','Telegram','TikTok*','Wildberries'].map((name) => (
              <div key={name} className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 py-6 text-center text-sm text-neutral-600">{name}</div>
            ))}
          </div>
          <p className="mt-3 text-xs text-neutral-500">*Примечание: применяются в рамках действующего законодательства и правил платформ.</p>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 py-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Стоимость</h2>
          <p className="mt-3 text-neutral-700 max-w-3xl">Зависит от объёма интеграций, количества соцсетей и состава работ. Рассчитывается индивидуально по запросу.</p>
          <div className="mt-6 rounded-2xl border bg-white p-6">
            <div className="text-sm text-neutral-700">Свяжитесь с нами для расчёта и пилота на ваших данных.</div>
          </div>
        </div>
      </section>

      <section id="support" className="scroll-mt-24 py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Техническая поддержка</h2>
          <p className="mt-3 text-neutral-700">Вопросы по внедрению, интеграциям и работе сервиса.</p>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6 bg-white">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href="tel:+79249316471" className="hover:underline">+7 924 931 64 71</a></div>
              <div className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4"/> <a href="mailto:dir@data-lab-24.ru" className="hover:underline">dir@data-lab-24.ru</a></div>
              <div className="mt-3 text-sm text-neutral-600">Режим работы поддержки: пн–пт, 09:00–18:00 (МСК).</div>
            </div>
            <div className="rounded-2xl border p-6 bg-neutral-50 text-sm text-neutral-700">
              <div className="font-semibold mb-1">Зачем писать в поддержку:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Запрос на подключение новых соцсетей/интеграций.</li>
                <li>Вопросы по атрибуции, отчётам и KPI.</li>
                <li>Сообщить об ошибках данных или задержках синхронизации.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="scroll-mt-24 py-16 border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Документы</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              ['Документ 1','/docs/product-social-analytics.pdf'],
              ['документ 2','/docs/romi-method.pdf'],
              ['документ 3','/docs/integrations.pdf']
            ].map(([label, href]) => (
              <a key={href as string} href={href as string} target="_blank" rel="noopener noreferrer" className="rounded-2xl border p-4 bg-white hover:bg-neutral-50 inline-flex items-center gap-2">
                <FileText className="h-4 w-4"/> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Data Lab. Все права защищены.</p>
            <p className="text-xs text-neutral-500">Общество с ограниченной ответственностью «ДАТА ЛАБ». ОГРН 1252700013323 · ИНН 2700058793</p>
            <p className="text-xs text-neutral-500">680009, Хабаровский край, г. Хабаровск, пер. Промышленный, д. 2, помещ. 6</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800">Политика конфиденциальности</a>
            <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800">Пользовательское соглашение</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-2 text-neutral-900 font-semibold">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100">{icon}</span>
        <span>{title}</span>
      </div>
      <div className="mt-3 text-sm text-neutral-700">{children}</div>
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

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white border border-neutral-200 p-4 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-neutral-600 mt-1">{label}</div>
    </div>
  );
}

function Bars({ data }: { data: number[] }) {
  const max = Math.max(...data, 1);
  return (
    <div className="flex items-end gap-1 h-28 w-full">
      {data.map((v, i) => (
        <div key={i} className="flex-1 bg-neutral-200 rounded-t" style={{ height: `${(v/max)*100}%` }} />
      ))}
    </div>
  );
}

function Line({ data }: { data: number[] }) {
  const w = 260, h = 120, pad = 6;
  const max = Math.max(...data, 1);
  const step = (w - pad*2) / (data.length - 1 || 1);
  const points = data.map((v, i) => `${pad + i*step},${h - pad - (v/max)*(h - pad*2)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-28">
      <polyline fill="none" stroke="currentColor" strokeWidth="2" points={points} className="text-neutral-700" />
    </svg>
  );
}
