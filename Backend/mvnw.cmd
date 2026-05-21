@echo off
setlocal

set MAVEN_VERSION=3.9.9
set WRAPPER_DIR=%~dp0.mvn\wrapper
set MAVEN_HOME=%WRAPPER_DIR%\apache-maven-%MAVEN_VERSION%
set MAVEN_BIN=%MAVEN_HOME%\bin\mvn.cmd
set MAVEN_ZIP=%WRAPPER_DIR%\apache-maven-%MAVEN_VERSION%-bin.zip

if not exist "%MAVEN_BIN%" (
  echo Maven %MAVEN_VERSION% was not found locally. Downloading...
  if not exist "%WRAPPER_DIR%" mkdir "%WRAPPER_DIR%"
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Invoke-WebRequest -Uri 'https://archive.apache.org/dist/maven/maven-3/%MAVEN_VERSION%/binaries/apache-maven-%MAVEN_VERSION%-bin.zip' -OutFile '%MAVEN_ZIP%'"
  if errorlevel 1 exit /b 1
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Expand-Archive -Path '%MAVEN_ZIP%' -DestinationPath '%WRAPPER_DIR%' -Force"
  if errorlevel 1 exit /b 1
)

"%MAVEN_BIN%" %*
