@rem assuming 7z.exe in PATH
cd ..\accelon21
@rem build accelon21 release version
cmd/c npm run build
cd ..\mzd
@rem create a zip containing files given by release.lst
7z -tzip a mzd-2022-05-27.zip @release.lst