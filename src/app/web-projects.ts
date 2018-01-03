export class WebProjects {
  angularProjects = [
    {title:"AngularJS & Angular2/4"},
    {
      name: "OTR Reviews Page",
      description: "AngularJS page designed and built for Off The Record to dynamically list customer reviews",
      link: "https://Offtherecord.com/reviews",
      image: "./assets/img/Reviews.png"
    },
    {
      name: "Overwatch Site",
      description: "Angular 2 app that fetches data from an Overwatch API to display player stats",
      link: "https://jstein92.github.io/overwatch-stats/",
      image: "./assets/img/Overwatch.png",
      github: "https://github.com/JStein92/overwatch-site"
    },
    {
      name: "OTR Login Modal",
      description: "Login/Signup modal with Facebook integration for Off The Record",
      link: "https://Offtherecord.com",
      image: "./assets/img/Login.png"
    },
    {
      name: "Pokemon Adventure",
      description: "A group project made during my programming bootcamp - catch, battle, and level up Pokemon, all generated through PokeAPI",
      link: "https://jstein92.github.io/pokemon-adventure/",
      image: "./assets/img/Pokemon.png",
      github: "https://github.com/JStein92/pokemon-adventure"
    }
  ];

  netProjects = [
    {title:"C# & .NET"},
    {
      name: "Online Shop",
      description: "SQL integrated Amazon style online shopping app",
      link: "https://github.com/JStein92/OnlineShop",
      image: "./assets/img/OnlineShop.png",
      github: "https://github.com/JStein92/OnlineShop"
    },
    {
      name: "Band tracker",
      description: "SQL integrated band/venue tracker",
      link: "https://github.com/JStein92/BandTracker",
      image: "./assets/img/BandTracker.png",
      github: "https://github.com/JStein92/BandTracker"
    }
  ]
  projects = [this.angularProjects, this.netProjects];
}
