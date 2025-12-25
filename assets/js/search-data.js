// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my projects about research and education.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-conference-deadlines-i-39-m-tracking",
          title: "Conference Deadlines I&#39;m Tracking",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ddls/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Were It to Benefit My Country, I Would Lay Down My Life!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/s111/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-pd-multiplexing-has-been-merged-into-sglang",
          title: 'PD-Multiplexing has been merged into SGLang.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-28-pd-mux/";
            },},{id: "news-serving-as-the-web-chair-for-icpp-2026-submission-details-are-available-in-the-call-for-papers",
          title: 'Serving as the Web Chair for ICPP 2026. Submission details are available in...',
          description: "",
          section: "News",},{id: "news-one-paper-accepted-to-hpca-2026",
          title: 'One paper accepted to HPCA 2026.',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-to-nsdi-2026",
          title: 'Two papers accepted to NSDI 2026.',
          description: "",
          section: "News",},{id: "news-honored-to-be-selected-for-the-ccf-doctoral-dissertation-incentive-program-2025",
          title: 'Honored to be selected for the CCF Doctoral Dissertation Incentive Program 2025.',
          description: "",
          section: "News",},{id: "projects-mlsys-preliminary",
          title: 'MLSys Preliminary',
          description: "The basics of machine learning systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlsys-preliminary/";
            },},{id: "projects-gpu-and-cuda-programming",
          title: 'GPU and CUDA Programming',
          description: "Learn the fundamentals of GPU architecture and CUDA programming",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlsys-preliminary/gpu-cuda/";
            },},{id: "projects-programming-framework",
          title: 'Programming Framework',
          description: "Explore popular ML frameworks like PyTorch and TensorFlow",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlsys-preliminary/programming-framework/";
            },},{id: "projects-training-and-inference",
          title: 'Training and Inference',
          description: "Understand the training and inference pipeline",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mlsys-preliminary/training-inference/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%65%69%68%61%6F.%74%73%75%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Raphael-Hao", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3F461ysAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6646-5260", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/243/1639.html", "_blank");
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
