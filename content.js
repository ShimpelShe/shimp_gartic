var stupid;

console.log(stupid + " before getlocal");

chrome.storage.local.get("stupidenabled", function (result) {
  if (result["stupidenabled"] == true) {
    stupid = true;
    console.log(stupid + " in getlocal");
    console.log("Stupidity is enabled");
  } else if (result["stupidenabled"] == false) {
    stupid = false;
    console.log("Stupidity is disabled");
  } else if (result["stupidenabled"] == null) {
    stupid = false;
    console.log("Stupidity is not set, defaulting to false");
    chrome.storage.local.set({ stupidenabled: false });
  }
  console.log(stupid + " ingetlocal after condition");
});

console.log(stupid + " after getlocal, before condition");

function loopcheck() {
  if (stupid == true) {
    dostupid();
  } else {
    requestAnimationFrame(loopcheck);
  }
}

function dostupid() {
  if (stupid == true) {
    let animcss = document.createElement("style");
    animcss.innerHTML = `
    .anim_pop {
        animation: pop 0.3s ease-in-out;
    }
  
    @keyframes pop {
        0% {
           transform: scale(0.95, 1.05);
        }   
        100% {
            transform: scale(1, 1);
        }
    }

    @keyframes thicknesspop {
        0% {
            width: 32px;
            height: 32px;
        }
        100% {
            width: 28px;
            height: 28px;
      }
    }

    .anim_thicknesspop {
        animation: thicknesspop 0.3s ease-in-out;
    }
`;
    document.body.append(animcss);

    function addEvents(HTML_ELEMENT, ANIM) {
      HTML_ELEMENT.addEventListener("click", function () {
        this.classList.remove(ANIM);
        void this.offsetWidth;
        this.classList.add(ANIM);
      });
      HTML_ELEMENT.addEventListener("onmousedown", function () {
        this.classList.remove(ANIM);
        void this.offsetWidth;
        this.classList.add(ANIM);
      });
      HTML_ELEMENT.addEventListener("input", function () {
        this.classList.remove(ANIM);
        void this.offsetWidth;
        this.classList.add(ANIM);
      });
      HTML_ELEMENT.addEventListener("animationend", function () {
        this.classList.remove(ANIM);
      });
    }

    const classes = [
      "time",
      "step",
      "color",
      "thickness",
      "tool",
      "ready",
      "download",
      "sound",
    ];

    function logic() {
      for (let o = 0; o < classes.length; o++) {
        var obj = document.getElementsByClassName(classes[o]);
        for (let i = 0; i < obj.length; i++) {
          if (classes[o] == "thickness") {
            addEvents(obj[i], "anim_thicknesspop");
          } else {
            addEvents(obj[i], "anim_pop");
          }
        }
      }
      var oslider_objs = document.getElementsByClassName("bxopacity");
      var oslider = oslider_objs[0]?.childNodes[1];
      if (oslider !== undefined) {
        oslider.step = 0.01;
        oslider.min = 0.01;
        oslider.style.width = "240px";
        oslider.style.margin = "8px";
      }
      var logo_objs = document.getElementsByClassName("logo");
      for (let i = 0; i < logo_objs.length; i++) {
        logo = logo_objs[i];
        logo.style.transform = "rotate(180deg)";
      }
      var screen_objs = document.getElementsByClassName("screen");
      for (let i = 0; i < screen_objs.length; i++) {
        screen = screen_objs[i];
        screen.style.width = "1280px";
      }
      var list_objs = document.getElementsByClassName("scrollElements");
      for (let i = 0; i < list_objs.length; i++) {
        list = list_objs[i];
        list.style.width = "120%";
        list.style.margin = "1px 1px 1px 1px";
      }
      var scrapbook_objs = document.getElementsByClassName("scrapbook");
      for (let i = 0; i < scrapbook_objs.length; i++) {
        scrapbook = scrapbook_objs[i];
        scrapbook.style.width = "100%";
        scrapbook.style.margin = "1px 1px 1px 5px";
      }
      var left_objs = document.getElementsByClassName("left");
      for (let i = 0; i < left_objs.length; i++) {
        left = left_objs[i];
        left.style.width = "45%";
      }
      var others_objs = document.getElementsByClassName("others");
      for (let i = 0; i < others_objs.length; i++) {
        others = others_objs[i];
        others.classList.remove("others");
      }
      var users_objs = document.getElementsByClassName("users");
      for (let i = 0; i < users_objs.length; i++) {
        users = users_objs[i];
        users.style.width = "60%";
      }
      var game_objs = document.getElementsByClassName("game");
      for (let i = 0; i < game_objs.length; i++) {
        game = game_objs[i];
        game.style.transform = "scale(0.9)";
        game.style.margin = "-2px -3px 5px -3px";
      }
      var players_objs = document.getElementsByClassName("players");
      for (let i = 0; i < left_objs.length; i++) {
        players = players_objs[i];
        players.style.width = "160%";
      }
      var side_objs = document.getElementsByClassName("side");
      for (let i = 0; i < side_objs.length; i++) {
        side = side_objs[i];
        if (side !== undefined) {
          side.remove();
        }
      }

      requestAnimationFrame(logic);
    }

    requestAnimationFrame(logic);

    var lang = document.getElementById("__NEXT_DATA__");
    lang.innerHTML = `{"props":{"pageProps":{"texts":{"app":{"code":"en","title":"Gartic Phone - The Telephone Game","description":"The online Telephone Game! Play the popular game for free now","keywords":"gartic phone, telephone game, gartic, game","nickname":"BESTSALESMAN1997","reconnecting":"Reconnecting","reconnectingtxt":"You have lost connection with the server. Attempting to reconnect...","exitgame":"Do you really want to leave the matrix?","kick":"Kicked out","kicktxt":"You have been dunked on from the room by the host","ok":"OK","contact":"CONTACT","name":"Name","email":"Email","message":"Message","send":"SEND","errorTitle":"ERROR","errorMessage":"Skill issue while sending the message. Get Skill.","sendTitle":"Sent!","sendMessage":"Message successfully sent!","home":"HOME","rotatetxt1":"It is not possible to play on landscape position","rotatetxt2":"Turn back to the vertical position.","roomnotfound":"Room not found","roomnotfoundtxt":"The room you are trying to join no longer has aura","banned":"Banned","bannedtxt":"You were gooned by the room's host","closedroom":"Closed room","closedroomtxt":"This room is no longer available. The game has already begun","error":"Error","invalidparameters":"Invalid parameters","fullroom":"Full room","fullroomtxt":"This room has reached its capacity","playingthisroom":"You are already playing in this room, dummy","connectionlost":"CONNECTION LOST","connectionlosttxt":"You have lost the server connection. Weep, mortal","wrongAuth":"Can i haz gud auth?","wrongProvider":"Log-in data is different from the one required","invitationExpired":"Invitation expired or already used","menuThanks":"THANKS","menuTerms":"TERMS OF SERVICE","menuPrivacy":"PRIVACY","menuDiscord":"DISCORD","menuDiscordLink":"https://discord.gg/gartic","menuContact":"CONTACT","menuAssets":"ASSETS","menuHome":"HOME","menuGarticLink":"https://gartic.com","menuOnrizonLink":"https://onrizon.com/en/","menuBlog":"BLOG","langSelect":"SELECT THE LANGUAGE:","language":"LANGUAGE","confirm":"CONFIRM","moderation":"MODERATION ENABLED","moderationtxt1":"Click the button below and paste the link on a hidden tab. Anyone who access the link will be a moderator, so keep it safe","moderationtxt2":"Check the interactions before they're shown to the other players","copyLink":"COPY LINK","feedbackCopy":"COPIED!","prerollSkip":"SKIP","prerollPublicity":"Obtaining Kromer.."},"page":{"startconversation":"SENTENCE THE DAMNED","startword":"START WITH A WORD","starthistory":"Start writing a story...","startwriting":"Start writing a word...","ready":"Finish!","edit":"Wait no!","drawtxt1":"IT'S GARTICIN' TIME","drawtxt2":"DRAW A SCENE, SO OTHERS CAN DESCRIBE IT","drawtxt3":"CREATE THE ANIMATION'S FIRST VESSEL","drawtxt4":"CREATE A NEW VESSEL FOR THE ANIMATION","drawtxt5":"START DRAWING A BACKGROUND","drawtxt6":"START SKETCHING SOME UNREGOCNIZABLE SHAPES","drawtxt8":"DRAW THE HEAD","drawtxt9":"CONTINUE WITH THE TORSO","drawtxt10":"FINISH BY DRAWING THE LEGS","try":"NOW IT'S YOUR CHANCE TO DESCRIBE THIS [BIG SHOT]","typeit":"Type your description for this scene here...","reproducedrawing":"MEMORIZE THE DRAWING! YOU GOTTA PLAGIARIZE IT!","drawingcontinuation":"YOU'RE GONNA CONTINUE THE ANIMATION FROM THIS DRAWING","draw":"DRAW IT, NOW","replyTitle":"CONTINUE THE STORY","replyText":"What's next?","modTitle":"VALIDATION","modText":"THE MODERATOR IS CHECKING THE LATEST PORN","aiTitle":"HOLD THE LINE","aiText":"It's AI's turn to draw!","crossLine":"Cross this line:"}}},"__N_SSG":true},"page":"/draw","query":{},"buildId":"tOM0UZRDoSZjj40KQ9KQB","isFallback":false,"gsp":true,"locale":"en","locales":["en","ar","az","bg","ca","cs","da","de","el","es","et","fa","fi","fr","he","hr","hu","id","it","ja","ka","ko","lt","lv","ms","nb","nl","pl","pt","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],"defaultLocale":"en","scriptLoader":[]}`;
  } else {
    console.log("unfunctioned");
  }
}

loopcheck();
