<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="fortyfingers" TagName="STYLEHELPER" Src="~/DesktopModules/40Fingers/SkinObjects/StyleHelper/StyleHelper.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JavaScriptLibraryInclude" Src="~/admin/Skins/JavaScriptLibraryInclude.ascx" %>



<div id="maincontainer" class="aj_bb_KrypinMainContainer">
    <div class="wrapper row1 topheaderbg krypin_head_steal">
        <div id="logon" class="headerleftcol">
             <img id="logoimg" src= "images/bblogo2.png" runat="server" />        
        </div>
        <div id="topboxheader" class="headermaincol">
           
            <span id="topheader">
                
                 <span id="HeaderPane" runat="server"></span>
               
            </span>
            <div>&nbsp;</div>           
        </div>    
        <div class="headerrightcol">
            <div id="logginBlock">
            <a id="lyssarealspeakercont" href="" title="Lyssna p� sidan"> <img id="lyssarealspeaker" class="lyssnarealspeaker" src= "images/lyssnaRealspeaker.png" runat="server" /></a>
              <dnn:USER ID="USER1" CssClass="userbox" runat="server" Text="Bli medlem" LegacyMode="false" />
              <dnn:LOGIN ID="LOGIN2" CssClass="loginbox" runat="server" Text="Logga in" LegacyMode="false" />
              <span id="searchboxen">
              <dnn:SEARCH runat="server" id="dnnSEARCH" CssClass="ServerSkinWidget" UseDropDownList="true" Submit="<img src=/Portals/0/Skins/nydesigntest/images/zoom.png border=&quot;0&quot; alt=&quot;Search&quot; /&gt;" />
              </span> 
              
            </div>
        </div>                  
                      
        <div>&nbsp;</div>
        
    </div>
<!-- ################################################################################################ -->
    <div class="wrapper row2">

      <nav id="topnav">
        <div id="flexmenubox" >  </div>  
        <div id="menyn" class="containermargins clear">
            <dnn:MENU ID="MENU1" MenuStyle="Simple" runat="Server"/>
        </div>  
      </nav>
        
    </div>
<!-- content -->
   <div id="aj_bb_KrypinSkin"  class="wrapper row3 aj_bb_KrypinSkin" >
        <!-- flexGrid START -->
        <div class="aj_bb_KrypinMainGrid Grid--gutters Grid--1of12">
            
            <!-- krypinMeny START -->
            <div class="Grid-cell fill-area">
                <div id="krypinMenyPane" runat="server"></div>
            </div>            
            <!-- krypinMeny END -->
            
            <!-- Krypin Content START -->
            <div class="Grid-cell">
                <div id="contentPane" runat="server"></div>
            </div>
            <!-- Krypin Content END -->

        </div>
        <!-- flexGrid END -->
    </div>

    <!-- Footer -->
    <div class="wrapper row2">
      <div class="clear" id="footer">
           <div class="containermargins">
                <div class="footitem width1 footheight ">
                  <!-- CONTAINER ################################################################################################ -->
                    <div id="foterpane_1_4Pane" ><span id="foterPane_1_4" runat="server"></span></div>
                
                </div>
                <div class="footitem width1 footheight ">
                  <!-- CONTAINER ################################################################################################ -->
                    <div id="foterpane_2_4Pane" ><span id="foterPane_2_4" runat="server"></span></div>
               
                </div>
                <div class="footitem width1 footheight ">
                  <!-- CONTAINER ################################################################################################ -->
                    <div id="foterpane_3_4Pane" ><span id="foterPane_3_4" runat="server"></span></div>
                
                </div>
                <div class="footitem width1 footheight ">
                  <!-- CONTAINER ################################################################################################ -->
                    <div id="foterpane_4_4Pane" ><span id="foterPane_4_4" runat="server"></span></div>                
                   
                </div>
                <div id="footikonimg"><img id="Img1" src="images/footerlogo.png" runat="server" /> </div>
            </div>
      </div>
     </div>   
    
</div>

<div id="licbox" class="wrapper row4">
  <div id="copyright" class="clear">
    <p class="fl_left">&copy; <a href="/Hem/Regler/tabid/865/Default.aspx">L&aring;na av oss</a> - <a href="#">barnensbibliotek.se</a></p>
    <p class="fl_right"> </p>  
  </div>
</div>

<div id="ReadspeakerBox">
    <div id="readspeaker_button1" class="rs_skip rsbtn rs_preserve">
        <a rel="nofollow" class="rsbtn_play" accesskey="L" title="Lyssna p&aring; sidans text med ReadSpeaker" href="http://app.eu.readspeaker.com/cgi-bin/rsent?customerid=4430&amp;lang=sv_se&amp;readid=itemheight1bgrgb_ljusgra">
            <span class="rsbtn_left rsimg rspart"><span class="rsbtn_text"><span>Lyssna</span></span></span>
            <span class="rsbtn_right rsimg rsplay rspart"></span>
        </a>
    </div>
</div>
<span id="barnensbiblCurrentUserid"><%= UserController.Instance.GetCurrentUserInfo().UserID%></span>
<dnn:DnnJsInclude runat="server" FilePath="layout/scripts/jquery.cookiesdirective.js" PathNameAlias="SkinPath"/>
<dnn:DnnJsInclude runat="server" FilePath="layout/scripts/jquery.slicknav.min.js" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="layout/scripts/custom.js" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="public/js/aj_barnensboktips.3.0.js" PathNameAlias="SkinPath" />
