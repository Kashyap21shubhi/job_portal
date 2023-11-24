import {
    WhatsApp,
    Twitter,
    Instagram,
    Spotify,
    Linkedin,
    Youtube,
    Google,
    Facebook,
    CodeWave,
  } from "../assets";
  
  export const jobTypes = ["Full-Time", "Part-Time", "Contract", "Intern"];
  
  export const experience = [
    { title: "Under 1 Year", value: "0-1" },
    { title: "1 -2 Year", value: "1-2" },
    { title: "2 -6 Year", value: "2-6" },
    { title: "Over 6 Years", value: "6-20" },
  ];
  
  export const popularSearch = [
    "Software Engineer",
    "Developer",
    "Full-Stack Developer",
    "Data Scientist",
    "Remote",
    "Full-Time",
    "Sales",
    "Office Assistant",
  ];
  
  export const jobs = [
    {
      id: "1",
      company: {
        name: "Microsoft Corporation",
        location: "Califonia",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Microsoft Corporation, leading developer of personal-computer software systems and applications. The company also publishes books and multimedia titles, produces its own line of hybrid tablet computers, offers e-mail services, and sells electronic game systems and computer peripherals (input/output devices). It has sales offices throughout the world. In addition to its main research and development centre at its corporate headquarters in Redmond, Washington, U.S., Microsoft operates research labs in Cambridge, England (1997); Beijing, China (1998); Bengaluru, India (2005); Cambridge, Massachusetts (2008); New York, New York (2012); and Montreal, Canada (2015).",
        profileUrl: Twitter,
      },
      jobTitle: "Software Engineer",
      location: "West US",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "We are looking for a passionate Software Engineer to design, develop and install software solutions.Software Engineer responsibilities include gathering user requirements, defining system functionality and writing code in various languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.) Our ideal candidates are familiar with the software development life cycle (SDLC) from preliminary system analysis to tests and deployment.",
  
          requirement:
            "Proven work experience as a Software Engineer or Software Developer.Experience designing interactive applications.Ability to develop software in Java, Ruby on Rails, C++ or other programming languages.Excellent knowledge of relational databases, SQL and ORM technologies (JPA2, Hibernate)",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "2",
      company: {
        name: "Google Corporation",
        location: "Califonia",
        email: "support@google.com",
        contact: "support@google",
        about:
          "Google LLC (/ˈɡuːɡəl/ ⓘ) is an American multinational technology company focusing on artificial intelligence,[9] online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics. It has been referred to as one of the world's most valuable brands due to its market dominance, data collection, and technological advantages in the field of artificial intelligence.[11][12][13] Alongside Amazon, Apple Inc., Meta, and Microsoft, Google's parent company Alphabet Inc. is one of the five Big Tech companies.",
        profileUrl: Google,
      },
      jobTitle: "System Analyst",
      location: "New York",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Will be responsible for working on Salesforce CRM platform on which Bajaj Finance has developed CRM and Underwriting systems.Should have Strong Knowledge of Java/Apex Programming.Should have good technical understanding of SFDC-API s (SOAP/RESTFul) for managing enhancements and its integration with systems like Portals/EDW/ Mobile apps.Defining project milestone and drive partner/development teams to ensure delivery on time.Responsible for Delivery schedule, Change process management, Project Monitoring and Status Reporting.",
  
          requirement:
            "BE with Min 5-7 years of experience of development on Object Oriented programming/Apex Programming.Should have understanding of system integrations.Should be able to deliver on Tight timelines and Demonstrated success achievement orientation.Should have understanding of Loan Business life cycle / process.Excellent communication relationship management skills.Interest and passion to work on IT applications and projects which support businesses.Should have basic understanding of Databases",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "3",
      company: {
        name: "LinkedIn Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "LinkedIn, business-oriented social media platform and social networking website founded in 2002 and headquartered in Mountain View, California.Unlike other social networks such as Facebook and Myspace, which are often purely recreational, LinkedIn emphasizes a user’s professional connections. Users create profile pages that have a structure similar to a résumé, in that users can summarize their career, advertise their particular skills, and list their education and employment history. Connections are formed between users when one accepts an invitation from another to join his or her network",
        profileUrl: Linkedin,
      },
      jobTitle: "Social Media Manager",
      location: "India, Mumbai",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Degree in marketing or relevant field.Proven work experience as a Social Media Manager.Must have hands-on experience in Digital Marketing.Strong familiarity with Google Analytics, SEO and keyword research.Candidate Age Between 24 to 28 need to apply",
  
          requirement:
            "Communication.Writing.Creativity.Efficiency and project management.Marketing strategy.Customer care.Audience research and making connections.Agility.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "4",
      company: {
        name: "Spotify Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Spotify (/ˈspɒtɪfaɪ/; Swedish: [ˈspɔ̂tːɪfaj]) is a Swedish[6] audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon.[7] It is one of the largest music streaming service providers, with over 574 million monthly active users, including 226 million paying subscribers, as of September 2023.[4][8] Spotify is listed (through a Luxembourg City-domiciled holding company, Spotify Technology S.A.[1]) on the New York Stock Exchange in the form of American depositary receipts.Spotify offers digital copyright restricted recorded audio content, including more than 100 million songs and five million podcasts, from record labels and media companies.[8] As a freemium service, basic features are free with advertisements and limited control, while additional features, such as offline listening and commercial-free listening, are offered via paid subscriptions. Users can search for music based on artist, album, or genre, and can create, edit, and share playlists",
        profileUrl: Spotify,
      },
      jobTitle: "Data Engineer",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Having strong programming experience on Data Engineering side on Python, Scala or Java.Have worked on GCP and is hands on with data analysis, creating data pipelines and orchestration on GCP tools like Data flow, Datafusion, composer, BigQuery.Should have worked on Git or code repository.Should have worked on Agile delivery. Advanced working SQL knowledge and experience working with relational databases, query authoring (SQL) as well as working familiarity with a variety of databases.Experience building or maintaining ETL processes from a wide variety of data sources using SQL.Experience building and optimizing big data data pipelines, architectures and data sets.",
  
          requirement:
            "Spring Webflux, Web Client, ecommerce domain experience.Agile methodology.Looking for a Spring Boot API Developer who can take responsibility for a full backend stack from development to cloud production environment.Should have very good knowledge on data structure and algorithms to choose solutions wisely.Should have capability to build self resilient microservices with non-compromised response time.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "5",
      company: {
        name: "Facebook Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Facebook is an online social media and social networking service owned by American technology giant Meta Platforms. Created in 2004 by Mark Zuckerberg with four other Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name derives from the face book directories often given to American university students. Membership was initially limited to Harvard students, gradually expanding to other North American universities. Since 2006, Facebook allows everyone to register from 13 years old (or older), except in the case of a handful of nations, where the age limit is 14 years.[6] As of December 2022, Facebook claimed 3 billion monthly active users,[7] and ranked third worldwide among the most visited websites.[8] It was the most downloaded mobile app of the 2010s.",
        profileUrl: Facebook,
      },
      jobTitle: "BDE",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "We are looking for a highly dedicated person who can join our team. Well known about lead generation &digital marketing services.Market Research and Analysis.Client Relationship Management.Proposal Development.Negotiation and Closing.Lead generation",
  
          requirement:
            "Good command over written and spoken English.Extrovert Personality.Experience in Digital Marketing industry a plus.Must really know digital marketing services.Experience: 1 yrs and above.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "6",
      company: {
        name: "WhatsApp Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "WhatsApp, free messaging application owned by Meta (formerly Facebook). Users can send text and voice messages on the platform or communicate live via voice or video chat. WhatsApp also supports location and image sharing. The service is primarily used on mobile phones, as it requires a mobile phone number to sign up, but the platform can be accessed via a computer’s Internet browser as well.",
        profileUrl: WhatsApp,
      },
      jobTitle: "Product Manager",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: " Your product strategy and vision are most effective when they are substantiated with real user interactions and data analytics.A list of 10 items for the next release with a clear sense of priority will go a long way to ensure that the release is both effective and on-time.While working closely with Engineering, Content developers and other product managers it is crucial to identify dependencies early on for a smooth release.You know from the bottom of your heart that a PRD that speaks out the user s needs and wants is the best way to ensure internal buy-in and super high productivity levels.A simple annotated wireframe is much better than a 5 page PRD",
  
          requirement:
            "Passionate about building products in the internet and mobile space, demonstrated either through your last job or outside of work as a hobby or part time activity.Strong sense of usability and information architecture.Exceptionally motivated about making a measurable impact on the end user.Experience in building products in the consumer internet or mobile space.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "7",
      company: {
        name: "Instagram Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Instagram, online social media platform and social network service for photograph and video sharing. The app was launched in 2010 by cofounders Kevin Systrom and Mike Krieger, and it is now owned by Meta Platforms, Inc., the parent company of Facebook. One of the biggest social media platforms in the world, Instagram surpassed two billion monthly active users in 2022. The company’s headquarters are in Menlo Park, California.",
        profileUrl: Instagram,
      },
      jobTitle: "Frontend Web Developer",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "We are looking for a qualified Frontend Developer. You will be responsible for developing high-quality, maintainable, and scalable applications using Javascript, React.js and TypeScript.You will collaborate with cross-functional teams to design and develop new features, participate in code reviews, troubleshoot, and debug complex issues. You are expected to continuously learn and keep up to date with best practices and better technologies.",
  
          requirement:
            "Understanding of basic design principles.In-depth knowledge and hands on experience with HTML, CSS, JavaScript and ES6 Functions.In-depth knowledge and hands-on experience working with React and TypeScript.Strong fundamental understanding of React State and Lifecycle, Hooks, and handling events.Technical Proficiency with Tailwind CSS or any other CSS Framework.Good communication and teamwork skills.Care deeply about product experience and are driven to put great products in the hands of users",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "8",
      company: {
        name: "Youtube Corporation",
        location: "Germany",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "YouTube, social media platform and website for sharing videos. It was registered on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim, three former employees of the American e-commerce company PayPal. They had the idea that ordinary people would enjoy sharing their “home videos.” The company is headquartered in San Bruno, California.",
        profileUrl: Youtube,
      },
      jobTitle: "Product Manager",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "We are looking for an experienced Product Manager who is passionate about building products that customers love. You will join a dynamic and fast-paced environment and work with cross-functional teams to design, build and roll-out products that deliver the company’s vision and strategy.",
  
          requirement:
            "Develop screens using HTML, JAVA SCRIPT, AJAX, .NET and database server is SQL SERVER (AngularJS would be an added advantag.Website and software application designing, building, or maintaining.Using scripting or authoring languages, management tools, content creation tools, applications, and digital media.Conferring with teams to resolve conflicts, prioritize needs, develop content criteria, or choose solutions.Directing or performing Website updates.",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
    {
      id: "9",
      company: {
        name: "CodeWave Solutions",
        location: "India",
        email: "support@microsoft.com",
        contact: "support@microsoft",
        about:
          "Codewave was founded in May 2013, with a vision to bring design thinking to India and make every gig a UX led gig. That vision, gave birth to a people-first culture, that celebrated authenticity, voice of individuals encouraging free flow of influence shaping our journeys with customers & it's outcomes.",
        profileUrl: CodeWave,
      },
      jobTitle: "Data Science Intern",
      location: "Norway",
      jobType: "Full-Time",
      salary: "1200",
      detail: [
        {
          desc: "Need to be a B.Tech or BE is Computer Science/IT.The ideal candidate's favorite words are learning, data, scale, and agility. You will leverage your strong collaboration skills and ability to extract valuable insights from highly complex data sets to ask the right questions and find the right answers.",
  
          requirement:
            "Need to be Btech in IT/Computer Science.Deep understanding of predictive modeling, machine-learning, clustering and classification techniques, and algorithms.Fluency in a the technologies like Python, Machine Learning algorithms, NLP or computer Vision.Familiarity with Big Data frameworks and visualization tools (Cassandra, Hadoop, Spark, Tableau).Selected Intern will get Rs. 10K for the first three months of there internship and will be then absorbed at 30K a month. Individual in the higher brackets, please don't apply.People with only good communications skills need to apply",
        },
      ],
      applicants: ["1", "2", "3", "4"],
      vacancies: 25,
      createdAt: new Date(),
    },
  ];
  
  export const footerLinks = [
    {
      id: "01",
      title: "Company",
      links: ["Home", "About Us", "Services", "Our Team"],
    },
    {
      id: "02",
      title: "Policy",
      links: ["Policies", "Contact", "FAQ"],
    },
    {
      id: "03",
      title: "Support",
      links: ["Account", "Support Center", "Feedback", "Accessibility"],
    },
  ];
  
  export const companies = [
    {
      _id: 1,
      name: "Microsoft Corporation",
      location: "Califonia",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Microsoft Corporation, leading developer of personal-computer software systems and applications. The company also publishes books and multimedia titles, produces its own line of hybrid tablet computers, offers e-mail services, and sells electronic game systems and computer peripherals (input/output devices). It has sales offices throughout the world. In addition to its main research and development centre at its corporate headquarters in Redmond, Washington, U.S., Microsoft operates research labs in Cambridge, England (1997); Beijing, China (1998); Bengaluru, India (2005); Cambridge, Massachusetts (2008); New York, New York (2012); and Montreal, Canada (2015).",
      profileUrl: Twitter,
      jobPosts: ["1", "2"],
    },
    {
      _id: 2,
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Google LLC (/ˈɡuːɡəl/ ⓘ) is an American multinational technology company focusing on artificial intelligence,[9] online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics. It has been referred to as one of the world's most valuable brands due to its market dominance, data collection, and technological advantages in the field of artificial intelligence.[11][12][13] Alongside Amazon, Apple Inc., Meta, and Microsoft, Google's parent company Alphabet Inc. is one of the five Big Tech companies.",
      profileUrl: Google,
      jobPosts: ["1", "2"],
    },
    {
      _id: 3,
      name: "LinkedIn Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "LinkedIn, business-oriented social media platform and social networking website founded in 2002 and headquartered in Mountain View, California.Unlike other social networks such as Facebook and Myspace, which are often purely recreational, LinkedIn emphasizes a user’s professional connections. Users create profile pages that have a structure similar to a résumé, in that users can summarize their career, advertise their particular skills, and list their education and employment history. Connections are formed between users when one accepts an invitation from another to join his or her network",
      profileUrl: Linkedin,
      jobPosts: ["1", "2"],
    },
    {
      _id: 4,
      name: "Spotify Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Spotify (/ˈspɒtɪfaɪ/; Swedish: [ˈspɔ̂tːɪfaj]) is a Swedish[6] audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon.[7] It is one of the largest music streaming service providers, with over 574 million monthly active users, including 226 million paying subscribers, as of September 2023.[4][8] Spotify is listed (through a Luxembourg City-domiciled holding company, Spotify Technology S.A.[1]) on the New York Stock Exchange in the form of American depositary receipts.Spotify offers digital copyright restricted recorded audio content, including more than 100 million songs and five million podcasts, from record labels and media companies.[8] As a freemium service, basic features are free with advertisements and limited control, while additional features, such as offline listening and commercial-free listening, are offered via paid subscriptions. Users can search for music based on artist, album, or genre, and can create, edit, and share playlists",
      profileUrl: Spotify,
      jobPosts: ["1", "2"],
    },
    {
      _id: 5,
      name: "Facebook Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Facebook is an online social media and social networking service owned by American technology giant Meta Platforms. Created in 2004 by Mark Zuckerberg with four other Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, its name derives from the face book directories often given to American university students. Membership was initially limited to Harvard students, gradually expanding to other North American universities. Since 2006, Facebook allows everyone to register from 13 years old (or older), except in the case of a handful of nations, where the age limit is 14 years.[6] As of December 2022, Facebook claimed 3 billion monthly active users,[7] and ranked third worldwide among the most visited websites.[8] It was the most downloaded mobile app of the 2010s.",
      profileUrl: Facebook,
      jobPosts: ["1", "2"],
    },
    {
      _id: 6,
      name: "WhatsApp Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "WhatsApp, free messaging application owned by Meta (formerly Facebook). Users can send text and voice messages on the platform or communicate live via voice or video chat. WhatsApp also supports location and image sharing. The service is primarily used on mobile phones, as it requires a mobile phone number to sign up, but the platform can be accessed via a computer’s Internet browser as well.",
      profileUrl: WhatsApp,
      jobPosts: ["1", "2"],
    },
    {
      _id: 7,
      name: "Instagram Corporation",
      location: "India",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Instagram, online social media platform and social network service for photograph and video sharing. The app was launched in 2010 by cofounders Kevin Systrom and Mike Krieger, and it is now owned by Meta Platforms, Inc., the parent company of Facebook. One of the biggest social media platforms in the world, Instagram surpassed two billion monthly active users in 2022. The company’s headquarters are in Menlo Park, California.",
      profileUrl: Instagram,
      jobPosts: ["1", "2"],
    },
    {
      _id: 8,
      name: "Youtube Corporation",
      location: "Germany",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "YouTube, social media platform and website for sharing videos. It was registered on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim, three former employees of the American e-commerce company PayPal. They had the idea that ordinary people would enjoy sharing their “home videos.” The company is headquartered in San Bruno, California.",
      profileUrl: Youtube,
      jobPosts: ["1", "2"],
    },
    {
      _id: 9,
      name: "CodeWave Solutions",
      location: "Ghana",
      email: "support@microsoft.com",
      contact: "support@microsoft",
      about:
        "Codewave was founded in May 2013, with a vision to bring design thinking to India and make every gig a UX led gig. That vision, gave birth to a people-first culture, that celebrated authenticity, voice of individuals encouraging free flow of influence shaping our journeys with customers & it's outcomes.",
      profileUrl: CodeWave,
      jobPosts: ["1", "2"],
    },
  ];
  
  export const users = [
    {
      name: "Google Corporation",
      location: "Califonia",
      email: "support@google.com",
      contact: "support@google",
      about:
        "Google LLC (/ˈɡuːɡəl/ ⓘ) is an American multinational technology company focusing on artificial intelligence,[9] online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronics. It has been referred to as one of the world's most valuable brands due to its market dominance, data collection, and technological advantages in the field of artificial intelligence.[11][12][13] Alongside Amazon, Apple Inc., Meta, and Microsoft, Google's parent company Alphabet Inc. is one of the five Big Tech companies.",
      profileUrl: Google,
      jobPosts: ["1", "2"],
      token: "gjhsdgsjgdjh",
    },
    {
      firstName: "CodeWaver",
      lastName: "Solutions",
      email: "support@code.com",
      contact: "support@google",
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      profileUrl: CodeWave,
      accountType: "seeker",
      cvUrl: "",
      token: "gjhsdgsjgdjh",
    },
  ];