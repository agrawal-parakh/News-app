import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class NewsComponent extends Component {
  articles = [
    {
      source: {
        id: "nrk",
        name: "NRK",
      },
      author: "NRK",
      title: "De siste sportsnyhetene fra NRK",
      description: "Her får du de siste sportsnyhetene fra NRK.",
      url: "https://www.nrk.no/sport/sportsnyheter-1.14660227#1.15851074.1.15851074",
      urlToImage:
        "https://gfx.nrk.no/7kT5zGoE2E-GnUKLojH1PQ0I1Nze4Ypu8lxM-oBjubQw.jpg",
      publishedAt: "2022-02-11T10:37:46.1345485Z",
      content:
        "10. februar2022kl.14:15Ragne Wiklund fekk det vanskeleg på slutten av sin 5000-meter og blei nummer fem, same plassering som på 3000. Wiklund kom i mål på 6.56,34, som er forbetring av hennar personl… [+1161 chars]",
    },
    {
      source: {
        id: "cbc-news",
        name: "CBC News",
      },
      author: "CBC News",
      title:
        "Fate of Russian figure skater Kamila Valieva to be decided by arbitration court | CBC Sports",
      description:
        "Russian figure skater Kamila Valieva's right to compete in the women's event at the Beijing Olympics will be decided at an urgent hearing at the Court of Arbitration for Sport.",
      url: "http://www.cbc.ca/sports/olympics/winter/figure-skating/russia-figure-skater-kamila-valieva-court-of-arbitration-for-sport-1.6347643",
      urlToImage:
        "https://i.cbc.ca/1.6342604.1644552980!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/beijing-olympics-figure-skating.jpg",
      publishedAt: "2022-02-11T10:37:22.0870817Z",
      content:
        "Russian figure skater Kamila Valieva's right to compete in the women's event at the Beijing Olympics will be decided at an urgent hearing at the Court of Arbitration for Sport.\r\nThe International Tes… [+5027 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "BRIAN CAROVILLANO and TED ANTHONY",
      title: "At Olympics and beyond, getting away with it is Russia's way",
      description:
        "BEIJING (AP) — Be it sports, politics, hacking or war, the recent history of Russia’s relationship with the world can be summed up in one phrase: They get away with it.Vladimir Putin’s Russia has perfected the art of flouting the rules, whether the venue is t…",
      url: "https://apnews.com/60f7e4f7c54ae3fe65d966ff5a159e9b",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/b20f2efa55a349a3b0424437ca70931e/3000.jpeg",
      publishedAt: "2022-02-11T08:05:50Z",
      content:
        "BEIJING (AP) — Be it sports, politics, hacking or war, the recent history of Russia’s relationship with the world can be summed up in one phrase: They get away with it.Vladimir Putin’s Russia has per… [+8423 chars]",
    },
    {
      source: {
        id: "focus",
        name: "Focus",
      },
      author: "FOCUS Online",
      title:
        "Kathrin Müller-Hohenstein reagiert auf Kritik mit Humor: „Das ist nicht lila“",
      description:
        "Die erfahrene „sportstudio“-Moderatorin Katrin Müller-Hohenstein muss derzeit viel Spott über sich ergehen lassen. In einem Radio-Interview verteidigt Katrin Müller-Hollenstein nun ihr Olympia-Outfit und räumt mit einer falschen Farb-Beobachtung vieler Leute …",
      url: "https://www.focus.de/kultur/kino_tv/zdf-moderatorin-katrin-mueller-hohenstein-reagiert-mit-humor-auf-kritik-noch-nie-so-viele-e-mails-bekommen_id_50956960.html",
      urlToImage:
        "https://p6.focus.de/img/kultur/kino_tv/id_50956952/katrin-mueller-hohenstein-reagiert-auf-kritik-an-olympia-outfit-noch-nie-so-viele-e-mails-bekommen-.jpg?im=Crop%3D%280%2C0%2C1360%2C680%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=3c1e52d0cf00f5620375c19a8a1cff9d135706f08df191b982302363f79aa9d7",
      publishedAt: "2022-02-11T06:41:42Z",
      content:
        'Die erfahrene "sportstudio"-Moderatorin Katrin Müller-Hohenstein muss derzeit viel Spott über sich ergehen lassen. In einem Radio-Interview verteidigt Katrin Müller-Hollenstein nun ihr Olympia-Outfit… [+3339 chars]',
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: "BBC Sport",
      title: "'Muhammad Ali inspired me to win an Olympic medal'",
      description:
        "BBC Indian Sportswoman of the Year nominee Lovlina Borgohain says watching Muhammad Ali's fights were of great inspiration to her.",
      url: "http://www.bbc.co.uk/sport/av/boxing/60196959",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/C235/production/_123171794_434106ce-fcba-463e-80cf-5099a7117d9c.jpg",
      publishedAt: "2022-02-11T06:07:35.3690941Z",
      content:
        "Lovlina Borgohain became just the third Indian to win an Olympic boxing medal when she took bronze in Tokyo. \r\nThe 24-year-old welterweight says watching Muhammad Ali's fights gave her the inspiratio… [+368 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Phil Helsel, David K. Li",
      title:
        "Shaun White closes out Olympic career without another trip to the podium",
      description:
        "Snowboarder Shaun White, the face of modern winter sports, closed out his Olympic career Friday in Beijing without adding another medal to his collection.   The",
      url: "https://www.nbcnews.com/news/world/shaun-white-closes-olympic-career-another-trip-podium-rcna15564",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-02/220210-shaun-white-ac-955p-d58e7f.jpg",
      publishedAt: "2022-02-11T03:17:47Z",
      content:
        "Snowboarder Shaun White, the face of modern winter sports, closed out his Olympic career Friday in Beijing without adding another medal to his collection. \r\nThe 35-year-old Carlsbad, California, nati… [+2053 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Fox News",
      title:
        "Adidas criticized for sharing explicit images on Twitter to promote sports bras",
      description:
        'The company argued that it wanted to help remove the stigma around naked breasts, which some people have tied to the "Free the Nipple" campaign.',
      url: "https://www.foxbusiness.com/retail/adidas-criticized-explicit-images-twitter-sports-bras",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/06/0/0/Adidas.jpg?ve=1&tl=1",
      publishedAt: "2022-02-11T02:52:20.4623964Z",
      content:
        "Adidas is taking heat for a Twitter ad campaign that featured naked breasts as the company tried to promote its new sports bra range. \r\nThe German sportswear company on Wednesday morning posted the u… [+2801 chars]",
    },
    {
      source: {
        id: "breitbart-news",
        name: "Breitbart News",
      },
      author: "Gabrielle Reyes",
      title:
        "Ontario to Let Children Play Sports Again After 2 Weeks of Freedom Convoy",
      description:
        "The Canadian province of Ontario is expected to lift a ban on schoolchildren participating in extracurricular activities.",
      url: "https://www.breitbart.com/politics/2022/02/10/ontario-let-children-play-sports-freedom-convoy/",
      urlToImage:
        "https://media.breitbart.com/media/2022/02/boy-sits-covid-mask-soccer-ball-children-mandates-stock-getty-640x335.jpg",
      publishedAt: "2022-02-11T02:11:52Z",
      content:
        "Health officials in the Canadian province of Ontario are expected to announce an easing of pandemic restrictions on Thursday that have prohibited schoolchildren from participating in extracurricular … [+2662 chars]",
    },
    {
      source: {
        id: "the-irish-times",
        name: "The Irish Times",
      },
      author: "Ronan McGreevy",
      title:
        "Largest sports capital grant in history of State to be announced today",
      description:
        "Package worth €150 million will benefit 1,900 clubs and schools",
      url: "https://www.irishtimes.com/\t\t\t\t\t\t\t/sport/largest-sports-capital-grant-in-history-of-state-to-be-announced-today-1.4799192\t",
      urlToImage:
        "https://www.irishtimes.com/image-creator/?id=1.4799205&origw=1440",
      publishedAt: "2022-02-11T01:00:00Z",
      content:
        "The largest sports capital grant in the history of the State, worth 150 million, will be announced today.\r\nMore than 1,900 clubs and schools will benefit from capital grants to build new sporting fac… [+77 chars]",
    },
    {
      source: {
        id: "google-news-ca",
        name: "Google News (Canada)",
      },
      author: "https://www.facebook.com/pages/Kristin-Rushowy/267989300044390",
      title:
        "Ontario reconsiders timelines for loosening COVID-19 restrictions",
      description:
        "Ontario is looking to move up timelines for reopening and discussions are under way about changes to masking rules and vaccination passports.",
      url: "https://www.thestar.com/politics/provincial/2022/02/10/ontario-reconsiders-timelines-for-loosening-covid-19-restrictions.html",
      urlToImage:
        "https://images.thestar.com/EidUYL4tUr_PgGrAJg-oF7kcQjU=/1200x800/smart/filters:cb(1644574819358)/https://www.thestar.com/content/dam/thestar/politics/provincial/2022/02/10/ontario-reconsiders-timelines-for-loosening-covid-19-restrictions/moore.jpg",
      publishedAt: "2022-02-11T00:25:21+00:00",
      content:
        "Ontario is looking to move up timelines for reopening and discussions are under way about changes to masking rules and vaccination passports given the “remarkable improvement” in the COVID-19 situati… [+3516 chars]",
    },
    {
      source: {
        id: "polygon",
        name: "Polygon",
      },
      author: "Owen S. Good",
      title:
        "Circuit Superstars’ racing arcade-meets-sim design has a family history",
      description:
        "Circuit Superstars, a top-down “sim-meets-arcade” motorsports video game, launched Jan. 28 on PlayStation 4. It’s also available on PC and Xbox One. The game is the work of Carolina, Carlos, and Alberto Mastretta, three siblings who grew up in motorsports wit…",
      url: "https://www.polygon.com/22927361/circuit-superstars-arcade-sim-racer-mastretta-original-fire-games",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/atjie6ge1vNAXEkixkDETdHqXbM=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23232527/ss_4d59a933b869d08ab5a9db5e040b2df1b9a92d2d.jpg",
      publishedAt: "2022-02-10T18:00:00Z",
      content:
        "The Mastrettas always knew they were going to make a racing video game. Take a glance at their family photos, and its easy to see why. \r\nTheres their granddad, beaming alongside the Faccia Feroce, a … [+6587 chars]",
    },
    {
      source: {
        id: "the-washington-times",
        name: "The Washington Times",
      },
      author: "Jacob Calvin Meyer",
      title:
        "'There's always a risk': With sports betting boom comes increase in problem gamblers, experts say",
      description:
        "With sports gambling now legal in 33 states and Washington, D.C, it's inevitable that there will be an increase in the number of problem gamblers. Marc Lefkowitz, a certified gambling counselor for more than 20 years and a recovering gambler for nearly 40, is…",
      url: "https://www.washingtontimes.com/news/2022/feb/10/theres-always-risk-sports-betting-boom-comes-incre/",
      urlToImage:
        "https://twt-thumbs.washtimes.com/media/image/2021/12/02/sports_betting_advertising_07661_c0-152-1824-1216_s1200x700.jpg?2a7b16d6d4ef9eba16e5f1e5b7956cc53e0d303f",
      publishedAt: "2022-02-10T14:47:52Z",
      content:
        "Two percent. Thats the figure everyone talks about in the sports gambling world. \r\nNo, that isnt the chance that youll hit that six-team parlay. \r\nThat number 2% is the one most experts use when citi… [+14268 chars]",
    },
    {
      source: {
        id: "the-globe-and-mail",
        name: "The Globe And Mail",
      },
      author: "Grant Robertson, Rachel Brady",
      title:
        "A troubling number of Canadian Olympians are bingeing, purging and starving themselves. Inside the eating-disorder problem in elite amateur sports",
      description:
        "Researchers say eating disorders are an underdiagnosed problem among athletes. The Globe and Mail examines its root causes - from a fear of failure, to questionable coaching methods, to a toxic culture that enables it",
      url: "https://www.theglobeandmail.com/canada/article-canadian-olympians-athletes-eating-disorder-problem-amateur-sports/",
      urlToImage:
        "https://www.theglobeandmail.com/resizer/qcNSOTfTYx48PInsSBs-ZLkYetk=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/R2HCGH6HSRF6DB3M4SA4YSTYQ4.JPG",
      publishedAt: "2021-12-17T13:56:44Z",
      content:
        "MoreBehind the storyOn suspect scienceExperts discuss solutionsIn dataPodcast\r\nIn the fall of 2020, Taylor Ruck sat in a restaurant staring at a plate of barbecue ribs. It was the kind of meal she of… [+37374 chars]",
    },
    {
      source: {
        id: "the-washington-times",
        name: "The Washington Times",
      },
      author: "The Washington Times http://www.washingtontimes.com",
      title: "Latest Quizzes",
      description:
        "Take a break from the hard news of the day and enjoy a quiz on entertainment, sports, history and politics only from The Washington Times.",
      url: "https://www.washingtontimes.com/quiz/",
      urlToImage: null,
      publishedAt: "2021-02-10T03:52:37.2719772Z",
      content:
        "Featured Quizzes\r\nAttention all William Shakespeare experts. Pinpoint the prose's origin plucked from one of his many famous plays in this multiple-choice challenge.\r\n Shares \r\nName these legendary c… [+32652 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }

  render() {
    return(
      <>
        <div className="container my-3">
        <h2>Breaking News</h2>
          <div className="row my-3" >
            {this.state.articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem  title={ele.title.slice(0,40)} desc={ele.description.slice(0,80)} imageurl={ele.urlToImage} url={ele.url}/>
                </div>
              );
            })}
          </div>
        </div>
        
      </>
    )
  }
}





