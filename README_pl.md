[English](README.md) :point_left:

# Organizator folderów

Aplikacja służąca do organizowania folderów systemowych poprzez przenoszenie plików do odpowiednich folderów.


## Zdjęcia

<img src="./readme-assets/folder-organiser.gif" alt="podgląd projektu"/>


## Działanie
  
Użytkownik wskazuje folder, który ma zostać uporządkowany. Następnie aplikacja znajduje i przenosi "wolne" pliki do odpowiednich folderów. Pliki grupowane są według rozszerzenia. 
  
Foldery przyjmują nazwę rozszerzenia przenoszonych plików, np. plik tekstowy **notatka.txt** zostanie przeniesiony do folderu o nazwie **TXT**. Jeżeli dany folder nie istnieje w docelowej ścieżce, wtedy zostanie on automatycznie utworzony przez program.


## Instalacja

Sklonuj projekt

```bash
  git clone https://github.com/lukasz-brzozko/folder-organiser.git
```

Wejdź do katalogu projektu

```bash
  cd folder-organiser
```

Zainstaluj niezbędne zależności

```bash
  npm install
```

Uruchom aplikację

```bash
  node index.js
```

## Dostępność

Aplikacja testowana na urządzeniu z systemem Windows 10.

## Licencja

[MIT](https://choosealicense.com/licenses/mit/)