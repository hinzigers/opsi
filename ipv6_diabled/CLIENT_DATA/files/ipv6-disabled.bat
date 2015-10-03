@echo off
echo %1 %2 %3 %4
::Run this script either as machine-startup-script
::or in an elevated command prompt

netsh int tcp set global chimney=disabled
netsh int tcp set global rss=disabled
netsh int tcp set global autotuninglevel=disabled
reg add HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\ /v EnableTCPA /t REG_DWORD /d 0 /f
netsh int teredo set state disabled
netsh int ipv6 6to4 set state state=disable undoonstop=disabled
netsh int ipv6 isatap set state state=disabled
reg add HKLM\SYSTEM\CurrentControlSet\Services\Tcpip6\Parameters\ /v DisabledComponents /t REG_DWORD /d 0xfffffffff /f
