# OPSI Product - Pale Moon Browser
![alt text](http://computerklar.de/wp-content/uploads/2014/07/pale-moon.jpg "Pale Moon Startpages")

You need these scripts to the make Pale Moon productfile for the OPSI server. Pale Moon is a Firefox Derivat ([Mozilla Wiki](https://wiki.mozilla.org/Main_Page)). See [Firefox Addons](https://github.com/hinzigers/opsi/blob/master/palemoon/README.md#addons) too.

### Create Package-File
Create package file with **opsi-makeproductfile** ==> `/home/opsiproducts/palemoon/palemoon_25.7.0-1.opsi`

### Upload Package-File
Upload package file with **opsi-package-manager**

`opsi-package-manager -i palemoon_25.7.0-1.opsi`

### Script Details
| scripts | description | opsi path | windows path |
| ------------- | ------------- | ------------- | ------------- |
| [palemoon_delsub.ins](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/palemoon_delsub.ins) | deinstall subscript | /palemoon/CLIENT_DATA/ | NULL |
| [palemoon_install.ins](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/palemoon_install.ins) | install script | /palemoon/CLIENT_DATA/ | NULL |
| [palemoon_uninstall.ins](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/palemoon_uninstall.ins) | uninstall script | /palemoon/CLIENT_DATA/ | NULL |
| [control](https://github.com/hinzigers/opsi/blob/master/palemoon/OPSI/control) | paket description | /palemoon/OPSI/ | NULL |
| [userContent.css](https://raw.githubusercontent.com/hinzigers/opsi/master/palemoon/CLIENT_DATA/files/chrome/userContent.css) | hidden `about:addons` | /palemoon/CLIENT_DATA/files/chrome/ | %AppData%\Roaming\Moonchild Productions\Pale Moon\Profiles\default\chrome\ |
| [global_settings.js](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/files/global_settings.js) | global setting script | /palemoon/CLIENT_DATA/files/ | https://server:port/path/ |
| [local-settings.js](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/files/local-settings.js) | pull mozilla.cfg | /palemoon/CLIENT_DATA/files/ | %ProgramFiles%\Pale Moon\defaults\pref\ |
| [mozilla.cfg](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/files/mozilla.cfg) | pull global_settings | /palemoon/CLIENT_DATA/files/ | %ProgramFiles%\Pale Moon\ |
| [autoconfig.js](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/files/autoconfig.js) | pull autoconfig_mozilla | /palemoon/CLIENT_DATA/files/ | %ProgramFiles%\Pale Moon\defaults\pref |
| [autoconfig_mozilla.cfg](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/files/autoconfig_mozilla.cfg) | local setting script | /palemoon/CLIENT_DATA/files/ | %ProgramFiles%\Pale Moon\ |
| [uMatrix rules](https://raw.githubusercontent.com/hinzigers/opsi/master/palemoon/CLIENT_DATA/files/umatrix-rules.txt) | uMatrix ruleset | /palemoon/CLIENT_DATA/files/ | NULL |
| [uBlock filter](https://raw.githubusercontent.com/hinzigers/opsi/master/palemoon/CLIENT_DATA/files/ublock-filter.txt) | uBlock filter | /palemoon/CLIENT_DATA/files/ | NULL |

You need the files [autoconfig.js](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/files/autoconfig.js) and [autoconfig_mozilla.cfg](https://github.com/hinzigers/opsi/blob/master/palemoon/CLIENT_DATA/files/autoconfig_mozilla.cfg) only for install without config server. The source for `app.update.mode`, `app.update.service.enabled` and disable crashreporter is [developer.mozilla.org](https://developer.mozilla.org/de/Firefox/Nutzung_in_Unternehmen) (de).

### Anonymity Test
Check the result of the scripts with [IP Check](http://ip-check.info/?lang=en). This is a service by  [JonDonym](https://anonymous-proxy-servers.net/en/why.html). My worst results after the scripts are `HTTP session`, `User-Agent` and `Tab name`. That is good.

![alt text](https://github.com/hinzigers/opsi/blob/master/images/ip-check1.PNG "IP Check without NoScript Addon 1")
![alt text](https://github.com/hinzigers/opsi/blob/master/images/ip-check2.PNG "IP Check without NoScript Addon 2")

The `User-Agent` is spoofed and cleaned. He shows an old Pale Moon version and an another operating system. The value `windows.name` is not traceable. It can be read only the current value. Open a new tab and check again. With every new tab gets a new ID. Tracking is not possible over `windows.name`.

The `extensions.lastAppVersion` is recreated after deletion and then filled with the current version (current 25.7.0).

### Hide `about:addons`
The [userContent.css](https://raw.githubusercontent.com/hinzigers/opsi/master/palemoon/CLIENT_DATA/files/chrome/userContent.css) hack is __not__ insuperable. See [CCK2](https://mike.kaply.com/cck2/) Add-on.

## Addons
The Best Privacy Addons are [uMatrix](https://github.com/gorhill/uMatrix) and [uBlock](https://github.com/gorhill/uBlock) from Raymond Hill ([gorhill](https://github.com/gorhill)) on [GitHub](https://github.com/).

### uMatrix Rules
Here some example rules. Import the [uMatrix rules](https://raw.githubusercontent.com/hinzigers/opsi/master/palemoon/CLIENT_DATA/files/umatrix-rules.txt) via Dashborad (*chrome://umatrix/content/dashboard.html#user-rules*). The Addon replaced [NoScript](https://addons.mozilla.org/de/firefox/addon/noscript/) Addon.
Behind a proxy farm the User-Agent Spoofing must be disabled when [Google Maps](https://www.google.de/maps/) to be used!

### uBlock Filter
Here some example filter. Import the [uBlock filter](https://raw.githubusercontent.com/hinzigers/opsi/master/palemoon/CLIENT_DATA/files/ublock-filter.txt) via Dashboard (*chrome://ublock0/content/dashboard.html*). The Addon is a promotion killer. The Addon replaced [Adblock Plus](https://addons.mozilla.org/de/firefox/addon/adblock-plus/?src=search) and [ABL](https://addons.palemoon.org/extensions/privacy-and-security/adblock-latitude/) Addons for [Firefox](https://www.mozilla.org/de/firefox/desktop/) and [Pale Moon](http://www.palemoon.org/).

### NoScript

![alt text](https://github.com/hinzigers/opsi/blob/master/images/ip-check3.PNG "IP Check with NoScript Addon")
