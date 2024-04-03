import { useEffect, useState } from "react";
import AppLists from "./AppLists";
import "./Appstore.css";
import TabLists from "./TabLists";
const Appstore = () => {
  const tabsList = [
    {
      tabId: 1,
      displayText: "Social",
    },
    {
      tabId: 2,
      displayText: "Games",
    },
    { tabId: 3, displayText: "News" },
    {
      tabId: 4,
      displayText: "Food",
    },
  ];

  const appsList = [
    {
      appId: 1,
      appName: "facebook",
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAB4CAMAAACTmw0tAAAAb1BMVEX///8Yd/L4+v8kdvIpePIOdfLt8v0Ab/EAcvJPjPMfefLR3vwAa/EAZPAAafEAYvDn7v3z9v6Kr/fW4vy80PptnfVflfRYkfTe5/w+hPNomvWvxfkyf/O4y/nE1fp0ofWStPcAXvCbu/h+qPamwPi/czlIAAAFC0lEQVR4nO2c7XKqMBCGIachATEFFVBEtMr9X+NB23OqkKwbdAM/eGc6044j3Scfu5tNgufNmjVr1qxZFGJpECQ3BUHKxrbGUttNs8rCSqplKyWrsFydN9uxrcKJBZtjFXEhJOfcv6n9RbZ/R1W2CabeFdumVEr6P5Y/ivtSqbyZcEewRREJqbP9V1JEYT3Nbkj21ZJrm77TEXwZNcnY1vbE9pVAWP/DIKrztHqBbXyFtf5bShwmhJAU+Nb/7YVwKtOZnZW1+VdJdZpEJyR5PMj+VnExgclcqyeOE+yE5WFs+8/2o/9eXJxGNZ9lls6nL5WPORFy8ar9vi+K0cxn4RvsbyfCLh0JoHhh+j4QhOOMouIt7X+VGIXg8jb7W4LMvf2n2MrEdk1zkyFfjS+u7a9t7JfxUoZ5dszKIoziTxX3Vw3xxq3928gid47KQ5Iyxrz257rUXxxOZZeAc7epHd6BqvAQaB7wGXV7aefS/gZrvzSk/WkPwBdnd/avsQEgzg3ppgaAy4UzAGwEE6XJv2sAHA6iA9IDiaMxPukA/Hjvxv40xHkgXpnjqxaA73TT/f1qcCk06Bi1AL46OQFAeiC5Ap6hB/BjF/ZjXaiEkmQDgIv1GctxM0CC+ZkBgIf0SwNsEqTA1MAA4Cv6lKiXxej1xKMwA4AMyQG+9P+5Z4kuPw7Wh9PqpouhGaIvak+6R44gqclsmjCOxY9M3yPPiJBT2Jd195uswFTweEG7utxWOPs1UWyFcr88WpMCbJAjiP/pjuUt1nvRFhtxzXgF6I4E7BpaHkkBKuQU6AMgM8CWgBQA6UQ1AH+Q9kdflMF4ja3lDgfwVc9/vVHYKKAB+MACkCZ0pgD6TgA4C3xR2DD2CgDP6exnhQsAwpQ6QPvCVwB2dDt/yc4BgF/RFRmxmdBrPUCYDa3hQMzvJHtxgD8IeIpPV6FbgzVpXoR36qUSD4IexMcCUGlwp+53gwdB/pgSABxCS/yDIHdGOYTgSWwBAO2PUE5i2I1aANTQsoLQjcKBzAIAqm9TBjI4lbAAOAE9QFqdA5M5C4AMyGopkzk4nbYAgNwxaToNLmgsAD6Bx5CWtsAlJR4gWQKPIV1Sgk2HB6iBdoi+SEtzUCjGA5yhMMAJzYcLW3iAI+ALBG1hC9rewANA4YS4tAhlQ2q9uFP3m3cf1TvzQ3hEfOijBBov+pX/0VuR3X0K5dLE5XUwEtwvuPqVOdRyzMGRD1x1dOiamH6Lyctw+xQDAST9IVLcNutQAAfbrCzH1EcHArjY6MZVqAcCuDm1JTGbjQMBXNjv7RG7HMMAHB23SRE16kEAPHRz4Amz1zoIwNWRM8yx7yEADg56/NP26Y7dAAAuaffoH/T01NYAAJcHX58PInsAt0eP23UB7ImsAVwf/vYWsCeyBnCQBHV0BglsAWLojCaRwCsolgDEK3mDoEtkdgDjXAJqCcyJtRWAwwj2KOAinA2AGO0inOeVJgILAEFZTn8mdjSUafEAynhJwo0a/fIGCzD2dVzPdCEaCSBpa+k4BaXmQCsOwHhHyLHO/U7AAPCJvBSgVVB0Z8JzAC7CaTT/t+pI2QEofzOV5v9W59UkMAAX1X5a5l+VHnZLiQDgclntHZUfLMXW+b/X8xgBpIiKxfRa/7+SJhNK6PYHPm4vSIrLKb8g6SYW1Jeq4qILIHhUXerJv6LqR0nddC1t6qk3/axZs2bNmjWC/gJfB0wcMLH7cwAAAABJRU5ErkJggg==",
      category: "Social",
    },
    {
      appId: 2,
      appName: "Whatsapp",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png",
      category: "Social",
    },
    {
      appId: 3,
      appName: "Instagram",
      imageUrl:
        "https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000",
      category: "Social",
    },
    {
      appId: 4,
      appName: "telegram",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png",
      category: "Social",
    },
    {
      appId: 5,
      appName: "Messenger",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
      category: "Social",
    },
    {
      appId: 6,
      appName: "Temple run",
      imageUrl:
        "https://e1.pngegg.com/pngimages/122/790/png-clipart-ios-7-icons-temple-run-illustration-thumbnail.png",
      category: "Games",
    },
    {
      appId: 7,
      appName: "My Talking Tom",
      imageUrl:
        "https://play-lh.googleusercontent.com/N0UxhBVUmx8s7y3F7Kqre2AcpXyPDKAp8nHjiPPoOONc_sfugHCYMjBpbUKCMlK_XUs",
      category: "Games",
    },
    {
      appId: 8,
      appName: "Hill climb",
      imageUrl:
        "https://play-lh.googleusercontent.com/N0UxhBVUmx8s7y3F7Kqre2AcpXyPDKAp8nHjiPPoOONc_sfugHCYMjBpbUKCMlK_XUs",
      category: "Games",
    },
    {
      appId: 9,
      appName: "Google News",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKrGfUb7QvKunFlQoH-drdSLXdnrTX55wWGzENr0fn&s",
      category: "News",
    },
    {
      appId: 10,
      appName: "Smart News",
      imageUrl: "https://avatars.githubusercontent.com/u/8807928?s=280&v=4",
      category: "News",
    },
    {
      appId: 11,
      appName: "Aaj Tak",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/hi/thumb/0/0d/%E0%A4%86%E0%A4%9C_%E0%A4%A4%E0%A4%95_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.svg/1280px-%E0%A4%86%E0%A4%9C_%E0%A4%A4%E0%A4%95_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.svg.png",
      category: "News",
    },
    {
      appId: 12,
      appName: "Zomato",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
      category: "Food",
    },
    {
      appId: 13,
      appName: "Swiggy",
      imageUrl:
        "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png",
      category: "Food",
    },
    {
      appId: 14,
      appName: "Domino's Pizza",
      imageUrl:
        "https://logos-world.net/wp-content/uploads/2021/08/Dominos-Pizza-Logo-1996-2012.png",
      category: "Food",
    }
  ];
  const [searchItem, SetSearchItem] = useState("");
  const [shortList, SetShortList] = useState(appsList);
  const[activetabId,SetActiveTabId]=useState(tabsList[0].displayText)

  const handlingOnChange = (event) => {
     SetSearchItem(event.target.value);
     
    const filtered = appsList.filter(each => 
      each.appName.includes(event.target.value))
    
   
      SetShortList(filtered)

    

    // console.log(event.target.value);
  };

  const clickTabItem=(displayText)=>{
    SetActiveTabId(displayText)
    console.log(activetabId)
    
  }
  
  const getFilteredList=()=>{
    const filteredList=shortList.filter(each=>
      each.category===activetabId)
  
  return filteredList
    }
    console.log( getFilteredList())

  return (
    <div className="appstore-container">
      <div className="header-container">
      <h1 className="app-heading">App Store</h1>
      <div className="search-input-container">
        <input className="search-input-box"
          type="search"
          placeholder="Search"
          onChange={handlingOnChange}
        ></input>
        <img
          className="search-icon"
          src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png "
        />
      </div>
      
      <div className="tabs-container">
        {tabsList.map((each) => {
          return <TabLists each={each} clickTabItem={clickTabItem} isActive={activetabId === each.displayText}/>;
        })}
        </div>
      </div>
      <div className="app-data-container">
        {getFilteredList().map((each) => {
          return <AppLists each={each} />;
        })}
      </div>
    </div>
  );
};
export default Appstore;
