import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',

  title: "Hynobius Documentation",
  description: "A Chess Engine Guideline",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Documentation', link: '/project/project-overview' }
    ],

    sidebar: [
      {
        text: 'Architecture',
        collapsed: false,
        items: [
          { text: 'architecture', link: '/architecture/architecture' },
          { text: 'state_lifecycle', link: '/architecture/state_lifecycle' },
          {
            text: 'Modules',
            collapsed: true,
            items: [
              { text: 'Attack', link: '/architecture/modules/Attack' },
              { text: 'BitMove', link: '/architecture/modules/BitMove' },
              { text: 'Board', link: '/architecture/modules/Board' }
            ]
          }
        ]
      },
      {
        text: 'Development',
        collapsed: false,
        items: [
          { text: 'roadmap', link: '/development/roadmap' },
          {
            text: 'code-reviews',
            collapsed: true,
            items: [
              { text: '2026-02-06_Attack_CR', link: '/development/code-reviews/2026-02-06_Attack_CR' },
              { text: '2026-02-06_Board_CR', link: '/development/code-reviews/2026-02-06_Board_CR' },
              { text: '2026-02-08_Check&Piece_CR', link: '/development/code-reviews/2026-02-08_Check%26Piece_CR' },
              { text: '2026-02-10_Board_CR', link: '/development/code-reviews/2026-02-10_Board_CR' },
              { text: '2026-02-10_Generates_CR', link: '/development/code-reviews/2026-02-10_Generates_CR' },
              { text: 'index', link: '/development/code-reviews/' },
              { text: 'self-code-review', link: '/development/code-reviews/self-code-review' }
            ]
          },
          {
            text: 'Experiments',
            collapsed: true,
            items: [
              { text: '20260503_summary', link: '/development/experiments/20260503_summary' },
              { text: '20260509_230141_summary', link: '/development/experiments/20260509_230141_summary' },
              { text: '20260510_003537_summary', link: '/development/experiments/20260510_003537_summary' },
              { text: '20260510_230420_summary', link: '/development/experiments/20260510_230420_summary' },
              { text: '20260606_210549_summary', link: '/development/experiments/20260606_210549_summary' },
              { text: '20260804_161458_summary', link: '/development/experiments/20260804_161458_summary' },
              { text: 'engine-improvement', link: '/development/experiments/engine-improvement' },
              {
                text: 'aspiration_window_optimization',
                collapsed: true,
                items: [
                  { text: '20260510_171143_summary', link: '/development/experiments/aspiration_window_optimization/20260510_171143_summary' },
                  { text: '20260510_185621_summary', link: '/development/experiments/aspiration_window_optimization/20260510_185621_summary' }
                ]
              },
              {
                text: 'v0.3.0_beta_optimization',
                collapsed: true,
                items: [
                  { text: '20260530_201128_summary', link: '/development/experiments/v0.3.0_beta_optimization/20260530_201128_summary' },
                  { text: '20260530_235041_summary', link: '/development/experiments/v0.3.0_beta_optimization/20260530_235041_summary' },
                  { text: '20260531_120254_summary', link: '/development/experiments/v0.3.0_beta_optimization/20260531_120254_summary' },
                  { text: '20260601_234551_summary', link: '/development/experiments/v0.3.0_beta_optimization/20260601_234551_summary' }
                ]
              }
            ]
          }
        ]
      },
      {
        text: 'Project',
        collapsed: false,
        items: [
          { text: 'project-overview', link: '/project/project-overview' },
          { text: 'project_structure', link: '/project/project_structure' }
        ]
      },
      {
        text: 'Tutorials',
        collapsed: false,
        items: [
          { text: 'engine_introduce', link: '/tutorials/engine_introduce' },
          { text: 'make_undo_move', link: '/tutorials/make_undo_move' },
          { text: 'movegen', link: '/tutorials/movegen' },
          { text: 'search', link: '/tutorials/search' }
        ]
      },
      {
        text: 'User Guide',
        collapsed: false,
        items: [
          {
            text: 'testing',
            collapsed: true,
            items: [
              { text: 'mate-in-one-test', link: '/user-guide/testing/mate-in-one-test' },
              { text: 'Opening', link: '/user-guide/testing/Opening' },
              { text: 'Perft', link: '/user-guide/testing/Perft' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
