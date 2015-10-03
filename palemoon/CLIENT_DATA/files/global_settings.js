/*
   File:          global_settings.js
   Date:          10.06.2013
   Description:   Global Rules for Pale Moon via mozilla.cfg
   Maintainer:    Marco Hinz <https://github.com/hinzigers>
   Version:       2.0 ISi check
*/

try {
pref("browser.startup.homepage_override.mstone","ignore");
lockPref("browser.startup.homepage", "http://www.schreyben.de");
lockPref("browser.newtab.url", "https://encrypted.google.com/webhp?hl=de");
lockPref("browser.search.openintab", true);

pref("browser.rights.3.shown", true);
pref("pdfjs.disabled", true);
pref("shumway.disabled", true);
pref("plugins.notifyMissingFlash", false);
lockPref("plugins.hide_infobar_for_outdated_plugin", true);
lockPref("datareporting.healthreport.service.enabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);
lockPref("toolkit.crashreporter.enabled", false);

//Private Browsing true
lockPref("browser.privatebrowsing.autostart", true)
/* PrivateClearOnShutdown only as a safety for privatebrowsing that */
lockPref("privacy.sanitize.sanitizeOnShutdown", true);
/* DownloadsChronicleClearOnShutdown only as a safety for privatebrowsing that */
lockPref("browser.download.manager.retention", 1);

// user !updates
lockPref("app.update.mode", 0);
lockPref("app.update.service.enabled", false);
lockPref("app.update.auto", false);
lockPref("app.update.enabled", false);
lockPref("extensions.autoDisableScopes", 0);
lockPref("extensions.enabledScopes", 0);
lockPref("extensions.update.enabled", false);
lockPref("extensions.ui.locale.hidden", true);
lockPref("extensions.umatrix.legacyToolbarButtonAdded", false);
lockPref("browser.search.update", false);
lockPref("extensions.update.autoUpdateDefault", false);
lockPref("extensions.update.background.url", "");
/* restore "https://versioncheck-bg.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=24.0&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%" */
lockPref("extensions.update.url", "");
/* restore "https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=%REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=%ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=24.0&appOS=%APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=%CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%" */
lockPref("extensions.webservice.discoverURL", "");
/* restore "https://services.addons.mozilla.org/%LOCALE%/firefox/discovery/pane/%VERSION%/%OS%" */
lockPref("extensions.getAddons.showPane", false);
lockPref("pfs.datasource.url", "");
/* restore "https://pfs.mozilla.org/plugins/PluginFinderService.php?mimetype=%PLUGIN_MIMETYPE%&appID=%APP_ID%&appVersion=%APP_VERSION%&clientOS=%CLIENT_OS%&chromeLocale=%CHROME_LOCALE%&appRelease=%APP_RELEASE%" */
clearPref("plugins.update.url")
/* restore "https://www.mozilla.org/%LOCALE%/plugincheck/" */

/* Schaltfläche: "Erweitert..." hidden */
lockPref("pref.advanced.javascript.disable_button.advanced", true);

// sync disabled
lockPref("services.sync.prefs.sync.extensions.update.enabled", false);
lockPref("services.sync.addons.ignoreRepositoryChecking", false);
lockPref("services.sync.addons.ignoreUserEnabledChanges", false);
lockPref("services.sync.log.cryptoDebug", false);
lockPref("services.sync.log.appender.file.logOnError", false);
lockPref("services.sync.log.appender.file.logOnSuccess", false);
lockPref("services.sync.engine.addons", false);
lockPref("services.sync.engine.apps", false);
lockPref("services.sync.engine.bookmarks", false);
lockPref("services.sync.engine.history", false);
lockPref("services.sync.engine.passwords", false);
lockPref("services.sync.engine.prefs", false);
lockPref("services.sync.engine.tabs", false);
//lockPref("services.sync.engine.tabs.filteredUrls", false);
lockPref("services.sync.prefs.sync.accessibility.blockautorefreshlockPref", false);
lockPref("services.sync.prefs.sync.accessibility.browsewithcaret", false);
lockPref("services.sync.prefs.sync.accessibility.typeaheadfind", false);
lockPref("services.sync.prefs.sync.accessibility.typeaheadfind.linksonly", false);
lockPref("services.sync.prefs.sync.addons.ignoreUserEnabledChanges", true);
lockPref("services.sync.prefs.sync.app.update.mode", false);
lockPref("services.sync.prefs.sync.browser.download.manager.closeWhenDone", false);
lockPref("services.sync.prefs.sync.browser.download.manager.retention", false);
lockPref("services.sync.prefs.sync.browser.download.manager.scanWhenDone", false);
lockPref("services.sync.prefs.sync.browser.download.manager.showWhenStarting", false);
lockPref("services.sync.prefs.sync.browser.formfill.enable", false);
lockPref("services.sync.prefs.sync.browser.link.open_newwindow", false);
lockPref("services.sync.prefs.sync.browser.search.selectedEngine", false);
lockPref("services.sync.prefs.sync.browser.search.update", false);
lockPref("services.sync.prefs.sync.browser.sessionstore.restore_on_demand", false);
lockPref("services.sync.prefs.sync.browser.startup.homepage", false);
lockPref("services.sync.prefs.sync.browser.startup.page", false);
lockPref("services.sync.prefs.sync.browser.tabs.autoHide", false);
lockPref("services.sync.prefs.sync.browser.tabs.closeButtons", false);
lockPref("services.sync.prefs.sync.browser.tabs.loadInBackground", false);
lockPref("services.sync.prefs.sync.browser.tabs.warnOnClose", false);
lockPref("services.sync.prefs.sync.browser.tabs.warnOnOpen", false);
lockPref("services.sync.prefs.sync.browser.urlbar.autocomplete.enabled", false);
lockPref("services.sync.prefs.sync.browser.urlbar.default.behavior", false);
lockPref("services.sync.prefs.sync.browser.urlbar.maxRichResults", false);
lockPref("services.sync.prefs.sync.browser.offline-apps.notify", false);
lockPref("services.sync.prefs.sync.dom.disable_open_during_load", false);
lockPref("services.sync.prefs.sync.dom.disable_window_flip", false);
lockPref("services.sync.prefs.sync.dom.disable_window_move_resize", false);
lockPref("services.sync.prefs.sync.dom.event.contextmenu.enabled", false);
lockPref("services.sync.prefs.sync.extensions.personas.current", false);
lockPref("services.sync.prefs.sync.extensions.ublock0.cloudStorage.myFiltersPane", false);
lockPref("services.sync.prefs.sync.extensions.ublock0.cloudStorage.myRulesPane", false);
lockPref("services.sync.prefs.sync.extensions.ublock0.cloudStorage.tpFiltersPane", false);
lockPref("services.sync.prefs.sync.extensions.ublock0.cloudStorage.whitelistPane", false);
lockPref("services.sync.prefs.sync.intl.accept_languages", false);
lockPref("services.sync.prefs.sync.javascript.enabled", false);
lockPref("services.sync.prefs.sync.layout.spellcheckDefault", false);
lockPref("services.sync.prefs.sync.lightweightThemes.isThemeSelected", false);
lockPref("services.sync.prefs.sync.lightweightThemes.usedThemes", false);
lockPref("services.sync.prefs.sync.network.cookie.cookieBehavior", false);
lockPref("services.sync.prefs.sync.network.cookie.lifetimePolicy", false);
lockPref("services.sync.prefs.sync.permissions.default.image", false);
lockPref("services.sync.prefs.sync.pref.advanced.images.disable_button.view_image", false);
lockPref("services.sync.prefs.sync.pref.advanced.javascript.disable_button.advanced", false);
lockPref("services.sync.prefs.sync.pref.downloads.disable_button.edit_actions", false);
lockPref("services.sync.prefs.sync.pref.privacy.disable_button.cookie_exceptions", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.cache", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.cookies", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.downloads", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.formdata", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.history", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.offlineApps", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.passwords", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.sessions", false);
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.siteSettings", false);
lockPref("services.sync.prefs.sync.privacy.donottrackheader.enabled", false);
lockPref("services.sync.prefs.sync.privacy.donottrackheader.value", false);
lockPref("services.sync.prefs.sync.privacy.sanitize.sanitizeOnShutdown", false);
lockPref("services.sync.prefs.sync.security.default_personal_cert", false);
lockPref("services.sync.prefs.sync.security.tls.version.max", false);
lockPref("services.sync.prefs.sync.security.tls.version.min", false);
lockPref("services.sync.prefs.sync.security.OCSP.enabled", true);
lockPref("services.sync.prefs.sync.security.OCSP.require", true);
lockPref("services.sync.prefs.sync.signon.rememberSignons", false);
lockPref("services.sync.prefs.sync.spellchecker.dictionary", false);
lockPref("services.sync.prefs.sync.xpinstall.whitelist.required", false);
lockPref("services.sync.sendVersionInfo", false);

// Standardbrowser
lockPref("browser.shell.checkDefaultBrowser", false);
lockPref("pref.general.disable_button.default_browser", true);

lockPref("javascript.enabled", true);
lockPref("security.enable_java", false);

lockPref("xpinstall.enabled", false);
lockPref("xpinstall.whitelist.required", true);
lockPref("plugin.default.state", 1);
lockPref("plugin.default_plugin_disabled", false);
lockPref("security.xpconnect.plugin.unrestricted", false);

lockPref("browser.formfill.enable", false);
lockPref("pref.privacy.disable_button.cookie_exceptions", true);
lockPref("pref.privacy.disable_button.view_cookies", true);

// Click-to-Play
lockPref("plugins.click_to_play", true);

// about:plugins !full path
lockPref("plugin.expose_full_path", false);

// !Link-Prefetching
lockPref("network.prefetch-next", false);

// !GPS
lockPref("geo.enabled", false);

// Better is Homedrivemapping and !Standard Downloads Directory
lockPref("browser.download.dir", "C:\TEMP");
lockPref("browser.download.useDownloadDir", true);

// !Cache
lockPref("browser.cache.disk.enable", false);
lockPref("browser.cache.check_doc_frequency", 2);
lockPref("browser.cache.disk.capacity", 0);
// memory.capacity
// Standard: -1
lockPref("browser.cache.memory.capacity", 0);
lockPref("browser.cache.memory.enable", false);

// German Translation
lockPref("general.useragent.locale", "de-DE");
lockPref("intl.accept_languages", "de-DE, de");

// Useragent Spoofing
clearPref("general.appversion.override");
clearPref("general.buildID.override");
clearPref("general.oscpu.override");
clearPref("general.platform.override");
clearPref("general.productSub.override");
clearPref("general.useragent.appName");
/* restore "5.0 (X11)"; "20150607220353"; "Linux i686"; "Linux i686"; "20150607"; "Mozilla" */
clearPref("gecko.buildID");
clearPref("gecko.mstone");
/* general.useragent.enable_overrides is not true -> agent still replaced by script */
lockPref("general.useragent.enable_overrides", false);
lockPref("general.useragent.override", "Mozilla/5.0 (X11; Linux i686; rv:25.5) Gecko/20150607 Firefox/31.9 PaleMoon/25.5.0");
lockPref("general.useragent.compatMode.firefox", true);
lockPref("general.useragent.complexOverride.moodle", false);
lockPref("general.useragent.override.addons.mozilla.org", "");
lockPref("general.useragent.override.aol.com", "");
lockPref("general.useragent.override.facebook.com", "");
lockPref("general.useragent.override.humblebundle.com", "");
lockPref("general.useragent.override.icloud.com", "");
lockPref("general.useragent.override.live.com", "");
lockPref("general.useragent.override.netflix.com", "");
lockPref("general.useragent.override.outlook.com", "");
lockPref("general.useragent.override.privat24.ua", "");
lockPref("general.useragent.override.web.de", "");
pref("general.useragent.site_specific_overrides", false);
clearPref("browser.startup.homepage_override.buildID");
clearPref("toolkit.telemetry.previousBuildID");
clearPref("extensions.lastAppVersion");
/* restore "Mozilla/5.0 (X11; Linux i686; rv:25.5) Gecko/20150607 Firefox/31.9 PaleMoon/25.5.0" */

// min. Tls1
lockPref("security.tls.version.min", 1);

// !Password Safe
lockPref("signon.rememberSignons", false);
lockPref("pref.privacy.disable_button.set_master_password", true);
lockPref("pref.privacy.disable_button.view_passwords", true);

// !Google Safebrowsing
lockPref("browser.safebrowsing.enabled", false);
lockPref("browser.safebrowsing.malware.enabled", false);

// Web Storage (DOM Storage / Supercookies) disabled
lockPref("dom.storage.enabled", false);

// Tab cronicle - Info JonDonym
lockPref("browser.sessionhistory.max_entries", 2);
lockPref("browser.sessionhistory.max_total_viewers", 2);

// DoNotTrack rules
lockPref("privacy.donottrackheader.enabled", true);
lockPref("privacy.donottrackheader.value", 1);

// !WebGL - Info JonDonym and selfmade
lockPref("webgl.disabled", true);
lockPref("webgl.disable-extensions", true);
lockPref("webgl.enable-draft-extensions", false);

// Timing APIs deaktivieren
lockPref("dom.enable_resource_timing", false);
lockPref("dom.enable_user_timing", false);
lockPref("dom.enable_performance", false);

// !WebRTC 
lockPref("media.peerconnection.enabled", false); /*add this if missing in Pale Moon*/
lockPref("loop.enabled", false);

// restrict fonts - Info JonDonym
lockPref("browser.display.use_document_fonts", 0);
lockPref("font.name.serif.x-western", "Arial");

// Clear Manifest String for FB Messenger
lockPref("social.manifest.facebook", "");

// speculative reloading disallow (Pale Moon Standard)
lockPref("network.http.speculative-parallel-limit", 0);

// WebIDE disabled (Pale Moon Standard)
lockPref("devtools.webide.enabled", false);
lockPref("devtools.webide.autoinstallADBHelper", false);
lockPref("devtools.webide.autoinstallFxdtAdapters", false);

// Kill Switch off
lockPref("extensions.blocklist.enabled", false);

// Metadaten updates for Add-ons disabled (Pale Moon Standard)
lockPref("extensions.getAddons.cache.enabled", false);

// HTML5 Beacons disabled (Pale Moon Standard)
lockPref("beacon.enabled", false);

//ISi-Check
lockPref("browser.urlbar.autocomplete.enabled", false);

// HTTP-Referrer disabled - ISi-Check
// lockPref("network.http.sendRefererHeader", 2);
lockPref("network.http.sendRefererHeader", 0);
lockPref("network.http.sendSecureXSiteReferrer", false);

// Plugin Container disabled
lockPref("dom.ipc.plugins.enabled", false);
lockPref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
lockPref("dom.ipc.plugins.timeoutSecs", -1); // Standard 20

// :(
lockPref("security.OCSP.enabled", 1);
lockPref("security.OCSP.require", true);

// Keep-Alive-Timeout
// Standard: 115)
lockPref("network.http.keep-alive.timeout", 10);

// Standard: ISO-8859-1
lockPref("intl.charset.default", "UTF-8");

lockPref("network.cookie.lifetimePolicy", 2);
lockPref("pref.privacy.disable_button.cookie_exceptions", true);
lockPref("network.cookie.cookieBehavior", 0);
lockPref("network.cookie.lifetime.days", 1);

// :(
//lockPref("security.fileuri.strict_origin_policy", false);

lockPref("extensions.umatrix.legacyToolbarButtonAdded", false);
lockPref("privacy.clearOnShutdown.offlineApps", true);
lockPref("network.dns.disableIPv6", true);

// NoScript - wanIpCheckURL anti dns-rebinding??? change in my.ip.fi
lockPref("noscript.ABE.wanIpCheckURL", "http://my.ip.fi/");
lockPref("noscript.ABE.notify", false);
lockPref("noscript.autoAllow", false);
lockPref("noscript.default", "about:blank about:pocket-signup about:pocket-saved addons.mozilla.org mozilla.net facebook.com github.com google.com gstatic.com ajax.googleapis.com  maps.googleapis.com yahoo.com yimg.com yahooapis.com youtube.com ytimg.com googlevideo.com netflix.com nflxext.com nflximg.com nflxvideo.net maone.net hotmail.com msn.com live.com live.net outlook.com afx.ms gfx.ms sfx.ms wlxrs.com ajax.aspnetcdn.com bootstrapcdn.com code.jquery.com tinymce.cachefly.net");
lockPref("noscript.doNotTrack.enabled", true);
lockPref("noscript.flashPatch", true);
lockPref("noscript.forbidFrames", true);
lockPref("noscript.forbidIFrames", true);
lockPref("noscript.forbidImpliesUntrust", true);
lockPref("noscript.forbidActiveContentParentTrustCheck", true);
lockPref("noscript.forbidWebGL", true);
lockPref("noscript.notify", false);
lockPref("noscript.notify.bottom", false);
lockPref("noscript.placeholderCollapseOnClose", true);
/*????*/
//lockPref("noscript.restrictSubdocScripting", true);
lockPref("noscript.secureCookies", true);
lockPref("noscript.secureCookies.perTab", true);
lockPref("noscript.secureCookies.recycle", true);
lockPref("noscript.statusIcon", true);
lockPref("noscript.statusLabel", true);
lockPref("noscript.sync.enabled", false);
lockPref("noscript.untrusted", "addthis.com adshot.de doubleclick.net ec-track.com google-analytics.com googleadservices.com googlesyndication.com googletagmanager.com optimizely.com smartclip.net static-bqreaders.s3.amazonaws.com static-fra.de twitter.com http://addthis.com http://adshot.de http://doubleclick.net http://ec-track.com http://google-analytics.com http://googleadservices.com http://googlesyndication.com http://googletagmanager.com http://optimizely.com http://smartclip.net http://static-fra.de http://twitter.com https://addthis.com https://adshot.de https://doubleclick.net https://ec-track.com https://google-analytics.com https://googleadservices.com https://googlesyndication.com https://googletagmanager.com https://optimizely.com https://smartclip.net https://static-fra.de https://twitter.com");
lockPref("noscript.xss.notify", false);
lockPref("noscript.xss.notify.subframes", false);

/* Proxy Server Rules
lockPref("network.proxy.share_proxy_settings", true);
lockPref("network.proxy.autoconfig_url", "http://scriptserver:scriptserverport/proxy.pac");
lockPref("network.proxy.type", 2);
*/

/* HTTP-Authentifizierung disabled
lockPref("network.automatic-ntlm-auth.trusted-uris", "http://proxy:3128/");
lockPref("network.automatic-ntlm-auth.allow-proxies", false);
lockPref("network.negotiate-auth.trusted-uris", "http://proxy:3128/");
lockPref("network.negotiate-auth.allow-proxies", false);
*/
} catch(e) {
  displayError("ARGL :-P", e);
}
