import JDGYM from "@/assets/img/jd-gym-native-app.gif";
import SITDOWN from "@/assets/img/sitdown-app-frontend.png";
import MACROTRACKER from "@/assets/img/macro-tracker-app.png";

export const ProjectsList = [
    {
        id: "sitdown",
        title: "sitdown next app",
        desc: "A web app to help teams share daily updates about their work with the rest of the team.",
        more: [
            "The Sitdown app is a web application where users can post status updates and share them with the rest of their team. The users can create projects, write the project description, add members to that project, and the added members can post status updates about that project with relevant tags (for filtering). Then, you can go to the specific project page, and you can see all the status updates made to that project, alternatively, you can go to the tags page, and you can select a tag, and any status updates containing that tag will be shown.",
            "This application allows the team members to share status updates in real-time, via the web. This eliminates the need for the team to share their updates using an unstructured process, for example, instant messages and email."
        ],
        image: SITDOWN,
        techStack: ["next.js", "typescript", "tailwind", "redux", "express.js", "firebase"],
        demoHref: "https://sitdown-next-app.vercel.app/login",
        githubHref: "https://github.com/learsiOtni/sitdown-next-app"
    },
    {
        id: "macrotracker",
        title: "macro tracker web app",
        desc: "A web app to track your daily macros, helping you with your fitness goals.",
        image: MACROTRACKER,
        more: [
            "Macro Tracker is a web application where users can log their daily food intake, and in turn, the app will show the total amount of protein, carbs, fat, and calories each meal has. The users can set their macros goal, go to the search page, select a category: breakfast; snacks; lunch; dinner, and start adding a food. They can search for particular items or even add items to their favourites for easier filtering. Each category calculates the total amount of protein, carbs, fat, and calories for the food it contains, separate from the total of the day. There is also an overview page where the users can see their macros and calories in a weekly view.",
            "One of my hobbies is going to the gym and staying fit. Before developing this web app, the way I tracked my macros and calories was manually, using an Excel spreadsheet. In the Excel spreadsheet, I stored a data list of the food I ate. I would create a page template and start copying and pasting food items from the data list. Also, it was very difficult to tweak or edit things such as changing 100g to 80g. I also tried some fitness tracker apps but you have to pay after 2 weeks of free trial. That was when I decided to develop this macro tracker app. I use this app whenever I am cutting or reducing my calorie intake in preparation for the summer holidays."
        ],
        techStack: ["react", "axios", "materialUI", "redux", "firebase"],
        demoHref: "https://macro-tracker-5e99c.web.app/signin",
        githubHref: "https://github.com/learsiOtni/macro-tracker-web-app"
    },
    {
        id: "jdnative",
        title: "JD gym native app",
        desc: "A React Native app for booking gym classes.",
        image: JDGYM,
        more: [
            "JD Gym is a low cost gym chain in the UK which has a mobile app but lacks functionality. I worked with a UI designer, and together we have created an app redesign to help improve the user experience allowing them to book classes and navigate the app easily.",
            "STATUS: The app's functionality is currently limited but the overall UI design is complete."
        ],
        techStack: ["react native", "firebase", "expo go"],
        githubHref: "https://github.com/learsiOtni/jd-gym-native-app"
    }
]