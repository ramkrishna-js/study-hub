import mathjax3 from 'markdown-it-mathjax3'

export default {
  base: '/study-hub/',
  title: 'Study Hub',
  description: 'Comprehensive Exam Preparation Resource',
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mathematics', link: '/maths/' },
      { text: 'Question Papers', link: '/papers/Pre_Final_Set_A' },
    ],
    sidebar: {
      '/maths/': [
        {
          text: '1st PUC Mathematics',
          items: [
            { text: 'Syllabus & Blueprint', link: '/maths/Syllabus_Blueprint' },
            { text: '1. Sets', link: '/maths/Chapter_01_Sets' },
            { text: '2. Relations & Functions', link: '/maths/Chapter_02_Relations_Functions' },
            { text: '3. Trigonometry', link: '/maths/Chapter_03_Trigonometry' },
            { text: '4. Complex Numbers', link: '/maths/Chapter_04_Complex_Numbers' },
            { text: '5. Linear Inequalities', link: '/maths/Chapter_05_Linear_Inequalities' },
            { text: '6. Permutations & Combinations', link: '/maths/Chapter_06_Permutations_Combinations' },
            { text: '7. Binomial Theorem', link: '/maths/Chapter_07_Binomial_Theorem' },
            { text: '8. Sequences & Series', link: '/maths/Chapter_08_Sequences_Series' },
            { text: '9. Straight Lines', link: '/maths/Chapter_09_Straight_Lines' },
            { text: '10. Conic Sections', link: '/maths/Chapter_10_Conic_Sections' },
            { text: '11. 3D Geometry', link: '/maths/Chapter_11_Intro_3D' },
            { text: '12. Limits & Derivatives', link: '/maths/Chapter_12_Limits_Derivatives' },
            { text: '13. Statistics', link: '/maths/Chapter_13_Statistics' },
            { text: '14. Probability', link: '/maths/Chapter_14_Probability' },
          ]
        }
      ],
      '/papers/': [
        {
          text: 'Exam Papers',
          items: [
            { text: 'Pre-Final Exam (Set A)', link: '/papers/Pre_Final_Set_A' },
            { text: 'Final Exam (Set A)', link: '/papers/Final_Exam_Set_A' },
          ]
        }
      ]
    }
  }
}