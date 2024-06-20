export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "我饮普洱",
  /** your name */
  author: "imztone",
  /** website description */
  desc: "",
  /** your deployed domain */
  website: "https://blog.imzt.one",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/imztone",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "mastodon",
      href: "https://m.cmx.im/@imztone",
    }
  ],
  /** your header info */
  header: {
    twitter: "",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "测试", path: "test" },
    { name: "阅读", path: "阅读" }
  ],
  /** your comment provider */
  comments: {
    // disqus: {
    //   // please change this to your disqus shortname
    //   shortname: "",
    // },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  }
}

