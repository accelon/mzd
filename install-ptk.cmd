cmd/c ptk js mzd
cmd/c ptk js mzd-en

if not exist "..\accelon22\dist\mzd" ( mklink/j ..\accelon22\dist\mzd mzd )
if not exist "..\accelon22\dist\mzd-en" ( mklink/j ..\accelon22\dist\mzd-en mzd-en )

echo window.accelon22={preload:"mzd,mzd-en"} > ..\accelon22\dist\config.js