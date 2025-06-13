// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "will be updated",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-ガウス混合モデル-gmm-と-emアルゴリズムの可視化-matlab実装",
        
          title: 'ガウス混合モデル(GMM) と EMアルゴリズムの可視化(MATLAB実装) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://qiita.com/kepr/items/41e6eb7206524a72379c", "_blank");
          
        },
      },{id: "post-matlabを用いた群間差の検出-anova",
        
          title: 'MATLABを用いた群間差の検出(ANOVA) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://qiita.com/kepr/items/9e7524d79c638b99442b", "_blank");
          
        },
      },{id: "post-逆誤差伝播法の数式理解-基礎",
        
          title: '逆誤差伝播法の数式理解(基礎) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://qiita.com/kepr/items/216619761346ba91805c", "_blank");
          
        },
      },{id: "post-ラフすぎ文章をエレガントに戻そう",
        
          title: 'ラフすぎ文章をエレガントに戻そう <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://qiita.com/kepr/items/6187e3781cbe5658f53e", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-ポートフォリオサイトを開設しました",
          title: 'ポートフォリオサイトを開設しました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-生態工学会で発表を行いました",
          title: '生態工学会で発表を行いました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-ビジネスプラン立案プログラムで最優秀賞を受賞しました",
          title: 'ビジネスプラン立案プログラムで最優秀賞を受賞しました',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%65%69%73%68%75.%61%72%75%67%61.%70%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kepr-github", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Keishu_te", "_blank");
        },
      },{
        id: 'social-qiita',
        title: 'Qiita',
        section: 'Socials',
        handler: () => {
          window.open("https://qiita.com/kepr", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
