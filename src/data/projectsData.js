const projectsData = [
  {
    id: 'smart-diabetes-clustering',

    name: 'Smart Diabetes Clustering Tool',

    // Temporary image — replace with your real project screenshot later
    image:
      'https://placehold.co/900x600/eaf4f8/415a77?text=Smart+Diabetes+Clustering+Tool',

    shortDescription:
      'A machine-learning-powered application for clustering patient data and generating diabetes risk profiles from hospital datasets.',

    tags: [
      'Python',
      'Machine Learning',
      'K-Means',
      'XGBoost',
    ],

    year: '2025',

    teamSize: '1',

    role: 'ML Developer',

    problem:
      'Healthcare datasets can contain large numbers of patient records, making it difficult to quickly identify patterns and understand different diabetes risk profiles. This project was developed to organize patient data into meaningful clusters and make those patterns easier to analyze.',

    overview:
      'Smart Diabetes Clustering Tool is a machine-learning application that analyzes hospital diabetes data and groups patients into meaningful clusters based on their characteristics. The resulting clusters are used to create diabetes risk profiles that can help users understand patterns within the dataset.',

    howItWorks: [
      'Hospital diabetes data is uploaded and prepared for analysis.',
      'The data is cleaned, preprocessed, and transformed into a suitable format for machine learning.',
      'K-Means clustering is used to group patients based on similarities in their data.',
      'XGBoost is used to predict cluster labels for new data.',
      'SMOTE is applied during model development to address class imbalance.',
      'The application presents cluster distributions and feature importance visually.',
      'Prediction results can be downloaded for further analysis.'
    ],

    features: [
      'CSV file upload and data preprocessing',
      'K-Means patient clustering',
      'XGBoost-based cluster prediction',
      'Cluster distribution visualization',
      'Feature importance visualization',
      'Downloadable prediction results',
      'Saved models for reuse without retraining',
      'SMOTE for handling class imbalance',
      'Model evaluation using accuracy, confusion matrix, and ROC AUC'
    ],

    techStack: {
      frontend: ['Streamlit'],
      backend: ['Python'],
      machineLearning: [
        'scikit-learn',
        'K-Means',
        'XGBoost',
        'SMOTE'
      ],
      data: [
        'Pandas',
        'NumPy'
      ]
    },

    github:
      'https://github.com/V-Varna/Smart_Diabetes_Clustering_Tool',

    liveDemo:
      'https://smart-diabetes-clustering-tool.onrender.com'
  },


  // --------------------------------------------------
  // PROJECT 2
  // --------------------------------------------------

  {
    id: 'finance-tracker',

    name: 'Finance Tracker',

    // Temporary image — replace with your real project screenshot later
    image:
      'https://placehold.co/900x600/f6eee9/6b4f45?text=Finance+Tracker',

    shortDescription:
      'A personal finance web application for recording income and expenses, categorizing transactions, and monitoring overall savings through a simple dashboard.',

    tags: [
      'FastAPI',
      'Jinja2',
      'SQLite',
      'HTML/CSS'
    ],

    year: '2025',

    teamSize: '1',

    role: 'Full-Stack Development',

    problem:
      'Tracking daily expenses manually can make it difficult to understand spending patterns and how individual expenses affect available savings. This project was created as a personal finance management tool to make expense tracking simpler and more organized.',

    overview:
      'Finance Tracker is a personal finance web application that allows users to set their income, record expenses, categorize transactions, and monitor their overall financial balance. The dashboard provides a simple view of income, expenses, and remaining balance while storing the data locally using SQLite.',

    howItWorks: [
      'The user sets or updates their available income.',
      'Individual expenses can be added with descriptions and categories.',
      'Transactions are stored in a local SQLite database.',
      'The application calculates total income and expenses.',
      'The remaining balance is displayed as part of the financial summary.',
      'Users can review and delete transactions when required.'
    ],

    features: [
      'Set and update total income',
      'Add and categorize expenses',
      'Add descriptions to transactions',
      'View transaction history',
      'Delete transactions',
      'Income, expense, and balance summary cards',
      'Responsive dashboard interface',
      'Local SQLite data storage'
    ],

    techStack: {
      frontend: [
        'HTML',
        'CSS',
        'Jinja2'
      ],
      backend: [
        'FastAPI',
        'Python'
      ],
      database: [
        'SQLite',
        'SQLAlchemy'
      ]
    },

    github:
      'https://github.com/V-Varna/FinanceMgt',

    liveDemo:
      'https://my-finance-tracker-sk1t.onrender.com'
  },


  // --------------------------------------------------
  // PROJECT 3
  // --------------------------------------------------

  {
    id: 'anti-doping-platform',

    name: 'Anti-Doping Investigations Platform',

    // Temporary image — replace with your real project screenshot later
    image:
      'https://placehold.co/900x600/eaf4f8/415a77?text=Anti-Doping+Investigations+Platform',

    shortDescription:
      'A full-stack platform designed to support anti-doping investigations by managing complaints, flagged athlete profiles, case reviews, and investigation workflows.',

    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB'
    ],

    year: '2024',

    teamSize: '6',

    role: 'Frontend Developer',

    problem:
      'Anti-doping investigations can involve complaints, athlete history, health reports, multiple reviewers, and several stages of investigation. The platform was designed to organize this information and provide a structured workflow for managing doping-related cases.',

    overview:
      'The Anti-Doping Investigations Platform is a full-stack web application designed to support anti-doping agencies and investigation teams. A whistleblower can raise a complaint against a player, which results in the player profile being flagged for review. Administrators can review the complaint along with the player history and available data before assigning the case to an analyst for further investigation.',

    howItWorks: [
      'A whistleblower submits a complaint concerning a player.',
      'The concerned player profile is flagged for administrative review.',
      'The complaint and the player history are made available through the admin dashboard.',
      'An administrator reviews the available information and assigns the case to an analyst based on workload and availability.',
      'The assigned analyst investigates the player data and relevant health reports.',
      'If the investigation does not confirm doping, the flag can be removed from the player profile.',
      'If the investigation indicates doping, the case can move to a further investigation stage for detailed review.',
      'The investigation process can ultimately lead to restrictions or disqualification based on the findings.'
    ],

    features: [
      'Whistleblower complaint submission',
      'Flagged player profiles',
      'Admin dashboard for case review',
      'Player history and data review',
      'Analyst assignment workflow',
      'Investigation case management',
      'Health report and investigation review',
      'Role-based workflow for different participants',
      'JWT-based authentication'
    ],

    techStack: {
      frontend: [
        'React.js',
        'CSS'
      ],
      backend: [
        'Node.js',
        'Express.js'
      ],
      database: [
        'MongoDB'
      ],
      authentication: [
        'JWT'
      ],
      tools: [
        'ESLint',
        'Prettier',
        'dotenv'
      ]
    },

    github:
      'https://github.com/V-Varna/Anti-Doping-platform',

    liveDemo: null
  },


  // --------------------------------------------------
  // PROJECT 4
  // --------------------------------------------------

  {
    id: 'primeclone',

    name: 'PrimeClone',

    // Temporary image — replace with your real project screenshot later
    image:
      'https://placehold.co/900x600/eaf4f8/415a77?text=PrimeClone',

    shortDescription:
      'A responsive Prime Video-inspired streaming application built with React.js featuring dynamic content, search, genre filtering, movie details, and watchlist functionality.',

    tags: [
      'React.js',
      'Tailwind CSS',
      'TMDB API',
      'React Context'
    ],

    year: '2024',

    teamSize: '1',

    role: 'Frontend Developer',

    problem:
      'Modern streaming platforms need to organize large amounts of content while keeping browsing, searching, filtering, and content discovery simple for users. PrimeClone was created as a frontend project to explore these interface and interaction patterns.',

    overview:
      'PrimeClone is a Prime Video-inspired streaming application built with React.js. It uses the TMDB API to retrieve movie and TV content and provides users with categorized browsing, search, genre filtering, movie details, and a personal watchlist.',

    howItWorks: [
      'The application retrieves movie and TV content through the TMDB API.',
      'Content is organized into different categories on the home page.',
      'Users can search for specific movies or shows.',
      'Genre filters allow users to browse content by category.',
      'Selecting a title opens its movie or show details.',
      'Users can add content to a personal watchlist using React Context.',
      'The responsive interface adapts to different screen sizes.'
    ],

    features: [
      'Categorized movie and TV content',
      'TMDB API integration',
      'Real-time search',
      'Genre filtering',
      'Movie details page',
      'Personal watchlist',
      'React Context API state management',
      'Responsive design',
      'Sticky navigation',
      'Hover effects and smooth transitions'
    ],

    techStack: {
      frontend: [
        'React.js',
        'Tailwind CSS'
      ],
      routing: [
        'React Router DOM'
      ],
      dataAndAPI: [
        'Axios',
        'TMDB API'
      ],
      stateManagement: [
        'React Context API'
      ],
      tools: [
        'React Icons'
      ]
    },

    github:
      'https://github.com/V-Varna/PrimeClone-React',

    liveDemo:
      'https://prime-clone-react.vercel.app/'
  },


  // --------------------------------------------------
  // PROJECT 5
  // --------------------------------------------------

  {
    id: 'eshop',

    name: 'eShop — Tech E-Commerce Website',

    // Temporary image — replace with your real project screenshot later
    image:
      'https://placehold.co/900x600/f6eee9/6b4f45?text=eShop',

    shortDescription:
      'A responsive e-commerce frontend designed to provide a modern shopping experience with product browsing, interactive cards, animations, and a custom carousel.',

    tags: [
      'HTML',
      'JavaScript',
      'Tailwind CSS',
      'Responsive Design'
    ],

    year: '2023',

    teamSize: '1',

    role: 'Frontend Developer',

    problem:
      'E-commerce interfaces need to present products clearly while keeping navigation and interactions simple and engaging. This project was created to explore the design and implementation of a responsive shopping interface with interactive product elements.',

    overview:
      'eShop is a responsive and animated e-commerce frontend built using HTML, Tailwind CSS, and JavaScript. It includes a hero section, product cards, a custom carousel, product information tables, interactive buttons, and responsive layouts designed to simulate a modern shopping experience.',

    howItWorks: [
      'Users enter the website through the main hero section and can navigate through different product-related sections.',
      'Products are displayed through interactive product cards.',
      'The custom carousel allows users to browse featured content.',
      'Product information is presented through cards and a product catalog table.',
      'Interactive buttons provide visual feedback for shopping actions.',
      'The responsive layout adapts the interface for different screen sizes.'
    ],

    features: [
      'Animated hero section',
      'Call-to-action buttons',
      'Custom product carousel',
      'Interactive product cards',
      'Add-to-cart animation',
      'Product catalog table',
      'Sticky navigation',
      'Smooth scrolling',
      'Scroll-to-top button',
      'Glassmorphism information cards',
      'Responsive layout',
      'Custom animations'
    ],

    techStack: {
      frontend: [
        'HTML5',
        'CSS',
        'JavaScript',
        'Tailwind CSS'
      ],
      tools: [
        'Font Awesome',
        'Google Fonts'
      ]
    },

    github:
      'https://github.com/V-Varna/eshop',

    liveDemo:
      'https://v-varna.github.io/eshop/'
  },


  // --------------------------------------------------
  // PROJECT 6
  // --------------------------------------------------

  {
    id: 'gesture-voice-mouse',

    name: 'Gesture & Voice Controlled Virtual Mouse',

    // Temporary image — replace with your real project screenshot later
    image:
      'https://placehold.co/900x600/eaf4f8/415a77?text=Gesture+%26+Voice+Controlled+Virtual+Mouse',

    shortDescription:
      'An AI-powered human-computer interaction system that combines real-time hand gestures and voice commands to control mouse and system functions.',

    tags: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'Speech Recognition'
    ],

    year: '2026',

    teamSize: '1',

    role: 'Computer Vision, Voice Interaction & Application Development',

    problem:
      'Traditional mouse and keyboard interaction requires physical input devices. This project explores an alternative interaction method that allows users to control common computer operations through hand gestures and voice commands without requiring additional hardware.',

    overview:
      'Gesture & Voice Controlled Virtual Mouse is an AI-powered human-computer interaction system developed using Python, OpenCV, MediaPipe, Speech Recognition, and Eel. The system combines real-time hand gesture recognition with a voice assistant named Proton to control mouse operations, scrolling, system volume, brightness, file navigation, and other computer functions.',

    howItWorks: [
      'The webcam captures real-time hand movements.',
      'OpenCV handles video capture and image processing.',
      'MediaPipe detects hand landmarks from the camera feed.',
      'Finger positions and hand movements are interpreted as specific gestures.',
      'Recognized gestures are mapped to mouse and system actions through PyAutoGUI and related libraries.',
      'Voice input is processed using Speech Recognition.',
      'Recognized commands are interpreted and mapped to supported system actions.',
      'Eel connects the Python application with the interactive frontend interface.',
      'The Proton assistant provides voice and text-based interaction through the GUI.'
    ],

    features: [
      'Cursor movement using hand gestures',
      'Left click',
      'Right click',
      'Double click',
      'Drag and drop',
      'Vertical scrolling',
      'Horizontal scrolling',
      'Volume control',
      'Brightness control',
      'Voice-based command execution',
      'Google search and Maps actions',
      'File navigation',
      'Launch and stop gesture recognition',
      'Interactive Proton assistant',
      'Voice and text interaction through GUI'
    ],

    techStack: {
      backend: [
        'Python'
      ],
      computerVision: [
        'OpenCV',
        'MediaPipe'
      ],
      automation: [
        'PyAutoGUI',
        'pycaw',
        'screen_brightness_control'
      ],
      voice: [
        'SpeechRecognition',
        'pyttsx3'
      ],
      frontend: [
        'HTML',
        'CSS',
        'JavaScript'
      ],
      integration: [
        'Eel'
      ]
    },

    github:
      'https://github.com/V-Varna/Gesture-Voice-Mouse',

    liveDemo: null
  },


  // --------------------------------------------------
  // PROJECT 7
  // --------------------------------------------------

  {
    id: 'stock-trend-detector-lstm',

    name: 'Stock Trend Detector using LSTM',

    // Temporary image — replace with your real project screenshot later
    image:
      'https://placehold.co/900x600/f6eee9/6b4f45?text=Stock+Trend+Detector',

    shortDescription:
      'A deep-learning project that uses historical stock data and an LSTM neural network to model price patterns and visualize actual versus predicted prices.',

    tags: [
      'Python',
      'TensorFlow',
      'LSTM',
      'yFinance'
    ],

    year: '2025',

    teamSize: '1',

    role: 'Machine Learning — Model Exploration & Understanding',

    problem:
      'Historical stock prices contain time-dependent patterns that can be explored using time-series and deep-learning techniques. This project was developed to study how an LSTM neural network can be applied to historical stock data to model and predict future price values.',

    overview:
      'Stock Trend Detector using LSTM is a deep-learning project that retrieves historical stock data through the yFinance API, preprocesses the data, trains an LSTM neural network, and visualizes the difference between actual and predicted stock prices.',

    howItWorks: [
      'Historical stock data is retrieved using the yFinance API.',
      'The collected data is prepared and normalized for model training.',
      'Historical closing prices are converted into sequences suitable for time-series learning.',
      'An LSTM neural network is trained using the prepared sequences.',
      'The trained model generates predicted stock price values.',
      'The predicted values are transformed back to the original scale.',
      'Actual and predicted prices are visualized for comparison.'
    ],

    features: [
      'Historical stock data retrieval',
      'Support for stock symbols',
      'Data normalization',
      'Time-series sequence preparation',
      'LSTM neural network',
      'Stock price prediction',
      'Actual versus predicted price visualization',
      'Matplotlib-based graphs'
    ],

    techStack: {
      language: [
        'Python'
      ],
      machineLearning: [
        'TensorFlow',
        'Keras',
        'LSTM'
      ],
      dataAndAPIs: [
        'yFinance',
        'NumPy',
        'scikit-learn'
      ],
      visualization: [
        'Matplotlib'
      ]
    },

    github:
      'https://github.com/V-Varna/stock_trend_detector_LSTM',

    liveDemo: null
  }
];

export default projectsData;