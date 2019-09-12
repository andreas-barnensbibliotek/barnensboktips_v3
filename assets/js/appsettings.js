
module.exports = {
    config:  (function(){
        let _apiserver = "http://localhost:59015";
        let _dnnURL = "http://localdev.kivdev.se";
        //let _apiserver = "http://dev1.barnensbibliotek.se:8080";
        //let _dnnURL = "http://dev1.barnensbibliotek.se";
        //let _apiserver = "http://dev1.barnensbibliotek.se:8080";
        //let _dnnURL = "http://nytt.barnensbibliotek.se";
        //let _apiserver = "https://www2.barnensbibliotek.se";
        //let _dnnURL = "https://www.barnensbibliotek.se";
        let _devkey = "alf";
        let _apidevkeyend = "/devkey/" + _devkey + "/?type=jsonp&callback=?";
        let _localOrServerURL = "";
        let _htmltemplateURL = "/Portals/_default/Skins/bb_DAGOBAH_krypin/htmltemplates/";
        let _avatarimgsrc = "/Portals/_default/Skins/bb_DAGOBAH_krypin/images/avatars/";
        // settings src
        let _src_setting_base = "/Portals/_default/Skins/bb_DAGOBAH_krypin/images/";
        let _src_avatar = _src_setting_base + "avatars/";
        let _src_skinbg = _src_setting_base + "bakgrunder/";
        // Boklistor START
        //// template
        let _hb_booklist_template = _dnnURL + _htmltemplateURL + "boklistor_lista.txt";
        let _hb_booklistItem_template = _dnnURL + _htmltemplateURL + "booklistitems.txt";
        let _hb_skrivbokModal_View_template = _dnnURL + _htmltemplateURL + "skrivbokModal_View.txt";
        let _hb_boktipsModal_View_template = _dnnURL + _htmltemplateURL + "boktipsModal_View.txt";
        let _hb_bibblomonlist_template = _dnnURL + _htmltemplateURL + "Bibblomon_lista.txt";
        let _hb_bibblomonItem_template = _dnnURL + _htmltemplateURL + "Bibblomon_Item.txt";

        let _hb_Skribokenbadges_template = _dnnURL + _htmltemplateURL + "badges_skrivboken_lista.txt";
        let _hb_Boktipsbadges_template = _dnnURL + _htmltemplateURL + "badges_boktips_lista.txt";
        let _hb_Specialbadges_template = _dnnURL + _htmltemplateURL + "badges_special_lista.txt";
        let _hb_Highscorebadges_template = _dnnURL + _htmltemplateURL + "badges_highscore_lista.txt";
        let _hb_Laserjustnu_template = _dnnURL + _htmltemplateURL + "laserjustnu_item.txt";
        let _hb_userlatestboktips_template = _dnnURL + _htmltemplateURL + "boktipsSingel_Item.txt";
        
        // Inställningar
        let _hb_settingsAvatar_template = _dnnURL + _htmltemplateURL + "settings_avatar_lista.txt";
        let _hb_settingsSkins_template = _dnnURL + _htmltemplateURL + "settings_skin_lista.txt";
        //// api
        let _fn_userboklist = function (userid) {
            return _apiserver + "/Api_v3.1/booklist/uid/" + userid + _apidevkeyend;
        };
        let _fn_adduserbokItem = function (booklistid, bookid, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/addbook/blistid/" + booklistid + "/value/" + bookid + "/uid/" + userid + _apidevkeyend;
        };
        let _fn_deluserbokItem = function (booklistid, bookid, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/delbook/blistid/" + booklistid + "/value/" + bookid + "/uid/" + userid + _apidevkeyend;
        };
        let _fn_addBooklist = function (boklistaNamn, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/addbooklist/blistid/0/value/" + boklistaNamn + "/uid/" + userid + _apidevkeyend;
        };
        let _fn_editBooklist = function (booklistid, boklistaNamn, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/editbooklist/blistid/" + booklistid + "/value/" + boklistaNamn + "/uid/" + userid + _apidevkeyend;
        };
        let _fn_delBooklist = function (booklistid, userid) {
            return _apiserver + "/Api_v3.1/booklist/typ/delbooklist/blistid/" + booklistid + "/value/0/uid/" + userid + _apidevkeyend;
        };
        
        // Skrivboken START
        //// Template
        let _hb_skrivbokenlist_template = _dnnURL + _htmltemplateURL + "skrivboken_lista.txt";
        //// API
        let _fn_userSkrivbokenlist = function (userid) {
            return _apiserver + "/Api_v3.1/skrivboken/cmdtyp/ByUserID/val/" + userid + "/typ/2/ap/0/pub/0" + _apidevkeyend;
        };
        let _fn_userSkrivbokenByID = function (bookid, userid) {
            return _apiserver + "/Api_v3.1/skrivboken/cmdtyp/BySkrivid/val/" + bookid + "/typ/" + userid + "/ap/0/pub/0" + _apidevkeyend;
        };
        let _fn_addskrivbokenItem = function () {
            return _apiserver + "/Api_v3.1/skrivboken/typ/addskrivboken/devkey/" + _devkey //+  _apidevkeyend;
        };
        let _fn_editskrivbokenItem = function () {
            return _apiserver + "/Api_v3.1/skrivboken/typ/editskrivboken/devkey/" + _devkey //+ _apidevkeyend;
        };
        let _fn_delskrivbokenItem = function () {
            return _apiserver + "/Api_v3.1/skrivboken/typ/deleteskrivbok/devkey/" + _devkey //+ _apidevkeyend;
        };
        
        // Boktips START
        //// Template
        let _hb_Boktipslist_template = _dnnURL + _htmltemplateURL + "boktips_lista.txt";
        //// API
        let _fn_userBoktipslist = function (userid) {
            return _apiserver + "/Api_v3.1/boktips/typ/ByUserId/val/" + userid + "/txtval/0" + _apidevkeyend;        
        };
        let _fn_userBoktipsByTipID = function (tipid, userid) {
            return _apiserver + "/Api_v3.1/boktips/typ/ByTipId/val/" + tipid + "/txtval/0" + _apidevkeyend;
        };
        let _fn_bookContextByBookID = function (bookid) {
            return _apiserver + "/Api_v3.1/boktips/typ/ByBookId/val/" + bookid + "/txtval/0" + _apidevkeyend;
        };
        //API POST
        let _fn_addBoktipsItem = function () {
            return _apiserver + "/Api_v3.1/boktips/typ/addboktips/devkey/" + _devkey //+  _apidevkeyend;           
        };
        let _fn_editBoktipsItem = function () {
            return _apiserver + "/Api_v3.1/boktips/typ/editboktips/devkey/" + _devkey //+ _apidevkeyend;
        };
        let _fn_delBoktipsItem = function () {
            return _apiserver + "/Api_v3.1/boktips/typ/deleteboktips/devkey/" + _devkey //+ _apidevkeyend;
        };
        // autocompleteURL
        let _fn_autocompleteURL = function (antal) {
            return _apiserver + "/Api_v3.1/katalogen/cmdtyp/autocomplete/antal/"+ antal +"/devkey/" + _devkey +  "/?type=json"; 
        };
        // Bibblomon
        let _fn_userBibblomonlist = function (userid) {
            return _apiserver + "/Api_v3.1/bibblomon/cmdtyp/usrmon/uid/" + userid + "/monid/0/devkey/" + _devkey + "/?type=jsonp";            
        };
        // Scoreboard/ badges
        let _fn_userBadgeslist = function (userid) {
            return _apiserver + "/Api_v3.1/award/cmdtyp/byuserid/uid/" + userid + "/ag/0/devkey/" + _devkey + "/?type=jsonp";            
        };
        // INSTÄLLNINAR
        // AVATAR src
        let _fn_avatar = function (userid) {
            return _apiserver + "/Api_v3.1/settings/cmdtyp/get/uid/" + userid + "/setid/0/setval/0/devkey/" + _devkey + "/?type=jsonp";
        };
        let _fn_updateSetting = function(userid,typ,setting){
            return _apiserver + "/Api_v3.1/settings/cmdtyp/settings/uid/" + userid + "/setid/" + typ + "/setval/" + setting + "/devkey/" + _devkey + "/?type=jsonp";
        }
        // läser just nu
        let _fn_laserjustnu = function (userid) {            
            return _apiserver + "/Api_v3.1/settings/cmdtyp/getlasernu/uid/" + userid + "/setid/0/setval/0/devkey/" + _devkey + "/?type=jsonp";
        }
        // användarens senaste boktips
        let _fn_userlatestboktips = function (userid) {
            return _apiserver + "/Api_v3.1/boktips/typ/ByUserIdLatest/val/" + userid + "/txtval/0/devkey/" + _devkey + "/?type=jsonp";       
        }
      
        return {
            apiserver: _apiserver,
            dnnURL: _dnnURL,
            localOrServerURL: _localOrServerURL,
            htmltemplateurl: _dnnURL + _htmltemplateURL,
            devkey: _devkey,
            handlebartemplate: {
                hb_booklist_tmp: _hb_booklist_template,
                hb_skrivbokenlist_tmp: _hb_skrivbokenlist_template,
                hb_skrivbokModalView_tmp: _hb_skrivbokModal_View_template,
                hb_boktipslist_tmp: _hb_Boktipslist_template,
                hb_boktipsModalView_tmp: _hb_boktipsModal_View_template,
                hb_bibblomonlist_tmp: _hb_bibblomonlist_template,
                hb_bibblomonItem_tmp: _hb_bibblomonItem_template,

                hb_skribokenbadges_tmp: _hb_Skribokenbadges_template,
                hb_boktipsbadges_tmp: _hb_Boktipsbadges_template,
                hb_specialbadges_tmp: _hb_Specialbadges_template,
                hb_highscorebadges_tmp: _hb_Highscorebadges_template,
                
                hb_settingsAvatar_tmp: _hb_settingsAvatar_template,
                hb_settingsSkins_tmp: _hb_settingsSkins_template,
                hb_laserjustnu_tmp: _hb_Laserjustnu_template,
                hb_userlatestboktips_tmp: _hb_userlatestboktips_template
                 
            },
            api:{
                boklistor:{
                    getuserboklist: _fn_userboklist,
                    adduserbokitem: _fn_adduserbokItem,
                    deluserbokitem: _fn_deluserbokItem,
                    addbooklist: _fn_addBooklist,
                    editbooklist: _fn_editBooklist,
                    delbooklist: _fn_delBooklist
                },
                skrivbokenlistor:{
                    getuserskribokenlist: _fn_userSkrivbokenlist,
                    getuserskribokenByID: _fn_userSkrivbokenByID,
                    addskribokenItem: _fn_addskrivbokenItem,
                    editskribokenItem: _fn_editskrivbokenItem,
                    delskribokenItem: _fn_delskrivbokenItem
                },
                boktipslistor: {
                    getuserboktipslist: _fn_userBoktipslist,
                    getuserboktipsByTipID: _fn_userBoktipsByTipID,
                    getbookContextByBookID: _fn_bookContextByBookID,
                    addboktipsItem: _fn_addBoktipsItem,
                    editboktipsItem: _fn_editBoktipsItem,
                    delboktipsItem: _fn_delBoktipsItem
                },
                bibblomonlistor: {
                    getuserbibblomonlist: _fn_userBibblomonlist                    
                },
                scoreboard: {
                    getuserbadgeslist:_fn_userBadgeslist
                },
                autocomplete: {
                    geturl: _fn_autocompleteURL
                },
                installningar:{
                    src: _fn_avatar,
                    curAvatarsrc: _src_avatar,
                    curSkinsrc: _src_skinbg,
                    updatesettings: _fn_updateSetting,
                    avatarimgsrc: _avatarimgsrc,
                    laserjustnu: _fn_laserjustnu,
                    userlatestboktips: _fn_userlatestboktips
                },
                devkeyend : _apidevkeyend
            },
            userinfo: {
                avatarimg: "",
                avatarid: "",
                defaultavatarimg: "",
                defaultavatarid: "",
                skin: "",
                skinid: "",
                defaultskinimg: "",
                defaultskinclass: "",
                defaultskinid: "",
                userid: "",
                rollid: ""
            },

            debug: "false"
        }
    })(),
    skrivbokimages: (function () {
        return {
            catimgbase: "/DesktopModules/bb_aj_Skrivboken_Krypin/images/",
            catimagesrc: [
                {
                    "catid": "001",
                    "catname": "Bild saknas",
                    "imgsrc": "foto_saknas.jpg"
                },
                {
                     "catid": "0",
                     "catname": "&Ouml;vrigt",
                     "imgsrc": "skrivbok_default256_36.png"
                },
                {
                    "catid": "1",
                    "catname": "&Ouml;vrigt",
                    "imgsrc": "skrivbok_ovrigt256_36.png"
                },
                {
                    "catid": "2",
                    "catname": "&Ouml;vrigt",
                    "imgsrc": "skrivbok_ovrigt256_36.png"
                },
                {
                    "catid": "3",
                    "catname": "Ber&auml;ttelse",
                    "imgsrc": "skrivbok_berattelse-256_36.png"
                },
                {
                    "catid": "4",
                    "catname": "Dikt",
                    "imgsrc": "skrivbok_dikt-256_36.png"
                },
                {
                    "catid": "5",
                    "catname": "Tankar",
                    "imgsrc": "skrivbok_tankar256_36.png"
                },
                {
                    "catid": "6",
                    "catname": "&Ouml;vrigt",
                    "imgsrc": "skrivbok_ovrigt256_36.png"
                },
                {
                    "catid": "8",
                    "catname": "Deckare",
                    "imgsrc": "skrivbok_deckare256_36.png"
                },
                {
                    "catid": "9",
                    "catname": "Djur",
                    "imgsrc": "skrivbok_djur256_36.png"
                },
                {
                    "catid": "10",
                    "catname": "Fantasy",
                    "imgsrc": "skrivbok_fantasy256_36.png"
                },
                {
                    "catid": "11",
                    "catname": "Skr&auml;ck",
                    "imgsrc": "skrivbok_skrack256_36.png"
                },
                {
                    "catid": "12",
                    "catname": "K&auml;rlek",
                    "imgsrc": "skrivbok_karlek256_36.png"
                },
                {
                    "catid": "13",
                    "catname": "Ramsa",
                    "imgsrc": "skrivbok_ramsa256_36.png"
                },
                {
                    "catid": "15",
                    "catname": "Sorgligt",
                    "imgsrc": "skrivbok_sorgligt256_36.png"
                },
                {
                    "catid": "16",
                    "catname": "Humor",
                    "imgsrc": "skrivbok_skratta256_36.png"
                },
                {
                    "catid": "17",
                    "catname": "Sp&auml;nning",
                    "imgsrc": "skrivbok_spanning256_36.png"
                },
                {
                    "catid": "18",
                    "catname": "Sp&ouml;ken",
                    "imgsrc": "skrivbok_spoken256_36.png"
                },
                {
                    "catid": "19",
                    "catname": "&Auml;ventyr",
                    "imgsrc": "skrivbok_aventyr256_36.png"
                },
                {
                    "catid": "21",
                    "catname": "Hastar",
                    "imgsrc": "skrivbok_hastar256_36.png"
                }
            ]                
        };          
    })(),
    usermessages: (function () {
        let _fn_FixaText = function (mes) {
            try {
                return decodeURIComponent(escape(mes));
            }
            catch (e) {
                String.prototype.replaceAll = function (str1, str2, ignore) {
                    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
                } 

                mes = mes.replaceAll('Ä', String.fromCharCode(196));//Ä
                mes = mes.replaceAll('Å', String.fromCharCode(197));//Å
                mes = mes.replaceAll('Ö', String.fromCharCode(214));//Ö
                mes = mes.replaceAll('ä', String.fromCharCode(228));//ä
                mes = mes.replaceAll('å', String.fromCharCode(229));//å
                mes = mes.replaceAll('ö', String.fromCharCode(246));//ö

                return mes;
            }            
        }
        return {
            installningar:
                {                    
                    "confirmSave": _fn_FixaText("Är du säker på att du vill spara ändringarna?")
                },
            skrivbok:
                {
                    "confirmAlert": _fn_FixaText("Du måste fylla i alla uppgifter"),
                    "confirmAdd": _fn_FixaText("Är du säker på att du vill lägga till texten?"),
                    "confirmEdit": _fn_FixaText("Är du säker på att du vill ändra i texten?"),
                    "confirmDel": _fn_FixaText("Är du säker på att du vill ta bort texten?")
                },
            boktips:
                {
                    "confirmAlert": _fn_FixaText("Du måste fylla i alla uppgifter"),
                    "confirmAdd": _fn_FixaText("Är du säker på att du vill lägga till boktipset?"),                    
                    "confirmEdit": _fn_FixaText("Är du säker på att du vill ändra i boktipset?"),
                    "confirmDel": _fn_FixaText("Är du säker på att du vill ta bort boktipset?")
                },
            boklist:
                {
                    "confirmAlert": _fn_FixaText("Du måste skriva något!"),
                    "confirmAdd": _fn_FixaText("Vill du lägga till denna boklista?"),
                    "confirmEdit": _fn_FixaText("Vill du byta namn på boklistan?"),
                    "confirmDel": "Vill du ta bort boklistan?"
                },
            laserjustnu:
                {
                "confirmRemove": _fn_FixaText("Är du säker?")
            }
            
            
        };
    })()
}

