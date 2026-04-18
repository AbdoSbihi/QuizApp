Abdessamad Sbihi     EXO4Z4      2025/2026/2
University of dunaújváros       
Quiz App 

An interactive quiz web applivation built with F# and WebSharper, combining functional programming with modern web technologies

  *  Features : 
- Multuiple choice using WebSharper
- Dynamic UI using WebSharper
- Client-server architecture in F#
- Real-time scoring 
- Clean separation of frontend and backend

  *  Tech Stack : 
- Language : F#
- Framework: WebSharper
- Frontend : HTML + JavaScript
- Backend : ASP.NET Core
- Tooling : Node.js(for dependencies ) , Type Script config

  *  Deploymeny and hosting  :
 the project is Hosted by Azure (find the try live link the repository structure)

Project Structure(v1) : 
QuizApp/
│── wwwroot/
│   ├── Scripts/                  # Client-side scripts
│   ├── WebSharper.Core.JavaScript/
│   ├── Main.html                 # Main HTML entry point
│   ├── QuizApp.css              # Styles
│   ├── QuizApp.head.html        # Head template
│   ├── QuizApp.js               # Generated JS
│
│── node_modules/                # JS dependencies
│── Properties/                  # Project properties
│
│── Model.fs                     # Data models (quiz, questions, answers)
│── appsettings.json             # App configuration
│── package.json                 # Node dependencies
│── tsconfig.json                # TypeScript config
│── wsconfig.json                # WebSharper config
