import{_ as e,D as t,c as n,j as i,a as s,I as p,aT as l,o as h}from"./chunks/framework.Dg4RBWzA.js";const A=JSON.parse('{"title":"Режим MPA","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/mpa-mode.md","filePath":"ru/guide/mpa-mode.md","lastUpdated":1728613036000}'),d={name:"ru/guide/mpa-mode.md"},k={id:"mpa-mode",tabindex:"-1"},r=i("a",{class:"header-anchor",href:"#mpa-mode","aria-label":'Permalink to "Режим MPA <Badge type="warning" text="экспериментально" /> {#mpa-mode}"'},"​",-1),c=l(`<p>Режим MPA (Multi-Page Application — «Многостраничное приложение») можно включить через командную строку с помощью команды <code>vitepress build --mpa</code>, или через конфигурацию с помощью опции <code>mpa: true</code>.</p><p>В режиме MPA все страницы по умолчанию отображаются без включенного JavaScript. В результате производственный сайт, скорее всего, получит более высокую оценку эффективности первых посещений с помощью инструментов аудита.</p><p>Однако из-за отсутствия навигации SPA межстраничные ссылки будут приводить к полной перезагрузке страницы. После загрузки навигация в режиме MPA будет не такой мгновенной, как в режиме SPA.</p><p>Также обратите внимание, что «no-JS-by-default» («без JS по умолчанию») означает, что вы используете Vue исключительно как серверный язык шаблонов. Никаких обработчиков событий в браузере не будет, поэтому интерактивности не будет. Чтобы загрузить JavaScript со стороны клиента, вам нужно использовать специальный тег <code>&lt;script client&gt;</code>:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;JavaScript на стороне клиента!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Привет</span></span></code></pre></div><p><code>&lt;script client&gt;</code> — это функция только для VitePress, а не для Vue. Она работает как в файлах <code>.md</code>, так и в файлах <code>.vue</code>, но только в режиме MPA. Клиентские скрипты во всех компонентах темы будут объединены вместе, в то время как клиентский скрипт для конкретной страницы будет разделён только для этой страницы.</p><p>Обратите внимание, что <code>&lt;script client&gt;</code> <strong>не оценивается как код компонента Vue</strong>: он обрабатывается как обычный модуль JavaScript. По этой причине режим MPA следует использовать только в том случае, если ваш сайт требует абсолютно минимальной интерактивности на стороне клиента.</p>`,7);function o(E,g,m,y,_,u){const a=t("Badge");return h(),n("div",null,[i("h1",k,[s("Режим MPA "),p(a,{type:"warning",text:"экспериментально"}),s(),r]),c])}const P=e(d,[["render",o]]);export{A as __pageData,P as default};
