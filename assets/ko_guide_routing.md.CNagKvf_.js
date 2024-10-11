import{_ as s,c as a,o as i,aT as n}from"./chunks/framework.Dg4RBWzA.js";const E=JSON.parse('{"title":"라우팅","description":"","frontmatter":{"개요":"심층"},"headers":[],"relativePath":"ko/guide/routing.md","filePath":"ko/guide/routing.md","lastUpdated":1728613036000}'),p={name:"ko/guide/routing.md"},e=n(`<h1 id="routing" tabindex="-1">라우팅 <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;라우팅 {#routing}&quot;">​</a></h1><h2 id="file-based-routing" tabindex="-1">파일 기반 라우팅 <a class="header-anchor" href="#file-based-routing" aria-label="Permalink to &quot;파일 기반 라우팅 {#file-based-routing}&quot;">​</a></h2><p>VitePress는 파일 기반 라우팅을 사용하므로, 생성된 HTML 페이지는 소스 마크다운 파일의 디렉토리 구조에서 매핑됩니다. 예를 들어, 다음과 같은 디렉토리 구조가 주어진 경우:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ 가이드</span></span>
<span class="line"><span>│  ├─ 시작하기.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>├─ index.md</span></span>
<span class="line"><span>└─ 프롤로그.md</span></span></code></pre></div><p>생성된 HTML 페이지는 다음과 같습니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>index.md                  --&gt;  /index.html (접근 가능 경로 /)</span></span>
<span class="line"><span>프롤로그.md               --&gt;  /프롤로그.html</span></span>
<span class="line"><span>가이드/index.md          --&gt;  /가이드/index.html (접근 가능 경로 /가이드/)</span></span>
<span class="line"><span>가이드/시작하기.md       --&gt;  /가이드/시작하기.html</span></span></code></pre></div><p>결과적으로 생성된 HTML은 정적 파일을 제공할 수 있는 모든 웹 서버에서 호스팅할 수 있습니다.</p><h2 id="root-and-source-directory" tabindex="-1">루트와 소스 디렉토리 <a class="header-anchor" href="#root-and-source-directory" aria-label="Permalink to &quot;루트와 소스 디렉토리 {#root-and-source-directory}&quot;">​</a></h2><p>VitePress 프로젝트의 파일 구조에서 두 가지 중요한 개념이 있습니다: <strong>프로젝트 루트</strong>와 <strong>소스 디렉토리</strong>.</p><h3 id="project-root" tabindex="-1">프로젝트 루트 <a class="header-anchor" href="#project-root" aria-label="Permalink to &quot;프로젝트 루트 {#project-root}&quot;">​</a></h3><p>프로젝트 루트는 VitePress가 <code>.vitepress</code> 특수 디렉토리를 찾으려고 시도하는 위치입니다. <code>.vitepress</code> 디렉토리는 VitePress의 설정 파일, 개발 서버 캐시, 빌드 출력, 그리고 선택적 테마 커스터마이징 코드를 위한 예약된 위치입니다.</p><p>명령 줄에서 <code>vitepress dev</code>나 <code>vitepress build</code>를 실행할 때, VitePress는 현재 작업 디렉토리를 프로젝트 루트로 사용합니다. 서브 디렉토리를 루트로 지정하려면 상대 경로를 명령에 전달해야 합니다. 예를 들어, VitePress 프로젝트가 <code>./docs</code>에 위치한 경우, <code>vitepress dev docs</code>를 실행해야 합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs                    # 프로젝트 루트</span></span>
<span class="line"><span>│  ├─ .vitepress           # 설정 디렉토리</span></span>
<span class="line"><span>│  ├─ 시작하기.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ ...</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs</span></span></code></pre></div><p>이것은 다음과 같은 소스-HTML 매핑을 결과로 합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/index.md            --&gt;  /index.html (접근 가능 경로 /)</span></span>
<span class="line"><span>docs/시작하기.md       --&gt;  /시작하기.html</span></span></code></pre></div><h3 id="source-directory" tabindex="-1">소스 디렉토리 <a class="header-anchor" href="#source-directory" aria-label="Permalink to &quot;소스 디렉토리 {#source-directory}&quot;">​</a></h3><p>소스 디렉토리는 마크다운 소스 파일이 위치하는 곳입니다. 기본적으로, 이는 프로젝트 루트와 동일합니다. 하지만, <a href="./../reference/site-config#srcdir"><code>srcDir</code></a> 설정 옵션을 통해 이를 구성할 수 있습니다.</p><p><code>srcDir</code> 옵션은 프로젝트 루트에 상대적으로 해결됩니다. 예를 들어, <code>srcDir: &#39;src&#39;</code>로 설정하면, 파일 구조는 다음과 같아질 것입니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.                          # 프로젝트 루트</span></span>
<span class="line"><span>├─ .vitepress              # 설정 디렉토리</span></span>
<span class="line"><span>└─ src                     # 소스 디렉토리</span></span>
<span class="line"><span>   ├─ 시작하기.md</span></span>
<span class="line"><span>   └─ index.md</span></span></code></pre></div><p>결과적으로 생성된 소스-HTML 매핑:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/index.md            --&gt;  /index.html (접근 가능 경로 /)</span></span>
<span class="line"><span>src/시작하기.md        --&gt;  /시작하기.html</span></span></code></pre></div><h2 id="linking-between-pages" tabindex="-1">페이지 간 연결 <a class="header-anchor" href="#linking-between-pages" aria-label="Permalink to &quot;페이지 간 연결 {#linking-between-pages}&quot;">​</a></h2><p>페이지 간 연결 시 절대 경로와 상대 경로를 모두 사용할 수 있습니다. <code>.md</code> 및 <code>.html</code> 확장자 모두 작동하더라도, 파일 확장자를 생략하여 VitePress가 설정에 기반한 최종 URL을 생성하도록 하는 것이 좋은 방법입니다.</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 수행 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">시작하기</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">./getting-started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">시작하기</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">../guide/getting-started</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 수행하지 말 것 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">시작하기</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">./getting-started.md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">시작하기</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">./getting-started.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><a href="./asset-handling">Asset Handling</a>에서 이미지와 같은 에셋에 연결하는 방법에 대해 자세히 알아보세요.</p><h3 id="linking-to-non-vitepress-pages" tabindex="-1">VitePress 페이지가 아닌 페이지로 연결 <a class="header-anchor" href="#linking-to-non-vitepress-pages" aria-label="Permalink to &quot;VitePress 페이지가 아닌 페이지로 연결 {#linking-to-non-vitepress-pages}&quot;">​</a></h3><p>VitePress에서 생성하지 않은 사이트의 페이지에 연결하려면, 전체 URL을 사용해야 합니다(새 탭에서 열림) 또는 명시적으로 대상을 지정해야 합니다:</p><p><strong>입력</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">Link to pure.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">/pure.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){target=&quot;_self&quot;}</span></span></code></pre></div><p><strong>출력</strong></p><p><a href="/pure.html" target="_self">Link to pure.html</a></p><div class="tip custom-block"><p class="custom-block-title">참고</p><p>마크다운 링크에서 <code>base</code>는 자동으로 URL에 추가됩니다. 즉, base 외부의 페이지에 연결하려면 링크에 <code>../../pure.html</code>와 같은 것이 필요합니다(브라우저에 의해 현재 페이지에 상대적으로 해결됨).</p><p>또는, 앵커 태그 구문을 직접 사용할 수 있습니다:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/pure.html&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_self&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Link to pure.html&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div><h2 id="generating-clean-url" tabindex="-1">깨끗한 URL 생성 <a class="header-anchor" href="#generating-clean-url" aria-label="Permalink to &quot;깨끗한 URL 생성 {#generating-clean-url}&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">서버 지원 필요</p><p>VitePress로 깨끗한 URL을 제공하려면 서버 측 지원이 필요합니다.</p></div><p>기본적으로, VitePress는 <code>.html</code>로 끝나는 URL로 들어오는 링크를 해결합니다. 그러나, 일부 사용자는 <code>.html</code> 확장자 없이 &quot;깨끗한 URL&quot;을 선호할 수 있습니다 - 예를 들어, <code>example.com/path</code> 대신 <code>example.com/path.html</code>.</p><p>일부 서버나 호스팅 플랫폼(예: Netlify, Vercel, GitHub 페이지)은 <code>/foo</code>와 같은 URL을 <code>/foo.html</code>로 매핑할 수 있는 기능을 제공합니다(리다이렉트 없이):</p><ul><li>Netlify와 GitHub 페이지는 기본적으로 이 기능을 지원합니다.</li><li>Vercel은 <a href="https://vercel.com/docs/concepts/projects/project-configuration#cleanurls" target="_blank" rel="noreferrer"><code>vercel.json</code>에서 <code>cleanUrls</code> 옵션을 활성화</a>해야 합니다.</li></ul><p>이 기능을 사용할 수 있다면, VitePress의 자체 <a href="./../reference/site-config#cleanurls"><code>cleanUrls</code></a> 설정 옵션을 활성화해서:</p><ul><li>페이지 간의 들어오는 링크가 <code>.html</code> 확장자 없이 생성됩니다.</li><li>현재 경로가 <code>.html</code>로 끝나면, 라우터가 클라이언트 측에서 확장자가 없는 경로로 리다이렉트를 수행합니다.</li></ul><p>그러나, 서버를 이러한 지원으로 구성할 수 없다면, 다음과 같은 디렉토리 구조를 수동으로 활용해야 합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ 시작하기</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>├─ 설치</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ index.md</span></span></code></pre></div><h2 id="route-rewrites" tabindex="-1">라우트 재작성 <a class="header-anchor" href="#route-rewrites" aria-label="Permalink to &quot;라우트 재작성 {#route-rewrites}&quot;">​</a></h2><p>소스 디렉토리 구조와 생성된 페이지 간의 매핑을 커스터마이즈할 수 있습니다. 복잡한 프로젝트 구조를 가지고 있을 때 유용합니다. 예를 들어, 여러 패키지가 있는 모노레포를 가지고 있고, 소스 파일과 함께 문서를 배치하고 싶다고 가정해 봅시다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ 패키지</span></span>
<span class="line"><span>│  ├─ pkg-a</span></span>
<span class="line"><span>│  │  └─ src</span></span>
<span class="line"><span>│  │      ├─ pkg-a-code.ts</span></span>
<span class="line"><span>│  │      └─ pkg-a-docs.md</span></span>
<span class="line"><span>│  └─ pkg-b</span></span>
<span class="line"><span>│     └─ src</span></span>
<span class="line"><span>│         ├─ pkg-b-code.ts</span></span>
<span class="line"><span>│         └─ pkg-b-docs.md</span></span></code></pre></div><p>그리고 VitePress 페이지가 다음과 같이 생성되기를 원합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>packages/pkg-a/src/pkg-a-docs.md  --&gt;  /pkg-a/index.html</span></span>
<span class="line"><span>packages/pkg-b/src/pkg-b-docs.md  --&gt;  /pkg-b/index.html</span></span></code></pre></div><p>이것은 다음과 같이 <a href="./../reference/site-config#rewrites"><code>rewrites</code></a> 옵션을 구성하여 달성할 수 있습니다:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rewrites: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;패키지/pkg-a/src/pkg-a-docs.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pkg-a/index.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;패키지/pkg-b/src/pkg-b-docs.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pkg-b/index.md&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>rewrites</code> 옵션은 동적 라우트 매개변수도 지원합니다. 위의 예제에서, 많은 패키지를 가지고 있다면 모든 경로를 나열하는 것은 장황할 것입니다. 모두 같은 파일 구조를 가지고 있다면, 설정을 다음과 같이 간단하게 할 수 있습니다:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rewrites: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;패키지/:pkg/src/(.*)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;:pkg/index.md&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>재작성 경로는 <code>path-to-regexp</code> 패키지를 사용하여 컴파일됩니다 - 보다 고급 구문에 대해서는 <a href="https://github.com/pillarjs/path-to-regexp#parameters" target="_blank" rel="noreferrer">해당 문서</a>를 참조하십시오.</p><div class="warning custom-block"><p class="custom-block-title">재작성과 상대 링크</p><p>재작성이 활성화된 경우, <strong>상대 링크는 재작성된 경로를 기반으로 해야 합니다</strong>. 예를 들어, <code>패키지/pkg-a/src/pkg-a-code.md</code>에서 <code>패키지/pkg-b/src/pkg-b-code.md</code>로 상대 링크를 생성하려면 다음을 사용해야 합니다:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">PKG B로의 링크</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">../pkg-b/pkg-b-code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></div><h2 id="dynamic-routes" tabindex="-1">동적 라우트 <a class="header-anchor" href="#dynamic-routes" aria-label="Permalink to &quot;동적 라우트 {#dynamic-routes}&quot;">​</a></h2><p>단일 마크다운 파일과 동적 데이터를 사용하여 많은 페이지를 생성할 수 있습니다. 예를 들어, 프로젝트의 모든 패키지에 해당하는 페이지를 생성하는 <code>패키지/[pkg].md</code> 파일을 만들 수 있습니다. 여기서 <code>[pkg]</code> 세그먼트는 각 페이지를 다른 페이지와 구별하는 라우트 <strong>매개변수</strong>입니다.</p><h3 id="paths-loader-file" tabindex="-1">경로 로더 파일 <a class="header-anchor" href="#paths-loader-file" aria-label="Permalink to &quot;경로 로더 파일 {#paths-loader-file}&quot;">​</a></h3><p>VitePress는 정적 사이트 생성기이므로, 가능한 페이지 경로는 빌드 시간에 결정되어야 합니다. 따라서 동적 라우트 페이지는 <strong>경로 로더 파일</strong>을 동반해야 합니다. <code>패키지/[pkg].md</code>의 경우, <code>패키지/[pkg].paths.js</code>(<code>.ts</code>도 지원)가 필요합니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└─ 패키지</span></span>
<span class="line"><span>   ├─ [pkg].md         # 라우트 템플릿</span></span>
<span class="line"><span>   └─ [pkg].paths.js   # 라우트 경로 로더</span></span></code></pre></div><p>경로 로더는 <code>params</code> 속성을 가진 객체의 배열을 반환하는 <code>paths</code> 메서드를 기본 export로 제공하는 객체여야 합니다. 이러한 객체 각각은 해당하는 페이지를 생성할 것입니다.</p><p>다음 <code>paths</code> 배열이 주어진 경우:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 패키지/[pkg].paths.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>생성된 HTML 페이지는 다음과 같습니다:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└─ 패키지</span></span>
<span class="line"><span>   ├─ foo.html</span></span>
<span class="line"><span>   └─ bar.html</span></span></code></pre></div><h3 id="multiple-params" tabindex="-1">여러 매개변수 <a class="header-anchor" href="#multiple-params" aria-label="Permalink to &quot;여러 매개변수 {#multiple-params}&quot;">​</a></h3><p>동적 라우트는 여러 매개변수를 포함할 수 있습니다:</p><p><strong>파일 구조</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└─ 패키지</span></span>
<span class="line"><span>   ├─ [pkg]-[version].md</span></span>
<span class="line"><span>   └─ [pkg]-[version].paths.js</span></span></code></pre></div><p><strong>경로 로더</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { params: { pkg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>출력</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└─ 패키지</span></span>
<span class="line"><span>   ├─ foo-1.0.0.html</span></span>
<span class="line"><span>   ├─ foo-2.0.0.html</span></span>
<span class="line"><span>   ├─ bar-1.0.0.html</span></span>
<span class="line"><span>   └─ bar-2.0.0.html</span></span></code></pre></div><h3 id="dynamically-generating-paths" tabindex="-1">동적으로 경로 생성 <a class="header-anchor" href="#dynamically-generating-paths" aria-label="Permalink to &quot;동적으로 경로 생성 {#dynamically-generating-paths}&quot;">​</a></h3><p>경로 로더 모듈은 Node.js에서 실행되며 빌드 시간에만 실행됩니다. 로컬 또는 원격 데이터를 사용하여 경로 배열을 동적으로 생성할 수 있습니다.</p><p>로컬 파일에서 경로 생성:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fs&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readdirSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;패키지&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pkg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { params: { pkg }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>원격 데이터에서 경로 생성:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pkgs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://my-api.com/packages&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pkgs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pkg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        params: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          pkg: pkg.name,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          version: pkg.version</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="accessing-params-in-page" tabindex="-1">페이지에서 매개변수 접근 <a class="header-anchor" href="#accessing-params-in-page" aria-label="Permalink to &quot;페이지에서 매개변수 접근 {#accessing-params-in-page}&quot;">​</a></h3><p>각 페이지에 추가 데이터를 전달하기 위해 매개변수를 사용할 수 있습니다. 마크다운 라우트 파일은 <code>$params</code> 전역 속성을 통해 현재 페이지 매개변수에 Vue 표현식에서 접근할 수 있습니다:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 패키지 이름: {{ $params.pkg }}</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 버전: {{ $params.version }}</span></span></code></pre></div><p><a href="./../reference/runtime-api#usedata"><code>useData</code></a> 런타임 API를 통해 마크다운 파일과 Vue 컴포넌트에서 현재 페이지의 매개변수에도 접근할 수 있습니다:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useData } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// params는 Vue ref입니다</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params.value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="rendering-raw-content" tabindex="-1">원시 콘텐츠 렌더링 <a class="header-anchor" href="#rendering-raw-content" aria-label="Permalink to &quot;원시 콘텐츠 렌더링 {#rendering-raw-content}&quot;">​</a></h3><p>페이지로 전달된 매개변수는 클라이언트 JavaScript 페이로드에 직렬화되므로, 예를 들어 원격 CMS에서 가져온 원시 마크다운이나 HTML 콘텐츠와 같이 무거운 데이터를 매개변수로 전달하지 마십시오.</p><p>대신, 각 경로 객체의 <code>content</code> 속성을 사용하여 각 페이지에 이러한 콘텐츠를 전달할 수 있습니다:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> posts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://my-cms.com/blog-posts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> posts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">post</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        params: { id: post.id },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        content: post.content </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 원시 마크다운 또는 HTML</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>그런 다음 다음 특수 구문을 사용하여 마크다운 파일 자체의 일부로 콘텐츠를 렌더링하세요:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- @content --&gt;</span></span></code></pre></div>`,88),t=[e];function l(h,k,d,r,c,o){return i(),a("div",null,t)}const y=s(p,[["render",l]]);export{E as __pageData,y as default};
