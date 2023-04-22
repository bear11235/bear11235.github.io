var store = [{
        "title": "Research Note",
        "excerpt":"2023-04-11 (화)     두 개의 난류 유동이 있을 때, 그 둘의 유사성을 어떻게 판단할 것인가?   2023-04-13 (목)     난류 유동의 순간적인(?) time scale은 어떻게 구할 것인가?                      ","categories": ["research"],
        "tags": [],
        "url": "/research/research-note/",
        "teaser": null
      },{
        "title": "Query an Ansys license status",
        "excerpt":"problem ANSYS client host에서 server host로 license status 요청하기 Solution lmutil lmstat -c PORT@SERVER -a 모든 프로그램에 대한 현재 라이센스 상태를 보여준다. [root@master ~]$ /nopt/ansys_inc/v202/licensingclient/linx64/lmutil lmstat -c 1055@license.tml -a lmutil - Copyright (c) 1989-2015 Flexera Software LLC. All Rights Reserved. Flexible License Manager status on Sun 4/16/2023 14:03 License server...","categories": ["linux","ansys"],
        "tags": ["linux","ansys","license"],
        "url": "/linux/ansys/query-ansys-license/",
        "teaser": null
      },{
        "title": "Query a TecPlot license status",
        "excerpt":"problem TecPlot client host에서 server host로 license status 요청하기 Solution rlmutil rlmstat -c PORT@SERVER [root@master bin]# /opt/tecplot/360ex_2022r2/bin/rlmutil rlmstat -a -c 27100@license.tml Setting license file path to 27100@license.tml rlmutil v12.4 Copyright (C) 2006-2018, Reprise Software, Inc. All rights reserved. rlm status on license.tml (port 27100), up 00:28:24 rlm software version v12.4...","categories": ["linux","tecplot"],
        "tags": ["linux","tecplot","license"],
        "url": "/linux/tecplot/query-tecplot-license/",
        "teaser": null
      },{
        "title": "Bayesian Network 공부하기",
        "excerpt":"Bayesian Network(BN) 란? Bayesian Network = Graph + Conditional Probability Table 확률 변수 사이의 상관관계를 그래프로 표현하고, 변수 사이의 조건부 확률 분포를 학습 그래프는 node와 edge로 표현된다. BN은 확률 변수를 node로, 확률 변수 사이 직접적인 의존성(direct dependency)을 edge로 표현한다. BN에서 사용하는 그래프 모델은 Directed Acyclic Graph (DAG), 즉 비순환-방향성 그래프로...","categories": ["study","machine learning"],
        "tags": ["study","machine learning","bayesian network"],
        "url": "/study/machine%20learning/bayesian-network/",
        "teaser": null
      },{
        "title": "Hidden Markov Model 공부하기",
        "excerpt":"Markov Chain Markov Property Markov 성질은 현재 시점의 상태는 바로 직전 시점의 상태에만 의존한다는 것이다. 즉 $ P(X_{n} \\vert X_{n-1}, X_{n-2}, \\cdots, X_{1}) = P(X_{n} \\vert X_{n-1}) $ 이것은 다가오는 미래는 과거에 영향 받지 않고 온전히 현재 상태에만 의존함을 의미한다. Definition A Markov process is a stochastic process that satisfies...","categories": ["study","machine learning"],
        "tags": ["study","machine learning","markov","bayesian network"],
        "url": "/study/machine%20learning/hidden-markov-model/",
        "teaser": null
      },{
        "title": "EM 알고리즘 공부하기",
        "excerpt":" ","categories": ["study","machine learning"],
        "tags": ["study","machine learning","EM","GMM"],
        "url": "/study/machine%20learning/expectation-maximization/",
        "teaser": null
      },{
        "title": "Undirected model 공부하기",
        "excerpt":"Directed vs Undirected 적용하고자 하는 application에서 변수 간 order가 있을 수도 있고 없을 수도 있음. 오늘의 날씨와 내일의 날씨는 order가 있음. 이미지의 픽셀 정보는 order가 없음. 순서가 있는 경우에는 DAG 모델을 주로 사용하고, 순서가 없는 경우에는 Undirected Graphical Model(UG, UGM) 혹은 Markov Random Fields(MRF)를 사용한다. BN에서는 Conditional Probability Table(CPT)를 사용하여...","categories": ["study","machine learning"],
        "tags": ["study","machine learning","graph model","bayesian network","UG","DAG"],
        "url": "/study/machine%20learning/undirected-graphical-model/",
        "teaser": null
      },{
        "title": "Kernel method 공부하기",
        "excerpt":"Linear Regression with Non-linear Features 어떤 데이터 x를 다루고 싶을 때, 그 x를 그대로 모델의 입력값으로 사용할 수도 있지만, 어떤 \\(y=f(x)\\)라는 매핑을 통해 일차적으로 변환을 하고, 그 이후에 모델에 집어넣을 수 있다. 예를 들어 x를 n차 다항식 형태로 매핑을 한다고 생각해보자. \\[y = w_0x_0 + \\cdots w_nx_n = [w_0, \\cdots,...","categories": ["study","machine learning"],
        "tags": ["study","machine learning","kernel"],
        "url": "/study/machine%20learning/kernel-method/",
        "teaser": null
      },{
        "title": "여러 Boosting 알고리즘 공부하기",
        "excerpt":"AdaBoost Adaptive Boost의 약자로, 이름에서 알 수 있다시피 적응형이다. AdaBoost도 Boosting이므로 classifier를 순차적으로 학습한다. 첫번째 데이터셋에 대해 학습을 진행하고, 그 결과에 따라 다음 데이터셋에 적절한 가중치를 부여하고 다음 모델을 학습한다. 이때 데이터셋에 가중치는 어떻게 부여하는가? 또한 n개의 모델을 학습한 후에 각 모델들에 가중치를 두어 최종 모델을 구해야하는데, 이때도 각 모델에...","categories": ["study","machine learning"],
        "tags": ["study","machine learning","boosting","ensemble"],
        "url": "/study/machine%20learning/boosting-algorthms/",
        "teaser": null
      },{
        "title": "Ensemble Method 공부하기",
        "excerpt":"Preliminary Knowledge Bootstrap 요약 Bootstrap (부트스트랩)은 데이터 내에서 반복적으로 샘플을 사용하는 resampling 방법 중 하나. Bootstrap sampling을 하면 애초에 한 개 밖에 없었던 우리들의 sample data set을 n개의 sample data set을 가지고 있는 것과 같은 효과를 누릴 수 있게 한다. 이를 통해 우리는 data의 variance를 상당히 잘 근사 할 수...","categories": ["study","machine learning"],
        "tags": ["study","machine learning","boost","learning"],
        "url": "/study/machine%20learning/ensemble-method/",
        "teaser": null
      },{
    "title": "Page Not Found",
    "excerpt":"Sorry, but the page you were trying to view does not exist.  ","url": "http://localhost:4000/404.html"
  },{
    "title": "Archive Layout with Content",
    "excerpt":"A variety of common markup showing how the theme styles them. Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying yes to the thing you’ve got to...","url": "http://localhost:4000/archive-layout-with-content/"
  },{
    "title": "Posts by Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Posts by Collection",
    "excerpt":"                                                                                         ","url": "http://localhost:4000/collection-archive/"
  },{
    "title": "Edge Case",
    "excerpt":"Sample post listing for the category Edge Case.  ","url": "http://localhost:4000/categories/edge-case/"
  },{
    "title": null,
    "excerpt":"Super customizable Everything from the menus, sidebars, comments, and more can be configured or set with YAML Front Matter. Learn more Responsive layouts Built with HTML5 + CSS3. All layouts are fully responsive with helpers to augment your content. Learn more 100% free Free to use however you want under...","url": "http://localhost:4000/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/"
  },{
    "title": "Lorem Ipsum",
    "excerpt":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis...","url": "http://localhost:4000/lorem-ipsum/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": "Markup",
    "excerpt":"Sample post listing for the tag `markup`. ","url": "http://localhost:4000/tags/markup/"
  },{
    "title": "Page A",
    "excerpt":"Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.","url": "http://localhost:4000/page-a/"
  },{
    "title": "Page Archive",
    "excerpt":"{% for post in site.pages %}   {% unless post.hidden %}     {% include archive-single.html %}   {% endunless %} {% endfor %} ","url": "http://localhost:4000/page-archive/"
  },{
    "title": "Page B",
    "excerpt":"(lorem ipsum)","url": "http://localhost:4000/page-b/"
  },{
    "title": "Pets",
    "excerpt":"Sample document listing for the collection `_pets`. ","url": "http://localhost:4000/pets/"
  },{
    "title": "Portfolio",
    "excerpt":"Sample document listing for the collection `_portfolio`. ","url": "http://localhost:4000/portfolio/"
  },{
    "title": "Post Archive with Feature Rows",
    "excerpt":"{% for post in site.posts limit: 5 %}   {% include archive-single.html %} {% endfor %}  {% include feature_row id=\"intro\" type=\"center\" %}  {% include feature_row %}  {% include feature_row id=\"feature_row2\" type=\"left\" %}  {% include feature_row id=\"feature_row3\" type=\"right\" %}  {% include feature_row id=\"feature_row4\" type=\"center\" %}","url": "http://localhost:4000/post-archive-feature-rows/"
  },{
    "title": "Recipes",
    "excerpt":"Sample document listing for the collection `_recipes`.","url": "http://localhost:4000/recipes/"
  },{
    "title": "Sample Page",
    "excerpt":"This is an example page. It's different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this: >...","url": "http://localhost:4000/sample-page/"
  },{
    "title": "Sitemap",
    "excerpt":"A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ \"sitemap.xml\" | relative_url }}) available for digesting as well. Pages {% for post in site.pages %} {% include archive-single.html %} {% endfor %} Posts {% for post in site.posts...","url": "http://localhost:4000/sitemap/"
  },{
    "title": "Splash Page",
    "excerpt":"{% include feature_row id=\"intro\" type=\"center\" %}  {% include feature_row %}  {% include feature_row id=\"feature_row2\" type=\"left\" %}  {% include feature_row id=\"feature_row3\" type=\"right\" %}  {% include feature_row id=\"feature_row4\" type=\"center\" %}","url": "http://localhost:4000/splash-page/"
  },{
    "title": "Posts by Tag",
    "excerpt":"","url": "http://localhost:4000/tags/"
  },{
    "title": "Terms and Privacy Policy",
    "excerpt":"## Privacy Policy The privacy of my visitors is extremely important. This Privacy Policy outlines the types of personal information that is received and collected and how it is used. First and foremost, I will never share your email address or any other personal information to anyone without your direct...","url": "http://localhost:4000/terms/"
  },{
    "title": "Posts by Year",
    "excerpt":"","url": "http://localhost:4000/year-archive/"
  },{
    "title": "linux",
    "excerpt":"","url": "http://localhost:4000/tags/linux/"
  },{
    "title": "ansys",
    "excerpt":"","url": "http://localhost:4000/tags/ansys/"
  },{
    "title": "license",
    "excerpt":"","url": "http://localhost:4000/tags/license/"
  },{
    "title": "tecplot",
    "excerpt":"","url": "http://localhost:4000/tags/tecplot/"
  },{
    "title": "study",
    "excerpt":"","url": "http://localhost:4000/tags/study/"
  },{
    "title": "machine learning",
    "excerpt":"","url": "http://localhost:4000/tags/machine-learning/"
  },{
    "title": "bayesian network",
    "excerpt":"","url": "http://localhost:4000/tags/bayesian-network/"
  },{
    "title": "markov",
    "excerpt":"","url": "http://localhost:4000/tags/markov/"
  },{
    "title": "EM",
    "excerpt":"","url": "http://localhost:4000/tags/em/"
  },{
    "title": "GMM",
    "excerpt":"","url": "http://localhost:4000/tags/gmm/"
  },{
    "title": "graph model",
    "excerpt":"","url": "http://localhost:4000/tags/graph-model/"
  },{
    "title": "UG",
    "excerpt":"","url": "http://localhost:4000/tags/ug/"
  },{
    "title": "DAG",
    "excerpt":"","url": "http://localhost:4000/tags/dag/"
  },{
    "title": "kernel",
    "excerpt":"","url": "http://localhost:4000/tags/kernel/"
  },{
    "title": "boosting",
    "excerpt":"","url": "http://localhost:4000/tags/boosting/"
  },{
    "title": "ensemble",
    "excerpt":"","url": "http://localhost:4000/tags/ensemble/"
  },{
    "title": "boost",
    "excerpt":"","url": "http://localhost:4000/tags/boost/"
  },{
    "title": "learning",
    "excerpt":"","url": "http://localhost:4000/tags/learning/"
  },{
    "title": "research",
    "excerpt":"","url": "http://localhost:4000/categories/research/"
  },{
    "title": "linux",
    "excerpt":"","url": "http://localhost:4000/categories/linux/"
  },{
    "title": "ansys",
    "excerpt":"","url": "http://localhost:4000/categories/ansys/"
  },{
    "title": "tecplot",
    "excerpt":"","url": "http://localhost:4000/categories/tecplot/"
  },{
    "title": "study",
    "excerpt":"","url": "http://localhost:4000/categories/study/"
  },{
    "title": "machine learning",
    "excerpt":"","url": "http://localhost:4000/categories/machine-learning/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/page2/"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  }]
