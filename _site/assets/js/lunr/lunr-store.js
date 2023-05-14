var store = [{
        "title": "Research Note",
        "excerpt":"2023-04-11 (화)     두 개의 난류 유동이 있을 때, 그 둘의 유사성을 어떻게 판단할 것인가?   2023-04-13 (목)     난류 유동의 순간적인(?) time scale은 어떻게 구할 것인가?                      ","categories": ["research","research-1"],
        "tags": [],
        "url": "/research/research-1/research-note/",
        "teaser": null
      },{
        "title": "Research Note",
        "excerpt":"2023-04-11 (화)     두 개의 난류 유동이 있을 때, 그 둘의 유사성을 어떻게 판단할 것인가?   2023-04-13 (목)     난류 유동의 순간적인(?) time scale은 어떻게 구할 것인가?                      ","categories": ["research","research-2"],
        "tags": [],
        "url": "/research/research-2/research-note/",
        "teaser": null
      },{
        "title": "cluster test",
        "excerpt":"problem ANSYS client host에서 server host로 license status 요청하기 Solution lmutil lmstat -c PORT@SERVER -a 모든 프로그램에 대한 현재 라이센스 상태를 보여준다. [root@master ~]$ /nopt/ansys_inc/v202/licensingclient/linx64/lmutil lmstat -c 1055@license.tml -a lmutil - Copyright (c) 1989-2015 Flexera Software LLC. All Rights Reserved. Flexible License Manager status on Sun 4/16/2023 14:03 License server...","categories": ["linux","cluster"],
        "tags": [],
        "url": "/linux/cluster/cluster-test/",
        "teaser": null
      },{
        "title": "Query an Ansys license status",
        "excerpt":"problem ANSYS client host에서 server host로 license status 요청하기 Solution lmutil lmstat -c PORT@SERVER -a 모든 프로그램에 대한 현재 라이센스 상태를 보여준다. [root@master ~]$ /nopt/ansys_inc/v202/licensingclient/linx64/lmutil lmstat -c 1055@license.tml -a lmutil - Copyright (c) 1989-2015 Flexera Software LLC. All Rights Reserved. Flexible License Manager status on Sun 4/16/2023 14:03 License server...","categories": ["linux","cluster"],
        "tags": ["linux","cluster","license"],
        "url": "/linux/cluster/query-ansys-license/",
        "teaser": null
      },{
        "title": "Query a TecPlot license status",
        "excerpt":"problem TecPlot client host에서 server host로 license status 요청하기 Solution rlmutil rlmstat -c PORT@SERVER [root@master bin]# /opt/tecplot/360ex_2022r2/bin/rlmutil rlmstat -a -c 27100@license.tml Setting license file path to 27100@license.tml rlmutil v12.4 Copyright (C) 2006-2018, Reprise Software, Inc. All rights reserved. rlm status on license.tml (port 27100), up 00:28:24 rlm software version v12.4...","categories": ["linux","cluster"],
        "tags": ["linux","tecplot","license"],
        "url": "/linux/cluster/query-tecplot-license/",
        "teaser": null
      },{
        "title": "commands test",
        "excerpt":"problem ANSYS client host에서 server host로 license status 요청하기 Solution lmutil lmstat -c PORT@SERVER -a 모든 프로그램에 대한 현재 라이센스 상태를 보여준다. [root@master ~]$ /nopt/ansys_inc/v202/licensingclient/linx64/lmutil lmstat -c 1055@license.tml -a lmutil - Copyright (c) 1989-2015 Flexera Software LLC. All Rights Reserved. Flexible License Manager status on Sun 4/16/2023 14:03 License server...","categories": ["linux","command"],
        "tags": [],
        "url": "/linux/command/command-test/",
        "teaser": null
      },{
        "title": "test",
        "excerpt":" ","categories": ["study","fluid-mechanics"],
        "tags": [],
        "url": "/study/fluid-mechanics/FM-test/",
        "teaser": null
      },{
        "title": "Bayesian Network 공부하기",
        "excerpt":"Bayesian Network(BN) 란? Bayesian Network = Graph + Conditional Probability Table 확률 변수 사이의 상관관계를 그래프로 표현하고, 변수 사이의 조건부 확률 분포를 학습 그래프는 node와 edge로 표현된다. BN은 확률 변수를 node로, 확률 변수 사이 직접적인 의존성(direct dependency)을 edge로 표현한다. BN에서 사용하는 그래프 모델은 Directed Acyclic Graph (DAG), 즉 비순환-방향성 그래프로...","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","bayesian network"],
        "url": "/study/ml-dl/bayesian-network/",
        "teaser": null
      },{
        "title": "Hidden Markov Model 공부하기",
        "excerpt":"Markov Chain Markov Property Markov 성질은 현재 시점의 상태는 바로 직전 시점의 상태에만 의존한다는 것이다. 즉 $ P(X_{n} \\vert X_{n-1}, X_{n-2}, \\cdots, X_{1}) = P(X_{n} \\vert X_{n-1}) $ 이것은 다가오는 미래는 과거에 영향 받지 않고 온전히 현재 상태에만 의존함을 의미한다. Definition A Markov process is a stochastic process that satisfies...","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","markov","bayesian network"],
        "url": "/study/ml-dl/hidden-markov-model/",
        "teaser": null
      },{
        "title": "test",
        "excerpt":" ","categories": ["study","turbo-machines"],
        "tags": [],
        "url": "/study/turbo-machines/TM-test/",
        "teaser": null
      },{
        "title": "EM 알고리즘 공부하기",
        "excerpt":" ","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","EM","GMM"],
        "url": "/study/ml-dl/expectation-maximization/",
        "teaser": null
      },{
        "title": "Undirected model 공부하기",
        "excerpt":"Directed vs Undirected 적용하고자 하는 application에서 변수 간 order가 있을 수도 있고 없을 수도 있음. 오늘의 날씨와 내일의 날씨는 order가 있음. 이미지의 픽셀 정보는 order가 없음. 순서가 있는 경우에는 DAG 모델을 주로 사용하고, 순서가 없는 경우에는 Undirected Graphical Model(UG, UGM) 혹은 Markov Random Fields(MRF)를 사용한다. BN에서는 Conditional Probability Table(CPT)를 사용하여...","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","graph model","bayesian network","UG","DAG"],
        "url": "/study/ml-dl/undirected-graphical-model/",
        "teaser": null
      },{
        "title": "Kernel method 공부하기",
        "excerpt":"Linear Regression with Non-linear Features 어떤 데이터 x를 다루고 싶을 때, 그 x를 그대로 모델의 입력값으로 사용할 수도 있지만, 어떤 \\(y=f(x)\\)라는 매핑을 통해 일차적으로 변환을 하고, 그 이후에 모델에 집어넣을 수 있다. 예를 들어 x를 n차 다항식 형태로 매핑을 한다고 생각해보자. \\[y = w_0x_0 + \\cdots w_nx_n = [w_0, \\cdots,...","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","kernel"],
        "url": "/study/ml-dl/kernel-method/",
        "teaser": null
      },{
        "title": "t-SNE 공부하기",
        "excerpt":"SNE Stochastic Neighbor Embedding의 약자. 여기서 임베딩의 의미는 고차원에서 저차원으로 매핑한다는 말이다. 고차원 공간에 있는 데이터 포인트들 사이의 거리, 혹은 이웃인 정도를 확률로서 표현하고, 그 확률을 유지하도록 저차원 공간으로 매핑하는 것. 데이터 자체는 왜곡이 될 수 있지만, 데이터 사이의 가까운 정도는 최대한 유지하고 싶다. 여기서 학습이라는 것은 고차원 공간에서 저차원...","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL"],
        "url": "/study/ml-dl/SNE/",
        "teaser": null
      },{
        "title": "여러 Boosting 알고리즘 공부하기",
        "excerpt":"AdaBoost Adaptive Boost의 약자로, 이름에서 알 수 있다시피 적응형이다. AdaBoost도 Boosting이므로 classifier를 순차적으로 학습한다. 첫번째 데이터셋에 대해 학습을 진행하고, 그 결과에 따라 다음 데이터셋에 적절한 가중치를 부여하고 다음 모델을 학습한다. 이때 데이터셋에 가중치는 어떻게 부여하는가? 또한 n개의 모델을 학습한 후에 각 모델들에 가중치를 두어 최종 모델을 구해야하는데, 이때도 각 모델에...","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","boosting","ensemble"],
        "url": "/study/ml-dl/boosting-algorthms/",
        "teaser": null
      },{
        "title": "Ensemble Method 공부하기",
        "excerpt":"Preliminary Knowledge Bootstrap 요약 Bootstrap (부트스트랩)은 데이터 내에서 반복적으로 샘플을 사용하는 resampling 방법 중 하나. Bootstrap sampling을 하면 애초에 한 개 밖에 없었던 우리들의 sample data set을 n개의 sample data set을 가지고 있는 것과 같은 효과를 누릴 수 있게 한다. 이를 통해 우리는 data의 variance를 상당히 잘 근사 할 수...","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","boost","learning"],
        "url": "/study/ml-dl/ensemble-method/",
        "teaser": null
      },{
        "title": "Remote access with SSH tunneling",
        "excerpt":"개요 이 포스트는 보안 상의 이유로 인바운드 포트가 막혀있을 때, 이를 ssh tunneling을 통해 우회하여 통신하는 방식에 대해 소개한다. Cluster Configuration 현재 우리 연구실의 컴퓨터 클러스터 시스템은 아래 사진과 같이 구성되어 있다. 모든 CPU 및 GPU 컴퓨터, NAS, Switch 등은 코로케이션이라는 곳에 위치하고 있다. 기본적으로 서울대학교는 일부 포트(80, 443, 22...","categories": ["linux","cluster"],
        "tags": ["linux","cluster","firewall","ssh"],
        "url": "/linux/cluster/remote-access-via-ssh-tunneling/",
        "teaser": null
      },{
        "title": "Explainable AI (LIME, SHAP) 공부하기",
        "excerpt":"AI의 모델 Rule-based system: 사람이 일일이 프로그램하여 컴퓨터는 주어진 규칙대로 계산만 수행. Classic ML-DL: 사람이 feature를 디자인하고, 컴퓨터는 feature를 매핑한다. Deep Learning: 더욱 복잡한 feature를 모델이 찾는다. 일반적으로 explainability가 높다는 것은 모델의 complexity가 낮다는 것이고, 이는 모델의 capacity or performance가 낮음을 의미한다. 그래서 복잡한 DL의 경우, black-box처럼 생각되는 경우가 많다....","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","AI","LIME","SHAP"],
        "url": "/study/ml-dl/explainable-AI/",
        "teaser": null
      },{
        "title": "[ML/DL] Gaussian Process 공부하기",
        "excerpt":"Learning Log-Likelihood of MVN GP를 실제 데이터에 적용하면 우리가 얻게되는 데이터의 형태는 Multi-Variate Normal(MVN) 분포를 따르게 된다. n차원의 MVN 분포를 생각해보자. 평균은 n차원의 벡터로, 공분산은 \\(n \\times n\\)의 행렬로 표현된다. \\[\\mathbf{X}\\sim \\mathcal{N_n}(\\mathbf{\\mu}, \\mathbf{\\Sigma}) \\quad \\text{where} \\quad \\mathbf{\\mu} \\in \\mathcal{R}^n, \\mathbf{\\Sigma} \\in \\mathcal{R}^{n \\times n}\\] 그리고 위 분포의 pdf는 아래와 같이...","categories": ["study","ML-DL"],
        "tags": ["study","ML-DL","Gaussian Process","GP"],
        "url": "/study/ml-dl/gaussian-process/",
        "teaser": null
      },{
        "title": "Coherent Structures in Turbulence",
        "excerpt":"Coherent structures and turbulence (1968) Journal of Fluid Mechanics (1986) Author: FAZLE HUSSAIN Introduction Coherent structure(난류 구조)는 무질서하게 보이는 난류에서 질서를 찾고자 하는 우리의 노력이 투영된 결과로 볼 수 있다. The nature of coherent structures Earlier approaches - flow visualization 거의 대부분의 난류 구조 연구는 유동 가시화에 기반하여 진행되었다. 이런...","categories": ["study","turbulence"],
        "tags": [],
        "url": "/study/turbulence/coherent-structures/",
        "teaser": null
      },{
        "title": "Turbulence Equations",
        "excerpt":"Types of Turbulence Statistically Homogeneous Turbulence All statistics of fluctuating quantities are invariant under translation of the coordinate system 어디에서 난류 유동의 통계량을 측정해도 같은 값을 가짐 모든 곳에서 평균 속도에 대한 gradient는 0이어야 하고, 따라서 모든 곳에서 평균 속도는 모두 0을 가짐 Kolmogorov hypotheses: Turbulent motions on small scales...","categories": ["study","turbulence"],
        "tags": [],
        "url": "/study/turbulence/turbulence/",
        "teaser": null
      },{
    "title": "Page Not Found",
    "excerpt":"Sorry, but the page you were trying to view does not exist.  ","url": "http://localhost:4000/404.html"
  },{
    "title": "About",
    "excerpt":"현재 서울대학교 기계공학부 대학원에서 박사과정 중인 학생입니다. 대학원 내에서는 유체역학에 기계학습을 접목시키는 것을 공부하고 있습니다. 해당 블로그는 공부한 것과 읽은 논문들, 연구 과정 중 생각들을 적는 용도로 사용할 예정입니다. 블로그에 내용을 꾸준히 더해가기 위해 지속적으로 공부하고 연구하는 것을 목표로 동기부여 차원에서 블로그를 운영합니다. 가능하다면 남들에게 내용을 공유할 수 있을 정도로...","url": "http://localhost:4000/about/"
  },{
    "title": "Archive Layout with Content",
    "excerpt":"A variety of common markup showing how the theme styles them. Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying yes to the thing you’ve got to...","url": "http://localhost:4000/archive-layout-with-content/"
  },{
    "title": "Linux - Cluster",
    "excerpt":"Remote access with SSH tunneling April 23, 2023 4 분 소요 개요 이 포스트는 보안 상의 이유로 인바운드 포트가 막혀있을 때, 이를 ssh tunneling을 통해 우회하여 통신하는 방식에 대해 소개한다. Query a TecPlot license status April 16, 2023 2 분 소요 problem TecPlot client host에서 server host로 license status 요청하기...","url": "http://localhost:4000/linux/cluster"
  },{
    "title": "Linux - Command",
    "excerpt":"                              commands test                                                                     April 16, 2023                                                                           3 분 소요                                problem    ANSYS client host에서 server host로 license status 요청하기         ","url": "http://localhost:4000/linux/command"
  },{
    "title": "Linux",
    "excerpt":"Remote access with SSH tunneling April 23, 2023 4 분 소요 개요 이 포스트는 보안 상의 이유로 인바운드 포트가 막혀있을 때, 이를 ssh tunneling을 통해 우회하여 통신하는 방식에 대해 소개한다. commands test April 16, 2023 3 분 소요 problem ANSYS client host에서 server host로 license status 요청하기 Query a TecPlot...","url": "http://localhost:4000/linux"
  },{
    "title": "Research - Research 1",
    "excerpt":"                              Research Note                                                                     April 1, 2023                                                                           최대 1 분 소요                                2023-04-11 (화)    두 개의 난류 유동이 있을 때, 그 둘의 유사성을 어떻게 판단할 것인가?         ","url": "http://localhost:4000/research/research-1"
  },{
    "title": "Research - Research 2",
    "excerpt":"                              Research Note                                                                     April 1, 2023                                                                           최대 1 분 소요                                2023-04-11 (화)    두 개의 난류 유동이 있을 때, 그 둘의 유사성을 어떻게 판단할 것인가?         ","url": "http://localhost:4000/research/research-2"
  },{
    "title": "Research",
    "excerpt":"                              Research Note                                                                     April 1, 2023                                                                           최대 1 분 소요                                2023-04-11 (화)    두 개의 난류 유동이 있을 때, 그 둘의 유사성을 어떻게 판단할 것인가?                                      Research Note                                                                     April 1, 2023                                                                           최대 1 분 소요                                2023-04-11 (화)    두 개의 난류 유동이 있을 때, 그 둘의 유사성을 어떻게 판단할 것인가?         ","url": "http://localhost:4000/research"
  },{
    "title": "Fluid Mechanics",
    "excerpt":"                              test                                                                     April 16, 2023                                                                           최대 1 분 소요                                        ","url": "http://localhost:4000/study/fluid-mechanics"
  },{
    "title": "Machine Learning / Deep Learning",
    "excerpt":"[ML/DL] Gaussian Process 공부하기 April 28, 2023 1 분 소요 Learning Explainable AI (LIME, SHAP) 공부하기 April 23, 2023 2 분 소요 AI의 모델 Rule-based system: 사람이 일일이 프로그램하여 컴퓨터는 주어진 규칙대로 계산만 수행. Classic ML-DL: 사람이 feature를 디자인하고, 컴퓨터는 feature를 매핑한다. Deep Learning: 더욱 복잡한 feature를 모... Ensemble Method...","url": "http://localhost:4000/study/ML-DL"
  },{
    "title": "Turbomachines",
    "excerpt":"                              test                                                                     April 16, 2023                                                                           최대 1 분 소요                                        ","url": "http://localhost:4000/study/turbo-machines"
  },{
    "title": "Turbulence",
    "excerpt":"Turbulence Equations May 12, 2023 최대 1 분 소요 Types of Turbulence Statistically Homogeneous Turbulence All statistics of fluctuating quantities are invariant under translation of the coordinate system... Coherent Structures in Turbulence May 12, 2023 1 분 소요 Coherent structures and turbulence (1968) Journal of Fluid Mechanics (1986) Author: FAZLE...","url": "http://localhost:4000/study/turbulence"
  },{
    "title": "study",
    "excerpt":"Turbulence Equations May 12, 2023 최대 1 분 소요 Types of Turbulence Statistically Homogeneous Turbulence All statistics of fluctuating quantities are invariant under translation of the coordinate system... Coherent Structures in Turbulence May 12, 2023 1 분 소요 Coherent structures and turbulence (1968) Journal of Fluid Mechanics (1986) Author: FAZLE...","url": "http://localhost:4000/study"
  },{
    "title": "Posts by Category",
    "excerpt":" ","url": "http://localhost:4000/categories/"
  },{
    "title": "Posts by Collection",
    "excerpt":"                                                                                                                                                                                 ","url": "http://localhost:4000/collection-archive/"
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
    "title": "cluster",
    "excerpt":"","url": "http://localhost:4000/tags/cluster/"
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
    "title": "ML-DL",
    "excerpt":"","url": "http://localhost:4000/tags/ml-dl/"
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
    "title": "firewall",
    "excerpt":"","url": "http://localhost:4000/tags/firewall/"
  },{
    "title": "ssh",
    "excerpt":"","url": "http://localhost:4000/tags/ssh/"
  },{
    "title": "AI",
    "excerpt":"","url": "http://localhost:4000/tags/ai/"
  },{
    "title": "LIME",
    "excerpt":"","url": "http://localhost:4000/tags/lime/"
  },{
    "title": "SHAP",
    "excerpt":"","url": "http://localhost:4000/tags/shap/"
  },{
    "title": "Gaussian Process",
    "excerpt":"","url": "http://localhost:4000/tags/gaussian-process/"
  },{
    "title": "GP",
    "excerpt":"","url": "http://localhost:4000/tags/gp/"
  },{
    "title": "research",
    "excerpt":"","url": "http://localhost:4000/categories/research/"
  },{
    "title": "research-1",
    "excerpt":"","url": "http://localhost:4000/categories/research-1/"
  },{
    "title": "research-2",
    "excerpt":"","url": "http://localhost:4000/categories/research-2/"
  },{
    "title": "linux",
    "excerpt":"","url": "http://localhost:4000/categories/linux/"
  },{
    "title": "cluster",
    "excerpt":"","url": "http://localhost:4000/categories/cluster/"
  },{
    "title": "command",
    "excerpt":"","url": "http://localhost:4000/categories/command/"
  },{
    "title": "study",
    "excerpt":"","url": "http://localhost:4000/categories/study/"
  },{
    "title": "fluid-mechanics",
    "excerpt":"","url": "http://localhost:4000/categories/fluid-mechanics/"
  },{
    "title": "ML-DL",
    "excerpt":"","url": "http://localhost:4000/categories/ml-dl/"
  },{
    "title": "turbo-machines",
    "excerpt":"","url": "http://localhost:4000/categories/turbo-machines/"
  },{
    "title": "turbulence",
    "excerpt":"","url": "http://localhost:4000/categories/turbulence/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/page2/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/page3/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/page4/"
  },{
    "title": null,
    "excerpt":"","url": "http://localhost:4000/page5/"
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
